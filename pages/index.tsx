import Footer from '../components/footer'
import Layout from '../components/layout'
import Projects from './projects'
import Home from './home'

export default function Index() {
  return (
    <Layout>
      <main className="flex flex-col">
        <Home />
        <Projects />
        <Footer />
      </main >
    </Layout>
  )
}
