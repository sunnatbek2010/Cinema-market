    import { useState } from "react"


    const useToggle = (init) => {
        const [open, setOpen] = useState(init)
        

        const toggle = () => {
            setOpen(prev => !prev)
        }

        return { open, toggle, setOpen }

    }

    export default useToggle