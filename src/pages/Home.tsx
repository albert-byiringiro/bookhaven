import SearchBox from "../components/SearchBox";
import BookCard from "../components/Shared/BookCard";

export default function HomePage() {
  return (
    <div className="">
    <div className="pt-12 space-y-8 grid justify-center content-center">
      <h1 className="font-semibold text-gray-800 text-4xl text-center">All Books</h1>
      <div className="">
        <SearchBox/>
      </div>
    </div>
      <main className="grid">
      <BookCard/>
      </main>
    </div>
  )
}
