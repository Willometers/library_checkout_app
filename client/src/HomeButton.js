import React from "react"
import { useHistory } from 'react-router-dom'

const HomeButton = () => {
    const history = useHistory()
    const handleHome = (e) => {
        // e.preventDefault()
        fetch(`http://localhost:3000/logout`, {
            method: 'DELETE'
        })
        .then(() => {
            sessionStorage.clear()
            history.push(``)
            console.log('session deleted')
        })
    }

    return (
        <div>
            <form onSubmit={handleHome}>
                <button>Logout</button>
            </form>
        </div>
    )
}

export default HomeButton
