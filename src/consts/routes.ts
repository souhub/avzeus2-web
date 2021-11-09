import { API_BASE_URI } from "env/url"

export const routes: route[] = [
  {
    path: "/",
    name: "ホーム",
  },
  {
    path: "/score",
    name: "スコアモード",
  },
  {
    path: "/image",
    name: "画像モード",
  },
]

interface route {
  path: string
  name: string
}

export const API_ROUTES = {
  initActresses: `${API_BASE_URI}/init-actresses`,
  scoreRecommend: `${API_BASE_URI}/score-rec`,
  imageRecommend: `${API_BASE_URI}/img-rec`,
}
