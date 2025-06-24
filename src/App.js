import "./styles.css";
import AllBooks from "./components/AllBooks";
import BookByTitle from "./components/bookByTitle";
import BookByAuthor from "./components/BooksByAuthor"
import AddBookForm from "./components/addBookForm";

export default function App() {
  return (
    <main>
      <AddBookForm/>
      <h2>All Books</h2>
      <AllBooks/>
      <BookByTitle title={"Shoe Dog"}/>
      <BookByAuthor author={"Dan Brown"}/>
    </main>
  );
}
