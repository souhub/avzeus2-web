import { CSSProperties, FC } from "react"
import { Header as AntHeader } from "antd/lib/layout/layout"

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <>
      <AntHeader style={HeaderStyle}>
        <div>
          <h1 style={logoStyle}>AV ゼウス</h1>
        </div>
      </AntHeader>
    </>
  )
}

const HeaderStyle: CSSProperties = {
  display: "flex",
  background: "#fff",
}

const logoStyle: CSSProperties = {
  fontWeight: "bold",
}
