import { createContext, useContext, useEffect, useMemo, useState } from "react"

const ThemeContext = createContext({ mode: "dark", toggle: () => {} })

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark")

  useEffect(() => {
    const saved = window.localStorage.getItem("cra-theme")
    if (saved === "light" || saved === "dark") setMode(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode)
    window.localStorage.setItem("cra-theme", mode)
  }, [mode])

  const value = useMemo(
    () => ({ mode, toggle: () => setMode((m) => (m === "dark" ? "light" : "dark")) }),
    [mode]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContext


