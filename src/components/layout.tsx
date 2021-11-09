import { Layout as AntLayout } from "antd"
import { ReactNode, FC, CSSProperties } from "react"

import { Header } from "components/header"
import { Menu } from "components/menu"

interface Props {
  children: ReactNode
}

const { Content, Footer } = AntLayout

export const Layout: FC<Props> = ({ children }) => {
  return (
    <AntLayout>
      <Header />
      <Menu />
      <Content>
        <div style={contentStyle}>{children}</div>
      </Content>
      <Footer style={footerStyle}>
        <a href='https://affiliate.dmm.com/api/'>
          <img
            src='https://p.dmm.co.jp/p/affiliate/web_service/r18_88_35.gif'
            width='88'
            height='35'
            alt='WEB SERVICE BY FANZA'
          />
        </a>
        <p>&copy; 2021 avzeus.net</p>
      </Footer>
    </AntLayout>
  )
}

const contentStyle: CSSProperties = {
  padding: "24px",
  background: "#fff",
  margin: "auto",
  width: "90%",
}

const footerStyle: CSSProperties = {
  textAlign: "center",
  background: "#fff",
}
