interface Props {
  summary: string
  text: string
}

export default function Details({ summary, text }: Props) {
  return <>
    <details className="cursor-pointer">
      <summary className="fluid-xl">{summary}</summary>
      <p className="fluid-lg">{text}</p>
    </details>
  </>
}
