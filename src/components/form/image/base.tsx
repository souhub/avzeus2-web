import { CSSProperties, FC, useState } from "react"
import { Upload } from "antd"

import ImgCrop from "antd-img-crop"
import { UploadFile } from "antd/lib/upload/interface"
import { useAppDispatch } from "modules/hooks"
import { Button } from "components/molecules/button"
import {
  imageRecommendAcctresses,
  statusUpdated,
} from "modules/features/actresses/actressesSlice"

type fileList = { fileList: UploadFile[] }

interface Props {}

export const ImageForm: FC<Props> = () => {
  const dispatch = useAppDispatch()

  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange = ({ fileList: newFileList }: fileList) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: any) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow !== null && imgWindow.document.write(image.outerHTML)
  }

  const onClick = async () => {
    dispatch(statusUpdated("loading"))
    dispatch(imageRecommendAcctresses({ args: fileList[0] }))
      .unwrap()
      .then(() => {
        dispatch(statusUpdated("succeeded"))
      })
      .catch(() => dispatch(statusUpdated("failed")))
  }

  return (
    <div style={containerStyle}>
      <ImgCrop rotate>
        <Upload
          listType='picture-card'
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          accept='image/jpeg'>
          {fileList.length < 1 && "Upload"}
        </Upload>
      </ImgCrop>

      {fileList.length !== 0 && (
        <Button onClick={onClick}>お願いします！</Button>
      )}
    </div>
  )
}

const containerStyle: CSSProperties = {
  textAlign: "center",
}
