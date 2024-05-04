import InfoCardComponent from './InfoCardComponent'
import infoData from '../../../assets/infoData.json'
import DevicesComponent from './DevicesComponent'
import AdsSectionComponent from '../AdsSectionComponent'

export default function InfoSectionComponent() {
  return (
    <>
      <AdsSectionComponent />
      <div className="bg-primary-200">
        <h1 className="h1 text-center mt-5">Information</h1>
        <div className="flex justify-center mt-3">
          <DevicesComponent />
        </div>
        <div className="px-60 py-16">
          <div className="grid grid-cols-3 gap-8">
            {infoData.map((info, key) => (
              <InfoCardComponent
                title={info.title}
                icon={info.icon}
                body={info.body}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
