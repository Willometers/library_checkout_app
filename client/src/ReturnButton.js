import React from "react"

const ReturnButton = () => {

    const handleSubmit = (e) => {
        // debugger 
        // e.preventDefualt()
        console.log()
        fetch(`http://localhost:3000/checkouts/`, {
            method: 'DELETE'
        })
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <button >Return Books</button>
            </form>
        </div>
    )

}

export default ReturnButton