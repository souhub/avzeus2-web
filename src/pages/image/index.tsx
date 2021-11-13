import { FC } from "react"
import { Image, Spin } from "antd"

import { Layout } from "components/layout"
import { ImageForm } from "components/form/image/base"
import { ZeusWithMessage } from "components/molecules/zeusWithMessage"
import { useAppDispatch, useAppSelector } from "modules/hooks"
import { Button } from "components/molecules/button"
import { useRouter } from "next/dist/client/router"
import { statusUpdated } from "modules/features/actresses/actressesSlice"
import Head from "next/head"

interface Props {}

const ImageUpload: FC<Props> = () => {
  const { status, processedImage } = useAppSelector((state) => state.actresses)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const onClick = () => {
    router.push("/recommendation")
    dispatch(statusUpdated("idle"))
  }

  return (
    <Layout>
      <Head>
        <title>画像選択モード | AVゼウス</title>
      </Head>
      {status === "idle" && (
        <>
          <ZeusWithMessage>
            <p>
              好きな画像をアップロードするんじゃ！JPEG形式しかまだ対応できてないぞい！
            </p>
            <p>これを元におぬし好みのAV女優を教えるぞい！</p>
          </ZeusWithMessage>
          <ImageForm />
        </>
      )}
      {status === "loading" && (
        <>
          <ZeusWithMessage>
            <p>アップロードされた画像から顔を切り出し中じゃ</p>
            <p>しばらく待っておくれい！</p>
          </ZeusWithMessage>
          <Spin tip='写真から顔を切り出し中じゃ！'></Spin>
        </>
      )}

      {status === "succeeded" && processedImage && (
        <>
          <ZeusWithMessage>
            <p>顔を認識できたぞい！</p>
            <p>この顔に似たAV女優をレコメンドするからぜひ見てってくれい！</p>
          </ZeusWithMessage>
          <div style={{ textAlign: "center" }}>
            <div>
              <Image src={processedImage} />
            </div>
            <Button onClick={onClick}>結果を見る</Button>
          </div>
        </>
      )}

      {status === "succeeded" && processedImage === "" && (
        <>
          <ZeusWithMessage>
            <p>顔が認識できなかったぞい！</p>
            <p>すまんが違う画像をアップロードしてくれい！</p>
          </ZeusWithMessage>
          <Button
            onClick={() => {
              dispatch(statusUpdated("idle"))
            }}>
            アップロードをやり直す
          </Button>
        </>
      )}
      {status === "failed" && (
        <>
          <ZeusWithMessage>
            <p>すまんのお予想外のエラー発生じゃ！</p>
            <p>たぶん画像の形式が間違ってるぞい</p>
            <p>色んな画像形式に対応できるようにワシも勉強あるのみじゃ</p>
          </ZeusWithMessage>
          <Button
            onClick={() => {
              dispatch(statusUpdated("idle"))
            }}>
            アップロードをやり直す
          </Button>
        </>
      )}
    </Layout>
  )
}

export default ImageUpload
