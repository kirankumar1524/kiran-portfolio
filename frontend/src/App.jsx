import HomePage from './pages/HomePage'
import BackgroundEffects from './components/BackgroundEffects'
import useLenisScroll from './hooks/useLenisScroll'

export default function App() {
  useLenisScroll()

  return (
    <>
      <BackgroundEffects />
      <HomePage />
    </>
  )
}