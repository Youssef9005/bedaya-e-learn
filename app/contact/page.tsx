import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">اتصلي بي</h1>
          <p className="text-purple-700 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتك ومساعدتك في رحلة التعلم والتطوير
          </p>
        </div>

        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-6">معلومات الاتصال</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800 mb-1">البريد الإلكتروني</h3>
                  <p className="text-purple-700">info@bidaya.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800 mb-1">رقم الهاتف</h3>
                  <p className="text-purple-700">+966 12 345 6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800 mb-1">العنوان</h3>
                  <p className="text-purple-700">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-800 mt-12 mb-6">تواصلي معنا عبر</h2>
            <div className="flex gap-4">
              <Link href="#" className="bg-purple-100 p-3 rounded-xl hover:bg-purple-200 transition-colors">
                <Instagram className="h-6 w-6 text-purple-600" />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link href="#" className="bg-purple-100 p-3 rounded-xl hover:bg-purple-200 transition-colors">
                <Facebook className="h-6 w-6 text-purple-600" />
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link href="#" className="bg-purple-100 p-3 rounded-xl hover:bg-purple-200 transition-colors">
                <Twitter className="h-6 w-6 text-purple-600" />
                <span className="sr-only">تويتر</span>
              </Link>
            </div>

            <div className="mt-12 p-6 bg-purple-50 rounded-2xl">
              <h3 className="font-semibold text-purple-800 mb-4">ساعات العمل</h3>
              <div className="space-y-2 text-purple-700">
                <p>الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً</p>
                <p>الجمعة - السبت: مغلق</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">أرسلي رسالة</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-800 mb-2">
                    الاسم
                  </label>
                  <input type="text" id="name" className="input-field" placeholder="أدخلي اسمك" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-800 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    placeholder="أدخلي بريدك الإلكتروني"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-purple-800 mb-2">
                  الموضوع
                </label>
                <input type="text" id="subject" className="input-field" placeholder="أدخلي موضوع الرسالة" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-800 mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="input-field"
                  placeholder="أدخلي رسالتك هنا"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                <span>إرسال الرسالة</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">الأسئلة الشائعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "كيف يمكنني التسجيل في دورة؟",
                answer:
                  "يمكنك التسجيل في أي دورة من خلال إنشاء حساب على المنصة، ثم اختيار الدورة المناسبة والضغط على زر 'سجل الآن'.",
              },
              {
                question: "هل الدورات متاحة على مدار الساعة؟",
                answer:
                  "نعم، جميع الدورات المسجلة متاحة على مدار الساعة ويمكنك الوصول إليها في أي وقت. أما الدورات المباشرة فلها مواعيد محددة.",
              },
              {
                question: "كيف يمكنني حجز استشارة؟",
                answer:
                  "يمكنك حجز استشارة من خلال صفحة 'الاستشارات'، ثم اختيار الخبيرة المناسبة ونوع الاستشارة والوقت المناسب لك.",
              },
              {
                question: "هل يمكنني استرداد المبلغ إذا لم تعجبني الدورة؟",
                answer: "نعم، نحن نقدم ضمان استرداد المبلغ خلال 7 أيام من تاريخ الشراء إذا لم تكن راضية عن الدورة.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <h3 className="text-lg font-bold text-purple-800 mb-3">{faq.question}</h3>
                <p className="text-purple-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-l from-purple-100 to-pink-50 rounded-3xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">اشتركي في نشرتنا البريدية</h2>
          <p className="text-purple-700 mb-6 max-w-2xl mx-auto">
            احصلي على آخر الأخبار والعروض والنصائح المفيدة مباشرة إلى بريدك الإلكتروني
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1 p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
            >
              اشتراك
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
