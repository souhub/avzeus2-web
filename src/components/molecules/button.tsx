import { CSSProperties, FC, MouseEventHandler, ReactNode } from "react"
import { Button as AntButton } from "antd"

interface Props {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLElement>
  htmlType?: "button" | "submit" | "reset"
  icon?: ReactNode
}

export const Button: FC<Props> = ({
  children,
  onClick,
  htmlType = "button",
  icon,
}) => {
  return (
    <AntButton
      style={buttonStyle}
      type='primary'
      onClick={onClick}
      htmlType={htmlType}
      icon={icon}>
      {children}
    </AntButton>
  )
}

const buttonStyle: CSSProperties = {
  color: "#fff",
  backgroundColor: "#eb6100",
  borderRadius: "100vh",
  border: "none",
  width: "100%",
  maxWidth: "375px",
  height: "60px",
  margin: "10px",
}
