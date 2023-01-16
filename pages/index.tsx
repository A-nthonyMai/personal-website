import Footer from '../components/footer'
import Layout from '../components/layout'
import Projects from '../components/sections/projects'
import AboutMe from '../components/sections/aboutMe'
import ContactMe from '../components/sections/contactMe'
import Resume from '../components/sections/resume'

export default function Index() {
  return (
    <Layout>
      <main className="flex flex-col">
        <AboutMe />
        <Projects />
        <Resume />
        <ContactMe />
        <Footer />
      </main >
    </Layout>
  )
}
