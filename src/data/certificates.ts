export type Certificate = {
  title: string
  issuer?: string
  date?: string
  credentialId?: string
  verifyUrl?: string
  previewImage: string
  fileUrl: string
  fileType: 'pdf' | 'image'
}

const CERTIFICATES: Certificate[] = [
  {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    previewImage: '/certificates/fundamentals-of-digital-marketing-google-preview.png',
    fileUrl: '/certificates/fundamentals-of-digital-marketing-google.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Google Analytics 4 (GA4)',
    previewImage: '/certificates/google-analytics-4.png',
    fileUrl: '/certificates/google-analytics-4.png',
    fileType: 'image',
  },
  {
    title: 'Inbound Marketing',
    previewImage: '/certificates/inbound-marketing.png',
    fileUrl: '/certificates/inbound-marketing.png',
    fileType: 'image',
  },
]

export default CERTIFICATES
