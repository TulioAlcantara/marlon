import { useEffect, useState } from "react"

interface Props {
  details: { summary: string, text: string }[]
}

export default function Details({ details }: Props) {
  const [selectedItem, setSelectedItem] = useState(details[0])

  return <>
    <div className="flex gap-8">
      <ul className="space-y-4">
        {details.map((detail, index) =>
          <li key={index}>
            <button
              className={`text-2xl font-bold duration-300 ${selectedItem === detail ? 'text-white' : 'text-lightGray'}`}
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
