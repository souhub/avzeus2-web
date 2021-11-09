import { FC } from "react"
import { Actress } from "models"
import { ActressesList } from "components/form/score/actressesList"

interface Props {
  actresses: Actress[]
}

export const ScoreForm: FC<Props> = ({ actresses }) => {
  return <ActressesList actresses={actresses} />
}
