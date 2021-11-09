import { FC } from "react"

import { Layout } from "components/layout"
import { ZeusWithMessage } from "components/molecules/zeusWithMessage"
import { Button } from "components/molecules/button"
import { useRouter } from "next/dist/client/router"
interface Props {}

const Home: FC<Props> = () => {
  const router = useRouter()
  return (
    <Layout>
      <ZeusWithMessage>
        <p>
          ワシがAV女優のことなら全知全能のAVゼウスじゃ。
          <br />
          お主好みの最高のAV女優を見つけてみせよう。
          <br />
        </p>
        <p>2つの遊び方があるぞい！</p>
        <p>
          <span>スコアモード</span>か<span>画像アップロードモード</span>
          かどちらで遊ぶか選んでくれい！
        </p>
      </ZeusWithMessage>

      <div>
        <Button
          onClick={() => {
            router.push("/score")
          }}>
          スコアモード
        </Button>
        <Button
          onClick={() => {
            router.push("/image")
          }}>
          画像アップロードモード
        </Button>
      </div>
    </Layout>
  )
}

export default Home
