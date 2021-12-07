import React from "react"
import { useHistory } from 'react-router-dom'

const HomeButton = () => {
    const history = useHistory()
    const handleHome = (e) => {
        e.preventDefault()
        history.push(``)
    }

    return (
        <div>
            <form onSubmit={handleHome}>
                <button >Home</button>
            </form>
        </div>
    )

}

export default HomeButton