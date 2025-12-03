export function removeHash(): void {
  let scrollV: number, scrollH: number
  const { location } = window
  const { history } = window
  if ('pushState' in history)
    history.pushState(
      '',
      document.title,
      location.pathname + location.search
    )
  else {
    // Fallback
    // Prevent scrolling by storing the page's current scroll offset
    scrollV = document.body.scrollTop
    scrollH = document.body.scrollLeft

    location.hash = ''

    // Restore the scroll offset, should be flicker free
    document.body.scrollTop = scrollV
    document.body.scrollLeft = scrollH
  }
}


