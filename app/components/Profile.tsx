import Image from 'next/image'

const Profile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mt-10">
      <div className="flex items-start space-x-6">
        <div className="w-32 h-32 relative">
          <div className="w-full h-full rounded-full border-2 border-gray-300">
            {/* 프로필 이미지 자리 */}
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">사진</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">이름 · 직책</h1>
          <p className="text-gray-600 mb-4">Frontend / PM / Web Developer</p>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="font-medium w-20">Contact</span>
              <div className="space-y-1">
                <p>Email: example@email.com</p>
                <p>Phone: +82-123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="font-medium w-20">Channel</span>
              <div className="space-y-1">
                <p>SNS: </p>
                <p>GitHub: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 