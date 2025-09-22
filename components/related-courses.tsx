import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Users } from "lucide-react"

const relatedCourses = [
  {
    id: 2,
    title: "مهارات القيادة النسائية",
    instructor: "نورة الخالدي",
    rating: 4.8,
    reviews: 95,
    price: "349 ر.س",
    image: "/placeholder.svg?height=400&width=600",
    duration: "6 أسابيع",
    students: 1250,
  },
  {
    id: 3,
    title: "التوازن بين العمل والحياة",
    instructor: "ريم السعيد",
    rating: 4.7,
    reviews: 87,
    price: "279 ر.س",
    image: "/placeholder.svg?height=400&width=600",
    duration: "5 أسابيع",
    students: 980,
  },
  {
    id: 4,
    title: "الذكاء العاطفي للمرأة",
    instructor: "هند الشمري",
    rating: 4.9,
    reviews: 110,
    price: "329 ر.س",
    image: "/placeholder.svg?height=400&width=600",
    duration: "7 أسابيع",
    students: 1420,
  },
  {
    id: 5,
    title: "فن التواصل الفعال",
    instructor: "سمر الغامدي",
    rating: 4.6,
    reviews: 76,
    price: "299 ر.س",
    image: "/placeholder.svg?height=400&width=600",
    duration: "4 أسابيع",
    students: 850,
  },
]

export default function RelatedCourses() {
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-purple-800">دورات ذات صلة</h2>
        <Link href="/courses" className="text-purple-600 hover:text-purple-800 font-medium">
          عرض المزيد
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedCourses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`} className="block">
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover">
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-purple-800 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-purple-600 text-sm mb-3">المدربة: {course.instructor}</p>

                <div className="flex items-center gap-4 mb-3 text-sm text-purple-700">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-purple-800">{course.rating}</span>
                  <span className="text-xs text-purple-600">({course.reviews})</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-purple-800">{course.price}</span>
                  <span className="bg-purple-100 text-purple-700 py-1 px-3 rounded-lg text-sm">عرض التفاصيل</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
