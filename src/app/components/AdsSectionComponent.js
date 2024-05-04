import Image from 'next/image'

export default function AdsSectionComponent() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h5 className="text-md text-center">Advertisement</h5>
      <Image
        src={`/ads.png`}
        alt="Advertisement"
        className="w-2/5"
        width={100}
        height={100}
      />
    </div>
  )
}
