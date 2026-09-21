import React, { useLayoutEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"

const AnimatedButton = ({ text, className = "" }) => {
  const buttonRef = useRef(null)

  const text1Ref = useRef(null)
  const text2Ref = useRef(null)

  const arrow1Ref = useRef(null)
  const arrow2Ref = useRef(null)

  useLayoutEffect(() => {
  const text1 = text1Ref.current
  const text2 = text2Ref.current

  const arrow1 = arrow1Ref.current
  const arrow2 = arrow2Ref.current

  // NORMAL STATE
  gsap.set(text1, {
    yPercent: 0,
    opacity: 1,
  })

  gsap.set(text2, {
    yPercent: 110,
    opacity: 0,
  })

  gsap.set(arrow1, {
    yPercent: 0,
    opacity: 1,
  })

  gsap.set(arrow2, {
    yPercent: 110,
    opacity: 0,
  })

  // PREMIUM HOVER TIMELINE
  const tl = gsap.timeline({
    paused: true,
  })

  // OLD TEXT LEAVES
  tl.to(
    text1,
    {
      yPercent: -110,
      opacity: 0,
      duration: 0.32,
      ease: "power3.in",
    },
    0
  )

  // NEW TEXT ENTERS
  tl.to(
    text2,
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    },
    0.12
  )

  // OLD ARROW LEAVES
  tl.to(
    arrow1,
    {
      yPercent: -120,
      opacity: 0,
      duration: 0.28,
      ease: "power3.in",
    },
    0.02
  )

  // NEW ARROW ENTERS
  tl.to(
    arrow2,
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.42,
      ease: "power3.out",
    },
    0.18
  )

  const handleMouseEnter = () => {
    tl.play()
  }

  const handleMouseLeave = () => {
    tl.reverse()
  }

  buttonRef.current.addEventListener(
    "mouseenter",
    handleMouseEnter
  )

  buttonRef.current.addEventListener(
    "mouseleave",
    handleMouseLeave
  )

  return () => {
    buttonRef.current?.removeEventListener(
      "mouseenter",
      handleMouseEnter
    )

    buttonRef.current?.removeEventListener(
      "mouseleave",
      handleMouseLeave
    )

    tl.kill()
  }
}, [])

  return (
    <button
      ref={buttonRef}
      className={`
        inline-flex
        items-center
        gap-3
        ${className}
      `}
    >

      {/* TEXT */}
      <span className="relative inline-block overflow-hidden">

        {/* ORIGINAL TEXT */}
        <span
          ref={text1Ref}
          className="block"
        >
          {text}
        </span>

        {/* SECOND TEXT */}
        <span
          ref={text2Ref}
          className="absolute left-0 top-0 block"
        >
          {text}
        </span>

      </span>


      {/* ARROW */}
      <span className="relative block h-[24px] w-[24px] overflow-hidden">

        {/* ORIGINAL ARROW */}
        <span
          ref={arrow1Ref}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ArrowUpRight size={20} />
        </span>

        {/* SECOND ARROW */}
        <span
          ref={arrow2Ref}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ArrowUpRight size={20} />
        </span>

      </span>

    </button>
  )
}

export default AnimatedButton