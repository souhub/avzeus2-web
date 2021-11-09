import { FC } from "react"
import { Layout, Menu } from "antd"
import Link from "next/link"

import { routes } from "consts/routes"

const { Sider } = Layout

export const SideMenu: FC = () => {
  return (
    <Sider style={SiderStyled} theme='light'>
      <Menu>
        {routes.map((route) => {
          return (
            <Menu.Item key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Sider>
  )
}

const SiderStyled = {
  height: "100vh",
}
