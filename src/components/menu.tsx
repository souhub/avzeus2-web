import { FC } from "react"
import { Menu as AntMenu } from "antd"
import Link from "next/link"
import { routes } from "consts/routes"
import { useAppDispatch } from "modules/hooks"
import { statusUpdated } from "modules/features/actresses/actressesSlice"

interface Props {}

export const Menu: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(statusUpdated("idle"))
  }
  return (
    <AntMenu mode='horizontal'>
      {routes.map((route) => {
        return (
          <AntMenu.Item key={route.path} onClick={onClick}>
            <Link href={route.path}>{route.name}</Link>
          </AntMenu.Item>
        )
      })}
    </AntMenu>
  )
}
