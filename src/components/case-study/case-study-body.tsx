import Image from 'next/image'
import type { CaseBlock } from '@/data/caseStudies'

type Template = { title: string; body: string[] }

type Segment =
  | { kind: 'block'; block: CaseBlock }
  | { kind: 'templates'; items: Template[] }

const TEMPLATE_HEADING = /^Mẫu \d/

function isTemplateHeading(block: CaseBlock): block is Extract<CaseBlock, { type: 'heading' }> {
  return block.type === 'heading' && block.level === 4 && TEMPLATE_HEADING.test(block.text)
}

function segmentBlocks(blocks: CaseBlock[]): Segment[] {
  const segments: Segment[] = []
  let i = 0
  while (i < blocks.length) {
    const block = blocks[i]
    if (isTemplateHeading(block)) {
      const items: Template[] = []
      while (i < blocks.length && isTemplateHeading(blocks[i])) {
        const title = (blocks[i] as Extract<CaseBlock, { type: 'heading' }>).text
        i++
        const body: string[] = []
        while (i < blocks.length && blocks[i].type === 'paragraph') {
          body.push((blocks[i] as Extract<CaseBlock, { type: 'paragraph' }>).text)
          i++
        }
        items.push({ title, body })
      }
      segments.push({ kind: 'templates', items })
      continue
    }
    segments.push({ kind: 'block', block })
    i++
  }
  return segments
}

function renderBlock(block: CaseBlock, key: number) {
  switch (block.type) {
    case 'heading':
      if (block.level === 2) {
        return (
          <h2 key={key} className="font-heading mt-10 mb-3 text-xl sm:text-2xl">
            {block.text}
          </h2>
        )
      }
      if (block.level === 3) {
        return (
          <h3 key={key} className="font-heading mt-8 mb-2 text-lg sm:text-xl">
            {block.text}
          </h3>
        )
      }
      return (
        <h4 key={key} className="font-heading mt-6 mb-2 text-base sm:text-lg">
          {block.text}
        </h4>
      )
    case 'paragraph':
      return (
        <p key={key} className="mt-4 text-base leading-relaxed whitespace-pre-line sm:text-lg">
          {block.text}
        </p>
      )
    case 'quote':
      return (
        <blockquote
          key={key}
          className="border-border my-5 border-l-4 pl-4 text-base italic whitespace-pre-line sm:text-lg"
        >
          {block.text}
        </blockquote>
      )
    case 'callout':
      return (
        <div
          key={key}
          className="border-border bg-secondary-background rounded-base my-5 border-2 p-4 text-base whitespace-pre-line sm:text-lg"
        >
          {block.text}
        </div>
      )
    case 'list':
      return block.ordered ? (
        <ol key={key} className="my-4 flex list-decimal flex-col gap-2 pl-6">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-base sm:text-lg">
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul key={key} className="my-4 flex list-disc flex-col gap-2 pl-6">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-base sm:text-lg">
              {item}
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div key={key} className="border-border rounded-base my-6 overflow-x-auto border-2">
          <table className="w-full border-collapse text-left text-sm sm:text-base">
            <thead className="bg-secondary-background">
              <tr>
                {block.headers.map((header, headerIndex) => (
                  <th key={headerIndex} className="font-heading border-border border-b-2 px-3 py-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-border border-b last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border-border px-3 py-2 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'comparison':
      return (
        <div key={key} className="my-6 grid gap-4 sm:grid-cols-2">
          {block.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={
                itemIndex === 0
                  ? 'border-border rounded-base bg-secondary-background border-2 p-4'
                  : 'border-border rounded-base bg-main text-main-foreground border-2 p-4'
              }
            >
              <p className="font-heading mb-2 text-sm sm:text-base">{item.label}</p>
              <blockquote className="text-base leading-relaxed whitespace-pre-line sm:text-lg">
                {item.text}
              </blockquote>
            </div>
          ))}
        </div>
      )
    case 'captionComparison':
      return (
        <div key={key} className="my-6 grid items-start gap-4 sm:grid-cols-2">
          <div className="border-border shadow-shadow rounded-base overflow-hidden border-2">
            <div className="border-border bg-secondary-background font-heading border-b-2 px-4 py-3 text-base sm:text-lg">
              {block.original.label}
            </div>
            <div className="px-4 py-4">
              <p className="text-base leading-relaxed whitespace-pre-line sm:text-lg">
                {block.original.text}
              </p>
            </div>
          </div>
          <div className="border-border shadow-shadow rounded-base overflow-hidden border-2">
            <div className="border-border bg-main text-main-foreground font-heading border-b-2 px-4 py-3 text-base sm:text-lg">
              {block.revised.label}
            </div>
            <div className="space-y-4 px-4 py-4">
              <p className="text-base leading-relaxed whitespace-pre-line sm:text-lg">
                {block.revised.text}
              </p>
              <p className="text-sm leading-relaxed sm:text-base">{block.revised.note}</p>
              <div className="flex flex-wrap gap-2">
                {block.revised.hashtags.map((hashtag, hashtagIndex) => (
                  <span
                    key={hashtagIndex}
                    className="border-border bg-secondary-background rounded-base border-2 px-2 py-1 text-xs whitespace-nowrap sm:text-sm"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    case 'image':
      return (
        <figure
          key={key}
          className="border-border shadow-shadow rounded-base bg-secondary-background my-6 overflow-hidden border-2"
        >
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            className="h-auto w-full"
            sizes="(max-width: 950px) 100vw, 950px"
          />
        </figure>
      )
    default:
      return null
  }
}

export default function CaseStudyBody({ blocks }: { blocks: CaseBlock[] }) {
  const segments = segmentBlocks(blocks)

  return (
    <div className="font-base">
      {segments.map((segment, index) => {
        if (segment.kind === 'templates') {
          return (
            <div key={index} className="my-6 grid items-start gap-4 sm:grid-cols-2">
              {segment.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="border-border shadow-shadow rounded-base overflow-hidden border-2"
                >
                  <div className="border-border bg-main text-main-foreground font-heading border-b-2 px-4 py-3 text-base sm:text-lg">
                    {item.title}
                  </div>
                  <div className="bg-secondary-background space-y-4 px-4 py-4">
                    {item.body.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-base leading-relaxed whitespace-pre-line sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        }

        return renderBlock(segment.block, index)
      })}
    </div>
  )
}
