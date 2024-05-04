export default function CopyRightComponent() {
  return (
    <div className="bg-primary-200 dark:bg-neutral-600 text-center p-3 text-neutral-600 dark:text-white">
      <p>© {new Date().getFullYear()} Geek Software GmbH __ We love PDF</p>
    </div>
  )
}
