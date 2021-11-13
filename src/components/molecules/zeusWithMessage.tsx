import { CSSProperties, FC, ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export const ZeusWithMessage: FC<Props> = ({ children }) => {
  return (
    <div style={containerStyle}>
      <div style={{ margin: "auto", display: "flex" }}>
        <div style={fukidashiStyle}>{children}</div>
        <div>
          <img
            src='https://dpgtkhmgfsuru.cloudfront.net/static/avzeus.png'
            width={100}
            alt='zeus'
          />
        </div>
      </div>
    </div>
  )
}

const fukidashiStyle: CSSProperties = {
  position: "relative",
  display: "inline-block",
  padding: "7px 10px",
  minWidth: "120px",
  maxWidth: "100%",
  color: "#555",
  fontSize: "16px",
  background: "#fff",
  border: "solid 3px #555",
  boxSizing: "border-box",
  borderRadius: "15px",
}

const containerStyle: CSSProperties = {
  display: "flex",
  margin: "10px",
}
