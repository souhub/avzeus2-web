import { FC } from "react"
import { Spin } from "antd"

import { useAppSelector } from "modules/hooks"

import { ActressesList } from "components/actressesList"
import { Layout } from "components/layout"
import { ZeusWithMessage } from "components/molecules/zeusWithMessage"

interface Props {}
const Recommendation: FC<Props> = () => {
  const { actresses, status } = useAppSelector((state) => state.actresses)

  return (
    <Layout>
      <ZeusWithMessage>
        {status === "loading" ? (
          <>
            <p> お主好みの女優を計算中じゃ！</p>
            <p> もうしばらく待っておくれい！</p>
          </>
        ) : (
          <>
            <p>全知全能のワシが分析したお主に最適のAV女優はこの娘らじゃ！！</p>
            <p>上からおすすめ順に10人ほど並べたぞい！</p>
            <p>FANZAに飛べるようにしてあるから楽しんでおくれい！</p>
          </>
        )}
      </ZeusWithMessage>

      {status === "loading" ? (
        <Spin tip='がんばって計算中じゃ！'></Spin>
      ) : (
        <ActressesList actresses={actresses} />
      )}
    </Layout>
  )
}

export default Recommendation
