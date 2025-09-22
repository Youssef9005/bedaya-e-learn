import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Users, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">من أنا</h1>
          <p className="text-purple-700 max-w-2xl mx-auto">
            تعرفي على قصة بداية ورسالتنا في تمكين المرأة من خلال التعليم والتطوير الذاتي
          </p>
        </div>

        {/* Founder Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">قصة المؤسسة</h2>
            <p className="text-purple-700 mb-4">
              بدأت رحلتي مع التعليم والتطوير الذاتي منذ أكثر من 10 سنوات، حيث كنت أبحث دائمًا عن طرق لتطوير نفسي ومساعدة
              النساء الأخريات على تحقيق أهدافهن.
            </p>
            <p className="text-purple-700 mb-4">
              لاحظت وجود فجوة في المحتوى التعليمي المخصص للمرأة العربية، وخاصة في مجالات التطوير الذاتي والقيادة وريادة
              الأعمال. من هنا جاءت فكرة إنشاء منصة "بداية" لتكون مساحة آمنة وملهمة للنساء والفتيات الراغبات في التعلم
              والتطور.
            </p>
            <p className="text-purple-700 mb-4">
              هدفي هو تمكين مليون امرأة عربية من خلال التعليم والتطوير الذاتي، ومساعدتهن على اكتشاف قدراتهن وتحقيق
              أحلامهن.
            </p>
            <div className="mt-6">
              <p className="text-xl font-bold text-purple-800">نورة الخالدي</p>
              <p className="text-purple-600">مؤسسة منصة بداية</p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-soft-lg">
              <Image src="/placeholder.svg?height=600&width=600" alt="مؤسسة بداية" fill className="object-cover" />
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
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-purple-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">رسالتنا</h2>
            <p className="text-purple-700">
              تمكين المرأة العربية من خلال توفير محتوى تعليمي عالي الجودة في مجالات التطوير الذاتي والقيادة وريادة
              الأعمال، وبناء مجتمع داعم يساعد النساء على تحقيق أهدافهن وأحلامهن.
            </p>
          </div>
          <div className="bg-pink-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">رؤيتنا</h2>
            <p className="text-purple-700">
              أن نكون المنصة التعليمية الرائدة في العالم العربي للنساء الراغبات في التطوير الذاتي، وأن نساهم في تمكين
              مليون امرأة عربية بحلول عام 2030.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">قيمنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "التميز",
                description: "نسعى دائمًا لتقديم محتوى تعليمي عالي الجودة يلبي احتياجات المرأة العربية",
                icon: <Award className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "التمكين",
                description: "نؤمن بقدرة كل امرأة على تحقيق أهدافها وأحلامها عندما تتوفر لها الأدوات المناسبة",
                icon: <Users className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "الإلهام",
                description: "نسعى لإلهام النساء من خلال قصص النجاح والتجارب الملهمة",
                icon: <Heart className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "التعلم المستمر",
                description: "نؤمن بأهمية التعلم المستمر والتطوير الذاتي في تحقيق النجاح",
                icon: <BookOpen className="h-8 w-8 text-purple-600" />,
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <div className="bg-purple-50 p-3 rounded-xl w-fit mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">{value.title}</h3>
                <p className="text-purple-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">فريق العمل</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "نورة الخالدي",
                role: "المؤسسة والرئيسة التنفيذية",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "سارة أحمد",
                role: "مديرة المحتوى التعليمي",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "ريم السعيد",
                role: "مديرة تطوير الأعمال",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "منى العتيبي",
                role: "مديرة التسويق",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-1">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">إنجازاتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                number: "5000+",
                label: "متعلمة نشطة",
              },
              {
                number: "100+",
                label: "دورة تدريبية",
              },
              {
                number: "50+",
                label: "مدربة متخصصة",
              },
              {
                number: "20+",
                label: "جائزة وتكريم",
              },
            ].map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-purple-800 mb-2">{achievement.number}</div>
                <p className="text-purple-700">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-l from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">انضمي إلى مجتمع بداية</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            كوني جزءًا من مجتمع ملهم من النساء الطموحات وابدئي رحلة التعلم والتطور
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
