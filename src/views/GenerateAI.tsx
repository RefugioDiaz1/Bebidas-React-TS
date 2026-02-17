import { useAppStore } from "../stores/useAppStore"

export default function GenerateAI() {
  
    const {showNotification, generateRecipe,recipe, isGenerating} = useAppStore()

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        const form =new  FormData(e.currentTarget)
        const prompt = form.get('prompt') as string
        
        if (prompt.trim() === '') {
            showNotification({
                text: 'La búsqueda no puede ir vacía',
                error: true
            }) 
            return
        }

        await generateRecipe(prompt)

    }
  
  return (
    <>
      <h1 className="text-6xl font-extrabold">Generar Receta con IA</h1>

      <div className="max-w-4xl mx-auto">
        <form  
          onSubmit={handleSubmit}
          className='flex flex-col space-y-3 py-10'
        >
          <div className="relative">
            <input 
              name="prompt" 
              id="prompt" 
              className="border bg-white p-4 rounded-lg w-full border-slate-800" 
              placeholder="Genera una receta con ingredientes. Ej. Bebida con Tequila y Fresa"
            />

            
            <button 
              type="submit" 
              aria-label="Enviar"
              className={`cursor-pointer absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2
                ${isGenerating ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={isGenerating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </form>
           {isGenerating && (
  <div className="flex flex-col items-center justify-center py-16 space-y-6">

    {/* Spinner */}
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-slate-300"></div>
      <div className="w-16 h-16 rounded-full border-4 border-t-slate-900 animate-spin absolute top-0 left-0"></div>
    </div>

    {/* Texto IA */}
    <div className="flex items-center space-x-2 text-xl font-semibold text-slate-700">
      <span>Generando receta con IA</span>
      <span className="flex space-x-1">
        <span className="animate-bounce">.</span>
        <span className="animate-bounce [animation-delay:0.2s]">.</span>
        <span className="animate-bounce [animation-delay:0.4s]">.</span>
      </span>
    </div>

    {/* Subtexto elegante */}
    <p className="text-sm text-slate-400">
      Analizando ingredientes y creando algo delicioso 🍹
    </p>

  </div>
)}

        <div className="py-10 whitespace-pre-wrap">
            <p>{recipe}</p>
        </div>
      </div>

    </> 
  )
}