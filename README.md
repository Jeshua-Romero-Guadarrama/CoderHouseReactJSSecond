# NavegaLasRutas+Romero

## Datos del proyecto
- Estudiante: **Jeshua Romero Guadarrama**
- Curso / Comision: **React JS 81700**
- Proyecto: **NavegaLasRutas+Romero**

## Checklist Preentrega No2
- React Router implementado.
- Rutas:
  - `/` catalogo principal (ItemListContainer)
  - `/category/:categoriaId` catalogo filtrado por categoria (useParams + useEffect)
  - `/item/:itemId` detalle de producto (ItemDetailContainer + useParams)
  - `/carrito`, `/blog`, `/contacto`
  - `*` ruta 404
- NavBar visible en todas las rutas con `Link/NavLink` sin recargas.
- Containers vs presentacion:
  - Container: `ItemListContainer` (Promise async + retardo, filtra por categoria)
  - Presentacion: `ItemList` + `Item` (usa `map` y `key`)
  - Container: `ItemDetailContainer` (Promise async + retardo, busca por id)
  - Presentacion: `ItemDetail` + `ItemCount`
- `ItemCount` dentro del detalle para agregar unidades al carrito.

## Como correr
1. Instalar dependencias: `npm install`
2. Dev: `npm run dev`
3. Abrir `http://localhost:5173`

## Notas
- Tailwind se carga por CDN desde `index.html`.
- Datos simulados en `src/data/productos.js` con promesas y retardo.
