import Image from "next/image"
import Link from "next/link"
import { Star, Award, BookOpen, Clock } from "lucide-react"

export default function SelfDevelopmentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">دورات تطوير الذات</h1>
          <p className="text-purple-700 max-w-2xl mx-auto">
            اكتشفي مجموعة متميزة من دورات تطوير الذات المصممة خصيصًا للنساء لمساعدتك على تحقيق أهدافك وتطوير مهاراتك
            الشخصية
          </p>
        </div>

        {/* Featured Course */}
        <div className="bg-gradient-to-l from-purple-100 to-pink-50 rounded-3xl p-6 md:p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                الدورة الأكثر طلبًا
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">برنامج التحول الشامل لتطوير الذات</h2>
              <p className="text-purple-700 mb-6">
                برنامج شامل يجمع بين مهارات تطوير الذات الأساسية والمتقدمة، مصمم خصيصًا للنساء الطموحات الراغبات في إحداث
                تغيير إيجابي في حياتهن الشخصية والمهنية.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-purple-700">12 أسبوع</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-purple-700">24 درس</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-purple-700">شهادة معتمدة</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/self-development/1" className="btn-primary">
                  سجلي الآن
                </Link>
                <div className="text-right">
                  <div className="text-xl font-bold text-purple-800">599 ر.س</div>
                  <div className="text-sm text-purple-600 line-through">799 ر.س</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="برنامج التحول الشامل لتطوير الذات"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-soft">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-purple-800">4.9</span>
                  <span className="text-xs text-purple-600">(215 تقييم)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">مجالات تطوير الذات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "الثقة بالنفس",
                icon: <Award className="h-8 w-8 text-purple-600" />,
                count: 12,
                color: "bg-purple-50",
              },
              {
                title: "إدارة الوقت",
                icon: <Clock className="h-8 w-8 text-pink-600" />,
                count: 8,
                color: "bg-pink-50",
              },
              {
                title: "التفكير الإيجابي",
                icon: <BookOpen className="h-8 w-8 text-purple-600" />,
                count: 10,
                color: "bg-purple-50",
              },
              {
                title: "مهارات التواصل",
                icon: <Award className="h-8 w-8 text-pink-600" />,
                count: 9,
                color: "bg-pink-50",
              },
              {
                title: "الذكاء العاطفي",
                icon: <BookOpen className="h-8 w-8 text-purple-600" />,
                count: 7,
                color: "bg-purple-50",
              },
              {
                title: "تحديد الأهداف",
                icon: <Clock className="h-8 w-8 text-pink-600" />,
                count: 6,
                color: "bg-pink-50",
              },
              {
                title: "التوازن الحياتي",
                icon: <Award className="h-8 w-8 text-purple-600" />,
                count: 8,
                color: "bg-purple-50",
              },
              {
                title: "القيادة الذاتية",
                icon: <BookOpen className="h-8 w-8 text-pink-600" />,
                count: 5,
                color: "bg-pink-50",
              },
            ].map((category, index) => (
              <Link
                href={`/self-development/category/${index + 1}`}
                key={index}
                className={`${category.color} p-6 rounded-2xl card-hover text-center`}
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 shadow-soft">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-purple-800 mb-2">{category.title}</h3>
                <p className="text-sm text-purple-600">{category.count} دورات</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Courses */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">دورات تطوير الذات الأكثر شعبية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "بناء الثقة بالنفس للمرأة",
                instructor: "سارة أحمد",
                rating: 4.9,
                reviews: 120,
                price: "299 ر.س",
                image: "/placeholder.svg?height=400&width=600",
                lessons: 12,
                duration: "8 أسابيع",
              },
              {
                title: "فن إدارة الوقت والإنتاجية",
                instructor: "نورة الخالدي",
                rating: 4.8,
                reviews: 95,
                price: "249 ر.س",
                image: "/placeholder.svg?height=400&width=600",
                lessons: 10,
                duration: "6 أسابيع",
              },
              {
                title: "الذكاء العاطفي للمرأة",
                instructor: "ريم السعيد",
                rating: 4.7,
                reviews: 87,
                price: "279 ر.س",
                image: "/placeholder.svg?height=400&width=600",
                lessons: 14,
                duration: "8 أسابيع",
              },
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{course.title}</h3>
                  <p className="text-purple-600 text-sm mb-3">المدربة: {course.instructor}</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-purple-800">{course.rating}</span>
                    <span className="text-xs text-purple-600">({course.reviews} تقييم)</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 text-sm text-purple-700">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} درس</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-800">{course.price}</span>
                    <Link
                      href={`/self-development/${index + 1}`}
                      className="bg-purple-100 text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-200 transition-colors text-sm"
                    >
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">تجارب المتعلمات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "منى العتيبي",
                role: "مديرة تسويق",
                content:
                  "دورة بناء الثقة بالنفس كانت نقطة تحول في حياتي المهنية. تعلمت كيفية التعبير عن آرائي بثقة في اجتماعات العمل وتقديم أفكاري بوضوح. أنصح بشدة بهذه الدورة لكل امرأة تريد تطوير ذاتها.",
                rating: 5,
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "سارة الشمري",
                role: "طالبة جامعية",
                content:
                  "دورة إدارة الوقت والإنتاجية ساعدتني كثيرًا في تنظيم وقتي بين الدراسة والهوايات. أصبحت أكثر إنتاجية وأقل توترًا. المدربة كانت رائعة والمحتوى عملي وسهل التطبيق.",
                rating: 5,
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-purple-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800">{testimonial.name}</h4>
                    <p className="text-sm text-purple-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-l from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدئي رحلة تطوير الذات اليوم</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            انضمي إلى آلاف النساء اللاتي غيرن حياتهن من خلال دورات تطوير الذات في منصة بداية
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-purple-700 py-3 px-8 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            سجلي الآن
          </Link>
        </div>
      </div>
    </div>
  )
}
