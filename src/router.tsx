import {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const GenerateAI =  lazy(()=>import('./views/GenerateAI'))
const IndexPage = lazy(()=>import('./views/IndexPage'))

const Layout = lazy(()=>import('./layouts/Layout'))
const FavoritesPage = lazy(()=>import('./views/FavoritesPage'))
const NotFoundPage = lazy(()=>import('./views/NotFoundPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <Suspense fallback="Cargando...">
            <Layout />
          </Suspense>
        }>
          <Route path="/" element={
            <Suspense fallback="Cargando...">
              <IndexPage />
            </Suspense>
          } index />
          <Route path="/favoritos" element={
            <Suspense fallback="Cargando...">
              <FavoritesPage />
            </Suspense>

          } />

          <Route path="/generate" element={
            <Suspense fallback="Cargando...">
              <GenerateAI />
            </Suspense>

          } />

             {/* 👇 ESTA ES LA CLAVE */}
          <Route path="*" element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
