import { useGlobalContext } from './Context'
import { FaMoon } from 'react-icons/fa'
import { IoSunnyOutline } from 'react-icons/io5'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section>
      <button className={isDarkTheme ? "light-theme-button" : "dark-theme-button"} onClick={toggleDarkTheme}>
        {isDarkTheme ? <IoSunnyOutline /> : <FaMoon />}
      </button>
    </section>
  )
}
export default ThemeToggle
