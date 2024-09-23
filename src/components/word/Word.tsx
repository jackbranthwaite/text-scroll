'use client'
import React, { useEffect, useRef } from 'react'
import s from './Word.module.scss'
import {
  useMotionValueEvent,
  useScroll,
  motion,
  MotionValue,
  useTransform
} from 'framer-motion'

const content =
  'It is a long established fact that the reader will be distracted by the readable content of a page when looking at its layout'

export const Word = () => {
  const element = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  })

  const words = content.split(' ')

  return (
    <p className={s.paragraph} ref={element}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <WordComponent
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            key={i}
          />
        )
      })}
    </p>
  )
}

const WordComponent = ({
  word,
  range,
  progress
}: {
  word: string
  range: Array<number>
  progress: MotionValue<number>
}) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className={s.word}>
      <span className={s.shadow}>{word}</span>
      <motion.span style={{ opacity: opacity }}>{word}</motion.span>
    </span>
  )
}
