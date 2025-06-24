import useFetch from "../useFetch";
import {useState} from "react"

const AllBooks = () => {
     const [successMsg, setSuccessMessage] = useState("")
     const { data, loading } = useFetch("https://backend-books-green.vercel.app/books")

     const handleDelete = async (bookId) => {
      try{
         const response = await fetch(`https://backend-books-green.vercel.app/books/${bookId}`, 
          {method: "DELETE"}
         );
         if (!response.ok){
            throw "Failed to delete book."
         }

         const data = await response.json()
         if (data){
          setSuccessMessage("Book deleted successfully")
          window.location.reload()
         }
      }  catch (error){
        console.log(error)
      }
  }
     return (
        <>
        { data ? (
            <div>
               <ul>
                 {data.map((book) => (
                    <li key={book._id}>{book.title}  <button onClick={() => handleDelete(book._id)}> Delete</button></li>
                 ))}
               </ul>
            </div>
        ) : (
          loading && (<p>loading...</p>)
        )
        }
     </>
     )
}

export default AllBooks;


//in case sb delete ho gya
// [
//    {
//      "_id": "6821ccefbe4cc5c3d5180a03",
//      "title": "The Da Vinci Code",
//      "author": "Dan Brown",
//      "publishedYear": 2003,
//      "genre": [
//        "Mystery",
//        "Thriller"
//      ],
//      "language": "English",
//      "country": "United States",
//      "rating": 7.6,
//      "summary": "A gripping mystery thriller involving hidden secrets and religious symbolism.",
//      "coverImageUrl": "https://example.com/the_da_vinci_code.jpg",
//      "__v": 0
//    },
//    {
//      "_id": "6821ccefbe4cc5c3d5180a04",
//      "title": "The Power of Habit",
//      "author": "Charles Duhigg",
//      "publishedYear": 2012,
//      "genre": [
//        "Non-Fiction",
//        "Self-help"
//      ],
//      "language": "English",
//      "country": "United States",
//      "rating": 8.4,
//      "summary": "Explores the science behind habits and how they can be changed to transform lives.",
//      "coverImageUrl": "https://example.com/the_power_of_habit.jpg",
//      "__v": 0
//    },
//    {
//      "_id": "6821ccefbe4cc5c3d5180a01",
//      "title": "The Great Gatsby",
//      "author": "F. Scott Fitzgerald",
//      "publishedYear": 1925,
//      "genre": [
//        "Fiction",
//        "Romance"
//      ],
//      "language": "English",
//      "country": "United States",
//      "rating": 8.1,
//      "summary": "A tale of love, wealth, and the American Dream set during the Roaring Twenties.",
//      "coverImageUrl": "https://example.com/the_great_gatsby.jpg",
//      "__v": 0
//    },
//    {
//      "_id": "6821ccefbe4cc5c3d5180a02",
//      "title": "Harry Potter and the Sorcerer's Stone",
//      "author": "J.K. Rowling",
//      "publishedYear": 1997,
//      "genre": [
//        "Fantasy"
//      ],
//      "language": "English",
//      "country": "United Kingdom",
//      "rating": 9.3,
//      "summary": "The magical journey of a young wizard at Hogwarts School of Witchcraft and Wizardry.",
//      "coverImageUrl": "https://example.com/harry_potter_sorcerers_stone.jpg",
//      "__v": 0
//    },
//    {
//      "_id": "684fbed5910ac8351d7c6030",
//      "title": "Lean In",
//      "author": "Sheryl Sandberg",
//      "publishedYear": 2012,
//      "genre": [
//        "Non-fiction",
//        "Business"
//      ],
//      "language": "English",
//      "country": "United States",
//      "rating": 4.5,
//      "summary": "A book about empowering women in the workplace and achieving leadership roles.",
//      "coverImageUrl": "https://example.com/lean_in.jpg",
//      "__v": 0
//    },
//    {
//      "_id": "684fbef2910ac8351d7c6032",
   //   "title": "Shoe Dog",
   //   "author": "Phil Knight",
   //   "publishedYear": 2017,
   //   "genre": [
   //     "Autobiography",
   //     "Business"
   //   ],
   //   "language": "English",
   //   "country": "United States",
   //   "rating": 4.2,
   //   "summary": "An inspiring memoir by the co-founder of Nike, detailing the journey of building a global athletic brand.",
   //   "coverImageUrl": "https://example.com/shoe_dog.jpg",
   //   "__v": 0
   // },
//    {
//      "_id": "6857feccb29e4c2090d9cad1",
//      "title": "Apj abdul kalam",
//      "author": "Arun Tiwari",
//      "publishedYear": 1999,
//      "genre": [
//        "autobiography"
//      ],
//      "language": "English",
//      "country": "India",
//      "rating": 4.5,
//      "summary": "\"Wings of Fire\" is the autobiography of A.P.J. Abdul Kalam, detailing his journey from a humble background in Rameswaram to becoming a prominent scientist and the President of India",
//      "coverImageUrl": "https://en.wikipedia.org/wiki/Wings_of_Fire_(autobiography)",
//      "__v": 0
//    },
//    {
//      "_id": "68581ffba41c27fa0acad002",
//      "title": "Shrimad Bhagawat Geeta",
//      "author": "Krishna",
//      "publishedYear": 499,
//      "genre": [
//        "Highest Philosophy"
//      ],
//      "language": "Sanskrit",
//      "country": "Bharat",
//      "rating": 10,
//      "summary": "The Gita explores dharma (duty), karma (action), bhakti (devotion), and moksha (liberation), offering guidance on how to live a meaningful life",
//      "coverImageUrl": "https://acharyaprashant.org/en/articles/topic/2",
//      "__v": 0
//    }
//  ]