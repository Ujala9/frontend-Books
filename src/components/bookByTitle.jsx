import useFetch from "../useFetch"

const BookByTitle = ({title}) => {

    const { data, loading } = useFetch(`https://backend-books-green.vercel.app/books/${title}`)

    console.log(data)

    return data ? (
           <div>
             <h1>{data.title}</h1>
             <p><b>Author: </b>{data.author}</p>
             <p><b>Release Year: </b>{data.publishedYear}</p>
             <p><b>Genre: </b>{data.genre.join(', ')}</p>
           </div>
    ): (
        loading && <p>Loading...</p>
    )
}

export default BookByTitle;