import Image from 'next/image'

export default function SectionComponent() {
  return (
    <div className="flex mt-3 px-36">
      <div className="">
        <h1 className="h3 font-bold">Compress PDF</h1>
        <p className="text-sm caption font-light">
          PDF compressor to reduce the size of PDF files quickly and easily
        </p>
      </div>
      <Image
        src={`/fly.png`}
        alt="Fly Logo"
        className="me-1"
        width={78}
        height={80}
      />
    </div>
  )
}
