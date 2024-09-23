'use client'
import React, { useEffect, useRef } from 'react'
import s from './Paragraph.module.scss'
import { useScroll } from 'framer-motion'

const content =
  'It is a long established fact that the reader will be distracted by the readable content of a page when looking at its layout'

export const Paragraph = () => {
  const element = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start', 'end', 'start', 'start']
  })

  useEffect(() => {
    scrollYProgress.on('change', (e) => console.log(e))
  }, [])

  return (
    <p className={s.paragraph} ref={element}>
      {content}
    </p>
  )
}
