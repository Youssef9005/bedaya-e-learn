"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ThumbsUp, MessageCircle } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "منى العتيبي",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    date: "قبل أسبوعين",
    review:
      "دورة رائعة ومفيدة جداً! المحتوى منظم بشكل ممتاز والمدربة تشرح بطريقة واضحة ومبسطة. استفدت كثيراً من التمارين العملية وأصبحت أكثر ثقة بنفسي. أنصح بشدة بهذه الدورة لكل امرأة تريد تطوير ذاتها.",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    name: "سارة الشمري",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    date: "قبل شهر",
    review:
      "المحتوى ممتاز والتنظيم رائع. تعلمت كيفية تحديد أهدافي بطريقة ذكية وعملية. الدورة غيرت نظرتي لنفسي وساعدتني في تطوير خطة واضحة لحياتي المهنية. شكراً د. سارة على هذا المحتوى القيم.",
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    name: "نورة القحطاني",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    date: "قبل شهرين",
    review:
      "دورة مفيدة ومحتوى جيد. أعجبني التنوع في طرق التعلم والتمارين العملية. الوحدة الخاصة بإدارة الوقت كانت مفيدة جداً بالنسبة لي كأم عاملة. أتمنى لو كانت هناك جلسات مباشرة أكثر مع المدربة.",
    helpful: 12,
    verified: true,
  },
  {
    id: 4,
    name: "ريم السعيد",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    date: "قبل 3 أشهر",
    review:
      "أفضل استثمار قمت به لتطوير نفسي! المدربة محترفة والمحتوى عملي وقابل للتطبيق. الشهادة معتمدة وساعدتني في تطوير سيرتي الذاتية. أنصح كل امرأة طموحة بأخذ هذه الدورة.",
    helpful: 31,
    verified: true,
  },
  {
    id: 5,
    name: "هدى الشمري",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    date: "قبل 4 أشهر",
    review:
      "دورة شاملة ومتكاملة. أحببت طريقة تقسيم المحتوى والتدرج في المواضيع. التمارين العملية ساعدتني كثيراً في تطبيق ما تعلمته. المجتمع الخاص بالدورة مفيد جداً لتبادل الخبرات مع المتعلمات الأخريات.",
    helpful: 19,
    verified: true,
  },
]

const ratingDistribution = [
  { stars: 5, count: 892, percentage: 72 },
  { stars: 4, count: 234, percentage: 19 },
  { stars: 3, count: 89, percentage: 7 },
  { stars: 2, count: 21, percentage: 2 },
  { stars: 1, count: 11, percentage: 1 },
]

export default function CourseReviews() {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [sortBy, setSortBy] = useState("newest")

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3)
  const totalReviews = reviews.length
  const averageRating = 4.9

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-purple-800 mb-6">تقييمات المتعلمات</h2>

      {/* Rating Summary */}
      <div className="bg-white rounded-2xl shadow-soft p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-800 mb-2">{averageRating}</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${i < Math.floor(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                />
              ))}
            </div>
            <div className="text-purple-600">من أصل {totalReviews} تقييم</div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-12">
                  <span className="text-sm text-purple-700">{item.stars}</span>
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
                <span className="text-sm text-purple-600 w-12">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-purple-800">التقييمات ({totalReviews})</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-purple-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none"
        >
          <option value="newest">الأحدث</option>
          <option value="oldest">الأقدم</option>
          <option value="highest">أعلى تقييم</option>
          <option value="lowest">أقل تقييم</option>
          <option value="helpful">الأكثر فائدة</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl shadow-soft p-6">
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-purple-800">{review.name}</h4>
                  {review.verified && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">متعلمة مؤكدة</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-purple-600">{review.date}</span>
                </div>
                <p className="text-purple-700 mb-4 leading-relaxed">{review.review}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm">
                    <ThumbsUp className="h-4 w-4" />
                    <span>مفيد ({review.helpful})</span>
                  </button>
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm">
                    <MessageCircle className="h-4 w-4" />
                    <span>رد</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {!showAllReviews && reviews.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAllReviews(true)}
            className="bg-purple-100 text-purple-700 py-2 px-6 rounded-lg hover:bg-purple-200 transition-colors"
          >
            عرض جميع التقييمات ({reviews.length - 3} أخرى)
          </button>
        </div>
      )}

      {/* Write Review */}
      <div className="bg-purple-50 rounded-2xl p-6 mt-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-4">شاركي تجربتك</h3>
        <p className="text-purple-700 mb-4">هل أخذت هذه الدورة؟ شاركي تقييمك لمساعدة المتعلمات الأخريات</p>
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors">
          كتابة تقييم
        </button>
      </div>
    </div>
  )
}
