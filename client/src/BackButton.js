import React from "react"
import { useHistory } from 'react-router-dom'

const BackButton = () => {
    const history = useHistory()
    const handleHome = (e) => {
        e.preventDefault()
        history.push(`/books`)
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