import Footer from '../components/footer'
import Layout from '../components/layout'
import Projects from '../components/sections/projects'
import AboutMe from '../components/sections/aboutMe'
import ContactMe from '../components/sections/contactMe'

export default function Index() {
  return (
    <Layout>
      <main className="flex flex-col">
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </main >
    </Layout>
  )
}
