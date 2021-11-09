import { FC, CSSProperties } from "react"

import { Actress } from "models"
import { CardWithImage } from "components/molecules/cardWithImage"
import { SliderItem } from "components/molecules/form-items/slider"

interface Props {
  actresses: Actress[]
}

export const ActressesList: FC<Props> = ({ actresses }) => {
  return (
    <div style={ContainerStyle}>
      {actresses.map((actress) => {
        return (
          <CardWithImage
            key={actress.id}
            title={actress.name}
            src={actress.imageURL?.large}
            alt={actress.name}>
            <SliderItem
              name={actress.id}
              initialValue={0}
              marks={{ 0: "😥", 100: "😍" }}
            />
          </CardWithImage>
        )
      })}
    </div>
  )
}

const ContainerStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
}
