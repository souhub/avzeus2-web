import { CSSProperties, FC, ReactNode } from "react"
import { Card, Image } from "antd"

const { Meta } = Card

interface Props {
  title?: string
  src?: string
  alt?: string
  href?: string
  children?: ReactNode
}

export const CardWithImage: FC<Props> = ({
  title,
  src,
  alt,
  href,
  children,
}) => {
  return (
    <>
      {href ? (
        <a href={href} target='_blank' rel='noreferrer'>
          <Card style={CardStyle} cover={<Image alt={alt} src={src} />}>
            <Meta title={title} />
            {children}
          </Card>
        </a>
      ) : (
        <Card style={CardStyle} cover={<Image alt={alt} src={src} />}>
          <Meta title={title} />
          {children}
        </Card>
      )}
    </>
  )
}

const CardStyle: CSSProperties = {
  width: "200px",
  margin: "15px",
}
