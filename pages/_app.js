import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href="/"><a title="Home">Home</a></Link>{' '}
      <Link href="/user/1"><a>User 1</a></Link>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp