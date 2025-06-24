import  { useState } from "react"

const AddBookForm = () => {

    const [formBook, updateBook] = useState({
       title : "",
       author : "",
       publishedYear :"",
       genre :"",
       language :"",
       country :"",
       rating :"",
       summary :"", 
       coverImageUrl :""
    })

    const handleChange = (e) => {
        const {name, value } = e.target

        updateBook((prevState) => ({
          ...prevState,
          [name]: (name === "publishedYear" || name === "rating") ? value === "" ? "" : parseFloat(value) : value,
      }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await fetch("https://backend-books-green.vercel.app/books",{
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(formBook)
               
            })
            if (!response.ok) {
              throw "Failed to add book."
            }
            
             const json = await response.json();
             console.log("Server Response:", json); 
        }catch (error){
          console.log("Failed to add book:", err);
        }
    }

    return(
       <>
         <h1>Add New Book</h1>
         <form onSubmit={handleSubmit}>
             <label>Title:</label><br/>
             <input type="text" name="title" value={formBook.title} onChange={handleChange} /><br/><br/>
             <label>Author:</label><br/>
             <input type="text" name="author" value={formBook.author} onChange={handleChange} /><br/><br/>
             <label>Published Year:</label><br/>
             <input type="number" name="publishedYear" value={formBook.publishedYear} onChange={handleChange} /><br/><br/>
             <label>Genre:</label><br/>
             <input type="text" name="genre" value={formBook.genre} onChange={handleChange} /><br/><br/>
             <label>Language:</label><br/>
             <input type="text" name="language" value={formBook.language} onChange={handleChange} /><br/><br/>
             <label>Country:</label><br/>
             <input type="text" name="country" value={formBook.country} onChange={handleChange} /><br/><br/>
             <label>Rating:</label><br/>
             <input type="number" name="rating" value={formBook.rating} onChange={handleChange} /><br/><br/>
             <label>Summary:</label><br/>
             <input type="text" name="summary" value={formBook.summary} onChange={handleChange} /><br/><br/>
             <label>Cover ImageUrl:</label><br/>
             <input type="text" name="coverImageUrl" value={formBook.coverImageUrl} onChange={handleChange} /><br/><br/>
             <button>Submit</button>
         </form>
       </>
    )
}

export default AddBookForm;


