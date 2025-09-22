import Image from "next/image"
import { Star, Users, BookOpen } from "lucide-react"

interface InstructorProps {
  instructor: {
    name: string
    title: string
    bio: string
    image: string
    rating: number
    students: number
    courses: number
  }
}

export default function InstructorProfile({ instructor }: InstructorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-purple-800 mb-6">المدربة</h2>
      <div className="bg-white rounded-2xl shadow-soft p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 mx-auto md:mx-0">
              <Image
                src={instructor.image || "/placeholder.svg"}
                alt={instructor.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-xl font-bold text-purple-800 mb-2">{instructor.name}</h3>
            <p className="text-purple-600 mb-4">{instructor.title}</p>
            <p className="text-purple-700 mb-6 leading-relaxed">{instructor.bio}</p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <div className="font-bold text-purple-800">{instructor.rating}</div>
                <div className="text-sm text-purple-600">تقييم المدربة</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div className="font-bold text-purple-800">{instructor.students.toLocaleString()}</div>
                <div className="text-sm text-purple-600">متعلمة</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div className="font-bold text-purple-800">{instructor.courses}</div>
                <div className="text-sm text-purple-600">دورة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
