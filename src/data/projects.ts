const PROJECTS: {
  name: string
  description: string
  previewImage: string
  link: string
  slug?: string
  internal?: boolean
  tags: string[]
  isFeatured?: boolean
  category?: string
  type?: 'notion' | 'youtube'
}[] = [
  {
    name: '4SEASON BARBER STUDIO',
    description: 'Cách tôi giúp Nhà Tạo Mẫu Tóc của Hóc Môn có hệ thống đăng bài',
    link: 'https://app.notion.com/p/4-SEASON-BARBER-STUDIO-C-ch-t-i-gi-p-Nh-T-o-M-u-T-c-c-a-H-c-M-n-c-h-th-ng-ng-b-i-3f3a9ed9937e80e09b9ecda08b920f25?pvs=21',
    slug: '4-season-barber-studio',
    internal: true,
    previewImage: '/thumb-4season.png',
    tags: ['#Copywriting', '#ContentStrategy', '#ContentSystem', '#LocalMarketing'],
    isFeatured: true,
    type: 'notion',
  },
  {
    name: 'YouTube Content Production',
    description: 'Nghiên cứu → kịch bản → ghi voice → sản xuất audio → nội dung hoàn chỉnh',
    link: 'https://youtu.be/CiOPVm0IO5I?si=ly6DYOK8p5QwWzwR',
    previewImage: '/thumb-youtube.jpg',
    tags: ['#ContentCreation', '#Scriptwriting', '#VoiceOver', '#AudioProduction'],
    type: 'youtube',
  },
  {
    name: 'Audio Production',
    description: 'Ghi âm, voice-over, mixing và sản xuất audio',
    link: 'https://youtu.be/VM7iXTibbvc?si=gs6xTztUhXBwddG-',
    previewImage: '/thumb-audio.jpg',
    tags: ['#AudioProduction', '#VoiceOver', '#Mixing'],
    type: 'youtube',
  },
]

const MICRO_CASES: {
  name: string
  link: string
  slug?: string
  internal?: boolean
  category: string
  previewImage: string
  tags?: string[]
}[] = [
  {
    name: 'Helios × SAMURICE: Khi một quảng cáo hợp chủ đề nhưng lại không hợp tinh thần võ sĩ đạo',
    link: 'https://app.notion.com/p/Helios-SAMURICE-Khi-m-t-qu-ng-c-o-h-p-ch-nh-ng-l-i-kh-ng-h-p-tinh-th-n-v-s-o-1-3f3a9ed9937e803686eadcd0b6f5e8ba?pvs=21',
    slug: 'helios-samurice',
    internal: true,
    category: 'MICRO CASE STUDY · BRAND INTEGRATION & SPONSORED MESSAGING',
    previewImage: '/micro1-helio.png',
  },
  {
    name: 'Hashtag nhiều có thực sự tốt cho caption Facebook?',
    link: 'https://app.notion.com/p/Hashtag-nhi-u-c-th-c-s-t-t-cho-caption-Facebook-1-3f3a9ed9937e809da831f6cc6e7b69f7?pvs=21',
    slug: 'hashtag-caption-facebook',
    internal: true,
    category: 'MICRO CASE STUDY · METADATA & HASHTAG STRATEGY',
    previewImage: '/micro2-hashtag.png',
  },
  {
    name: 'UI/UX mancity.com – Ta học được gì từ website của một đội bóng giàu truyền thông và truyền thống?',
    link: 'https://app.notion.com/p/UI-UX-mancity-com-Ta-h-c-c-g-t-website-c-a-m-t-i-b-ng-gi-u-truy-n-th-ng-v-truy-n-th-ng-1-3f3a9ed9937e80248bbdd913c3afa7a1?pvs=21',
    slug: 'mancity-uiux',
    internal: true,
    category: 'MICRO CASE STUDY · CONTEXTUAL CTA & INFORMATION ARCHITECTURE',
    previewImage: '/micro3-mancity.png',
  },
]

export { PROJECTS, MICRO_CASES }
export default PROJECTS
