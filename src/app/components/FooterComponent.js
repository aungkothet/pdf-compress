import toolsData from '../../assets/tools.json'
import CopyRightComponent from './CopyRightComponent'

export default function FooterComponent() {
  return (
    <>
      <div className="mx-28">
        <hr className="h-px my-4 bg-primary-500 dark:bg-neutral-600 border-0"></hr>
        <h1 className="h1">All tools</h1>
        <div className="grid grid-flow-col-dense grid-cols-6 grid-rows-7">
          {toolsData.map((tools, key) => (
            <span
              className="font-light caption p-1 border-e border-neutral-600 last:border-none"
              key={key}
            >
              {tools}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-4 my-3 text-caption">
          <div className="flex space-x-4">
            <span className="text-neutral-600">About</span>
            <span className="text-neutral-600">Help</span>
            <span className="text-neutral-600">Contact</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-neutral-600">Legal Notice</span>
            <span className="text-neutral-600">Terms of use</span>
            <span className="text-neutral-600">Privacy Ploicy</span>
            <span className="text-neutral-600">Privacy Settings</span>
          </div>
        </div>
      </div>
      <CopyRightComponent></CopyRightComponent>
    </>
  )
}
