"use client";

import { createContext, useContext, useState } from "react";
import Lenis from "lenis";

interface SmoothScrollContextType {
    lenis: Lenis | null;
    setLenis: (lenis: Lenis | null) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(undefined);

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    return (
        <SmoothScrollContext.Provider value={{ lenis, setLenis }}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

export const useSmoothScroll = () => {
    const context = useContext(SmoothScrollContext);
    if (context === undefined) {
        throw new Error("useSmoothScroll must be used within a SmoothScrollProvider");
    }
    return context;
};
