import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>医疗耗材商城</title>
        <meta name="description" content="高品质医疗耗材，快速送达" />
      </Head>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">欢迎来到医疗耗材商城</h1>
        <p>浏览我们的精选产品，支持在线购买。</p>
      </main>
    </div>
  );
}
