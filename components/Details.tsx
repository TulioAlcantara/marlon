import { useEffect, useState } from "react"

interface Detail {
  summary: string,
  text: string
}

interface Props {
  details: Detail[]
}

export default function Details({ details }: Props) {
  const [selectedItemSummary, setSelectedItemSummary] = useState<string>(details[0].summary)

  const highlightText = (detail: Detail) => {
    return selectedItemSummary == detail.summary ? 'text-white' : 'text-lightGray opacity-50'
  }

  return <>
    <div className="flex gap-8">
      <ul className="space-y-4">
        {details.map((detail, index) =>
          <li key={index}>
            <button
              className={`text-2xl font-bold duration-300 ${highlightText(detail)}`}
              onClick={() => setSelectedItemSummary(detail.summary)}>
              {detail.summary}
            </button>
          </li>
        )}
      </ul>
      <p className="text-xl whitespace-pre-line">
        {details.map((detail) => { if (detail.summary == selectedItemSummary) return detail.text })}
      </p>
    </div>

  </>
}
