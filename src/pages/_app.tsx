import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Membros - TITAN</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F2A900" />
        <meta
          name="description"
          content="Mapa interativo dos membros da TITAN"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
