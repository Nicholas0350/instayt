import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Posts from '../components/Posts';
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className=" bg-gray-50 h-screen overflow-y-scroll scroll-hide">
      <Head>
        <title>Nickstagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal />
      <Header />
      <Feed />

      {/* <Posts /> */}
    </div>
  )
}