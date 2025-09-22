import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Users, Play, BookOpen, CheckCircle, Share2, Heart } from "lucide-react"
import CourseContent from "@/components/course-content"
import InstructorProfile from "@/components/instructor-profile"
import CourseReviews from "@/components/course-reviews"
import RelatedCourses from "@/components/related-courses"

// Mock data for course details
const courseData = {
  id: 1,
  title: "أساسيات تطوير الذات للمرأة",
  subtitle: "رحلة شاملة لاكتشاف قدراتك وتطوير مهاراتك الشخصية والمهنية",
  description:
    "دورة شاملة مصممة خصيصًا للنساء الراغبات في تطوير ذاتهن وبناء شخصية قوية ومتوازنة. ستتعلمين في هذه الدورة كيفية اكتشاف نقاط قوتك، تحديد أهدافك، وبناء خطة عملية لتحقيق النجاح في حياتك الشخصية والمهنية.",
  instructor: {
    name: "د. سارة أحمد",
    title: "خبيرة تطوير الذات والقيادة النسائية",
    bio: "دكتوراه في علم النفس التربوي مع أكثر من 15 عامًا من الخبرة في مجال التدريب والتطوير. ساعدت أكثر من 10,000 امرأة على تحقيق أهدافهن وتطوير مهاراتهن.",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    students: 5420,
    courses: 12,
  },
  price: {
    current: 299,
    original: 399,
    currency: "ر.س",
  },
  stats: {
    rating: 4.9,
    reviews: 1247,
    students: 3420,
    duration: "8 أسابيع",
    lessons: 24,
    level: "مبتدئ إلى متوسط",
    language: "العربية",
    certificate: true,
    lifetime: true,
  },
  features: [
    "24 درس فيديو عالي الجودة",
    "مواد تدريبية قابلة للتحميل",
    "تمارين عملية وأنشطة تفاعلية",
    "جلسات أسئلة وأجوبة مباشرة",
    "مجتمع خاص للمتعلمات",
    "شهادة إتمام معتمدة",
    "وصول مدى الحياة للمحتوى",
    "دعم فني على مدار الساعة",
  ],
  learningOutcomes: [
    "اكتشاف نقاط القوة والضعف الشخصية",
    "تحديد الأهداف الذكية وبناء خطة عمل",
    "تطوير مهارات الثقة بالنفس والتواصل",
    "إدارة الوقت والأولويات بفعالية",
    "التعامل مع التحديات والضغوط",
    "بناء عادات إيجابية ومستدامة",
    "تطوير مهارات القيادة الذاتية",
    "تحقيق التوازن بين الحياة الشخصية والمهنية",
  ],
  requirements: [
    "لا توجد متطلبات مسبقة",
    "الرغبة في التعلم والتطوير",
    "تخصيص ساعتين أسبوعيًا للدراسة",
    "جهاز كمبيوتر أو هاتف ذكي مع اتصال بالإنترنت",
  ],
  image: "/placeholder.svg?height=600&width=800",
  previewVideo: "/placeholder.svg?height=400&width=600",
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-purple-600">
            <Link href="/" className="hover:text-purple-800">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-purple-800">
              الدورات
            </Link>
            <span>/</span>
            <span className="text-purple-800">{courseData.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                تطوير ذاتي
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">{courseData.title}</h1>
              <p className="text-lg text-purple-700 mb-6">{courseData.subtitle}</p>

              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-purple-800">{courseData.stats.rating}</span>
                  <span className="text-purple-600">({courseData.stats.reviews} تقييم)</span>
                </div>
                <div className="flex items-center gap-1 text-purple-700">
                  <Users className="h-5 w-5" />
                  <span>{courseData.stats.students} متعلمة</span>
                </div>
                <div className="flex items-center gap-1 text-purple-700">
                  <Clock className="h-5 w-5" />
                  <span>{courseData.stats.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-purple-700">
                  <BookOpen className="h-5 w-5" />
                  <span>{courseData.stats.lessons} درس</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>إضافة للمفضلة</span>
                </button>
                <button className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>مشاركة</span>
                </button>
              </div>
            </div>

            {/* Course Preview Video */}
            <div className="mb-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src={courseData.previewVideo || "/placeholder.svg"}
                  alt="معاينة الدورة"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-colors">
                    <Play className="h-8 w-8 text-purple-600 mr-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  معاينة مجانية - 5 دقائق
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">وصف الدورة</h2>
              <div className="prose prose-purple max-w-none">
                <p className="text-purple-700 leading-relaxed">{courseData.description}</p>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">ما ستتعلمينه</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-purple-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <CourseContent />

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">متطلبات الدورة</h2>
              <ul className="space-y-2">
                {courseData.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-purple-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor Profile */}
            <InstructorProfile instructor={courseData.instructor} />

            {/* Reviews */}
            <CourseReviews />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Course Card */}
              <div className="bg-white rounded-2xl shadow-soft-lg p-6 mb-6">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-purple-800">
                      {courseData.price.current} {courseData.price.currency}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {courseData.price.original} {courseData.price.currency}
                    </span>
                  </div>
                  <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm inline-block">
                    خصم 25% - عرض محدود
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-purple-700 transition-colors mb-4">
                  سجلي في الدورة الآن
                </button>

                <div className="text-center text-sm text-purple-600 mb-6">ضمان استرداد المبلغ خلال 30 يوم</div>

                {/* Course Features */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-800 mb-3">ما تحصلين عليه:</h3>
                  {courseData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-purple-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Info */}
              <div className="bg-white rounded-2xl shadow-soft p-6 mb-6">
                <h3 className="font-semibold text-purple-800 mb-4">معلومات الدورة</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-purple-600">المستوى:</span>
                    <span className="text-purple-800 font-medium">{courseData.stats.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">المدة:</span>
                    <span className="text-purple-800 font-medium">{courseData.stats.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">عدد الدروس:</span>
                    <span className="text-purple-800 font-medium">{courseData.stats.lessons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">اللغة:</span>
                    <span className="text-purple-800 font-medium">{courseData.stats.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">الشهادة:</span>
                    <span className="text-purple-800 font-medium">
                      {courseData.stats.certificate ? "متاحة" : "غير متاحة"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">الوصول:</span>
                    <span className="text-purple-800 font-medium">
                      {courseData.stats.lifetime ? "مدى الحياة" : "محدود"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Share Course */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="font-semibold text-purple-800 mb-4">شاركي الدورة</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    فيسبوك
                  </button>
                  <button className="flex-1 bg-blue-400 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-500 transition-colors">
                    تويتر
                  </button>
                  <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-green-600 transition-colors">
                    واتساب
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        <RelatedCourses />
      </div>
    </div>
  )
}
