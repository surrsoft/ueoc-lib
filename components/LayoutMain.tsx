import Head from 'next/head';

export default function LayoutMain({children}) {
  return <>
    <Head>
      <title>ueoc-lib</title>
    </Head>
    <main className={'app-main'}>
      {children}
    </main>
  </>
}
