import SKILLS from '@/data/skills'
import Image from 'next/image'

const toolIcons: Record<string, { src: string; alt: string }> = {
  'Google Analytics': { src: '/tool-google-analytics.png', alt: 'Google Analytics icon' },
  'Canva': { src: '/tool-canva.jpg', alt: 'Canva icon' },
  'CapCut': { src: '/tool-capcut.png', alt: 'CapCut icon' },
  'Notion': { src: '/tool-notion.png', alt: 'Notion icon' },
  'Bandlab': { src: '/tool-bandlab.png', alt: 'Bandlab icon' },
}

export default function Skills() {
  const skillsData = SKILLS
  const skillsList = skillsData.find((s) => s.field === 'Skills')?.skills || []
  const toolsList = skillsData.find((s) => s.field === 'Tools')?.skills || []

  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Skills & Tools</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-heading sm:text-xl">Skills</h3>
          <ul className="flex flex-col gap-2">
            {skillsList.map((skill, id) => (
              <li key={id} className="font-base text-base sm:text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-heading sm:text-xl">Tools</h3>
          <ul className="flex flex-col gap-3">
            {toolsList.map((tool, id) => {
              const icon = toolIcons[tool]
              return (
                <li key={id} className="flex items-center gap-3 font-base text-base sm:text-lg">
                  {icon && (
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                      className="h-6 w-6 shrink-0"
                    />
                  )}
                  {tool}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
