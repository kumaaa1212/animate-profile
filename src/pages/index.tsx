import Image from "next/image";
import Layout from "./component/Layout";
import Anitation from "./component/Anitation";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex items-center text-dark w-full min-h-screen ">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex flex-col items-center self-center">
              <Anitation text='Bringing Designs to Life with Seamless Code' className='!text-6xl text-left' />
              <p className="my-4 text-base font-medium "></p>
              <p>シームレスなコードでデザインを具現化する。
                私はフロントエンドエンジニアとして、静的なデザインをダイナミックでインタラクティブなウェブサイトやアプリケーションに変えることを専門としています。創造性と問題解決に情熱を持ち、技術的な専門知識とデザイン感覚を組み合わせ、あなたのビジョンを現実にします。一緒に協力して、ユーザーを魅了するシームレスなユーザーエクスペリエンスを創りましょう。</p>
              <div className="flex items-center self-start mt-2">
            <div className="w-1/2">
              <Image src={""} alt={""} className="w-full h-auto" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </div>
                <Link href='mailto:harrry.kuma1225@gmail.com' target={'_blank'} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark">Contact</Link>
              </div>
            </div>
            
          </div>
        </Layout>
      </main>
    </div>
  )
}
