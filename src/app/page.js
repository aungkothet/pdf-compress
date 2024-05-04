import FAQComponent from './components/FaqComponent'
import InfoSectionComponent from './components/InfoSection/InformationComponent'
import MainComponent from './components/MainComponent'
import SectionComponent from './components/SectionComponent'

export default function Home() {
  return (
    <main>
      <SectionComponent />
      <MainComponent />
      <InfoSectionComponent />
      <FAQComponent/>
    </main>
  )
}
