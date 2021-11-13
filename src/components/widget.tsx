import { FC, CSSProperties } from "react"

import { DMM_AFFIRIATE_ID } from "env/env"

interface Props {
  bannerId: string
}

export const Widget: FC<Props> = ({ bannerId }) => {
  const src = `https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=${DMM_AFFIRIATE_ID}&banner_id=${bannerId}`
  return (
    <div style={containerStyle}>
      <ins className='widget-banner'></ins>
      <script className='widget-banner-script' src={src}></script>
    </div>
  )
}

const containerStyle: CSSProperties = {
  textAlign: "center",
}
