import Head from 'next/head'
import Input from '../components/input'

export default function Home() {
  return (
    <>
      <Head>
        <title>memo-app</title>
      </Head>
      <div className="h-screen">
        <Input />
      </div>
    </>
  )
}
