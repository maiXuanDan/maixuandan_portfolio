import { PROJECTS, MICRO_CASES } from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

export default function Work() {
  return (
    <div>
      <h1 id="selected-work" className="font-heading mb-8 text-2xl sm:text-4xl">
        SELECTED WORK
      </h1>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          const isFeatured = project.isFeatured
          return (
            <div
              className={`border-border shadow-shadow rounded-base bg-main border-2 ${
                isFeatured ? 'p-5 sm:p-8' : 'p-4 sm:p-5'
              }`}
              key={id}
            >
              <AspectRatio
                className="border-border shadow-shadow rounded-base -bottom-[2px]! border-2 overflow-hidden"
                ratio={isFeatured ? 16 / 6 : 71 / 26}
              >
                <Image
                  src={project.previewImage}
                  alt={project.name}
                  fill
                  className="rounded-base object-cover"
                  priority={isFeatured}
                  sizes="(max-width: 768px) 100vw, 950px"
                />
              </AspectRatio>

              <div className="text-main-foreground font-base mt-5">
                <h2
                  className={`font-heading ${
                    isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                  }`}
                >
                  {project.name}
                </h2>

                <p className={`mt-2 ${isFeatured ? 'text-base sm:text-lg' : ''}`}>
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="border-border bg-secondary-background text-foreground rounded-base border px-2 py-0.5 text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8">
                  {project.internal && project.slug ? (
                    <Link
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base inline-block"
                      href={`/work/${project.slug}`}
                    >
                      View Case Study
                    </Link>
                  ) : (
                    <a
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base inline-block"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.type === 'youtube' ? 'Watch on YouTube' : 'View Case Study'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <h2 className="font-heading mt-10 mb-6 text-xl sm:text-2xl">Micro Case Studies</h2>
      <div className="flex flex-col gap-4">
        {MICRO_CASES.map((item, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-main-foreground font-base">
                <h3 className="font-heading text-lg sm:text-xl">{item.name}</h3>
                <p className="mt-1 text-sm sm:text-base">{item.category}</p>
                <div className="mt-6">
                  {item.internal && item.slug ? (
                    <Link
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base inline-block"
                      href={`/work/${item.slug}`}
                    >
                      View Case Study
                    </Link>
                  ) : (
                    <a
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base inline-block"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
