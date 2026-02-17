import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schemas"
import type { Drink, SearchFilter } from "../types"
import api from '../lib/axios'

export async function getCategories(){

    try {
        
        const url = '/list.php?c=list'
        const {data } = await api(url)
        const result = CategoriesAPIResponseSchema.safeParse(data)
        
        if (result.success) {
            return result.data
        }

    } catch (error) {
        console.log(error)
    }
}

export async function getRecipes(filters: SearchFilter){

    try {
        
        const url = `/filter.php?c=${filters.category}&i=${filters.ingredient}`
        const {data } = await api(url)
        const result = DrinksAPIResponse.safeParse(data)
        
        if (result.success) {
            return result.data
        }

    } catch (error) {
        console.log(error)
    }
}

export async function getRecipeById(id: Drink['idDrink']){

    try {
        
        const url = `/lookup.php?i=${id}`
        const {data } = await api(url)
        const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
        
        if (result.success) {
            return result.data
        }

    } catch (error) {
        console.log(error)
    }
}