"use client"

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    if (resolvedTheme === "dark") {
        return <FiSun onClick={() => setTheme("light")} />
    }

    if (resolvedTheme === "light") {
        return <FiMoon onClick={() => setTheme("dark")} />
    }
}
