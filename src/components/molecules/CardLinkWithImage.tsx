import { CSSProperties, FC, ReactNode } from "react"
import { Card } from "antd"

const { Meta } = Card

interface Props {
  href?: string
  title?: string
  src?: string
  alt?: string
  children?: ReactNode
}

export const CardLinkWithImage: FC<Props> = ({
  href,
  title,
  src,
  alt,
  children,
}) => {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      <Card style={CardStyle} cover={<img alt={alt} src={src} />}>
        <Meta title={title} />
        {children}
      </Card>
    </a>
  )
}

const CardStyle: CSSProperties = {
  width: "200px",
  margin: "15px",
}
