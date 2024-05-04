import Image from 'next/image'
import StepsBarComponent from './StepsBarComponent'
import toolsData from '../../../assets/tools.json'

export default function Step3Component({ setStep, fileData, jobId }) {
  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      window.location.href =
        'https://filetools13.pdf24.org/client.php?mode=download&action=downloadJobResult&jobId=' +
        jobId
    }
  }

  const restart = ()=> {
    setStep(1)
  }
  return (
    <>
      <div className="px-3 py-5 rounded-t  bg-primary-200 dark:bg-neutral-600 dark:text-white">
        <StepsBarComponent step={3}></StepsBarComponent>

        <div className="flex flex-col items-center justify-center w-full pt-3">
          <svg
            width="28"
            height="35"
            viewBox="0 0 28 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 35C2.5375 35 1.71383 34.6576 1.029 33.9728C0.343 33.2868 0 32.4625 0 31.5V11.9437C0 11.4771 0.0875002 11.032 0.2625 10.6085C0.4375 10.1862 0.685416 9.81458 1.00625 9.49375L9.49375 1.00625C9.81458 0.685417 10.1862 0.4375 10.6085 0.2625C11.032 0.0875002 11.4771 0 11.9437 0H24.5C25.4625 0 26.2868 0.342416 26.9727 1.02725C27.6576 1.71325 28 2.5375 28 3.5V31.5C28 32.4625 27.6576 33.2868 26.9727 33.9728C26.2868 34.6576 25.4625 35 24.5 35H3.5ZM14 25.5063C14.2333 25.5063 14.4521 25.4695 14.6562 25.396C14.8604 25.3237 15.05 25.2 15.225 25.025L19.8188 20.4312C20.1396 20.1104 20.3 19.7167 20.3 19.25C20.3 18.7833 20.125 18.375 19.775 18.025C19.4542 17.7042 19.0458 17.5362 18.55 17.521C18.0542 17.507 17.6458 17.675 17.325 18.025L15.75 19.5125V14C15.75 13.5042 15.5826 13.0882 15.2478 12.7522C14.9118 12.4174 14.4958 12.25 14 12.25C13.5042 12.25 13.0888 12.4174 12.754 12.7522C12.418 13.0882 12.25 13.5042 12.25 14V19.5125L10.675 17.9812C10.325 17.6604 9.91667 17.5 9.45 17.5C8.98333 17.5 8.575 17.675 8.225 18.025C7.90417 18.3458 7.74375 18.7542 7.74375 19.25C7.74375 19.7458 7.90417 20.1542 8.225 20.475L12.775 25.025C12.95 25.2 13.1396 25.3237 13.3438 25.396C13.5479 25.4695 13.7667 25.5063 14 25.5063Z"
              fill="#232323"
            />
          </svg>
          <p className="h6 font-bold py-1">Your files are ready</p>
          {fileData.map((fileInfo, key) => (
            <span className="font-light caption" key={key}>
              {fileInfo.name}
            </span>
          ))}
          <div className="grid grid-cols-3 gap-4 mt-3">
            <button
              className="bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-500 rounded px-4 py-1 font-light text-sm max-w-32"
              onClick={handleDownload}
            >
              Download
            </button>
            <button className="outline outline-secondary-500 dark:outline-secondary-600 dark:hover:outline-secondary-500 hover:outline-secondary-600 rounded px-4 py-1 font-light text-sm max-w-32">
              Preview
            </button>
            <button className="bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-500 rounded py-1 font-light text-sm max-w-32">
              Continue in another tools
            </button>
          </div>
          <div className="w-1/5  mt-4">
            <hr className="h-px bg-neutral-600 dark:bg-primary-200 border-0"></hr>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex space-x-1 text-error-600 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4167 10.3077H18.5V9.73077C18.4981 9.27233 18.3131 8.8332 17.9853 8.50903C17.6575 8.18486 17.2135 8.0019 16.75 8H13.25C12.7865 8.0019 12.3425 8.18486 12.0147 8.50903C11.6869 8.8332 11.5019 9.27233 11.5 9.73077V10.3077H8.58333C8.42862 10.3077 8.28025 10.3685 8.17085 10.4767C8.06146 10.5849 8 10.7316 8 10.8846C8 11.0376 8.06146 11.1844 8.17085 11.2926C8.28025 11.4008 8.42862 11.4615 8.58333 11.4615H9.16667V21.8462C9.16667 22.1522 9.28958 22.4457 9.50838 22.662C9.72717 22.8784 10.0239 23 10.3333 23H19.6667C19.9761 23 20.2728 22.8784 20.4916 22.662C20.7104 22.4457 20.8333 22.1522 20.8333 21.8462V11.4615H21.4167C21.5714 11.4615 21.7198 11.4008 21.8291 11.2926C21.9385 11.1844 22 11.0376 22 10.8846C22 10.7316 21.9385 10.5849 21.8291 10.4767C21.7198 10.3685 21.5714 10.3077 21.4167 10.3077ZM12.6667 9.73077C12.6667 9.57776 12.7281 9.43102 12.8375 9.32282C12.9469 9.21463 13.0953 9.15385 13.25 9.15385H16.75C16.9047 9.15385 17.0531 9.21463 17.1625 9.32282C17.2719 9.43102 17.3333 9.57776 17.3333 9.73077V10.3077H12.6667V9.73077ZM19.6667 21.8462H10.3333V11.4615H19.6667V21.8462ZM13.8333 14.3462V18.9615C13.8333 19.1145 13.7719 19.2613 13.6625 19.3695C13.5531 19.4777 13.4047 19.5385 13.25 19.5385C13.0953 19.5385 12.9469 19.4777 12.8375 19.3695C12.7281 19.2613 12.6667 19.1145 12.6667 18.9615V14.3462C12.6667 14.1931 12.7281 14.0464 12.8375 13.9382C12.9469 13.83 13.0953 13.7692 13.25 13.7692C13.4047 13.7692 13.5531 13.83 13.6625 13.9382C13.7719 14.0464 13.8333 14.1931 13.8333 14.3462ZM17.3333 14.3462V18.9615C17.3333 19.1145 17.2719 19.2613 17.1625 19.3695C17.0531 19.4777 16.9047 19.5385 16.75 19.5385C16.5953 19.5385 16.4469 19.4777 16.3375 19.3695C16.2281 19.2613 16.1667 19.1145 16.1667 18.9615V14.3462C16.1667 14.1931 16.2281 14.0464 16.3375 13.9382C16.4469 13.83 16.5953 13.7692 16.75 13.7692C16.9047 13.7692 17.0531 13.83 17.1625 13.9382C17.2719 14.0464 17.3333 14.1931 17.3333 14.3462Z"
                fill="#FB5A5F"
              />
            </svg>
            <span className="text-red">Delete</span>
          </div>
          <div className="flex space-x-1 items-center" onClick={restart}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.33685 13.988C1.42906 12.2023 0.185565 8.51112 1.55951 5.2751C3.07302 1.70944 7.18994 0.0458428 10.7556 1.55935C14.3212 3.07286 15.9848 7.19048 14.4713 10.7561C13.9046 12.0967 12.9331 13.2267 11.6926 13.988"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5766 10.7852V13.8711C11.5766 13.9827 11.6209 14.0897 11.6998 14.1686C11.7787 14.2476 11.8858 14.2919 11.9974 14.2919H15.0833M8.06982 15.0003L8.07684 14.9925"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-neutral-800 dark:text-white">Restart</span>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 rounded-t-lg mt-5 bg-primary-500 dark:bg-neutral-700 ">
        <div className="grid grid-cols-5 grid-rows-1 gap-3">
          {toolsData.slice(0, 5).map((tools, key) => (
            <div className="rounded border border-primary-200 p-2" key={key}>
              <div className="flex space-x-1 items-center relative">
                <Image
                  src={`/fly.png`}
                  alt="Fly Logo"
                  className="me-1"
                  width={51}
                  height={60}
                />
                <span className="text-white">{tools}</span>
                <div className="h-max">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    className="absolute top-0 right-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.48129 16.1032L11.5 14.2824L14.5188 16.1271L13.7282 12.6771L16.3875 10.3771L12.8896 10.0657L11.5 6.80736L10.1105 10.0417L6.61254 10.3532L9.27191 12.6771L8.48129 16.1032ZM11.5 16.5344L7.52295 18.9303C7.34726 19.0421 7.16358 19.09 6.97191 19.074C6.78025 19.058 6.61254 18.9942 6.46879 18.8824C6.32504 18.7706 6.21323 18.631 6.13337 18.4636C6.05351 18.2955 6.03754 18.1077 6.08545 17.9001L7.13962 13.3719L3.61775 10.3292C3.45802 10.1855 3.35836 10.0216 3.31875 9.83761C3.2785 9.65424 3.29031 9.47472 3.3542 9.29902C3.41809 9.12333 3.51393 8.97958 3.6417 8.86777C3.76948 8.75597 3.94518 8.68409 4.16879 8.65215L8.8167 8.24486L10.6136 3.98027C10.6934 3.78861 10.8174 3.64486 10.9854 3.54902C11.1528 3.45319 11.3243 3.40527 11.5 3.40527C11.6757 3.40527 11.8476 3.45319 12.0156 3.54902C12.183 3.64486 12.3066 3.78861 12.3865 3.98027L14.1834 8.24486L18.8313 8.65215C19.0549 8.68409 19.2306 8.75597 19.3584 8.86777C19.4861 8.97958 19.582 9.12333 19.6459 9.29902C19.7098 9.47472 19.7219 9.65424 19.6823 9.83761C19.642 10.0216 19.542 10.1855 19.3823 10.3292L15.8605 13.3719L16.9146 17.9001C16.9625 18.1077 16.9466 18.2955 16.8667 18.4636C16.7868 18.631 16.675 18.7706 16.5313 18.8824C16.3875 18.9942 16.2198 19.058 16.0282 19.074C15.8365 19.09 15.6528 19.0421 15.4771 18.9303L11.5 16.5344Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h6 className="text-white text-md text-center mt-3">
          See all tools &gt;
        </h6>
      </div>
    </>
  )
}
