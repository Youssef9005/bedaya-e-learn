"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Play, FileText, Download, Lock } from "lucide-react"

const courseModules = [
  {
    id: 1,
    title: "مقدمة في تطوير الذات",
    duration: "45 دقيقة",
    lessons: 3,
    isPreview: true,
    content: [
      {
        id: 1,
        title: "مرحبًا بك في رحلة تطوير الذات",
        type: "video",
        duration: "15 دقيقة",
        isPreview: true,
      },
      {
        id: 2,
        title: "ما هو تطوير الذات؟",
        type: "video",
        duration: "20 دقيقة",
        isPreview: true,
      },
      {
        id: 3,
        title: "تقييم ذاتي أولي",
        type: "quiz",
        duration: "10 دقائق",
        isPreview: false,
      },
    ],
  },
  {
    id: 2,
    title: "اكتشاف الذات ونقاط القوة",
    duration: "2 ساعة 30 دقيقة",
    lessons: 4,
    isPreview: false,
    content: [
      {
        id: 4,
        title: "تحليل الشخصية والمزاج",
        type: "video",
        duration: "35 دقيقة",
        isPreview: false,
      },
      {
        id: 5,
        title: "اكتشاف نقاط القوة",
        type: "video",
        duration: "40 دقيقة",
        isPreview: false,
      },
      {
        id: 6,
        title: "تحديد نقاط التطوير",
        type: "video",
        duration: "30 دقيقة",
        isPreview: false,
      },
      {
        id: 7,
        title: "ورشة عمل: خريطة الذات",
        type: "worksheet",
        duration: "45 دقيقة",
        isPreview: false,
      },
    ],
  },
  {
    id: 3,
    title: "تحديد الأهداف والرؤية",
    duration: "2 ساعة",
    lessons: 3,
    isPreview: false,
    content: [
      {
        id: 8,
        title: "كيفية تحديد الأهداف الذكية",
        type: "video",
        duration: "45 دقيقة",
        isPreview: false,
      },
      {
        id: 9,
        title: "بناء الرؤية الشخصية",
        type: "video",
        duration: "40 دقيقة",
        isPreview: false,
      },
      {
        id: 10,
        title: "خطة العمل والتنفيذ",
        type: "video",
        duration: "35 دقيقة",
        isPreview: false,
      },
    ],
  },
  {
    id: 4,
    title: "بناء الثقة بالنفس",
    duration: "2 ساعة 15 دقيقة",
    lessons: 4,
    isPreview: false,
    content: [
      {
        id: 11,
        title: "فهم الثقة بالنفس",
        type: "video",
        duration: "30 دقيقة",
        isPreview: false,
      },
      {
        id: 12,
        title: "التغلب على الخوف والقلق",
        type: "video",
        duration: "40 دقيقة",
        isPreview: false,
      },
      {
        id: 13,
        title: "تقنيات بناء الثقة",
        type: "video",
        duration: "35 دقيقة",
        isPreview: false,
      },
      {
        id: 14,
        title: "تمارين عملية للثقة",
        type: "worksheet",
        duration: "30 دقيقة",
        isPreview: false,
      },
    ],
  },
  {
    id: 5,
    title: "إدارة الوقت والأولويات",
    duration: "1 ساعة 45 دقيقة",
    lessons: 3,
    isPreview: false,
    content: [
      {
        id: 15,
        title: "مبادئ إدارة الوقت",
        type: "video",
        duration: "35 دقيقة",
        isPreview: false,
      },
      {
        id: 16,
        title: "تحديد الأولويات",
        type: "video",
        duration: "40 دقيقة",
        isPreview: false,
      },
      {
        id: 17,
        title: "أدوات وتقنيات الإنتاجية",
        type: "video",
        duration: "30 دقيقة",
        isPreview: false,
      },
    ],
  },
  {
    id: 6,
    title: "التوازن والاستدامة",
    duration: "1 ساعة 30 دقيقة",
    lessons: 3,
    isPreview: false,
    content: [
      {
        id: 18,
        title: "تحقيق التوازن بين الحياة والعمل",
        type: "video",
        duration: "35 دقيقة",
        isPreview: false,
      },
      {
        id: 19,
        title: "بناء العادات الإيجابية",
        type: "video",
        duration: "30 دقيقة",
        isPreview: false,
      },
      {
        id: 20,
        title: "الحفاظ على التطوير المستمر",
        type: "video",
        duration: "25 دقيقة",
        isPreview: false,
      },
    ],
  },
]

const getContentIcon = (type: string) => {
  switch (type) {
    case "video":
      return <Play className="h-4 w-4" />
    case "quiz":
      return <FileText className="h-4 w-4" />
    case "worksheet":
      return <Download className="h-4 w-4" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

const getContentTypeLabel = (type: string) => {
  switch (type) {
    case "video":
      return "فيديو"
    case "quiz":
      return "اختبار"
    case "worksheet":
      return "ورشة عمل"
    default:
      return "محتوى"
  }
}

export default function CourseContent() {
  const [expandedModules, setExpandedModules] = useState<number[]>([1])

  const toggleModule = (moduleId: number) => {
    setExpandedModules((prev) => (prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]))
  }

  const totalDuration = courseModules.reduce((total, module) => {
    const [hours, minutes] = module.duration.split(" ")
    const moduleMinutes = Number.parseInt(hours) * 60 + (minutes ? Number.parseInt(minutes) : 0)
    return total + moduleMinutes
  }, 0)

  const totalHours = Math.floor(totalDuration / 60)
  const remainingMinutes = totalDuration % 60

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800">محتوى الدورة</h2>
        <div className="text-sm text-purple-600">
          {courseModules.length} وحدات • {totalHours} ساعة و {remainingMinutes} دقيقة
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        {courseModules.map((module, index) => (
          <div
            key={module.id}
            className={`border-b border-purple-100 ${index === courseModules.length - 1 ? "border-b-0" : ""}`}
          >
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full p-6 text-right hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {expandedModules.includes(module.id) ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-600" />
                  )}
                  <div className="text-right">
                    <h3 className="font-semibold text-purple-800 mb-1">
                      الوحدة {index + 1}: {module.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-purple-600">
                      <span>{module.lessons} دروس</span>
                      <span>{module.duration}</span>
                      {module.isPreview && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          معاينة مجانية
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {expandedModules.includes(module.id) && (
              <div className="px-6 pb-6">
                <div className="space-y-3">
                  {module.content.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-purple-600">{getContentIcon(lesson.type)}</div>
                        <div>
                          <h4 className="font-medium text-purple-800">{lesson.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-purple-600">
                            <span>{getContentTypeLabel(lesson.type)}</span>
                            <span>•</span>
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {lesson.isPreview ? (
                          <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">معاينة</button>
                        ) : (
                          <Lock className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-purple-50 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-purple-800 mb-1">مواد إضافية</h3>
            <p className="text-sm text-purple-600">ملفات PDF قابلة للتحميل وموارد إضافية</p>
          </div>
          <div className="flex items-center gap-2 text-purple-600">
            <Download className="h-5 w-5" />
            <span className="text-sm">12 ملف</span>
          </div>
        </div>
      </div>
    </div>
  )
}
