'use client'

import Image from 'next/image'
import StepsBarComponent from './StepsBarComponent'
import LevelOfCompressionComponent from './LevelOfCompressionComponent'

export default function Step2Component({
  handleNextStep,
  fileData,
  parseJobId,
}) {
  const goToNextStep = (jobId) => {
    var intervalId = setInterval(() => {
      fetch(
        'https://filetools13.pdf24.org/client.php?action=getStatus&jobId=' +
          jobId,
        {
          method: 'GET',
          credentials: 'include',
        }
      )
        .then((response) => {
          if (!response.ok) {
            clearInterval(intervalId)
          } else {
            return response.json()
          }
        })
        .then((data) => {
          if (data.status == 'done') {
            clearInterval(intervalId)
            parseJobId(jobId)
            handleNextStep()
          }
        })
        .catch((error) => {
          console.error(error)
          clearInterval(intervalId)
        })
    }, 1500)
  }
  return (
    <>
      <div className="px-3 py-5 rounded-t text-primary-400 bg-primary-200 dark:bg-neutral-600 dark:text-white relative z-10">
        <StepsBarComponent step={2}></StepsBarComponent>
        <div className="flex items-center justify-center w-full space-x-2">
          {fileData.map((fileInfo, key) => (
            <div
              className="justify-center max-w-36 my-4 outline rounded outline-1 p-1 outline-neutral-600 dark:outline-primary-200"
              key={key}
            >
              <div className="flex justify-between">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1629 14.0939C17.1629 14.2568 17.0982 14.413 16.983 14.5282C16.8679 14.6434 16.7117 14.7081 16.5488 14.7081H14.7066V16.5506C14.7066 16.7135 14.6419 16.8697 14.5267 16.9849C14.4116 17.1001 14.2554 17.1648 14.0925 17.1648C13.9297 17.1648 13.7735 17.1001 13.6583 16.9849C13.5431 16.8697 13.4784 16.7135 13.4784 16.5506V14.7081H11.6362C11.4734 14.7081 11.3172 14.6434 11.202 14.5282C11.0869 14.413 11.0222 14.2568 11.0222 14.0939C11.0222 13.931 11.0869 13.7748 11.202 13.6596C11.3172 13.5444 11.4734 13.4797 11.6362 13.4797H13.4784V11.6371C13.4784 11.4742 13.5431 11.318 13.6583 11.2028C13.7735 11.0876 13.9297 11.0229 14.0925 11.0229C14.2554 11.0229 14.4116 11.0876 14.5267 11.2028C14.6419 11.318 14.7066 11.4742 14.7066 11.6371V13.4797H16.5488C16.7117 13.4797 16.8679 13.5444 16.983 13.6596C17.0982 13.7748 17.1629 13.931 17.1629 14.0939ZM22.82 22.823C22.7026 22.9365 22.5457 23 22.3825 23C22.2192 23 22.0623 22.9365 21.945 22.823L18.629 19.4987C17.2324 20.672 15.4369 21.2607 13.6169 21.1421C11.7969 21.0234 10.093 20.2066 8.86052 18.862C7.62802 17.5174 6.96211 15.7487 7.00167 13.925C7.04123 12.1012 7.78321 10.3631 9.07286 9.07325C10.3625 7.78336 12.1002 7.04124 13.9237 7.00167C15.7471 6.9621 17.5154 7.62814 18.8597 8.86087C20.2041 10.0936 21.0207 11.7979 21.1394 13.6182C21.258 15.4385 20.6694 17.2344 19.4963 18.6312L22.82 21.9478C22.9353 22.0643 23 22.2215 23 22.3854C23 22.5493 22.9353 22.7066 22.82 22.823ZM14.0925 19.9287C15.2463 19.9287 16.3742 19.5865 17.3335 18.9453C18.2929 18.3042 19.0406 17.3929 19.4821 16.3268C19.9237 15.2606 20.0392 14.0874 19.8141 12.9556C19.589 11.8237 19.0334 10.7841 18.2175 9.96806C17.4017 9.15205 16.3622 8.59634 15.2306 8.3712C14.099 8.14606 12.926 8.26161 11.8601 8.70323C10.7941 9.14485 9.88301 9.89271 9.242 10.8522C8.60098 11.8118 8.25884 12.9399 8.25884 14.0939C8.26088 15.6407 8.87615 17.1237 9.96973 18.2175C11.0633 19.3112 12.546 19.9266 14.0925 19.9287Z"
                    fill="#232323"
                  />
                </svg>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4167 10.3077H18.5V9.73077C18.4981 9.27233 18.3131 8.8332 17.9853 8.50903C17.6575 8.18486 17.2135 8.0019 16.75 8H13.25C12.7865 8.0019 12.3425 8.18486 12.0147 8.50903C11.6869 8.8332 11.5019 9.27233 11.5 9.73077V10.3077H8.58333C8.42862 10.3077 8.28025 10.3685 8.17085 10.4767C8.06146 10.5849 8 10.7316 8 10.8846C8 11.0376 8.06146 11.1844 8.17085 11.2926C8.28025 11.4008 8.42862 11.4615 8.58333 11.4615H9.16667V21.8462C9.16667 22.1522 9.28958 22.4457 9.50838 22.662C9.72717 22.8784 10.0239 23 10.3333 23H19.6667C19.9761 23 20.2728 22.8784 20.4916 22.662C20.7104 22.4457 20.8333 22.1522 20.8333 21.8462V11.4615H21.4167C21.5714 11.4615 21.7198 11.4008 21.8291 11.2926C21.9385 11.1844 22 11.0376 22 10.8846C22 10.7316 21.9385 10.5849 21.8291 10.4767C21.7198 10.3685 21.5714 10.3077 21.4167 10.3077ZM12.6667 9.73077C12.6667 9.57776 12.7281 9.43102 12.8375 9.32282C12.9469 9.21463 13.0953 9.15385 13.25 9.15385H16.75C16.9047 9.15385 17.0531 9.21463 17.1625 9.32282C17.2719 9.43102 17.3333 9.57776 17.3333 9.73077V10.3077H12.6667V9.73077ZM19.6667 21.8462H10.3333V11.4615H19.6667V21.8462ZM13.8333 14.3462V18.9615C13.8333 19.1145 13.7719 19.2613 13.6625 19.3695C13.5531 19.4777 13.4047 19.5385 13.25 19.5385C13.0953 19.5385 12.9469 19.4777 12.8375 19.3695C12.7281 19.2613 12.6667 19.1145 12.6667 18.9615V14.3462C12.6667 14.1931 12.7281 14.0464 12.8375 13.9382C12.9469 13.83 13.0953 13.7692 13.25 13.7692C13.4047 13.7692 13.5531 13.83 13.6625 13.9382C13.7719 14.0464 13.8333 14.1931 13.8333 14.3462ZM17.3333 14.3462V18.9615C17.3333 19.1145 17.2719 19.2613 17.1625 19.3695C17.0531 19.4777 16.9047 19.5385 16.75 19.5385C16.5953 19.5385 16.4469 19.4777 16.3375 19.3695C16.2281 19.2613 16.1667 19.1145 16.1667 18.9615V14.3462C16.1667 14.1931 16.2281 14.0464 16.3375 13.9382C16.4469 13.83 16.5953 13.7692 16.75 13.7692C16.9047 13.7692 17.0531 13.83 17.1625 13.9382C17.2719 14.0464 17.3333 14.1931 17.3333 14.3462Z"
                    fill="#f00"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/file.png"
                  alt="File"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <p className="text-sm max-w-36 truncate">{fileInfo.name}</p>
            </div>
          ))}
        </div>
      </div>
      <LevelOfCompressionComponent
        handleCompressComplete={goToNextStep}
        fileData={fileData}
      />
    </>
  )
}
