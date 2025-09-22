import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Star, ChevronDown } from "lucide-react"

export default function BooksPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">الكتب</h1>
          <p className="text-purple-700 max-w-2xl mx-auto">
            اكتشفي مجموعة متنوعة من الكتب القيمة في مجالات التطوير الذاتي والقيادة وريادة الأعمال
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ابحثي عن كتاب..."
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
            {["الكل", "تطوير ذاتي", "قيادة", "ريادة أعمال", "علم نفس", "سير ذاتية", "إدارة"].map((category, index) => (
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

        {/* Featured Book */}
        <div className="bg-gradient-to-l from-purple-100 to-pink-50 rounded-3xl p-6 md:p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-48 h-64 md:w-56 md:h-72 shadow-soft-lg transform rotate-3">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="كتاب الشهر"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="inline-block bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                كتاب الشهر
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
                قوة العادات: لماذا نفعل ما نفعل في الحياة والعمل
              </h2>
              <p className="text-purple-700 mb-6">
                يكشف هذا الكتاب عن الحقيقة العلمية وراء لماذا توجد العادات وكيف يمكن تغييرها. يقدم إطارًا مثيرًا للاهتمام
                يمكن أن يحول الأعمال والمجتمعات والحياة.
              </p>
              <div className="flex items-center gap-1 mb-6">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-purple-800 mr-1">4.9</span>
                <span className="text-xs text-purple-600">(120 تقييم)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/books/1" className="btn-primary">
                  اقرئي الآن
                </Link>
                <div className="text-right">
                  <div className="text-xl font-bold text-purple-800">89 ر.س</div>
                  <div className="text-sm text-purple-600 line-through">129 ر.س</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => {
            const books = [
              {
                title: "قوة العادات",
                author: "تشارلز دوهيج",
                rating: 4.9,
                reviews: 120,
                price: "89 ر.س",
                category: "تطوير ذاتي",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "العقل المرن",
                author: "كارول دويك",
                rating: 4.8,
                reviews: 95,
                price: "79 ر.س",
                category: "علم نفس",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "فن الإقناع",
                author: "روبرت سيالديني",
                rating: 4.7,
                reviews: 87,
                price: "99 ر.س",
                category: "تطوير ذاتي",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "قيادة التغيير",
                author: "جون كوتر",
                rating: 4.6,
                reviews: 76,
                price: "109 ر.س",
                category: "قيادة",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "الذكاء العاطفي",
                author: "دانيال جولمان",
                rating: 4.9,
                reviews: 110,
                price: "89 ر.س",
                category: "علم نفس",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "عادات العظماء",
                author: "ستيفن كوفي",
                rating: 4.8,
                reviews: 105,
                price: "99 ر.س",
                category: "تطوير ذاتي",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "فن إدارة الوقت",
                author: "بريان تريسي",
                rating: 4.7,
                reviews: 92,
                price: "79 ر.س",
                category: "إدارة",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "قصة نجاح",
                author: "سارة الشمري",
                rating: 4.8,
                reviews: 88,
                price: "69 ر.س",
                category: "سير ذاتية",
                image: "/placeholder.svg?height=600&width=400",
              },
            ]

            const book = books[index % books.length]

            return (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover">
                <div className="p-4 flex justify-center">
                  <div className="relative w-40 h-56">
                    <Image
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-purple-600 mb-1">{book.category}</div>
                  <h3 className="text-lg font-bold text-purple-800 mb-1">{book.title}</h3>
                  <p className="text-purple-600 text-sm mb-2">تأليف: {book.author}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-purple-800">{book.rating}</span>
                    <span className="text-xs text-purple-600">({book.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-800">{book.price}</span>
                    <Link
                      href={`/books/${index + 1}`}
                      className="bg-purple-100 text-purple-700 py-1 px-3 rounded-lg hover:bg-purple-200 transition-colors text-sm"
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
