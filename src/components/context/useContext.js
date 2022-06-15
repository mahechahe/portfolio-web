import { useState } from "react"

export const useContext = () => {
    const [idioma, setIdioma] = useState(false)

    const ids = {
        id1 : 'portfolio',
        id2 : 'skillset',
        id3 : 'experience',
        id4 : 'about',
        id5 : 'contact',
    }

    return {ids, idioma, setIdioma}
}