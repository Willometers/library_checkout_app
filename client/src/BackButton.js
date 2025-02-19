import React from "react"
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const history = useNavigate()
    const handleHome = (e) => {
        e.preventDefault()
        history(`/books`)
    }

    return (
        <div>
            <form onSubmit={handleHome}>
                <button>Books</button>
            </form>
        </div>
    )

}

export default BackButton