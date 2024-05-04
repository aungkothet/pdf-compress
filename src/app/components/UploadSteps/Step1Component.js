import StepsBarComponent from './StepsBarComponent'

export default function Step1Component({ handleNextStep, setFileData }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)

    fetch('https://filetools13.pdf24.org/client.php?action=upload', {
      method: 'POST',
      credentials: "include",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setFileData(data)
        handleNextStep()
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <div className="outline-dashed px-3 py-5 rounded text-primary-400 bg-primary-200">
        <StepsBarComponent step={1}></StepsBarComponent>

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                width="47"
                height="32"
                viewBox="0 0 47 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.69992 32V4.57209H23.4996V18.286C23.5033 19.4973 23.9997 20.658 24.8803 21.5145C25.7609 22.371 26.9542 22.8537 28.1995 22.8574H42.2993V32H46.9992V18.286C47.0075 17.9857 46.9488 17.6871 46.8271 17.4109C46.7054 17.1347 46.5236 16.8874 46.2942 16.6861L29.8445 0.686475C29.6376 0.463268 29.3834 0.286371 29.0994 0.167989C28.8154 0.0496074 28.5084 -0.00744171 28.1995 0.000777216H4.69992C3.45457 0.00439479 2.26129 0.487176 1.38068 1.34368C0.500083 2.20019 0.00371935 3.36082 0 4.57209V32H4.69992ZM28.1995 5.48636L41.3593 18.286H28.1995V5.48636Z"
                  fill="#C1C1C1"
                />
              </svg>

              <div className="flex items-center space-x-2 text-center bg-secondary-500 rounded text-black py-2 px-3 my-2">
                <span>Select Files</span>
                <svg
                  width="1"
                  height="16"
                  viewBox="0 0 1 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0 L0 16" stroke="#000" strokeWidth={2} />
                </svg>
                <svg
                  className="mt-1"
                  width="16"
                  height="10"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0 L5 4 L10 0" stroke="#000" />
                </svg>
              </div>
              <p className="mb-2 text-sm text-neutral-600">
                or drag and drop file into this area
              </p>
              <div className="flex space-x-3 text-black text-sm ">
                <div className="flex items-end text-sm space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#1E88E5"
                      d="M42 13.976L31.377 7.255 24 13.314 35.026 19.732zM6 25.647L16.933 32.055 24 26.633 13.528 19.969zM16.933 7.255L6 14.301 13.528 19.969 24 13.314zM24 26.633L31.209 32.055 42 25.647 35.026 19.732z"
                    />
                    <path
                      fill="#1E88E5"
                      d="M32.195 33.779L31.047 34.462 29.979 33.658 24 29.162 18.155 33.646 17.091 34.464 15.933 33.785 13 32.066 13 34.738 23.988 42 35 34.794 35 32.114z"
                    />
                  </svg>
                  Dropbox
                </div>
                <div className="flex items-end text-sm space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                  >
                    <path fill="#FFC107" d="M17 6L31 6 45 30 31 30z" />
                    <path fill="#1976D2" d="M9.875 42L16.938 30 45 30 38 42z" />
                    <path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z" />
                  </svg>
                  Google Drive
                </div>
              </div>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>
    </>
  )
}
