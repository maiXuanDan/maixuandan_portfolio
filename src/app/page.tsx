import Links from '@/components/links'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-base">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="border-border shadow-shadow rounded-base border-2 bg-main p-1">
          <Image
            src="/MAI-XUAN-DAN.jpg"
            alt="Mai Xuân Dân"
            width={160}
            height={160}
            className="rounded-base"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl font-heading sm:text-4xl">MAI XUÂN DÂN</h1>
          <p className="mt-2 text-lg sm:text-xl">DIGITAL MARKETING | CONTENT MARKETING</p>
        </div>
      </div>
      <div className="mt-8 text-base sm:text-lg">
        <p>Chào bạn, tôi là Xuân Dân. Tôi là một Digital Marketer đang bắt đầu hành trình của mình.</p>

        <br />

        <p>
          Xuất phát từ việc tạo ra những nội dung có giá trị cho một hệ thống kênh YouTube, tôi nhận ra rằng content hay thôi là chưa đủ. Content cần đến đúng người, đúng thời điểm và phục vụ đúng mục tiêu.
        </p>

        <br />

        <p>
          Để làm được điều đó, tôi muốn hiểu không chỉ cách tạo ra content, mà phải hiểu cả dữ liệu phía sau nó.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          className="border-border bg-main text-main-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-6 py-3 text-center text-sm transition-all hover:shadow-none sm:text-base"
          href="/work#selected-work"
        >
          XEM CASE STUDY
        </Link>
        <a
          className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-6 py-3 text-center text-sm transition-all hover:shadow-none sm:text-base"
          href="/cv/mai-xuan-dan-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          XEM CV
        </a>
      </div>

      <Links />
    </div>
  )
}
