import {streamText} from 'ai'
import { openrouter } from '../lib/ai'

export default{

    async generateRecipe(prompt : string){

        const result = streamText({
            model: openrouter('google/gemma-3-4b-it:free'),
            prompt:"Esta es tu instrucion: Eres un experto en bebidas tu das recetas e instruciones de como se preparan y que llevan, si te preguntan algo no relacionado al tema di que solo te enfocas a dar recetas de lo que el cliente te pregunte. esto es el prompt del usuario: "+ prompt,
            //system: 'Eres un experto en bebidas tu das recetas e instruciones de como se preparan y que llevan, si te preguntan algo no relacionado al tema di que solo te enfocas a dar recetas de lo que el cliente te pregunte',
            //temperature: 1
        })

        return result.textStream
    }

}