"use client"

import { useCursorPosition } from "@/hooks/use-cursor-position"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
    const cursorPos = useCursorPosition()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>
            {/* Animated gradient mesh background */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-gradient-shift" />

                {/* Floating orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float-medium" />
                <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-float-fast" />

                {/* Cursor glow effect */}
                {mounted && (
                    <div
                        className="absolute w-96 h-96 pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100"
                        style={{
                            left: cursorPos.x - 192,
                            top: cursorPos.y - 192,
                            background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)",
                            transition: "left 0.1s ease-out, top 0.1s ease-out",
                        }}
                    />
                )}
            </div>

            {/* Subtle particle grid */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, oklch(var(--primary)) 1px, transparent 0)`,
                    backgroundSize: '50px 50px',
                    opacity: 0.03
                }} />
            </div>
        </>
    )
}
