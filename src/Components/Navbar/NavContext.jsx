import { Children, createContext, useState } from "react";

export const NavContext = createContext()

export const NavProvider = ({children}) => {
    const [isNavOpen, setisNavOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)

    return (
        <NavContext.Provider value = {{
            isNavOpen,
             setisNavOpen,
             isDark,
             setIsDark}}>
            {children}
        </NavContext.Provider>
    )
}