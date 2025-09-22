import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Star, ChevronDown } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">الدورات التدريبية</h1>
          <p className="text-purple-700 max-w-2xl mx-auto">
            اكتشفي مجموعة متنوعة من الدورات التدريبية المصممة خصيصًا لتلبية احتياجاتك التعليمية وتطوير مهاراتك
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ابحثي عن دورة..."
                className="w-full pr-10 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white border border-purple-200 text-purple-700 py-3 px-5 rounded-xl hover:bg-purple-50">
                <Filter className="h-5 w-5" />
                <span>تصفية</span>
              </button>
              <button className="flex items-center gap-2 bg-white border border-purple-200 text-purple-700 py-3 px-5 rounded-xl hover:bg-purple-50">
                <span>ترتيب حسب</span>
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {["الكل", "تطوير ذاتي", "قيادة", "ريادة أعمال", "مهارات رقمية", "لغات", "فنون"].map((category, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  index === 0 ? "bg-purple-600 text-white" : "bg-white text-purple-700 hover:bg-purple-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, index) => {
            const courses = [
              {
                title: "أساسيات تطوير الذات للمرأة",
                category: "تطوير ذاتي",
                instructor: "سارة أحمد",
                rating: 4.9,
                reviews: 120,
                price: "299 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "مهارات القيادة النسائية",
                category: "قيادة",
                instructor: "نورة الخالدي",
                rating: 4.8,
                reviews: 95,
                price: "349 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "التوازن بين العمل والحياة",
                category: "تطوير ذاتي",
                instructor: "ريم السعيد",
                rating: 4.7,
                reviews: 87,
                price: "279 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "أساسيات التسويق الرقمي",
                category: "مهارات رقمية",
                instructor: "منى العتيبي",
                rating: 4.9,
                reviews: 110,
                price: "329 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "فن التحدث أمام الجمهور",
                category: "مهارات تواصل",
                instructor: "هدى الشمري",
                rating: 4.8,
                reviews: 92,
                price: "299 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "تأسيس المشاريع النسائية",
                category: "ريادة أعمال",
                instructor: "عبير الزهراني",
                rating: 4.9,
                reviews: 105,
                price: "399 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "اللغة الإنجليزية للأعمال",
                category: "لغات",
                instructor: "لمى القحطاني",
                rating: 4.7,
                reviews: 88,
                price: "349 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "إدارة الوقت والإنتاجية",
                category: "تطوير ذاتي",
                instructor: "دانة العنزي",
                rating: 4.8,
                reviews: 97,
                price: "279 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "الذكاء العاطفي للمرأة",
                category: "تطوير ذاتي",
                instructor: "سمر الغامدي",
                rating: 4.9,
                reviews: 115,
                price: "329 ر.س",
                image: "/placeholder.svg?height=400&width=600",
              },
            ]

            const course = courses[index % courses.length]

            return (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium text-purple-700">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{course.title}</h3>
                  <p className="text-purple-600 text-sm mb-3">المدربة: {course.instructor}</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-purple-800">{course.rating}</span>
                    <span className="text-xs text-purple-600">({course.reviews} تقييم)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-800">{course.price}</span>
                    <Link
                      href={`/courses/${index + 1}`}
                      className="bg-purple-100 text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-200 transition-colors text-sm"
                    >
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  page === 1 ? "bg-purple-600 text-white" : "bg-white text-purple-700 hover:bg-purple-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
