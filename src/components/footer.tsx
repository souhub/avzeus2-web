import { CSSProperties, FC } from "react"
import { Footer as AntFooter } from "antd/lib/layout/layout"

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <>
      <AntFooter style={footerStyle}>
        <a href='https://affiliate.dmm.com/api/'>
          <img
            src='https://p.dmm.co.jp/p/affiliate/web_service/r18_88_35.gif'
            width='88'
            height='35'
            alt='WEB SERVICE BY FANZA'
          />
        </a>
        <p>&copy; 2021 avzeus.net</p>
      </AntFooter>
    </>
  )
}

const footerStyle: CSSProperties = {
  textAlign: "center",
  background: "#fff",
}
