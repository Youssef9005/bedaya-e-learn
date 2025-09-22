import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-50 border-t border-purple-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-800">بداية</h3>
            <p className="text-purple-700 text-sm">
              منصة تعليمية مخصصة للنساء والفتيات الراغبات في تطوير الذات والتعلم
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-purple-600 hover:text-purple-800">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-800">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-800">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">تويتر</span>
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-800">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">يوتيوب</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-purple-700 hover:text-purple-900 text-sm">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-purple-700 hover:text-purple-900 text-sm">
                  الدورات التدريبية
                </Link>
              </li>
              <li>
                <Link href="/self-development" className="text-purple-700 hover:text-purple-900 text-sm">
                  دورات تطوير الذات
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-purple-700 hover:text-purple-900 text-sm">
                  الكتب
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-4">تعرفي علينا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-purple-700 hover:text-purple-900 text-sm">
                  من أنا
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-700 hover:text-purple-900 text-sm">
                  اتصلي بي
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-purple-700 hover:text-purple-900 text-sm">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-purple-700 hover:text-purple-900 text-sm">
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-4">النشرة البريدية</h3>
            <p className="text-purple-700 text-sm mb-4">اشتركي في نشرتنا البريدية للحصول على آخر الأخبار والعروض</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-2 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-700 text-sm">&copy; {new Date().getFullYear()} بداية. جميع الحقوق محفوظة</p>
          <p className="text-purple-700 text-sm flex items-center mt-4 md:mt-0">
            صُنع بكل <Heart className="h-4 w-4 mx-1 text-pink-500 fill-pink-500" /> في العالم العربي
          </p>
        </div>
      </div>
    </footer>
  )
}
