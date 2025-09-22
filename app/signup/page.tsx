import Link from "next/link"
import { User, Lock, Mail, Check } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-4">إنشاء حساب جديد</h1>
          <p className="text-purple-700">انضمي إلى مجتمع بداية وابدئي رحلة تطوير الذات</p>
        </div>

        {/* Signup Form */}
        <div className="bg-white p-8 rounded-2xl shadow-soft mb-6">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-purple-800 mb-2">
                الاسم الكامل
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full py-3 px-4 pr-12 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="أدخلي اسمك الكامل"
                  required
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">
                  <User className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-purple-800 mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full py-3 px-4 pr-12 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="أدخلي بريدك الإلكتروني"
                  required
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-purple-800 mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full py-3 px-4 pr-12 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="أدخلي كلمة المرور"
                  required
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">
                  <Lock className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-2 text-xs text-purple-600">يجب أن تحتوي على 8 أحرف على الأقل مع رمز واحد ورقم واحد</p>
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-800 mb-2">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full py-3 px-4 pr-12 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="أعيدي إدخال كلمة المرور"
                  required
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">
                  <Lock className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                required
              />
              <label htmlFor="terms" className="mr-2 block text-sm text-purple-700">
                أوافق على <Link href="/terms" className="text-purple-800 hover:text-pink-600">شروط الاستخدام</Link> و{" "}
                <Link href="/privacy" className="text-purple-800 hover:text-pink-600">سياسة الخصوصية</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-l from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              إنشاء حساب
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-purple-700">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="font-semibold text-purple-800 hover:text-pink-600">
              تسجيل الدخول
            </Link>
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 bg-purple-50 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">مزايا العضوية</h3>
          <ul className="space-y-2 text-purple-700 text-sm">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-purple-600" />
              <span>وصول كامل إلى جميع الدورات التدريبية</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-purple-600" />
              <span>خصومات حصرية على الاستشارات</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-purple-600" />
              <span>دعوات لحضور ورش عمل وندوات مجانية</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-purple-600" />
              <span>محتوى حصري للأعضاء فقط</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
