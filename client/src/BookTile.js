import { useHistory } from 'react-router-dom'

const BookTile = ( { book } ) => {
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        history.push(`/books/${book.id}`)
    }

    return (
        <div >
        <form onSubmit={handleSubmit}>
            <h1>"{book.title}"</h1>
            <h2>{book.author}</h2>
            <button>Info</button>
            <br/>
        </form>
        </div>
    )
}

export default BookTile
