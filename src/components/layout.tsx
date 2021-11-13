import { Layout as AntLayout } from "antd"
import { ReactNode, FC, CSSProperties } from "react"

import { Menu } from "components/menu"

interface Props {
  children: ReactNode
}

const { Content } = AntLayout

export const Layout: FC<Props> = ({ children }) => {
  return (
    <AntLayout>
      <Menu />
      <Content>
        <div style={contentStyle}>{children}</div>
      </Content>
    </AntLayout>
  )
}

const contentStyle: CSSProperties = {
  padding: "24px",
  background: "#fff",
  margin: "auto",
  width: "90%",
}
