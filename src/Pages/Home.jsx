import { useLoaderData } from "react-router"
import Banner from "../Components/Banner/Banner"
import BookList from "../Components/Book/BookList"
import Books from "../Components/Book/Books";

function Home() {
  const data = useLoaderData()
  console.log(data);
  return (
    <div>
      <Banner />
      <Books data={data}/>
    </div>
  )
}

export default Home