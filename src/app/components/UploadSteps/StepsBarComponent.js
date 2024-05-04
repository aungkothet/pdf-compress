export default function StepsBarComponent({ step = 1 }) {
  return (
    <div className="flex justify-between pe-6">
      <button className="outline rounded-full outline-primary-400 dark:outline-neutral-700 text-primary-400 dark:text-neutral-700 text-sm px-3 py-1 outline-1 inline-flex items-center">
        {step >= 2 && (
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
        )}
        1. Upload your PDFs
      </button>
      <button
        className={`outline rounded-full text-sm px-3 py-1 outline-1 inline-flex items-center${
          step >= 2
            ? `outline-primary-400 text-primary-400 dark:text-neutral-700 dark:outline-neutral-700`
            : `outline-neutral-600 text-neutral-600 dark:text-primary-200 dark:outline-primary-200`
        }`}
      >
        {step >= 3 && (
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
        )}
        2. Choose compression
      </button>
      <button
        className={`outline rounded-full text-sm px-3 py-1 outline-1 ${
          step >= 3
            ? `outline-primary-400 text-primary-400 dark:text-neutral-700 dark:outline-neutral-700`
            : `outline-neutral-600 text-neutral-600 dark:text-primary-200 dark:outline-primary-200`
        }`}
      >
        3. Done
      </button>
    </div>
  )
}
