import Image from "next/image"
import Link from "next/link"
import { Star, MessageCircle, Video, Phone } from "lucide-react"

export default function ConsultationsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">الاستشارات</h1>
          <p className="text-purple-700 max-w-2xl mx-auto">
            احصلي على استشارات شخصية من خبيرات متخصصات في مجالات التطوير الذاتي والقيادة وريادة الأعمال
          </p>
        </div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "استشارة عبر الفيديو",
              description: "جلسة استشارية مباشرة عبر الفيديو مع إحدى خبيراتنا",
              icon: <Video className="h-8 w-8 text-purple-600" />,
              color: "bg-purple-50",
            },
            {
              title: "استشارة صوتية",
              description: "جلسة استشارية صوتية مع إحدى خبيراتنا المتخصصات",
              icon: <Phone className="h-8 w-8 text-pink-600" />,
              color: "bg-pink-50",
            },
            {
              title: "استشارة كتابية",
              description: "استشارة مكتوبة مفصلة من إحدى خبيراتنا",
              icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
              color: "bg-purple-50",
            },
          ].map((type, index) => (
            <div key={index} className={`${type.color} p-6 rounded-2xl card-hover text-center`}>
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 shadow-soft">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">{type.title}</h3>
              <p className="text-purple-700 mb-4">{type.description}</p>
              <Link
                href={`/consultations/book/${index + 1}`}
                className="inline-block bg-white text-purple-700 py-2 px-4 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors"
              >
                احجزي الآن
              </Link>
            </div>
          ))}
        </div>

        {/* Consultants */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">خبيراتنا المتميزات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "د. سارة أحمد",
                specialty: "خبيرة تطوير ذاتي",
                rating: 4.9,
                reviews: 120,
                price: "350 ر.س / ساعة",
                image: "/placeholder.svg?height=400&width=400",
                experience: "15 سنة خبرة",
              },
              {
                name: "أ. نورة الخالدي",
                specialty: "مستشارة قيادة نسائية",
                rating: 4.8,
                reviews: 95,
                price: "300 ر.س / ساعة",
                image: "/placeholder.svg?height=400&width=400",
                experience: "12 سنة خبرة",
              },
              {
                name: "د. ريم السعيد",
                specialty: "مستشارة ريادة أعمال",
                rating: 4.7,
                reviews: 87,
                price: "400 ر.س / ساعة",
                image: "/placeholder.svg?height=400&width=400",
                experience: "10 سنوات خبرة",
              },
              {
                name: "أ. منى العتيبي",
                specialty: "خبيرة تسويق رقمي",
                rating: 4.9,
                reviews: 110,
                price: "320 ر.س / ساعة",
                image: "/placeholder.svg?height=400&width=400",
                experience: "8 سنوات خبرة",
              },
              {
                name: "د. هدى الشمري",
                specialty: "مستشارة تطوير مهني",
                rating: 4.8,
                reviews: 92,
                price: "380 ر.س / ساعة",
                image: "/placeholder.svg?height=400&width=400",
                experience: "14 سنة خبرة",
              },
              {
                name: "أ. عبير الزهراني",
                specialty: "خبيرة توازن الحياة",
                rating: 4.9,
                reviews: 105,
                price: "290 ر.س / ساعة",
                image: "/placeholder.svg?height=400&width=400",
                experience: "9 سنوات خبرة",
              },
            ].map((consultant, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover">
                <div className="p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={consultant.image || "/placeholder.svg"}
                      alt={consultant.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-1">{consultant.name}</h3>
                  <p className="text-purple-600 text-sm mb-2">{consultant.specialty}</p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-purple-800">{consultant.rating}</span>
                    <span className="text-xs text-purple-600">({consultant.reviews} تقييم)</span>
                  </div>
                  <p className="text-sm text-purple-700 mb-3">{consultant.experience}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-800">{consultant.price}</span>
                    <Link
                      href={`/consultations/expert/${index + 1}`}
                      className="bg-purple-100 text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-200 transition-colors text-sm"
                    >
                      عرض الملف الشخصي
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">كيف تعمل الاستشارات؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "اختاري الخبيرة",
                description: "تصفحي قائمة الخبيرات واختاري الأنسب لاحتياجاتك",
                step: "1",
              },
              {
                title: "احجزي موعدًا",
                description: "اختاري نوع الاستشارة والوقت المناسب لك",
                step: "2",
              },
              {
                title: "استفيدي من الخبرة",
                description: "احصلي على استشارة مخصصة لاحتياجاتك",
                step: "3",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft text-center relative">
                <div className="absolute -top-4 right-1/2 transform translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-3 mt-4">{step.title}</h3>
                <p className="text-purple-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Calendar Preview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">المواعيد المتاحة</h2>
          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"].map((day, index) => (
                <div key={index} className="text-center">
                  <div className="font-semibold text-purple-800 mb-2">{day}</div>
                  <div className="space-y-2">
                    {Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, timeIndex) => (
                      <button
                        key={timeIndex}
                        className="w-full py-2 px-1 text-sm bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        {`${9 + timeIndex * 2}:00`}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">تجارب عملائنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "منى العتيبي",
                content:
                  "استشارة د. سارة كانت تحول كبير في مسيرتي المهنية. قدمت لي نصائح عملية ساعدتني في تطوير مهاراتي القيادية.",
                rating: 5,
                date: "قبل شهر",
              },
              {
                name: "سارة الشمري",
                content:
                  "استفدت كثيرًا من الاستشارة مع أ. نورة في مجال ريادة الأعمال. خبرتها الواسعة ساعدتني في تجنب أخطاء كثيرة في بداية مشروعي.",
                rating: 5,
                date: "قبل أسبوعين",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-purple-700 mb-6">"{testimonial.content}"</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-purple-800">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-l from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">احصلي على استشارتك الأولى اليوم</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">خصم 20% على الاستشارة الأولى لجميع العضوات الجديدات</p>
          <Link
            href="/consultations/book"
            className="inline-block bg-white text-purple-700 py-3 px-8 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            احجزي الآن
          </Link>
        </div>
      </div>
    </div>
  )
}
