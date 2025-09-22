import { CreditCard, Bitcoin, Check, Lock } from "lucide-react"

export default function PaymentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">صفحة الدفع</h1>
          <p className="text-purple-700 max-w-2xl mx-auto">أكملي عملية الدفع بأمان للوصول إلى دوراتنا واستشاراتنا</p>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-soft mb-8">
          <h2 className="text-xl font-bold text-purple-800 mb-4">ملخص الطلب</h2>
          <div className="border-b border-purple-100 pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-purple-700">دورة بناء الثقة بالنفس للمرأة</span>
              <span className="font-semibold text-purple-800">299 ر.س</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-purple-600">المدربة: سارة أحمد</span>
              <span className="text-purple-600">12 درس</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-700">المجموع</span>
            <span className="font-semibold text-purple-800">299 ر.س</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-purple-700">الضريبة (15%)</span>
            <span className="font-semibold text-purple-800">44.85 ر.س</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-purple-100">
            <span className="text-lg font-bold text-purple-800">الإجمالي</span>
            <span className="text-lg font-bold text-purple-800">343.85 ر.س</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-6 rounded-2xl shadow-soft mb-8">
          <h2 className="text-xl font-bold text-purple-800 mb-6">اختاري طريقة الدفع</h2>

          {/* Payment Tabs */}
          <div className="mb-6">
            <div className="flex border-b border-purple-100">
              <button className="flex-1 py-3 px-4 text-center border-b-2 border-purple-600 text-purple-800 font-semibold">
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <span>بطاقة ائتمانية</span>
                </div>
              </button>
              <button className="flex-1 py-3 px-4 text-center text-purple-600 hover:text-purple-800">
                <div className="flex items-center justify-center gap-2">
                  <Bitcoin className="h-5 w-5" />
                  <span>عملة مشفرة</span>
                </div>
              </button>
            </div>
          </div>

          {/* Credit Card Form */}
          <div>
            <div className="mb-4">
              <label htmlFor="cardName" className="block text-sm font-medium text-purple-800 mb-2">
                الاسم على البطاقة
              </label>
              <input
                type="text"
                id="cardName"
                className="input-field"
                placeholder="أدخلي الاسم كما هو على البطاقة"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-purple-800 mb-2">
                رقم البطاقة
              </label>
              <input type="text" id="cardNumber" className="input-field" placeholder="0000 0000 0000 0000" required />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-purple-800 mb-2">
                  تاريخ الانتهاء
                </label>
                <input type="text" id="expiryDate" className="input-field" placeholder="MM/YY" required />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-purple-800 mb-2">
                  رمز الأمان (CVV)
                </label>
                <input type="text" id="cvv" className="input-field" placeholder="123" required />
              </div>
            </div>
            <div className="flex items-center mb-6">
              <input
                id="saveCard"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
              />
              <label htmlFor="saveCard" className="mr-2 block text-sm text-purple-700">
                حفظ بيانات البطاقة للمدفوعات المستقبلية
              </label>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-purple-600 mb-6">
              <Lock className="h-4 w-4" />
              <span>جميع المعاملات آمنة ومشفرة</span>
            </div>
            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
              <span>إتمام الدفع</span>
              <Check className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Payment Security */}
        <div className="bg-purple-50 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
            <Lock className="h-5 w-5" />
            <span>معلومات أمان الدفع</span>
          </h3>
          <ul className="space-y-2 text-purple-700 text-sm">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-purple-600" />
              <span>جميع المعاملات مشفرة بتقنية SSL</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-purple-600" />
              <span>نحن لا نخزن تفاصيل بطاقتك الائتمانية</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-purple-600" />
              <span>المدفوعات تتم معالجتها من خلال بوابات دفع آمنة ومعتمدة</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-purple-600" />
              <span>نحن نستخدم أحدث تقنيات الحماية لضمان أمان معلوماتك</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
