import Image from 'next/image'

export default function InfoCardComponent({ title, icon, body }) {
  return (
    <div className="border rounded border-primary-400">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h5 className="font-bold float-left label">{title}</h5>
          <Image
            src={`/${icon}`}
            alt="Compress Tool"
            className="float-right"
            width={37}
            height={37}
          />
        </div>
        <p className="text-sm text-neutral-600 mt-3">{body}</p>
      </div>
    </div>
  )
}
