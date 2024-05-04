import Image from 'next/image'
import RatingBarComponent from './RatingBarComponent'

export default function NavBarComponent() {
  return (
    <>
    <nav className="bg-primary-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span className="h2 font-semibold">PDF24</span>
              <span className="text-primary-500 h2 ms-2">Tools</span>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3 space-x-5 flex items-center">
              <span className="text-sm font-light">Desktop Version</span>
              <span className="text-sm font-light">Contact</span>
              <Image
                src={`/moon.svg`}
                alt="Moon"
                className=""
                width={17}
                height={17}
              />
              <button className="bg-primary-500 rounded text-white px-2 font-light">
                All PDF Tools
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
     <RatingBarComponent></RatingBarComponent>
     </>
  )
}
