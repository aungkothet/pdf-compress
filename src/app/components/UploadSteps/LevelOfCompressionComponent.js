'use client'

import { useState } from 'react'

export default function LevelOfCompressionComponent({
  handleCompressComplete,
  fileData,
}) {
  const [step, setStep] = useState(5)
  const [dpi, setDpi] = useState(114)
  const [imageQuality, setImgQuality] = useState(75)
  const [color, setColor] = useState('')

  const makeCompress = () => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const formData = JSON.stringify({
      files: fileData,
      dpi: dpi,
      imageQuality: imageQuality,
      mode: 'normal',
      colorModel: color,
    })

    fetch('https://filetools13.pdf24.org/client.php?action=compressPdf', {
      method: 'POST',
      headers: myHeaders,
      credentials: "include",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.jobId)
        handleCompressComplete(data.jobId)
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <div className="rounded-b outline-dashed  outline-primary-400 outline-1 flex flex-col items-center pt-2">
        <h1 className="h6 font-bold ps-60 w-full">Level of compression</h1>

        <div className="flex justify-center w-3/5 space-x-1 bg-white relative top-4 p-3">
          <p className="text-sm max-w-24">Small Size Low Quality</p>

          <ol className="flex items-center w-full">
            {[...Array(8)].map((x, i) => (
              <li
                className={`${
                  step >= i + 1 ? `text-primary-400` : `text-primary-200`
                } flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block `}
                key={i}
              >
                {step == i && (
                  <span className="flex items-center bg-primary-400 justify-center w-4 h-4 rounded-full shrink-0"></span>
                )}
                {step != i && (
                  <span
                    className="flex items-center bg-primary-400 justify-center w-1 h-1 rounded-full shrink-0 cursor-pointer"
                    onClick={() => {
                      setStep(i)
                    }}
                  ></span>
                )}
              </li>
            ))}
            <span
              className={`${
                step == 9 ? ` w-4 h-4` : ` w-1 h-1`
              } flex items-center bg-primary-400 justify-center rounded-full shrink-0 cursor-pointer`}
              onClick={() => {
                setStep(9)
              }}
            ></span>
          </ol>
          <p className="text-sm max-w-24 px-1">Big Size High Quality</p>
        </div>
      </div>
      <div className="mt-8 ps-60 w-9/12">
        <div className="bg-primary-200 border border-primary-400 rounded ps-3 pt-2">
          <label className="caption text-sm font-light px-2">
            Compression Settings
          </label>
          <div className="flex space-x-8 py-4 px-2 items-end ">
            <div className="flex space-x-2">
              <label className="font-light caption text-sm">DPI</label>
              <input
                type="number"
                min={10}
                max={300}
                step={1}
                value={dpi}
                onChange={(e) => {
                  setDpi(e.target.value)
                }}
                className="text-sm ps-3 font-light caption"
              ></input>
            </div>
            <div className="flex space-x-1">
              <label className="font-light caption text-sm">
                Image Quality
              </label>
              <input
                type="number"
                min={1}
                max={100}
                step={1}
                value={imageQuality}
                onChange={(e) => {
                  setImgQuality(e.target.value)
                }}
                className="text-sm ps-3 font-light caption"
              ></input>
            </div>
            <div className="flex space-x-1">
              <label className="inline-flex items-center cursor-pointer space-x-4">
                <span className="ms-3 text-sm font-light">Color</span>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    e.target.checked ? setColor('gray') : setColor('')
                  }}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-neutral-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-neutral-700 rounded-full peer peer-checked:after:translate-x-full shadow rtl:peer-checked:after:-translate-x-full peer-checked:after:border-neutral-800 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-800 after:border-neutral-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-600"></div>
                <span className="ms-3 text-sm font-light ">Gray</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-6">
        <button
          className="bg-secondary-500 rounded text-sm font-light px-7 py-1 hover:bg-secondary-600"
          onClick={makeCompress}
        >
          Compress
        </button>
      </div>
    </>
  )
}
