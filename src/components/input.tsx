import { useState } from 'react'

const input = () => {
  //文字カウント
  const [value, setValue] = useState('')
  const [displayCount, setDisplayCount] = useState(0)
  function textCount(text: string) {
    setValue(text)
    let replacedString = text.replace(/\s+/g, '')
    setDisplayCount(replacedString.length)
  }
  return (
    <div className="w-full h-full ">
      <div className="block w-3/4 pt-6 mx-auto font-serif text-xl text-right ">
        <button className="px-4 bg-white border-b border-black outline-none cursor-pointer hover:bg-gray-100 active:font-bold focus:outline-none">
          Clear
        </button>
        <p>Count：{displayCount}</p>
      </div>

      <div className="h-4/5">
        <textarea
          id="input"
          value={value}
          onChange={(e) => textCount(e.target.value)}
          className="p-2 block w-3/4 h-full mx-auto mt-6 outline-none resize-none wd:w-1/3 border border-black rounded-lg"
          autoFocus={true}
        ></textarea>
      </div>
    </div>
  )
}

export default input
