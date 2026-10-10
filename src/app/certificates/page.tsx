import CERTIFICATES from '@/data/certificates'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

export default function Certificates() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">CERTIFICATES</h1>

      <p className="mb-8 max-w-2xl text-base sm:text-lg">
        Các chứng chỉ tôi đã hoàn thành trong quá trình học và làm Digital Marketing.
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {CERTIFICATES.map((certificate, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main flex flex-col border-2 p-4 sm:p-5"
              key={id}
            >
              <AspectRatio
                className="border-border rounded-base bg-secondary-background overflow-hidden border-2"
                ratio={4 / 3}
              >
                <Image
                  src={certificate.previewImage}
                  alt={`${certificate.title} certificate preview`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 465px"
                />
              </AspectRatio>

              <div className="text-main-foreground flex flex-1 flex-col">
                <h2 className="font-heading mt-5 text-xl sm:text-2xl">{certificate.title}</h2>

                {certificate.issuer && (
                  <p className="mt-2 text-base sm:text-lg">{certificate.issuer}</p>
                )}

                {certificate.date && (
                  <p className="mt-1 text-sm sm:text-base">{certificate.date}</p>
                )}

                {certificate.credentialId && (
                  <p className="mt-1 text-sm sm:text-base">
                    Credential ID: {certificate.credentialId}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  <a
                    className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base inline-block"
                    href={certificate.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>

                  {certificate.verifyUrl && (
                    <a
                      className="underline text-sm sm:text-base"
                      href={certificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify
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
