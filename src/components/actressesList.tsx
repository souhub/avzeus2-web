import { FC, CSSProperties } from "react"
import { Actress } from "models"
import { CardLinkWithImage } from "components/molecules/CardLinkWithImage"

interface Props {
  actresses: Actress[]
}

export const ActressesList: FC<Props> = ({ actresses }) => {
  const noDataText = "秘密♡"
  return (
    <div style={ContainerStyle}>
      {actresses.map((actress) => {
        return (
          <CardLinkWithImage
            key={actress.id}
            href={actress.listURL?.digital}
            title={actress.name}
            src={
              actress.imageURL?.large
                ? actress.imageURL.large
                : "https://p.dmm.co.jp/p/pf/service/logotype/fanza_r18.svg"
            }
            alt={actress.name}>
            <p>バスト：{actress.cup ? `${actress.cup}カップ` : noDataText}</p>
            <p>
              ウエスト：{actress.hip ? `${actress.waist}センチ` : noDataText}
            </p>
            <p>ヒップ：{actress.hip ? `${actress.hip}センチ` : noDataText}</p>
            <p>
              出身地：
              {actress.prefectures ? `${actress.prefectures}` : noDataText}
            </p>
            <p>
              身長：{actress.height ? `${actress.height}センチ` : noDataText}
            </p>
            <p>趣味：{actress.hobby ? `${actress.hobby}` : noDataText}</p>
          </CardLinkWithImage>
        )
      })}
    </div>
  )
}

const ContainerStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
}
