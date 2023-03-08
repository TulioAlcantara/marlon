import { useEffect, useState } from "react"

interface Props {
  details: { summary: string, text: string }[]
}

export default function Details({ details }: Props) {
  const [selectedItem, setSelectedItem] = useState(details[0])
  useEffect(() => {
    // loopDetails()
  }, [])

  const loopDetails = () => {
    setTimeout(() => {
      const nextIndex = (details.indexOf(selectedItem) + 1) % details.length
      setSelectedItem(details[nextIndex])
      loopDetails()
    }, 1000)

  }

  return <>
    <div className="flex gap-4">
      <ul className="space-y-4">
        {details.map((detail, index) =>
          <li key={index}>
            <button
              className={`text-2xl font-bold text-gray duration-300 ${selectedItem === detail ? 'text-black' : 'text-gray'}`}
              onClick={() => setSelectedItem(detail)}>
              {detail.summary}
            </button>
          </li>
        )}
      </ul>
      <p className="text-xl">
        {selectedItem.text}
      </p>
    </div>

  </>
}
