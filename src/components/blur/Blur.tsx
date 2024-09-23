'use client'
import React, { useEffect, useRef } from 'react'
import s from './Blur.module.scss'
import {
  useMotionValueEvent,
  useScroll,
  motion,
  MotionValue,
  useTransform
} from 'framer-motion'

const content =
  'It is a long established fact that the reader will be distracted by the readable content of a page when looking at its layout'

export const Blur = () => {
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
  const characters = word.split('')
  const amount = range[1] - range[0]
  const step = amount / word.length

  return (
    <span className={s.word}>
      {characters.map((character, i) => {
        const start = range[0] + step * i
        const end = range[0] + step * (i + 1)
        return (
          <CharacterComponent
            char={character}
            range={[start, end]}
            progress={progress}
            key={i}
          />
        )
      })}
    </span>
  )
}

const CharacterComponent = ({
  char,
  range,
  progress
}: {
  char: string
  range: Array<number>
  progress: MotionValue<number>
}) => {
  const opacity = useTransform(progress, range, [0, 1])
  const blur = useTransform(progress, range, [1, 0])
  return (
    <span>
      <motion.span style={{ opacity: blur }} className={s.shadow}>
        {char}
      </motion.span>
      <motion.span style={{ opacity: opacity }} className={s.character}>
        {char}
      </motion.span>
    </span>
  )
}
