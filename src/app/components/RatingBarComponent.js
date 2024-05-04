import Image from 'next/image'

export default function RatingBarComponent() {
  return (
    <div className="bg-primary-600 h-14">
      <div className="py-4 px-36 flex justify-between">
        <div className="inline-flex items-center">
          <Image
            src={`/Star-filled.svg`}
            alt="Star-filled"
            className="me-1"
            width={14}
            height={14}
          />
          <Image
            src={`/Star-filled.svg`}
            alt="Star-filled"
            className="me-1"
            width={14}
            height={14}
          />
          <Image
            src={`/Star-filled.svg`}
            alt="Star-filled"
            className="me-1"
            width={14}
            height={14}
          />
          <Image
            src={`/Star-filled.svg`}
            alt="Star-filled"
            className="me-1"
            width={14}
            height={14}
          />
          <Image
            src={`/Star-filled.svg`}
            alt="Star-filled"
            className="me-1"
            width={14}
            height={14}
          />
          <label className="text-white text-sm">4.9(8,381 votes)</label>
        </div>
        <div className="flex space-x-2">
          <div className="inline-flex items-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              className="me-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z"
                fill="white"
              />
              <path
                d="M5.09998 8.925L7.64998 11.475L11.9 6.375"
                stroke="#327FDE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label className="text-white">Free</label>
          </div>
          <div className="inline-flex items-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              className="me-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z"
                fill="white"
              />
              <path
                d="M5.09998 8.925L7.64998 11.475L11.9 6.375"
                stroke="#327FDE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label className="text-white">Online</label>
          </div>
          <div className="inline-flex items-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              className="me-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z"
                fill="white"
              />
              <path
                d="M5.09998 8.925L7.64998 11.475L11.9 6.375"
                stroke="#327FDE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label className="text-white">No Limits</label>
          </div>
        </div>
      </div>
    </div>
  )
}
