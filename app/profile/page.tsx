import Image from "next/image"
import Link from "next/link"
import { User, Mail, Phone, MapPin, Book, Clock, Award, Edit, LogOut } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">الملف الشخصي</h1>
          <p className="text-purple-700 max-w-2xl mx-auto">مرحباً بك في ملفك الشخصي على منصة بداية</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - User Info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-soft mb-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 text-2xl font-bold">
                    نورة
                  </div>
                  <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-1.5 rounded-full">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-1">نورة القحطاني</h3>
                <p className="text-purple-600 mb-4">رائدة أعمال</p>
                <button className="text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1">
                  <LogOut className="h-4 w-4" />
                  تسجيل الخروج
                </button>
              </div>

              <hr className="my-6 border-purple-100" />

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-purple-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-600">البريد الإلكتروني</p>
                    <p className="text-purple-800">noura@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-purple-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-600">رقم الجوال</p>
                    <p className="text-purple-800">+966 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-purple-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-600">المدينة</p>
                    <p className="text-purple-800">الرياض، السعودية</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/profile/edit"
                  className="w-full py-2.5 px-4 flex justify-center items-center gap-2 bg-purple-100 text-purple-700 font-semibold rounded-xl hover:bg-purple-200 transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  <span>تعديل الملف الشخصي</span>
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h3 className="text-lg font-bold text-purple-800 mb-4">إحصائيات التعلم</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Book className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-purple-800">4</p>
                    <p className="text-sm text-purple-600">دورات مكتملة</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-purple-800">36</p>
                    <p className="text-sm text-purple-600">ساعة تعلم</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-purple-800">5</p>
                    <p className="text-sm text-purple-600">شهادات مكتسبة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses */}
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-purple-800">دوراتي</h2>
                <Link href="/courses" className="text-sm text-purple-600 hover:text-purple-800">
                  عرض جميع الدورات
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "بناء الثقة بالنفس للمرأة",
                    instructor: "سارة أحمد",
                    progress: 100,
                    image: "/placeholder.svg?height=80&width=120",
                    url: "/courses/1",
                  },
                  {
                    title: "القيادة النسائية في بيئة العمل",
                    instructor: "ليلى المطيري",
                    progress: 75,
                    image: "/placeholder.svg?height=80&width=120",
                    url: "/courses/2",
                  },
                  {
                    title: "مهارات ريادة الأعمال للنساء",
                    instructor: "نورة الشمري",
                    progress: 30,
                    image: "/placeholder.svg?height=80&width=120",
                    url: "/courses/3",
                  },
                  {
                    title: "التوازن بين الحياة العملية والشخصية",
                    instructor: "حصة العتيبي",
                    progress: 20,
                    image: "/placeholder.svg?height=80&width=120",
                    url: "/courses/4",
                  },
                ].map((course, index) => (
                  <div key={index} className="flex gap-4 p-4 border border-purple-100 rounded-xl hover:shadow-soft transition-shadow">
                    <div className="flex-shrink-0">
                      <Image src={course.image} alt={course.title} width={120} height={80} className="rounded-lg object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-purple-800 mb-1">
                        <Link href={course.url}>{course.title}</Link>
                      </h3>
                      <p className="text-sm text-purple-600 mb-2">المدربة: {course.instructor}</p>
                      <div className="w-full bg-purple-100 rounded-full h-2.5 mb-1">
                        <div
                          className="bg-gradient-to-l from-purple-600 to-pink-500 h-2.5 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-purple-600">
                        <span>التقدم</span>
                        <span>{course.progress}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h2 className="text-xl font-bold text-purple-800 mb-6">شهاداتي</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "شهادة بناء الثقة بالنفس",
                    date: "10 مارس 2023",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "شهادة القيادة النسائية",
                    date: "15 مايو 2023",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "شهادة مهارات ريادة الأعمال",
                    date: "22 يوليو 2023",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "شهادة التوازن بين الحياة والعمل",
                    date: "5 أكتوبر 2023",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((certificate, index) => (
                  <div key={index} className="border border-purple-100 rounded-xl p-4 hover:shadow-soft transition-shadow">
                    <div className="mb-3 relative">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg flex items-end">
                        <div className="p-3 text-white">
                          <h4 className="font-semibold">{certificate.title}</h4>
                          <p className="text-sm opacity-90">{certificate.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button className="text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1">
                        عرض الشهادة
                      </button>
                      <button className="text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1">
                        تحميل PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h2 className="text-xl font-bold text-purple-800 mb-6">الفعاليات القادمة</h2>

              <div className="space-y-4">
                {[
                  {
                    title: "ورشة عمل: التسويق الرقمي لرائدات الأعمال",
                    date: "25 يونيو 2025",
                    time: "5:00 - 7:00 مساءً",
                    location: "عبر الإنترنت - Zoom",
                  },
                  {
                    title: "ندوة: القيادة النسائية في القرن 21",
                    date: "30 يونيو 2025",
                    time: "6:30 - 8:30 مساءً",
                    location: "فندق كراون بلازا، الرياض",
                  },
                ].map((event, index) => (
                  <div key={index} className="border border-purple-100 rounded-xl p-4 hover:shadow-soft transition-shadow">
                    <h3 className="font-semibold text-purple-800 mb-2">{event.title}</h3>
                    <div className="text-sm text-purple-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-purple-500" />
                        <span>
                          {event.date} | {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-purple-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button className="py-1.5 px-4 bg-purple-100 text-purple-700 text-sm rounded-lg hover:bg-purple-200 transition-colors">
                        التسجيل في الفعالية
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
