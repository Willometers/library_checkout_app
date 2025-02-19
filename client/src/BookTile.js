import { useNavigate } from 'react-router-dom'

const BookTile = ( { book } ) => {
    const history = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        history(`/books/${book.id}`)
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
