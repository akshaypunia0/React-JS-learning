import { useEffect, useState } from "react"
import { ThemeProvider } from "./Contexts/Theme"
import ThemeButton from "./Components/ThemeButton"
import Card from "./Components/Card"




function App() {
  
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')

  }

  useEffect( () => {
    let themeValue = document.querySelector('html').classList

    themeValue.remove('light', 'dark')

    themeValue.add(themeMode)

  }, [themeMode])

  return (
    
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>

  )
}

export default App
