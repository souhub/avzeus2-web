import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { Actress } from "models"
import request from "modules/request"
import { Status } from "consts/status"
import { UploadFile } from "antd/lib/upload/interface"
import { API_ROUTES } from "consts/routes"
import { getBase64 } from "utils/base64"

interface ActressesState {
  actress?: Actress
  actresses: Actress[]
  status: Status
  image?: UploadFile<any>
  processedImage?: string
}

const initialState: ActressesState = {
  actress: undefined,
  actresses: [],
  status: "idle",
  image: undefined,
  processedImage: undefined,
}

export const initActresses = createAsyncThunk<{
  actresses: Actress[]
}>("actresses/init", async () => {
  const res = await request.get<Actress[]>({
    url: API_ROUTES.initActresses,
  })
  const actresses = res.data as Actress[]
  return { actresses }
})

export interface Score {
  id: string
  score: number
}

export interface ActressesWithProcessedImage {
  actresses: Actress[]
  key: string
}

export const scoreRecommendActresses = createAsyncThunk<
  { actresses: Actress[] },
  { args: Score[] }
>("actresses/scoreRecommended", async ({ args }) => {
  const res = await request.post<Actress[]>({
    url: API_ROUTES.scoreRecommend,
    data: args,
  })
  const actresses = res.data

  return { actresses }
})

export const imageRecommendAcctresses = createAsyncThunk<
  { actressesWithProcessedImage: ActressesWithProcessedImage },
  { args: UploadFile<any> }
>("actresses/imageRecommended", async ({ args }) => {
  const data = await getBase64(args.originFileObj)

  const res = await request.post<ActressesWithProcessedImage>({
    url: API_ROUTES.imageRecommend,
    data: data,
  })
  const actressesWithProcessedImage = res.data
  return { actressesWithProcessedImage }
})

const actressesSlice = createSlice({
  name: "actresses",
  initialState,
  reducers: {
    statusUpdated(state, action: { payload: Status }) {
      state.status = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initActresses.fulfilled, (state, action) => {
      state.actresses = action.payload.actresses
    })
    builder.addCase(scoreRecommendActresses.fulfilled, (state, action) => {
      state.actresses = action.payload.actresses
    })
    builder.addCase(imageRecommendAcctresses.fulfilled, (state, action) => {
      state.actresses = action.payload.actressesWithProcessedImage.actresses
      state.processedImage = action.payload.actressesWithProcessedImage.key
    })
  },
})

export const { statusUpdated } = actressesSlice.actions

export const actressesReducer = actressesSlice.reducer
