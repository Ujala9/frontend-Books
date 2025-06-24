import useFetch from "../useFetch"

const BookByAuthor = ({author}) => {
   const { data, loading } = useFetch(`https://backend-books-green.vercel.app/books/author/${author}`)
     console.log(data)
    return (
         <div>
            <ul>
            <h1>Books by {author}</h1>
              { data &&  data.map((book) => (
                  <li key={book._id}>{book.title}</li>
              )) 
              }
            </ul>
         </div>
    )
}

export default BookByAuthor;