import SearchIcon from '../assets/SearchIcon'

export default function SearchBox() {
  return (
    <div className='relative'>
        <input type="text" name="" id="" className="px-12 py-4 ring-1 ring-gray-700 rounded-lg shadow-md" placeholder="Bible, Sermons, Booklets" />
        <label htmlFor="" className="absolute left-3 top-4"><SearchIcon/></label>
    </div>
  )
}
