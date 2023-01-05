import Footer from '../components/footer'
import Layout from '../components/layout'
import Home from './home'

export default function Index() {
  return (
    <Layout>
      <main className="flex flex-col h-screen">
        <Home />
        <Footer />
      </main >
    </Layout>
  )
}
