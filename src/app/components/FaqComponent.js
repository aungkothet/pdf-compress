'use client'

import { useState } from 'react'

export default function FAQComponent() {
  const [expand, setExpand] = useState(false)
  return (
    <div className="px-36 items-center flex flex-col justify-center my-8">
      <h2
        className="w-full"
        onClick={(e) => {
          setExpand(!expand)
        }}
      >
        <button
          type="button"
          className="flex items-center text-3xl justify-between w-full pe-5 font-medium text-primary-600 border border-primary-500 hover:bg-primary-200 gap-3 dark:border-neutral-600 dark:text-white dark:hover:bg-black"
        >
          <div className="flex space-x-4">
            <div className="bg-primary-600 w-4 dark:bg-primary-700">&nbsp;</div>
            <span>FAQ</span>
          </div>
          <svg
            className={`${
              expand ? `rotate-0` : 'rotate-180'
            } w-3 h-3  shrink-0`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>

      <div
        className={`${
          expand ? `show` : 'hidden'
        } w-full p-5 border rounded-b-md border-primary-500 dark:border-primary-200`}
      >
        <p className="mb-2 text-neutral-700 dark:text-white font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}
