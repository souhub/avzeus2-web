import { CSSProperties, FC } from "react"

import { Slider, Form } from "antd"
import { SliderMarks } from "antd/lib/slider"

interface Props {
  name: string
  initialValue?: any
  marks: SliderMarks
}

export const SliderItem: FC<Props> = ({ name, initialValue, marks }) => {
  return (
    <Form.Item name={name} initialValue={initialValue}>
      <Slider style={siderStyle} marks={marks} />
    </Form.Item>
  )
}

const siderStyle: CSSProperties = {
  fontSize: "30px",
}
