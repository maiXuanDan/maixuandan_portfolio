import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import CASE_STUDIES from '@/data/caseStudies'
import CaseStudyBody from '@/components/case-study/case-study-body'

export function generateStaticParams() {
  return CASE_STUDIES.map((caseStudy) => ({ slug: caseStudy.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = CASE_STUDIES.find((item) => item.slug === slug)

  if (!caseStudy) {
    return {}
  }

  return {
    title: `${caseStudy.title} — Case Study`,
    description: caseStudy.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = CASE_STUDIES.find((item) => item.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  const coverBlock = caseStudy.blocks.find(
    (block) => block.type === 'image' && block.src === caseStudy.coverImage,
  )
  const otherCaseStudies = CASE_STUDIES.filter((item) => item.slug !== caseStudy.slug)

  return (
    <article className="font-base">
      <Link href="/work" className="underline">
        ← Quay lại Work
      </Link>

      <h1 className="font-heading mt-6 text-2xl sm:text-4xl">{caseStudy.title}</h1>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {caseStudy.role && (
          <span className="text-sm sm:text-base">Vai trò: {caseStudy.role}</span>
        )}
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="border-border bg-secondary-background text-foreground rounded-base border px-2 py-0.5 text-xs sm:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {caseStudy.coverImage && coverBlock && coverBlock.type === 'image' ? (
        <figure className="border-border shadow-shadow rounded-base bg-secondary-background mt-6 overflow-hidden border-2">
          <Image
            src={caseStudy.coverImage}
            alt={`${caseStudy.title} cover`}
            width={coverBlock.width}
            height={coverBlock.height}
            className="h-auto w-full"
            priority
            sizes="(max-width: 950px) 100vw, 950px"
          />
        </figure>
      ) : caseStudy.links && caseStudy.links.length > 0 ? (
        <div className="border-border bg-secondary-background rounded-base mt-6 border-2 p-4">
          <p className="text-base sm:text-lg">
            Nguồn phân tích:{' '}
            {caseStudy.links.map((link, index) => (
              <span key={link.href}>
                {index > 0 && ', '}
                <a
                  className="underline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      ) : null}

      <div className="mt-6">
        <CaseStudyBody blocks={caseStudy.blocks} />
      </div>

      <div className="border-border mt-12 flex flex-wrap items-center gap-4 border-t-2 pt-6">
        <Link href="/work" className="underline">
          ← Quay lại Work
        </Link>
        {caseStudy.sourceUrl && (
          <a
            className="underline"
            href={caseStudy.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View original source (Notion)
          </a>
        )}
      </div>

      <section className="mt-12">
        <h2 className="font-heading mb-5 text-xl sm:text-2xl">Case study khác</h2>
        <div className="flex flex-col gap-4">
          {otherCaseStudies.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="border-border shadow-shadow rounded-base bg-main text-main-foreground block border-2 p-4 transition-transform hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:p-5"
            >
              <h3 className="font-heading text-lg sm:text-xl">{item.title}</h3>
              <p className="mt-1 text-sm sm:text-base">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
