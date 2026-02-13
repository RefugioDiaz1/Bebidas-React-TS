import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import {createFavoritesSlice,type FavoritesSliceType}from './favoritesSlice'

type StoreState = RecipesSliceType & FavoritesSliceType

export const useAppStore = create<StoreState>()(devtools((...a)=> ({

    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)

})))




