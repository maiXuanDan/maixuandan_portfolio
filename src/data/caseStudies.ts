export type CaseBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'quote'; text: string }
  | { type: 'callout'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'comparison'; items: { label: string; text: string }[] }
  | {
      type: 'captionComparison'
      original: { label: string; text: string }
      revised: { label: string; text: string; note: string; hashtags: string[] }
    }
  | { type: 'image'; src: string; alt: string; width: number; height: number }

export type CaseStudy = {
  slug: string
  title: string
  description: string
  role?: string
  tags: string[]
  coverImage?: string
  sourceUrl?: string
  links?: { label: string; href: string }[]
  blocks: CaseBlock[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    "slug": "4-season-barber-studio",
    "title": "4 SEASON BARBER STUDIO - Cách tôi giúp Nhà Tạo Mẫu Tóc của Hóc Môn có hệ thống đăng bài",
    "description": "Cách tôi giúp Nhà Tạo Mẫu Tóc của Hóc Môn có hệ thống đăng bài.",
    "tags": [
      "#Copywriting",
      "#ContentStrategy",
      "#ContentSystem",
      "#LocalMarketing"
    ],
    "sourceUrl": "https://app.notion.com/p/4-SEASON-BARBER-STUDIO-C-ch-t-i-gi-p-Nh-T-o-M-u-T-c-c-a-H-c-M-n-c-h-th-ng-ng-b-i-3f3a9ed9937e80e09b9ecda08b920f25?pvs=21",
    "blocks": [
      {
        "type": "quote",
        "text": "Case study được đăng với sự đồng ý của 4SEASON BARBER STUDIO."
      },
      {
        "type": "paragraph",
        "text": "TL;DR: Tôi chủ động hỗ trợ Studio bằng cách viết một bài tuyển dụng thợ làm tóc. Trong quá trình nghiên cứu trang, tôi nhận thấy Studio còn thiếu một công thức nội dung có thể lặp lại, nên tôi chủ động phát triển thêm một bộ mẫu bài để Studio có thể tiếp tục triển khai."
      },
      {
        "type": "paragraph",
        "text": "Kết quả: Bài tuyển dụng được duyệt và đăng ngày 05/10/2026; Studio muốn tiếp tục hợp tác viết tuyến nội dung nhuộm và uốn tóc"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "1. Bối cảnh"
      },
      {
        "type": "list",
        "items": [
          "Khách hàng: 4SEASON BARBER STUDIO - tiệm tóc nam tại Hóc Môn, do anh Nguyễn Thành Đạt - Founder quản lý.",
          "Yêu cầu ban đầu: Viết một bài tuyển dụng thợ tóc nam, với thông tin tuyển dụng gồm thu nhập 9-13 triệu đồng/tháng, thời gian làm việc 8h30–20h và có đào tạo thêm.",
          "Mục tiêu của khách hàng: Tuyển được 2 thợ tóc có kinh nghiệm trong vòng 1 tuần."
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Quá trình nghiên cứu"
      },
      {
        "type": "paragraph",
        "text": "Trước khi viết bài, tôi rà soát cách 4SEASON đang triển khai nội dung trên Facebook và TikTok"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.1. Nội dung chưa có công thức lặp lại"
      },
      {
        "type": "paragraph",
        "text": "Phần lớn bài đăng là video quá trình cắt tóc, kèm caption ngắn chỉ gồm tên kiểu tóc. Hashtag chủ yếu là hashtag chung, chưa khai thác hashtag khu vực như Hóc Môn hay hashtag thương hiệu của tiệm."
      },
      {
        "type": "image",
        "src": "/work/4-season-barber-studio/facebook-content-audit.png",
        "alt": "insight 1.png",
        "width": 884,
        "height": 194
      },
      {
        "type": "paragraph",
        "text": "Các bài đăng chưa thể hiện một công thức cố định cho những thành phần như:"
      },
      {
        "type": "list",
        "items": [
          "Thông điệp chính",
          "Mô tả kiểu tóc",
          "Tư vấn đối tượng/phong cách phù hợp",
          "Call-to-action",
          "Hashtag"
        ]
      },
      {
        "type": "paragraph",
        "text": "Điều này khiến mỗi bài mới có nguy cơ trở thành một lần phải nghĩ lại từ đầu."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.2. Khách hàng địa phương cần được tiếp cận bằng nội dung phù hợp"
      },
      {
        "type": "paragraph",
        "text": "Với một dịch vụ có tính địa phương như cắt tóc, tôi ưu tiên bổ sung tín hiệu khu vực và tên thương hiệu vào content để tăng mức độ liên quan với khách hàng quanh Hóc Môn."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Vì vậy, insight tôi rút ra là:"
      },
      {
        "type": "quote",
        "text": "4SEASON có tay nghề và tài nguyên hình ảnh thực tế, nhưng nội dung chưa có hệ thống vì mỗi bài đăng mới vẫn là một lần phải nghĩ lại từ đầu."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Cơ hội tôi chủ động nhận ra"
      },
      {
        "type": "list",
        "items": [
          "Vì sao làm thêm: một bài tuyển dụng chỉ giải quyết việc một lần, còn trang cần nội dung đều đặn để thu hút cả khách lẫn ứng viên.",
          "Vì sao tặng quà thay vì chào bán: Vì tôi muốn Studio có thể kiểm chứng chất lượng công việc bằng sản phẩm thực tế trước khi quyết định có tiếp tục hợp tác hay không.",
          "Phần tặng: 5 mẫu bài, bộ hashtag, hướng dẫn dùng 10 giây"
        ]
      },
      {
        "type": "paragraph",
        "text": "Mọi mẫu bài đều có cùng cấu trúc là hook, lý do, kêu gọi inbox tư vấn, địa chỉ, hashtag, nên khách chỉ cần thay [TÊN KIỂU TÓC] là đăng được."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Sản phẩm"
      },
      {
        "type": "paragraph",
        "text": "Được chia làm 2 nhóm."
      },
      {
        "type": "list",
        "items": [
          "Nhóm A bao gồm các sản phẩm đã được đăng thực tế",
          "Nhóm B bao gồm bộ mẫu bàn giao khách đang sử dụng dần"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Nhóm A: Sản phẩm thực tế"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Bài tuyển dụng: Đánh vào 3 nỗi đau: thu nhập thất thường, không có lộ trình, chỗ làm không ổn định"
      },
      {
        "type": "image",
        "src": "/work/4-season-barber-studio/recruitment-post.png",
        "alt": "tuyển 4season copywriting.png",
        "width": 885,
        "height": 669
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Bài đăng theo template từng mẫu tóc: Wavy S"
      },
      {
        "type": "image",
        "src": "/work/4-season-barber-studio/wavy-s-template-post.png",
        "alt": "wavys copywriting.png",
        "width": 840,
        "height": 417
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Nhóm B: Bộ mẫu bàn giao khách đang sử dụng dần"
      },
      {
        "type": "table",
        "headers": [
          "Mẫu",
          "Mục đích",
          "Hook mở đầu"
        ],
        "rows": [
          [
            "1. Chuyên môn + tư vấn",
            "Cho thấy tay nghề",
            "\"Không phải khuôn mặt nào cũng nên để cùng một form\""
          ],
          [
            "2. Đánh vào nhu cầu",
            "Chạm nỗi lo của khách",
            "\"Đang muốn thử… nhưng sợ không hợp mặt?\""
          ],
          [
            "3. Personal branding",
            "Xây dựng hình ảnh thợ",
            "\"…theo cách của một nhà tạo mẫu tóc\""
          ],
          [
            "4. Ngắn, dễ copy",
            "Đăng nhanh",
            "\"[TÊN KIỂU TÓC] ✂️\""
          ],
          [
            "5. Kéo bình luận",
            "Tăng tương tác",
            "\"Bạn chấm… bao nhiêu điểm?\""
          ]
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Mẫu 1 - Chuyên môn + tư vấn"
      },
      {
        "type": "paragraph",
        "text": "[TÊN KIỂU TÓC] - không phải khuôn mặt nào cũng nên để cùng một form."
      },
      {
        "type": "paragraph",
        "text": "Với mỗi khách hàng, mình sẽ điều chỉnh kiểu tóc dựa trên khuôn mặt, chất tóc và phong cách mong muốn để tạo ra form phù hợp nhất."
      },
      {
        "type": "paragraph",
        "text": "Bạn đang cân nhắc [TÊN KIỂU TÓC] nhưng chưa biết có hợp với mình không?"
      },
      {
        "type": "paragraph",
        "text": "👉 Inbox để được tư vấn trước khi cắt."
      },
      {
        "type": "paragraph",
        "text": "📍 [4SEASON BARBER STUDIO] - Hóc Môn"
      },
      {
        "type": "paragraph",
        "text": "#4seasonbarber #TÊNKIỂUTÓC #tuvankieutoc #tocnamhocmon"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Mẫu 2 - Đánh vào nhu cầu khách hàng"
      },
      {
        "type": "paragraph",
        "text": "Đang muốn thử [TÊN KIỂU TÓC] nhưng sợ không hợp mặt? 👀"
      },
      {
        "type": "paragraph",
        "text": "Đừng chỉ chọn kiểu tóc vì thấy đẹp trên ảnh. Quan trọng là form tóc đó có phù hợp với khuôn mặt và chất tóc của bạn hay không."
      },
      {
        "type": "paragraph",
        "text": "Lần này mình thiết kế [TÊN KIỂU TÓC] theo yêu cầu và đặc điểm riêng của khách hàng."
      },
      {
        "type": "paragraph",
        "text": "Muốn biết [TÊN KIỂU TÓC] có hợp với bạn không?"
      },
      {
        "type": "paragraph",
        "text": "👉 Gửi ảnh/inbox để mình tư vấn."
      },
      {
        "type": "paragraph",
        "text": "📍 [4SEASON BARBER STUDIO] - Hóc Môn"
      },
      {
        "type": "paragraph",
        "text": "#4seasonbarber #TÊNKIỂUTÓC #tocnamdep #barbershophocmon"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Mẫu 3 - Personal branding"
      },
      {
        "type": "paragraph",
        "text": "[TÊN KIỂU TÓC] theo cách của một nhà tạo mẫu tóc. ✂️"
      },
      {
        "type": "paragraph",
        "text": "Một kiểu tóc đẹp không chỉ nằm ở việc cắt đúng mẫu. Điều quan trọng là biết cách biến mẫu tóc thành một form phù hợp với từng người."
      },
      {
        "type": "paragraph",
        "text": "Với [TÊN KIỂU TÓC], mình ưu tiên sự cân đối giữa khuôn mặt, chất tóc và phong cách cá nhân của khách."
      },
      {
        "type": "paragraph",
        "text": "Bạn thích kiểu này?"
      },
      {
        "type": "paragraph",
        "text": "👉 Lưu lại và gửi cho mình khi cần tư vấn."
      },
      {
        "type": "paragraph",
        "text": "📍 [4SEASON BARBER STUDIO] - Hóc Môn"
      },
      {
        "type": "paragraph",
        "text": "#4seasonbarber #TÊNKIỂUTÓC #nhataomautoc #thietketoc"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Mẫu 4 - Ngắn, dễ copy-paste"
      },
      {
        "type": "paragraph",
        "text": "[TÊN KIỂU TÓC] ✂️"
      },
      {
        "type": "paragraph",
        "text": "Thiết kế theo yêu cầu của khách hàng, điều chỉnh form phù hợp với khuôn mặt + chất tóc + phong cách cá nhân."
      },
      {
        "type": "paragraph",
        "text": "Bạn thấy kiểu này hợp với mình không?"
      },
      {
        "type": "paragraph",
        "text": "👉 Inbox để được tư vấn kiểu tóc phù hợp."
      },
      {
        "type": "paragraph",
        "text": "📍 [4SEASON BARBER STUDIO] - Hóc Môn"
      },
      {
        "type": "paragraph",
        "text": "#4seasonbarber #TÊNKIỂUTÓC #tocnam #hocmon"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Mẫu 5 - Engagement / kéo bình luận"
      },
      {
        "type": "paragraph",
        "text": "Bạn chấm [TÊN KIỂU TÓC] bao nhiêu điểm? 👀"
      },
      {
        "type": "paragraph",
        "text": "Kiểu tóc này sẽ đặc biệt hợp với những người thích phong cách [ĐIỀN VIBE: gọn gàng / lịch lãm / trẻ trung / hiện đại...]."
      },
      {
        "type": "paragraph",
        "text": "Nhưng đẹp hay không còn phụ thuộc vào form mặt và chất tóc của từng người."
      },
      {
        "type": "paragraph",
        "text": "👇 Comment “TƯ VẤN” nếu bạn muốn biết [TÊN KIỂU TÓC] có hợp với mình không."
      },
      {
        "type": "paragraph",
        "text": "📍 [4SEASON BARBER STUDIO] - Hóc Môn"
      },
      {
        "type": "paragraph",
        "text": "#4seasonbarber #TÊNKIỂUTÓC #hairstylist #tocnamdep"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Cách bàn giao"
      },
      {
        "type": "list",
        "items": [
          "Đóng gói thành Google Docs. Mẫu nào cũng copy-paste được ngay.",
          "Hướng dẫn \"dùng trong 10 giây\" để người không rành marketing vẫn làm được."
        ]
      },
      {
        "type": "image",
        "src": "/work/4-season-barber-studio/handover-message.png",
        "alt": "tin nhắn bàn giao 1.png",
        "width": 905,
        "height": 387
      },
      {
        "type": "heading",
        "level": 2,
        "text": "6. Kết quả"
      },
      {
        "type": "list",
        "items": [
          "Tính từ ngày 05/10 - 7/10/2026:Studio đã đăng 2 bài: 1 bài tuyển dụng và 1 bài triển khai từ content template. Studio đã bắt đầu sử dụng bộ template ngay trong những ngày đầu sau khi bàn giao.",
          "Bài tuyển dụng đang chạy: Chưa có kết quả chốt (Cập nhật lần cuối: 07/10/2026)",
          "Hướng hợp tác mở ra: Cơ hội viết thêm tuyến nội dung về các kiểu nhuộm và uốn tóc",
          "Lời nhận xét của khách:"
        ]
      },
      {
        "type": "image",
        "src": "/work/4-season-barber-studio/client-feedback.png",
        "alt": "feedback 1.png",
        "width": 528,
        "height": 321
      },
      {
        "type": "heading",
        "level": 2,
        "text": "7. Bài học tôi rút ra"
      },
      {
        "type": "list",
        "items": [
          "Đi vào hiểu cách khách vận hành trước khi viết, vì bài đúng nhu cầu mới được duyệt nhanh.",
          "Tặng một thứ khách dùng được ngay hiệu quả hơn gửi bản chào hàng.",
          "Việc lặp lại nên được chuẩn hóa thành công thức để giảm thời gian sản xuất và giúp chất lượng nội dung nhất quán hơn."
        ],
        "ordered": true
      }
    ]
  },
  {
    "slug": "helios-samurice",
    "title": "Helios × SAMURICE: Khi một quảng cáo hợp chủ đề nhưng lại không hợp tinh thần võ sĩ đạo",
    "description": "Một speculative case study về brand integration: khi một quảng cáo hợp chủ đề nhưng không hợp tinh thần võ sĩ đạo.",
    "tags": [
      "#BrandIntegration",
      "#Copywriting",
      "#ContentAnalysis"
    ],
    "links": [
      {
        "label": "Xem video gốc",
        "href": "https://youtu.be/17sbZt0PRx0"
      }
    ],
    "sourceUrl": "https://app.notion.com/p/Helios-SAMURICE-Khi-m-t-qu-ng-c-o-h-p-ch-nh-ng-l-i-kh-ng-h-p-tinh-th-n-v-s-o-1-3f3a9ed9937e803686eadcd0b6f5e8ba?pvs=21",
    "blocks": [
      {
        "type": "quote",
        "text": "Một speculative case study về brand integration trong nội dung. \nViệc viết lại chỉ tập trung vào khả năng chuyển đổi tự nhiên từ nội dung content sang giới thiệu sản phẩm. Không bao gồm việc viết miêu tả sản phẩm"
      },
      {
        "type": "quote",
        "text": "Link video gốc: https://youtu.be/17sbZt0PRx0 \nVideo timestamp: 14:45 to 14:56"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Chuyện gì xảy ra?"
      },
      {
        "type": "paragraph",
        "text": "Tôi tìm xem video này vì chủ để Bushido của nó là một chủ đề tôi đang quan tâm."
      },
      {
        "type": "paragraph",
        "text": "Video này làm rất tốt về mặt nội dung. Tác giả không cố thần thánh hoá Samurai, thay vào đó còn chỉ ra được mặt tối của luật võ sĩ đạo. Và video còn sử dụng dẫn chứng rất tốt từ cuốn sách Bushido - The soul of Japan để đảm bảo tính chính xác của nội dung."
      },
      {
        "type": "paragraph",
        "text": "Nhưng đến phần tài trợ cho bộ sưu tập Bushido của Helios thì tôi lại thấy có vấn đề:"
      },
      {
        "type": "paragraph",
        "text": "Việc quảng bá một bộ sưu tập Bushido trong một video cùng nội dung, là một cách làm rất hợp lý. Điểm gãy nằm ở chỗ: kịch bản vô tình đánh đồng việc mua một món đồ với việc sở hữu được tinh thần võ sĩ đạo."
      },
      {
        "type": "paragraph",
        "text": "Cách chuyển sang phần tài trợ lại vô tình tạo cảm giác rằng việc chưa tìm được Bushido của bản thân có thể dẫn đến hành động tìm mua một sản phẩm mang chủ đề Bushido."
      },
      {
        "type": "paragraph",
        "text": "Điều này sẽ làm cho người xem thắc mắc là: Tại sao một câu hỏi về lối sống lại dẫn đến hành động mua một trang sức?"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Đề xuất tối ưu:"
      },
      {
        "type": "paragraph",
        "text": "Ta chỉ cần đổi vai trò của sản phẩm trong video thì mọi thứ sẽ tự nhiên hơn rất nhiều.\nVà sau đây là phần so sánh:"
      },
      {
        "type": "comparison",
        "items": [
          {
            "label": "Bản gốc:",
            "text": "Và nếu như bạn chưa tìm được Bushido của chính mình thì có lẽ như bạn nên tìm mua bộ sưu tập Bushido của Helios"
          },
          {
            "label": "Bản viết lại:",
            "text": "Con đường tìm ra bushido của chính mình thì rất là dài và không ai có thể đi thay cho bạn cả.\nNhưng nếu bạn muốn một biểu tượng bên cạnh nhắc nhở mình trên con đường đó thì…Helios hiện đang có bộ sưu tập lấy cảm hứng từ tinh thần võ sĩ đạo…\nThông tin về sản phẩm, tôi để chi tiết dưới mô tả và bình luận."
          }
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Giới hạn & Phương pháp kiểm chứng"
      },
      {
        "type": "paragraph",
        "text": "Có thể phần đông người xem không phân tích sâu đến mức này, và với đa số CTA này vẫn hoạt động bình thường. Nhưng với nhóm khán giả quan tâm sâu đến triết lý Bushido (nhóm mà content này thu hút) logic ngầm định đó dễ gây phản cảm hơn."
      },
      {
        "type": "paragraph",
        "text": "Case study này là suy luận về ngôn ngữ/thông điệp, không có dữ liệu comment/engagement thật để xác nhận phản ứng khán giả."
      },
      {
        "type": "paragraph",
        "text": "Vì tôi không có access vào dữ liệu của creator, nên đây chỉ là đề xuất tối ưu hóa chưa được kiểm chứng bằng dữ liệu."
      },
      {
        "type": "paragraph",
        "text": "Nếu có điều kiện, ta có thể theo dõi các thông số sau để kiểm chứng giả thuyết:"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Bài Học Rút Ra & Kết luận"
      },
      {
        "type": "paragraph",
        "text": "Khi tích hợp sản phẩm vào nội dung mang chủ đề triết lý/tinh thần, tránh để logic ngầm định “sở hữu vật = sở hữu giá trị”. Nên định vị sản phẩm như một biểu tượng nhắc nhở, giữ khoảng cách khiêm tốn thay vì tuyên bố tương đương.”"
      },
      {
        "type": "paragraph",
        "text": "Đây là tư duy tôi sẽ mang vào dự án/công việc sắp tới của mình: Đừng để logic ngầm định phá hủy đi mất chất lượng của nội dung dự án"
      }
    ]
  },
  {
    "slug": "hashtag-caption-facebook",
    "title": "Hashtag nhiều có thực sự tốt cho caption Facebook?",
    "description": "Một speculative case study về cách viết hashtag trong caption Reels Facebook.",
    "tags": [
      "#Metadata",
      "#HashtagStrategy",
      "#ContentAnalysis"
    ],
    "links": [
      {
        "label": "Xem video gốc",
        "href": "https://www.facebook.com/share/v/1EZ7A6qJgo/"
      }
    ],
    "sourceUrl": "https://app.notion.com/p/Hashtag-nhi-u-c-th-c-s-t-t-cho-caption-Facebook-1-3f3a9ed9937e809da831f6cc6e7b69f7?pvs=21",
    "blocks": [
      {
        "type": "quote",
        "text": "Một speculative case study về cách viết hashtag trong caption reels facebook. \nViệc viết lại chỉ tập trung vào khả năng cải thiện tính tự nhiên của caption. Không viết lại nội dung trực tiếp của content."
      },
      {
        "type": "quote",
        "text": "Link video gốc: https://www.facebook.com/share/v/1EZ7A6qJgo/"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Chuyện gì xảy ra?"
      },
      {
        "type": "paragraph",
        "text": "Tôi xem được một Reel về chủ đề “5 kiểu rapper”. Nội dung phân tích cách tiền bạc, danh tiếng, quyền lực, thành tích và kiến thức có thể tạo ra ảnh hưởng tích cực hoặc tiêu cực trong cộng đồng rap."
      },
      {
        "type": "paragraph",
        "text": "Caption sử dụng một lượng lớn hashtag liên quan đến:"
      },
      {
        "type": "list",
        "items": [
          "fast rap",
          "chopper",
          "flow",
          "delivery",
          "rap stories",
          "kiến thức rap",
          "rap Việt / hip-hop"
        ]
      },
      {
        "type": "paragraph",
        "text": "Ban đầu, tôi nghi ngờ đây có thể là một dạng keyword stuffing (nhồi nhét từ khóa)."
      },
      {
        "type": "paragraph",
        "text": "Sau khi xem toàn bộ video thì tôi nhận ra rằng:"
      },
      {
        "type": "quote",
        "text": "Vấn đề không nằm đơn giản ở “nhiều hashtag = xấu”."
      },
      {
        "type": "paragraph",
        "text": "Hashtag không nhất thiết đồng nghĩa với keyword stuffing. Câu hỏi đáng phân tích hơn là:"
      },
      {
        "type": "paragraph",
        "text": "Metadata có phản ánh đúng proposition của content hay không?"
      },
      {
        "type": "paragraph",
        "text": "Video thực tế tập trung vào vai trò, ảnh hưởng, văn hóa và cách một rapper sử dụng nguồn lực mình có, trong khi một số hashtag lại nghiêng mạnh về kỹ thuật rap như chopper, fast flow, delivery."
      },
      {
        "type": "paragraph",
        "text": "Vì vậy, vấn đề tôi quan tâm chuyển từ số lượng hashtag sang mức độ liên quan giữa hashtag và proposition của content"
      },
      {
        "type": "paragraph",
        "text": "→ Có dấu hiệu metadata-content misalignment (mức độ khớp thông tin mô tả và nội dung thực tế)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Đề xuất tối ưu"
      },
      {
        "type": "captionComparison",
        "original": {
          "label": "Caption chưa chỉnh sửa:",
          "text": "Anh em là Rapper kiểu nào? #megashock #alen #rap #rapviet #hiphop #megawarrior #rapnhanh #fastflow #fastrap #trao #mixtapetrao #kienthucrapnhonhoi #kienthucrap #chopperrap #chopper #flow #rhyme #delivery #midwestchopper #chopperstyle #kinhnghiemrap #rapstories #gocnhinrap #rapper"
        },
        "revised": {
          "label": "Caption sau chỉnh sửa:",
          "text": "Anh em là kiểu rapper nào? Có rất nhiều kiểu rapper khác nhau cùng hoạt động, và chính điều đó tạo nên một cộng đồng rap. Vậy anh em là ai?",
          "note": "Sau đó chỉ giữ một nhóm hashtag có vai trò rõ ràng:",
          "hashtags": [
            "#Megashock",
            "#Alen",
            "#RapViet",
            "#HipHop",
            "#VanHoaRap"
          ]
        }
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Giới hạn & Phương pháp kiểm chứng"
      },
      {
        "type": "paragraph",
        "text": "Vì tôi không có access vào dữ liệu của creator, nên đây chỉ là đề xuất tối ưu hóa chưa được kiểm chứng bằng dữ liệu"
      },
      {
        "type": "paragraph",
        "text": "Nếu có điều kiện A/B test, có thể theo dõi:"
      },
      {
        "type": "list",
        "items": [
          "Non-follower reach",
          "Engagement Rate / Comment Quality",
          "Search & Recommendation Audience Quality",
          "Profile visits",
          "Shares",
          "Saves"
        ]
      },
      {
        "type": "paragraph",
        "text": "Không thể xác định mục đích ban đầu của creator khi lựa chọn nhóm hashtag này."
      },
      {
        "type": "paragraph",
        "text": "Các chỉ số trên chỉ dùng để đánh giá giả thuyết tổng thể; nếu không có controlled test, không thể kết luận caption là nguyên nhân trực tiếp tạo ra thay đổi về reach hoặc retention."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Bài học rút ra & Kết luận"
      },
      {
        "type": "quote",
        "text": "Keyword không phải đồ trang trí. Relevance quan trọng hơn quantity. \nTrong case này, tôi nhận ra rằng việc tăng số lượng keyword/hashtag không có nhiều ý nghĩa nếu chúng không liên quan trực tiếp đến proposition của content."
      },
      {
        "type": "paragraph",
        "text": "Và bài học lớn hơn đối với người làm marketing:"
      },
      {
        "type": "quote",
        "text": "Đừng yêu giả thuyết đầu tiên của mình."
      },
      {
        "type": "paragraph",
        "text": "Đây là tư duy tôi sẽ mang vào dự án/công việc sắp tới của mình: đo lường mức độ liên quan trước khi đo lường số lượng, và luôn sẵn sàng thách thức giả thuyết đầu tiên của chính mình."
      }
    ]
  },
  {
    "slug": "mancity-uiux",
    "title": "UI/UX mancity.com – Ta học được gì từ website của một đội bóng giàu truyền thông và truyền thống?",
    "description": "Một case study giả định về UI/UX và contextual CTA của website mancity.com.",
    "role": "Digital Marketer",
    "tags": [
      "#UIUX",
      "#CTA",
      "#InformationArchitecture",
      "#ContentStrategy"
    ],
    "sourceUrl": "https://app.notion.com/p/UI-UX-mancity-com-Ta-h-c-c-g-t-website-c-a-m-t-i-b-ng-gi-u-truy-n-th-ng-v-truy-n-th-ng-1-3f3a9ed9937e80248bbdd913c3afa7a1?pvs=21",
    "blocks": [
      {
        "type": "quote",
        "text": "Một case study giả định về UI/UX của một website ở đẳng cấp quốc tế. Case study tập trung vào việc phân tích điểm tốt và điểm có thể cải thiện của website. Không bao gồm việc mổ xẻ code của website."
      },
      {
        "type": "quote",
        "text": "Website: mancity.com – Trang chủ chính thức của Câu lạc bộ bóng đá Manchester City.\nĐối tượng mục tiêu: Cộng đồng người hâm mộ (Cityzens) toàn cầu, từ những người chỉ muốn đọc tin chuyển nhượng cho đến những fan cứng muốn chi tiền mua vé và đồ lưu niệm."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "1. Phân tích Thị giác và Nhận diện Thương hiệu (Visual & Branding)"
      },
      {
        "type": "paragraph",
        "text": "Bước đầu tiên tôi thực hiện trong việc tiếp cận mancity.com là tách bạch những yếu tố đang thực sự hiện diện (Fact) và góc nhìn phân tích phía sau (Hypothesis)."
      },
      {
        "type": "list",
        "items": [
          "Sự thật về Giao diện (Fact): Website mang phong cách hiện đại, đậm chất thể thao và vận hành như một nền tảng truyền thông (Media Portal) hơn là một trang giới thiệu tĩnh. Hình ảnh cầu thủ được tận dụng với kích thước lớn. Màu sắc được quy định chặt chẽ: City Blue làm màu nhận diện chủ đạo, Trắng làm nền cho nội dung, và Xanh đậm/Đen dùng cho typography cùng hệ thống icon.",
          "Góc nhìn Marketing (Hypothesis): Tần suất xuất hiện dày đặc của \"City Blue\" làm rất tốt nhiệm vụ neo giữ nhận diện thương hiệu. Tuy nhiên, thay vì vội vàng kết luận rằng website đang thiếu một màu nhấn (Accent color) để tăng chuyển đổi, case study này đặt ra một câu hỏi mở để quan sát tiếp: Hệ thống đang sử dụng màu sắc như thế nào để vạch ra ranh giới giữa nhận diện thương hiệu, nội dung thuần túy và các khu vực kích thích hành động (Actionable areas)?"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Giải phẫu Cấu trúc Thông tin"
      },
      {
        "type": "list",
        "items": [
          "Global Header: Đi thẳng vào trọng tâm với Logo, Navigation 8 mục (News, Video, Fixtures, Tickets, Shop, Players, Club, More) và nhóm Utility (Tìm kiếm, Tài khoản, Giỏ hàng)."
        ]
      },
      {
        "type": "image",
        "src": "/work/mancity-uiux/mancity-header.png",
        "alt": "man city header.png",
        "width": 1902,
        "height": 150
      },
      {
        "type": "list",
        "items": [
          "Fixtures & Results: Khối thông tin trọng điểm gồm \"Next Fixture\" (kèm CTA: Preview, Buy Tickets) và \"Last Result\" (kèm CTA: Match Report)."
        ]
      },
      {
        "type": "image",
        "src": "/work/mancity-uiux/fixtures-results.png",
        "alt": "fixture mancity.png",
        "width": 419,
        "height": 730
      },
      {
        "type": "list",
        "items": [
          "Phân luồng Nội dung: Các cụm thông tin được module hóa rõ ràng, chia đều sức nặng cho Women's Team, EDS & Academy, Features, Video và khu vực Commercial (Quảng cáo, Đối tác)."
        ]
      },
      {
        "type": "image",
        "src": "/work/mancity-uiux/content-modules.png",
        "alt": "woomen edaca mc.png",
        "width": 1252,
        "height": 871
      },
      {
        "type": "list",
        "items": [
          "Góc nhìn UX: Trang chủ tổ chức nhiều mục đích sử dụng khác nhau mà vẫn duy trì được phân cấp thông tin tương đối rõ. Hệ thống không chỉ phục vụ luồng đọc tin mà còn đan cài nhịp nhàng giữa Content, Ticketing và Commercial. Bài học ở đây là quan sát phân cấp thông tin: Nội dung nào được đẩy lên trước? Các cụm thông tin nào được đặt cạnh nhau để tạo ngữ cảnh?"
        ]
      },
      {
        "type": "image",
        "src": "/work/mancity-uiux/homepage-layout.png",
        "alt": "city website.png",
        "width": 1908,
        "height": 1053
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Đề Xuất Tối Ưu Lời gọi hành động (Contextual CTA)"
      },
      {
        "type": "paragraph",
        "text": "Sau khi quan sát các CTAs được sử dụng trên trang web, tôi nhận ra phong cách sử dụng CTAs của Câu lạc bộ rất tối giản và tập trung vào hành động cuối cùng. Từ dữ kiện này, tôi đề xuất thêm một vài CTAs đánh mạnh hơn vào cảm xúc và thúc đẩy hành động."
      },
      {
        "type": "quote",
        "text": "CTAs được phân tích dựa trên sự gắn kết với ngữ cảnh thực tế của người dùng trên trang, kết hợp sử dụng AI làm công cụ mở rộng các biến thể giả định."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Mục tiêu 1: Bán vé trận đấu tiếp theo (Context: Next Fixture)"
      },
      {
        "type": "list",
        "items": [
          "Hiện trạng: Website đặt nút \"Buy Tickets\" ngay cạnh thông tin trận đấu. Đây là một Contextual CTA chuẩn mực người dùng vừa tiếp nhận thông tin sự kiện và lập tức có nút hành động tương ứng."
        ]
      },
      {
        "type": "image",
        "src": "/work/mancity-uiux/buy-tickets-cta.png",
        "alt": "mancity buy ticket CTA.png",
        "width": 469,
        "height": 400
      },
      {
        "type": "list",
        "items": [
          "Biến thể thử nghiệm: \"Secure Your Seat\", \"Get Your Tickets\".",
          "Phân tích: Tôi không có ý nói rằng \"Buy Tickets\" kém hiệu quả, mà là sự so sánh giữa tính trực diện và tính cảm xúc. Sự lựa chọn phụ thuộc vào việc điểm chạm đó cần thông tin rõ ràng hay cần kích thích tâm lý hâm mộ hay không."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Mục tiêu 2: Đăng ký nền tảng CITY+ (Context: Exclusive Content)"
      },
      {
        "type": "list",
        "items": [
          "Hiện trạng: Website đang sử dụng một CTAs thiên về việc mô tả hơn là thúc đẩy hành động đăng ký dịch vụ live audio"
        ]
      },
      {
        "type": "image",
        "src": "/work/mancity-uiux/city-plus-cta.png",
        "alt": "cta city+.png",
        "width": 257,
        "height": 394
      },
      {
        "type": "list",
        "items": [
          "Biến thể thử nghiệm: \"Listen Live on CITY+\" (Tập trung lợi ích), \"Unlock CITY+ Content\" (Tập trung tính độc quyền)."
        ]
      },
      {
        "type": "paragraph",
        "text": "Mục tiêu tôi không chọn làm (The \"Not To-Do\" List): Tôi không chọn mảng Online Shop để đưa vào bài thử nghiệm tối ưu. Vì qua trải nghiệm sử dụng của mình, tôi cảm thấy hệ thống phân loại hiện tại và đường dẫn từ Navigation cho thấy đủ rõ để người dùng tìm đến sản phẩm mà không cần thêm bước trung gian."
      },
      {
        "type": "image",
        "src": "/work/mancity-uiux/shop-navigation-1.png",
        "alt": "shop 1 mancity.png",
        "width": 466,
        "height": 620
      },
      {
        "type": "image",
        "src": "/work/mancity-uiux/shop-navigation-2.png",
        "alt": "shop 2 mci.png",
        "width": 1903,
        "height": 900
      },
      {
        "type": "paragraph",
        "text": "Tôi thử đặt mình vào vai fan muốn mua áo đấu. Lúc này, tôi chọn mở mục Shop từ Navigation, đi qua các bước sau:"
      },
      {
        "type": "list",
        "items": [
          "Bấm vào \"Shop\" từ menu chính → thấy ngay các nhóm được phân loại:  Kits, Shop by Player, Training,…",
          "Bấm vào \"Kits\" → phân loại tiếp theo hiện ra ngay: Home, Away, Third, Goalkeeper và không có nhóm nào bị chồng chéo với nhóm khác",
          "Bấm vào một sản phẩm cụ thể → tới trang chi tiết chỉ sau 2 lần bấm kể từ trang chủ"
        ],
        "ordered": true
      },
      {
        "type": "paragraph",
        "text": "Đối chiếu với luồng \"Fixtures & Tickets\" ở phần 2 thì cả hai luồng đều có số bước tương đối ngắn và không xuất hiện bước trung gian dư thừa.\nCách đặt tên nhóm (Kits, Shop by Player, Training) rất dễ dàng tiếp cận. Phương pháp này không ép target customer phải đoán ý của website."
      },
      {
        "type": "paragraph",
        "text": "Từ quá trình đi thử luồng này, tôi kết luận: hệ thống phân loại hiện tại và đường dẫn từ Navigation đã đủ rõ ràng, số bước thao tác không phải là điểm nghẽn. Nếu đề xuất \"tối ưu\" thêm cho luồng này (ví dụ: thêm đề xuất Kit của mùa giải như một CTA) là việc làm không cần thiết. Việc cố gắng \"tối ưu\" một luồng đang hoạt động tốt chỉ để có thêm đề xuất là tạo ra một vấn đề không tồn tại."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Bài học rút ra & Kết luận"
      },
      {
        "type": "paragraph",
        "text": "Quá trình phân tích một website có cấu trúc đồ sộ như mancity.com mang lại cho tôi ba nguyên tắc làm nghề thực tế:"
      },
      {
        "type": "list",
        "items": [
          "Observe before optimizing: Đừng vội vã đề xuất thiết kế lại. Cần lùi lại để hiểu bản thiết kế hiện tại đang phục vụ mục đích gì và dòng chảy người dùng đang được điều hướng ra sao.",
          "Context matters: Mọi lời gọi hành động đều vô nghĩa nếu đứng độc lập. Sức nặng của nút \"Buy Tickets\" thay đổi hoàn toàn khi nó được đặt đúng chỗ (dưới thông tin trận đấu) thay vì trôi nổi trên trang.",
          "AI là công cụ tạo phương án, không phải nguồn sự thật: Việc dùng AI để sinh ra hàng loạt câu Copy/CTA là cần thiết để mở rộng tư duy. Nhưng người làm Marketing/UX phải là bộ lọc cuối cùng để đối chiếu với sản phẩm thật: Giả thuyết này có hợp lý không, và sự thay đổi này có thực sự tạo ra giá trị hay không."
        ],
        "ordered": true
      },
      {
        "type": "paragraph",
        "text": "Đây là tư duy tôi muốn tiếp tục mang vào những dự án và công việc sắp tới: quan sát trước khi tối ưu, đặt mọi quyết định vào đúng bối cảnh và luôn kiểm chứng giả thuyết bằng dữ liệu thực tế."
      }
    ]
  }
]

export default CASE_STUDIES
