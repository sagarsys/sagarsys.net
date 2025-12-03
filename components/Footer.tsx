export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary w-full">
      <div className="flex justify-center items-center h-[60px] px-4">
        <p className="pr-4 text-sm">
          &copy; {year} - Designed & developed by
        </p>
        <p className="text-sm">
          <a
            className="text-secondary hover:underline"
            href="https://github.com/sagarsys"
            rel="noreferrer"
            target="_blank"
          >
            sagarsys
          </a>
        </p>
      </div>
    </footer>
  )
}


