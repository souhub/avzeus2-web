import { CSSProperties, FC, useCallback, useEffect } from "react"
import { Form, Spin } from "antd"

import { useAppDispatch, useAppSelector } from "modules/hooks"
import {
  initActresses,
  scoreRecommendActresses,
  statusUpdated,
  Score,
} from "modules/features/actresses/actressesSlice"
import { Layout } from "components/layout"
import { ScoreForm } from "components/form/score/base"
import { useRouter } from "next/dist/client/router"
import { ZeusWithMessage } from "components/molecules/zeusWithMessage"
import { Button } from "components/molecules/button"
import Head from "next/head"

type ScoreFormValues = Score[]

interface Props {}

const ScoreSelection: FC<Props> = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(statusUpdated("loading"))
    dispatch(initActresses())
      .unwrap()
      .then(() => {
        dispatch(statusUpdated("succeeded"))
      })
      .catch(() => {
        dispatch(statusUpdated("failed"))
      })
  }, [dispatch])

  const { actresses, status } = useAppSelector((state) => state.actresses)

  const onFinish = useCallback(
    (values: ScoreFormValues) => {
      router.push("/recommendation")
      dispatch(statusUpdated("loading"))

      dispatch(scoreRecommendActresses({ args: values }))
        .unwrap()
        .then(() => {
          dispatch(statusUpdated("succeeded"))
        })
        .catch(() => {
          dispatch(statusUpdated("failed"))
        })
    },
    [dispatch, router]
  )

  return (
    <Layout>
      <Head>
        <title>スコアモード | AVゼウス</title>
      </Head>
      <ZeusWithMessage>
        <p>
          下の7人のおなごの中から好き度を😥（あんまり）〜😍（好き）で入力するのじゃ。
        </p>
        <p>
          点数をつけ終えたらボタンを押すのじゃ！これを元におぬし好みのAV女優を教えるぞい！
        </p>
      </ZeusWithMessage>

      {status === "loading" ? (
        <Spin tip='読み込み中じゃ！'></Spin>
      ) : (
        <div style={containerStyle}>
          <Form onFinish={onFinish}>
            <ScoreForm actresses={actresses} />
            {actresses.length !== 0 && (
              <Button htmlType='submit'>お願いします！</Button>
            )}
          </Form>
        </div>
      )}
    </Layout>
  )
}

export default ScoreSelection

const containerStyle: CSSProperties = {}
