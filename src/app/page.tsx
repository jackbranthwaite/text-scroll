import { Blur } from '@/components/blur/Blur'
import { Character } from '@/components/character/Character'
import { Paragraph } from '@/components/paragraph/Paragraph'
import { Word } from '@/components/word/Word'

export default function Home() {
  return (
    <main>
      <div style={{ height: '100vh' }}></div>
      <Paragraph />
      <div style={{ height: '100vh' }}></div>
      <Word />
      <div style={{ height: '100vh' }}></div>
      <Character />
      <div style={{ height: '100vh' }}></div>
      <Blur />
      <div style={{ height: '100vh' }}></div>
    </main>
  )
}
