import { FC } from "react"
import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { Provider } from "react-redux"
import "antd/dist/antd.css"

import { store } from "modules/store"
import { ConfigProvider } from "antd"
import Amplify from "aws-amplify"
import awsconfig from "aws-exports"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  Amplify.configure(awsconfig)
  return (
    <Provider store={store}>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
