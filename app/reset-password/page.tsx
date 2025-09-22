import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-4">استعادة كلمة المرور</h1>
          <p className="text-purple-700">أدخلي بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور</p>
        </div>

        {/* Reset Form */}
        <div className="bg-white p-8 rounded-2xl shadow-soft mb-6">
          <form>
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

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-l from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              إرسال رابط إعادة التعيين
            </button>
          </form>
        </div>

        <div className="text-center">
          <Link href="/login" className="inline-flex items-center text-purple-600 hover:text-purple-800">
            <ArrowRight className="h-4 w-4 ml-1" />
            العودة إلى تسجيل الدخول
          </Link>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-purple-50 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">تعليمات استعادة كلمة المرور</h3>
          <ol className="space-y-3 text-purple-700 text-sm list-decimal list-inside">
            <li>
              <span>أدخلي بريدك الإلكتروني المسجل في الحساب</span>
            </li>
            <li>
              <span>سيتم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني</span>
            </li>
            <li>
              <span>انقري على الرابط في البريد الإلكتروني (صلاحية الرابط 30 دقيقة فقط)</span>
            </li>
            <li>
              <span>أدخلي كلمة المرور الجديدة وتأكيدها</span>
            </li>
          </ol>
          <p className="mt-4 text-sm text-purple-600">
            إذا لم يصلك البريد الإلكتروني، يرجى التحقق من مجلد البريد العشوائي أو الاتصال بنا عبر{" "}
            <Link href="/contact" className="text-purple-800 hover:text-pink-600">
              صفحة الاتصال
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
