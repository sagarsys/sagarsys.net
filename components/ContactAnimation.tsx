'use client'

import { Mail } from 'lucide-react'
import useResizer from '@/hooks/useResizer'
import { cn } from '@/lib/utils'

interface ContactAnimationProps {
  email: string
}

export const ContactAnimation = ({ email }: ContactAnimationProps) => {
  const isMobile = useResizer()
  const desktopHeight = 400
  const mobileHeight = 200 + 24

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        isMobile ? 'mb-8' : 'mb-24'
      )}
      style={{
        height: isMobile ? `${mobileHeight}px` : `${desktopHeight}px`,
      }}
    >
      <a
        href={`mailto:${email}`}
        title="Send mail"
        className="absolute z-10 flex w-full h-full transition-all duration-300 hover:[&_svg]:translate-y-[25%] hover:[&_svg]:scale-110 hover:[&_span]:underline"
      >
        <h4
          className={cn(
            'absolute flex items-center text-secondary',
            isMobile
              ? 'top-0 left-0 w-full text-center'
              : 'top-[5%] left-0'
          )}
        >
          <Mail className="mr-6 translate-y-[25%]" size={32} />
          <span>Get in touch</span>
        </h4>
      </a>
      <svg
        className="opacity-80 w-full h-full rotate-[5deg]"
        viewBox="0 0 3387 1270"
      >
        <path
          id="planePath"
          className="stroke-[#D9DADA] stroke-[0.5%] stroke-dasharray-[1%_2%] stroke-linecap-round fill-none"
          d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"
        />
        <g id="plane">
          <polygon
            className="fill-[#D9DADA]"
            points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 "
          />
          <polygon
            className="fill-[#C5C6C6]"
            points="199,0 -141,-10 -163,63 -123,9 "
          />
          <polygon
            className="fill-[#AEAFB0]"
            points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 "
          />
          <path
            className="fill-[#9D9E9E]"
            d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"
          />
          <polygon
            className="fill-[#D9DADA]"
            points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 "
          />
        </g>
        <animateMotion
          href="#plane"
          dur="8s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#planePath" />
        </animateMotion>
      </svg>
    </div>
  )
}


