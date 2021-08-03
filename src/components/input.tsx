import { useState } from 'react'

export default function Input() {
  //文字カウント
  const [value, setValue] = useState('')
  const [displayCount, setDisplayCount] = useState(0)
  function textCount(text: string) {
    setValue(text)
    let replacedString = text.replace(/\s+/g, '')
    setDisplayCount(replacedString.length)
  }

  //テキスト消去
  function clearText() {
    setValue('')
    setDisplayCount(0)
  }

  //スタイルの変更
  const [style, setStyle] = useState('serif')
  function changeFont(font) {
    setStyle(font)
  }

  //フォントサイズの変更
  const [size, setSize] = useState('md')
  function changeSize(size) {
    setSize(size)
  }

  return (
    <div className="w-full h-full ">
      <p className="block w-3/4 pt-6 mx-auto font-serif text-xl text-right ">
        Count：{displayCount}
      </p>
      <div className="flex w-3/4 pt-2 mx-auto font-serif">
        <p>font</p>
        <select
          name="font select"
          className="ml-2 outline-none border border-gray-500 rounded "
          onChange={(e) => changeFont(e.target.value)}
        >
          <option value="serif">serif</option>
          <option value="sans">sans</option>
        </select>
        <p className="ml-4">size</p>
        <select
          name="size select"
          className="ml-2 outline-none border border-gray-500 rounded "
          onChange={(e) => changeSize(e.target.value)}
        >
          <option value="md">md</option>
          <option value="lg">lg</option>
          <option value="xl">xl</option>
        </select>
        <button
          className="px-4 ml-auto border-b border-black outline-none cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-md focus:outline-none shadow-md"
          onClick={clearText}
        >
          clear text
        </button>
      </div>

      <div className="h-4/5">
        <textarea
          id="input"
          value={value}
          onChange={(e) => textCount(e.target.value)}
          className={`font-${style} text-${size} p-2 block w-3/4 h-full mx-auto mt-4 outline-none resize-none wd:w-1/3 border border-black rounded-lg`}
          autoFocus={true}
        ></textarea>
      </div>
    </div>
  )
}
