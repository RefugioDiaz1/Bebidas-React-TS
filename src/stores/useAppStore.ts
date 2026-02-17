import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import {createFavoritesSlice,type FavoritesSliceType}from './favoritesSlice'
import {createNotificationSlice, type NotificationSliceType, } from './notificationSlice'
import { createAISlice,type AISlice } from './aiSlice'

type StoreState = RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISlice

export const useAppStore = create<StoreState>()(devtools((...a)=> ({

    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)

})))




