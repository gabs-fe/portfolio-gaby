import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio da Gaby</title>
        <meta name="description" content="Portfolio por Gabrielly Ferreira" />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem', color: '#000' }}> Oi! Eu sou a Gaby</h1>
      </main>
    </>
  )
}
