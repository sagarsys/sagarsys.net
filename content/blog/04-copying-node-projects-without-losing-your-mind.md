---
title: Copying Node Projects Without Losing Your Mind
description: Ever tried migrating your Node.js projects to a new machine and watched your life flash before your eyes as node_modules copies? Let's fix that with a simple script while learning some cool Node.js APIs.
date: 2025-12-19
author: Sagar Sawuck
categories:
  - Node.js
  - Developer Tools
tags:
  - nodejs
  - scripting
  - automation
  - developer-experience
featured: true
image: /images/blog/04-copying-node-projects/cover.png
order: 4
---

## The Problem: A Tale of Two Progress Bars

Have you ever had to migrate your Node.js projects from one drive to another? Maybe you got a shiny new laptop, or your SSD is screaming for mercy, or you just want to back up your precious code.

You think to yourself: *"Easy! I'll just copy the projects folder."*

And then you see it. The progress bar. Moving slower than a Monday morning.

**Why?** Because lurking in every single project is the legendary `node_modules` folder - a black hole of dependencies that can easily contain **hundreds of thousands of files**.

![Heaviest objects in the universe meme](/images/blog/04-copying-node-projects/node-modules-meme.png)

But wait, there's more! Don't forget about:
- `.next` folders from Next.js builds (easily 500MB+)
- `dist` and `build` outputs
- `.cache`, `.turbo`, `.vite` and other cache directories
- `coverage` reports from that one time you actually ran tests

Copying all of this is not just slow - it's **pointless**. You're going to `npm install` anyway, and those build artifacts will be regenerated.

## The Solution: A Smart Copy Script

Instead of waiting for eternity (or rage-quitting), I wrote a simple Node.js script that copies your projects **while skipping all the unnecessary bloat**.

The result? What used to take 30+ minutes now takes **under a minute**.

### Quick Start

If you just want to use it:

```bash
# Clone the repo
git clone https://github.com/sagarsys/node-dev-projects-backup.git

# Run the script
node copy-projects.js
```

Follow the prompts, grab a coffee (a quick one this time), and you're done!

```bash
🚀 Project Copy Script
======================================================================
Enter the source directory path: /Users/me/projects
Enter the output directory path: /Volumes/NewDrive/projects

📦 Starting copy operation...
📄 Copying: my-app/package.json
📁 Processing: my-app/src/

📊 COPY OPERATION SUMMARY
======================================================================
✅ Files copied:        20,494
📁 Directories created: 5,154
💾 Data copied:         2.13 GB
⏱️  Duration:            11s
✨ No errors encountered!
```

*20,000+ files in 11 seconds*. Not bad, right?

## How It Works: A Node.js Learning Journey

Now for the fun part - let's break down the script and learn some useful Node.js concepts along the way. Whether you're new to Node.js scripting or looking to brush up, there's something here for everyone.

### 1. The Ignore List Configuration

First, we define what directories to skip:

```javascript
const IGNORE_DIRS = [
  'node_modules',
  // Build outputs
  'dist', 'build', 'out', '.next', '.nuxt', '.svelte-kit',
  // Cache directories  
  '.cache', '.turbo', '.vite', '.parcel-cache', '.eslintcache',
  // Test coverage
  'coverage', '.nyc_output',
  // Temporary directories
  '.tmp', 'tmp', 'temp',
];
```

This covers most Node.js frameworks and tools. Feel free to add more based on your stack!

### 2. Interactive Prompts with readline

Node.js has a built-in [`readline`](https://nodejs.org/api/readline.html) module for reading user input. No need for external packages!

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptForOutputDir() {
  return new Promise((resolve) => {
    rl.question('Enter the output directory path: ', (answer) => {
      resolve(answer.trim());
    });
  });
}
```

**Key concept**: We wrap the callback-based `rl.question` in a Promise so we can use `async/await`. This is a common pattern when working with older Node.js APIs.

📚 [Node.js Readline Documentation](https://nodejs.org/api/readline.html)

### 3. File System Operations with fs.promises

The script uses the Promise-based version of the [`fs`](https://nodejs.org/api/fs.html) module - much cleaner than callbacks!

```javascript
const fs = require('fs').promises;

async function copyFile(sourcePath, destPath) {
  const fileContent = await fs.readFile(sourcePath);
  await fs.writeFile(destPath, fileContent);
}

async function ensureDirectory(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}
```

**Key concept**: The `{ recursive: true }` option in `fs.mkdir` creates all parent directories if they don't exist - similar to `mkdir -p` in bash.

📚 [Node.js File System Documentation](https://nodejs.org/api/fs.html)

### 4. Recursive Directory Traversal

The heart of the script - walking through directories recursively:

```javascript
async function copyDirectory(sourcePath, destPath) {
  // Read directory contents with file type info
  const entries = await fs.readdir(sourcePath, { withFileTypes: true });
  
  for (const entry of entries) {
    const sourceEntryPath = path.join(sourcePath, entry.name);
    const destEntryPath = path.join(destPath, entry.name);
    
    // Skip ignored directories
    if (entry.isDirectory() && shouldIgnore(entry.name)) {
      continue;
    }
    
    if (entry.isDirectory()) {
      // Recursively copy subdirectory
      await copyDirectory(sourceEntryPath, destEntryPath);
    } else if (entry.isFile()) {
      await copyFile(sourceEntryPath, destEntryPath);
    }
  }
}
```

**Key concept**: Using `{ withFileTypes: true }` in `fs.readdir` gives us [`Dirent`](https://nodejs.org/api/fs.html#class-fsdirent) objects with handy methods like `isDirectory()` and `isFile()` - no extra `fs.stat` calls needed!

📚 [Node.js Path Documentation](https://nodejs.org/api/path.html)

### 5. Real-time Progress Updates

Nobody likes staring at a silent terminal. We use `process.stdout.write` for in-place updates:

```javascript
process.stdout.write(`\r📄 Copying: ${relativePath}${' '.repeat(50)}`);
```

**Key concept**: The `\r` (carriage return) moves the cursor back to the start of the line, allowing us to overwrite the previous output. The padding with spaces ensures we clear any leftover characters from longer filenames.

📚 [Node.js Process Documentation](https://nodejs.org/api/process.html)

### 6. Human-Readable Formatting

Because "2,147,483,648 bytes" is not as friendly as "2 GB":

```javascript
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}
```

This is a classic utility function - worth keeping in your toolbox!

### 7. Graceful Interruption Handling

What happens if the user presses `Ctrl+C`? We handle it gracefully:

```javascript
process.on('SIGINT', () => {
  console.log('\n\n⚠️  Operation interrupted by user');
  stats.endTime = Date.now();
  printSummary();
  process.exit(1);
});
```

**Key concept**: `SIGINT` is the signal sent when you press `Ctrl+C`. By handling it, we can show a summary of what was copied before exiting instead of just dying silently.

📚 [Node.js Signal Events Documentation](https://nodejs.org/api/process.html#signal-events)

## The Full Picture

Here's what the script does in a nutshell:

1. **Prompts** for source and destination directories
2. **Validates** that paths exist (creates destination if needed)
3. **Recursively walks** through all files and folders
4. **Skips** anything in the ignore list
5. **Copies** everything else while showing progress
6. **Reports** a detailed summary at the end

All in a single file with **zero dependencies**. Just Node.js doing what it does best.

## Why Write Custom Scripts?

You might be thinking: *"Can't I just use rsync with --exclude?"*

Absolutely! But here's the thing - writing custom Node.js scripts is:

- **Educational** - You learn the standard library by actually using it
- **Portable** - Works on any OS with Node.js installed
- **Customizable** - Easy to add features like dry-run mode, filters, or parallel copying
- **Fun** - There's something satisfying about building your own tools

Plus, you'll never look at `node_modules` the same way again.

![node_modules is loading](/images/blog/04-copying-node-projects/loading.jpg)

## Plot Twist: How This Script Was Actually Built

Here's a confession: I didn't write this script from scratch by staring at documentation for hours.

I used **[Cursor](https://cursor.sh)** - an AI-powered code editor - to help me build it step by step. And honestly? It was one of the best learning experiences I've had with Node.js.

Here's how it went:

1. **I described the problem** - "I want to copy Node.js projects but skip node_modules and build folders"
2. **Cursor suggested the approach** - Using `fs.promises` for async file operations, `readline` for user input
3. **I asked questions along the way** - "What's the difference between `fs.readdir` and `fs.readdir` with `withFileTypes`?" "How do I show progress without spamming the console?"
4. **We iterated together** - Adding features like statistics tracking, error handling, and graceful interruption

The result? A working script AND a deeper understanding of Node.js APIs.

This is the real power of AI-assisted coding - it's not about generating code blindly. It's about having a patient mentor who can explain concepts, suggest best practices, and help you build something real while learning.

If you're trying to learn Node.js (or any language), I highly recommend this approach:
- **Start with a real problem** you want to solve
- **Use AI as a guide**, not a replacement for understanding
- **Ask "why"** whenever you see something new
- **Build incrementally** - one feature at a time

You'll end up with both a useful tool AND actual knowledge. Win-win! 🎯

## Conclusion

Next time you need to migrate your Node.js projects, don't let `node_modules` hold you hostage. Use a smart copy script and save yourself the wait.

**Resources:**
- 🔗 [GitHub Repository](https://github.com/sagarsys/node-dev-projects-backup)
- 📚 [Node.js fs Documentation](https://nodejs.org/api/fs.html)
- 📚 [Node.js path Documentation](https://nodejs.org/api/path.html)
- 📚 [Node.js readline Documentation](https://nodejs.org/api/readline.html)
- 📚 [Node.js process Documentation](https://nodejs.org/api/process.html)

Have suggestions or improvements? Feel free to open a PR or drop me a message!

*Happy coding - and may your copies be swift!* 🚀
