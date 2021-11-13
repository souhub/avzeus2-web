import { CSSProperties, FC } from "react"
import { Spin as AntSpin } from "antd"

interface Props {
  tip: string
}

export const Spin: FC<Props> = ({ tip }) => {
  return <AntSpin tip={tip} style={spinStyle}></AntSpin>
}

const spinStyle: CSSProperties = {
  margin: "50px,0",
}
