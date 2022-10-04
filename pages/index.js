import Head from 'next/head'
import NationwideFigures from '../components/nationwide-figures';
import NationwideActivity from '../components/nationwide-activity';
import StateData from '../components/state-data';
import Footer from '../components/footer';
import spending from '../data/telescope.payload.json'

export async function getStaticProps() {
  return {
    props: { spending }
  }
}

export default function Home({ spending }) {
  return (
    <>
      <Head>
        <title>Telescope - Circa Victor</title>
        <meta name="description" content="A Stock Ticker for the Political Economy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="shortcut icon" href="/img/torch.png" />
        <meta property="og:title" content="Telescope - Circa Victor" />
        <meta property="og:description" content="A Stock Ticker for the Political Economy" />
        <meta property="og:url" content="https://telescope.levibrooke.com" />
        <meta property="og:image" content="https://telescope.levibrooke.com/img/thumbnail.jpg" />
      </Head>
      <main className="container">
        <section className="title">
          <h1>United States<span className="">Political Economy</span></h1>
        </section>
        <NationwideFigures data={spending} />
        <NationwideActivity data={spending} />
        <StateData data={spending} />
        <Footer />
      </main>
    </>
  )
}
