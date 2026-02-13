/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function indexPage() {

  const {drinks} =  useAppStore()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const hasDrinks = useMemo(()=>  drinks.drinks.length > 0 ,[drinks])

  return (
    <>
     <h1 className="text-6xl font-extrabold">Recetas</h1>  

     {hasDrinks ? (
      
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">

        {drinks.drinks.map((item)=>(
            <DrinkCard 
            key={item.idDrink}
            drink={item}/>
        ))}
      </div>

     ) : (<p className="my-10 text-center text-2xl">No hay resultados aùn, utiliza el formulario para buscar recetas </p>)}
    </>
  )
}
