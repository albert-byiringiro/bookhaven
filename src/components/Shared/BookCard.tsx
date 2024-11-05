import SpecialBook from "../../assets/SpecialBook";

export default function BookCard() {
  return (
    <div className="border-2 border-red-300 flex">
        <SpecialBook/>
        <div className="">
            <div className="grid">
                <div className="">
                    {/* TODO: Add the details */}
                    <h2 className="">The Pumpkin Spice Cafe</h2>
                    <h3 className="">Dream Harbor</h3>
                </div>
                <div className="">Tags</div>
            </div>
            <div className="">Actions about the book</div>
        </div>
        <div className="grid">
            <button className="bg-green-700">Reading</button>
        </div>
    </div>
  )
}
