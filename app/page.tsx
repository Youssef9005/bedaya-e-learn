import Image from "next/image"
import Link from "next/link"
import { BookOpen, Users, Award, Star, ChevronLeft } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800 leading-tight">
                ابدئي رحلة <span className="text-pink-600">تطوير الذات</span> مع بداية
              </h1>
              <p className="mt-6 text-lg text-purple-700">
                منصة تعليمية مخصصة للنساء والفتيات الراغبات في تطوير الذات والتعلم بأسلوب عصري وملهم
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Link href="/courses" className="btn-primary flex items-center justify-center gap-2">
                  <span>استكشفي الدورات</span>
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <Link href="/about" className="btn-secondary flex items-center justify-center gap-2">
                  <span>تعرفي علينا</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="بداية - منصة تعليمية"
                  fill
                  className="object-cover rounded-3xl shadow-soft-lg"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-800 font-semibold">+5000</p>
                    <p className="text-xs text-purple-600">متعلمة نشطة</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-3 rounded-xl">
                    <BookOpen className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-800 font-semibold">+100</p>
                    <p className="text-xs text-purple-600">دورة تدريبية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">ما يميزنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-purple-600" />,
                title: "دورات متنوعة",
                description: "مجموعة متنوعة من الدورات التدريبية المصممة خصيصًا للنساء في مختلف المجالات",
              },
              {
                icon: <Award className="h-8 w-8 text-purple-600" />,
                title: "مدربات متميزات",
                description: "نخبة من المدربات المتخصصات ذوات الخبرة العالية في مجالات التدريب المختلفة",
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "مجتمع داعم",
                description: "مجتمع من النساء الملهمات لتبادل الخبرات والدعم المستمر في رحلة التعلم",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft card-hover">
                <div className="bg-purple-50 p-3 rounded-xl w-fit mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">{feature.title}</h3>
                <p className="text-purple-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">الدورات الأكثر شعبية</h2>
            <Link href="/courses" className="text-purple-600 hover:text-purple-800 flex items-center gap-1">
              <span>عرض جميع الدورات</span>
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((course, index) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">آراء المتعلمات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "منى العتيبي",
                role: "مديرة تسويق",
                content:
                  "استفدت كثيرًا من دورات بداية، خاصة دورة مهارات القيادة النسائية التي ساعدتني في تطوير مهاراتي القيادية في العمل.",
                rating: 5,
              },
              {
                name: "سارة الشمري",
                role: "طالبة جامعية",
                content:
                  "المحتوى التعليمي ممتاز والمدربات متميزات. أنصح كل فتاة تسعى للتطوير بالانضمام إلى منصة بداية.",
                rating: 5,
              },
              {
                name: "نورة القحطاني",
                role: "رائدة أعمال",
                content: "ساعدتني دورات تطوير الذات في بداية على بناء ثقتي بنفسي وتطوير مشروعي الخاص. تجربة رائعة!",
                rating: 4,
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
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">
                    {testimonial.name.charAt(0)}
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
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-l from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدئي رحلة التعلم والتطور اليوم</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              انضمي إلى آلاف النساء اللاتي غيرن حياتهن من خلال دورات بداية التعليمية
            </p>
            <Link
              href="/register"
              className="inline-block bg-white text-purple-700 py-3 px-8 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            >
              سجلي الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
