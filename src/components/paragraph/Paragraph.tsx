'use client'
import React, { useEffect, useRef } from 'react'
import s from './Paragraph.module.scss'
import { useMotionValueEvent, useScroll, motion } from 'framer-motion'

const content =
  'It is a long established fact that the reader will be distracted by the readable content of a page when looking at its layout'

export const Paragraph = () => {
  const element = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  })

  return (
    <motion.p
      className={s.paragraph}
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {content}
    </motion.p>
  )
}
