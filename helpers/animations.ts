interface KeyFrameAnimation {
  [key: string]: {
    transform: string
  }
}

export function generateTextLineChangeKeyFrameAnimation(
  numLines: number
): KeyFrameAnimation {
  // Number of animations loops = (Number of lines * 2) - 2
  // Example, there are 4 lines => 6 is the number of animation.
  // 1 to 2 --> 2 to 3 --> 3 to 4 --> 4 to 3 --> 3 to 2 --> 2 to 1
  // 6x + 6y = 100 (100% duration)
  // y = 4 -> Animation between two lines == Number of lines
  // x = 12.66 -> Time spent on a line
  // => x = (100 / Number of animations) - Number of lines

  const numAnimations = numLines * 2 - 2
  const x = 100 / numAnimations - numLines
  const y = numLines
  const animation: KeyFrameAnimation = {}

  let i = 0
  while (i < numAnimations) {
    if (i === 0) {
      animation[`0%, ${x.toFixed(2)}%, 100%`] = {
        transform: 'translate3d(0, 0, 0)',
      }
    } else {
      const deltaY =
        i < numLines
          ? (100 / numLines) * -i
          : (100 / numLines) * -(numAnimations - i)
      animation[
        `${((x + y) * i).toFixed(2)}%, ${((x + y) * i + x).toFixed(2)}%`
      ] = {
        transform: `translate3d(0, ${deltaY}%, 0)`,
      }
    }
    i++
  }
  return animation
}


