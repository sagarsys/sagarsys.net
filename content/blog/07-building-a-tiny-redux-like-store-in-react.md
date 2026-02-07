---
title: Building a Tiny Redux-Like Store in React (By Accident) While Shipping a Music Player 
description: A story-driven, step-by-step guide to building an external store with React Context + useSyncExternalStore, using a music player as the hands-on problem. Includes shuffle/repeat, selectors/actions, and a seek bar without render spam. 
date: 2026-02-09 
author: Sagar Sawuck 
categories: 
  - Web Development 
  - React 
tags: 
  - React 
  - TypeScript 
  - State Management 
  - useSyncExternalStore 
  - Context API 
  - Architecture 
  - Audio 
featured: true 
image: /images/blog/07-building-a-redux-like-store-react/cover.png
order: 7 
---

## The day I tried to build "just a music player” and accidentally recreated Redux

I’ve always liked the idea behind Redux and other state libraries: **a single source of truth**, a **predictable way to update it**, and a **subscription mechanism that only re-renders the UI when it truly needs to**. But one day I caught myself wondering: 

> “How hard can it be to build something like that… just once… for fun?” 

Famous last words! 

I wanted a problem that would force me to deal with real-world complexity: async flows, UI updates, a long-lived resource, and non-trivial navigation logic. Audio is stateful, event-driven, and constantly changing — the perfect excuse to explore **advanced React concepts** like external stores, subscriptions, selectors, and performance tuning.

This article is a practical, story-driven deep dive into how those ideas fit together — without starting from Redux docs or jumping straight into a big library.

## Defining the problem — what are we actually building?

![Building music interface in Amsterdam](/images/blog/07-building-a-redux-like-store-react/1.webp)

At a distance, a music player looks simple:

* Play / pause
* Next / previous
* Shuffle and repeat

Up close, it’s a state-management obstacle course.

You quickly run into very practical questions:

* Where should the **single audio element** live so it isn’t recreated all the time?
* How do multiple UI components (controls, playlist, progress bar) stay in sync?
* How do we update a **playback progress bar** smoothly without re-rendering the entire UI on every tiny change?
* How do we avoid race conditions when users skip tracks quickly?

The real problem wasn’t audio playback.

It was:

> **How do we model long‑lived, event‑driven state in React without performance issues or tangled logic?**

## The real challenges (a.k.a. where naïve solutions hurt)

### 🔁 Frequent updates

While a track is playing, the browser continuously updates the playback position. If every tiny change causes React to re-render the entire component tree, performance degrades fast — especially once you add playlists, visualizers, or other UI.

### 🎧 Long-lived browser resources

`HTMLAudioElement` is stateful and event-driven. Creating it in the wrong place can lead to duplicated event listeners, memory leaks, or audio that keeps playing after navigation.

### 🎲 Shuffle & repeat logic

Shuffle is not “pick a random number every time”. Users expect *predictable* behavior when navigating forward and backward — even in shuffle mode.

### 🧠 Cognitive load

If play, pause, next, and previous logic is spread across UI components, bugs multiply quickly. The system needs **one place** that owns playback decisions.


## The plan — UI first, architecture second

I deliberately avoided designing a perfect architecture upfront.

Instead:

1. Build a naïve version using Context + React state
2. Feel the pain
3. Refactor only what actually hurts

This mirrors how many real-world state libraries evolve — except we compress years of lessons into a focused side project.

## Architecture through iterations

### Iteration 1 — Context + React state

Everything lived inside a Context provider:

* Audio element
* Playback state
* Controls

It worked… until frequent playback updates caused the entire subtree to re-render.

That’s the moment you realise:

> **Some state changes are important, but not everyone needs to hear about them.**

### Iteration 2 — External store + subscriptions

Instead of storing state *inside* React, we move it **outside** and let React subscribe to it.

This is exactly what `useSyncExternalStore` was designed for.

![React component flow with external store](/images/blog/07-building-a-redux-like-store-react/2.png)
_External Store Flow_

### Iteration 3 — Selectors and actions

To prevent unnecessary renders:

* **Selectors** read only the slice of state a component cares about
* **Actions** are stable functions that describe *intent*

This is where the architecture starts looking… suspiciously Redux-like.

## High-level thinking before code: what state libraries actually do

Most state libraries boil down to the same pieces:
1. **A store** holding state.
2. **A way to update state** (actions, reducers, commands).
3. **A subscription system** (so UI can re-render when state changes).
4. **Selectors** to read a slice of state efficiently (so you don’t re-render everything).
5. (Optional, but important) **Invariants** to keep state consistent as complexity grows.

React already gives us most of what we need:
- `useSyncExternalStore` for subscribing safely to an external store
- `Context` to make the store available everywhere
- plain old TypeScript for guard rails 

So the plan becomes: 
> Build a tiny external store (Redux-ish) and use it to manage a single audio element + playlist logic.

## Pattern #1: Singleton store via Context (one store instance for the app)

A music player store is not something you want recreated per component render. We need one long-lived instance—basically a singleton—scoped to the Provider.

**Key idea:** Create the store once in the Provider using `useState(() => createStore())`.

The store must:

* Exist only once
* Survive re-renders
* Be cleaned up on unmount

The classic React singleton pattern is:

```ts
const [store] = useState(() => createAudioStore());
```

Why this works:

* The initializer runs only once
* The store instance is stable
* We avoid “mutate refs in render” footguns

### Attaching and cleaning up (mount/unmount)

Because the store owns an `HTMLAudioElement` + event listeners, we explicitly attach and destroy it in the Provider lifecycle:

```ts
useEffect(() => {
  store.attach();

  return () => {
    store.destroy();
  };
}, [store]);
```

This keeps event listeners from duplicating and prevents audio from living a secret second life after navigation.

## Pattern #2: External store subscription with `useSyncExternalStore`

**`useSyncExternalStore(subscribe, getSnapshot)`** is React’s built-in mechanism for reading from external stores. That’s the missing piece that makes this feel **“like Redux”**:
- The store maintains a `Set` of listeners
- `subscribe()` adds/removes listeners
- `setState()` updates state and notifies listeners
- React calls `getSnapshot()` when notified


### Inside `createAudioStore` — how state actually works

The store manages its own state completely outside React.

At its core, it’s just:

* A `state` variable
* A set of `listeners`
* A `setState` function that updates state and notifies subscribers

### State shape – why these fields exist

![UI subscriptions map overview](/images/blog/07-building-a-redux-like-store-react/3.png)
_UI subscriptions map overview_

These three fields are *the* core identity & lookup trick:

* `currentTrackId` is a stable identity (safe even if the queue array changes)
* `idToIndex` gives O(1) lookup for “play this track id”
* `currentIndex` is fast positional access for next/prev

The full state includes queue, playback, & shuffle/loop:

```ts
type AudioState = {
  queue: Track[];

  // Stable identity
  currentTrackId: number | null;
  // Fast positional access (derived from currentTrackId + idToIndex)
  currentIndex: number;
  // O(1) id lookup
  idToIndex: Record<number, number>;

  status: AudioStatus;
  error: Error | null;

  currentTime: number;
  duration: number;

  shuffleEnabled: boolean;
  shuffleOrder: number[];
  shufflePos: number;

  loopMode: LoopMode;
};
```

### Internal state and subscriptions

Abstracted store core:

```ts
let state: AudioState = initialState;
const listeners = new Set<() => void>();

const getState = () => state;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const setState = (updater: AudioState | ((prev: AudioState) => AudioState)) => {
  state = typeof updater === 'function' ? (updater as any)(state) : updater;
  listeners.forEach(l => l());
};
```

That’s the whole idea.

* **Store updates state**
* **Store notifies listeners**
* **React re-renders subscribers**

Everything else (shuffle, loop, seek, next/prev) is “just” domain logic built on top.


## Pattern #3: Action and selector hooks

If every component consumes `state` directly from context, *every* `currentTime` tick from `HTMLAudioElement` can cause *everything* to re-render. That’s a great way to turn your laptop into a space heater.

So, to split responsibilities:
- `useAudioActions()` returns stable functions (`play`, `pause`, `next`, `seek`, etc.)
- `useAudioSelector(selector)` returns only what your component needs This is the architecture that makes Redux-like libraries feel so snappy.

A selector hook answers one question:

> *“When should this component re-render?”*

### The idea in one sentence

![State management pipeline flowchart](/images/blog/07-building-a-redux-like-store-react/4.png)
 _Selector Pipeline_

We subscribe to store updates, **compute a selected slice**, and only trigger a re-render if that slice actually changed.

### An abstracted implementation (close to the real thing)

```ts
function createSelectorHook(StoreContext) {
  return function useStoreSelector(selector, isEqual = Object.is) {
    const store = useContext(StoreContext);
    if (!store) throw new Error('Must be used inside Provider');

    const selectedRef = useRef();
    const hasValueRef = useRef(false);

    const getSnapshot = useCallback(() => {
      const nextSelected = selector(store.getState());

      if (!hasValueRef.current) {
        hasValueRef.current = true;
        selectedRef.current = nextSelected;
        return nextSelected;
      }

      if (isEqual(selectedRef.current, nextSelected)) {
        return selectedRef.current;
      }

      selectedRef.current = nextSelected;
      return nextSelected;
    }, [store, selector, isEqual]);

    return useSyncExternalStore(store.subscribe, getSnapshot, getSnapshot);
  };
}
```

What’s happening here:

* `useSyncExternalStore` wires React into the store’s subscription mechanism
* `getSnapshot()` calculates “the piece of state I care about”
* We keep the last selection in a ref
* An equality check prevents re-rendering when the selected slice didn’t change

This is the trick that makes frequent playback updates feasible without turning your UI into a space heater.

## Challenge #1: Seek bar updates without render spam

A seek bar looks like “just a range input”… until you try to make it feel smooth *and* not re-render the world.

### Store layer: how we get time updates

There are a few approaches:
1. **Polling** with `setInterval` 
   - Easy, predictable “every second,” but wasteful and can drift.
2. **`requestAnimationFrame`** 
   - Super smooth, but excessive for audio and can cause lots of renders if you’re not careful.
3. **`timeupdate` event from the audio element (chosen)**
   - Event-driven, minimal overhead, and ties directly to actual playback.

**`timeupdate`** was chosen and (optionally) throttle state updates possibility. It’s simple, browser-native, and good enough for most players.

```ts
audio.addEventListener('timeupdate', onTimeUpdate);
```

`timeupdate` is browser-native and fires at sensible intervals. If you still want fewer UI updates, you can throttle the dispatch (e.g., every 1000ms).

### UI layer: `input[type=range]`

```tsx
const SeekBar = () => {
  const { seek } = useAudioStoreActions();
  const duration = useAudioStoreSelector((s) => s.duration);
  const currentTime = useAudioStoreSelector((s) => s.currentTime);

  return (
    <div>
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.01}
        value={Math.min(currentTime, duration || 0)}
        disabled={!duration}
        onChange={(e) => seek(Number(e.target.value))}
      />
    </div>
  );
};
```

Why this works well:

* The input value is driven by store state
* Dragging the slider dispatches `seek()` to the store
* Only components selecting `currentTime` re-render frequently

![Seek Bar Loop](/images/blog/07-building-a-redux-like-store-react/5.png)
_Seek Bar Loop_

## Challenge #2: Shuffle/loop logic without chaos (predictable playback)

We want shuffle to feel random *once*, and then predictable while navigating.

### Shuffle mechanics

That’s why shuffle keeps two pieces of state:

* `shuffleOrder`: a shuffled list of track indices
* `shufflePos`: current position in that order

That’s it. Once you have those two, “next” and “prev” become predictable. So “next” becomes “move forward in the shuffled order”, not “roll the dice again”.

![Shuffle Mechanics](/images/blog/07-building-a-redux-like-store-react/7.png)
_Shuffle Mechanics_

### Loop mechanics

Loop modes (`off | all | one`) influence what happens at the edges:

* `off`: stop at the end
* `all`: wrap around
* `one`: replay the current track

Cycling loop mode is a small UX detail that becomes a big code-quality test if it’s spread across components.

![Loop Modes](/images/blog/07-building-a-redux-like-store-react/6.png)
_Loop Modes_

## UI integration — keeping components boring (on purpose)

The UI should:

* Read tiny slices of state
* Fire intentful actions
* Not know how playback logic works

### Bootstrapping playback in the main player

The main player component can kick off the queue like this:

```ts
const { loadQueue } = useAudioStoreActions();

useEffect(() => {
  void loadQueue(songs, { autoplay: true, startIndex: 0 });
}, [loadQueue]);
```

This does two things:

* Seeds the store with a queue
* Optionally autoplay the first track

### Example: controls component (real-world usage)

This is the core pattern from `PlayerControls.tsx`:

```ts
const { pause, resume, next, prev, cycleLoopMode, toggleShuffle } = useAudioStoreActions();

const status = useAudioStoreSelector((s) => s.status);
const loopMode = useAudioStoreSelector((s) => s.loopMode);
const shuffleEnabled = useAudioStoreSelector((s) => s.shuffleEnabled);
```

A few important subtleties:

* Controls subscribe only to `status`, `loopMode`, `shuffleEnabled`
* The seek bar subscribes to `currentTime` and `duration`
* The playlist subscribes to `queue` and `currentTrackId`

So playback progress updates won’t force your entire UI to re-render — only the parts that care.

![UI Subscriptions Map](/images/blog/07-building-a-redux-like-store-react/10.png)
_UI Subscriptions Map_

## A full flow: what happens when `next` is clicked?

Let’s do a practical “click → sound” timeline for `playNext`, because this is where the architecture clicks into place.

![Click to Playback Timeline](/images/blog/07-building-a-redux-like-store-react/8.png)
_Click to Playback Timeline_

### Step 0: the UI event

User clicks the Next button.

Your UI component does the simplest possible thing:

```tsx
<button onClick={() => void next()}>Next</button>
```

No queue logic in the component. No branching. Just intent.

### Step 1: the action calls the store

`next()` is a stable function returned by `useAudioStoreActions()`.

Under the hood, it calls `store.playNext()`.

### Step 2: the store computes the next track (domain logic)

Inside `playNext`, the store:

* Reads the current snapshot
* Computes the next index based on:

    * shuffle state
    * loop mode
    * queue boundaries

Conceptually:

```ts
const nextIndex = getNextIndex(state);
if (nextIndex < 0) {
  stop({ reset: true });
  return;
}
```

### Step 3: the store updates state (immediately)

Before audio even starts playing, we update state to reflect the new selection:

* `currentTrackId`
* `currentIndex`
* `status: 'loading'`

This is important: the UI can instantly reflect what’s happening.

### Step 4: the audio element is instructed

Then we actually load and play the URL:

```ts
await playUrl(track.src);
```

The store controls the audio element, not the UI.

### Step 5: audio events feed back into store state

When the audio element emits events (play, pause, ended, timeupdate), the store updates the state and notifies subscribers.

This is why we attach listeners in one place.

### Step 6: only the right components re-render

* Controls re-render if `status` changed
* Playlist re-renders if `currentTrackId` changed
* Seek bar re-renders as `currentTime` updates

> This is the whole point of selectors: React does less work, but the UI stays perfectly in sync.


## Redux vs this approach — when would I actually use it?

This is **not** a Redux replacement.

Redux and modern state libraries give you:

* DevTools
* Middleware
* Ecosystem support
* Team conventions

This approach is useful when:

* The state is domain-specific
* You want minimal abstraction
* You value understanding over features

Think of it as a learning tool — or a lightweight solution for isolated problems.

## Key takeaways

* External stores are simpler than they look
* `useSyncExternalStore` is a game-changer for advanced state patterns
* Selectors are about performance *and* clarity
* Centralising logic reduces bugs
* Big libraries exist to save time — not because this is impossible

## Conclusion — accidental Redux, intentional learning

This project didn’t make me want to stop using Redux.

It made me appreciate it more.

By rebuilding a small slice of the problem, I gained intuition about:

* Why state libraries are designed the way they are
* Why React added `useSyncExternalStore`
* How selectors prevent your UI from re-rendering itself into a small black hole
* Why centralising domain logic (next/prev/shuffle/loop) is *quietly* the difference between “works” and “works in two months”

The biggest takeaway?

> **Sometimes the best way to learn an abstraction is to rebuild a smaller version of it — once.**

After that, you can go back to your favourite library with slightly more respect… and slightly fewer “I hope this is doing what I think it’s doing” moments.

And if you also accidentally reinvent a tiny piece of Redux while building a music player — congratulations.

You’ve unlocked the ancient developer achievement:

> *“It was supposed to be a weekend project.”*

## Dive Deeper

**Full source code and UI implementation are available on GitHub for anyone curious enough to dig deeper.**

GitHub repo: https://github.com/sagarsys/react-music-player     
Demo: https://sagar-music-player.vercel.app/

![music player screenshot](/images/blog/07-building-a-redux-like-store-react/screenshot.png)
