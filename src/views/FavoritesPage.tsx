import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"


export default function FavoritesPage() {

  const { favorites } = useAppStore()
  const hasFavortes = useMemo(()=> favorites.length, [favorites])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>

      {hasFavortes ? (

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">

        {favorites.map(item => (

          <DrinkCard 
          key={item.idDrink} 
          drink={item}
          />

      ))}

      </div>

      ) : (
        <p className="my-10 text-center text-3xl ">
          Los favoritos se mostrarán aquí
        </p>
      ) }
      

    </>
  )
}
