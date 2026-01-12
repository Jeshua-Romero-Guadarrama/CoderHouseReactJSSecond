function Carrito({
  carrito,
  totalServicios,
  totalPrecio,
  onAumentar,
  onDisminuir,
  onEliminar,
}) {
  const monto = totalPrecio.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  });

  return (
    <div className="space-y-6">
      <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-900/40">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            <span aria-hidden="true" className="mr-2">
              &#x1F6D2;
            </span>
            Carrito
          </h3>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            {totalServicios} servicio(s)
          </span>
        </div>

        {carrito.length === 0 ? (
          <p className="mt-3 text-sm text-slate-300">
            Aun no has agregado servicios. Ve al catalogo para seleccionar.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {carrito.map((producto) => (
              <li
                key={producto.id}
                className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-900/60 px-3 py-3 text-sm text-slate-100"
              >
                <div className="space-y-1">
                  <p className="font-semibold text-white">{producto.titulo}</p>
                  <p className="text-xs text-slate-400">
                    Cantidad: {producto.cantidad}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-100 hover:border-slate-500"
                    onClick={() => onDisminuir(producto.id)}
                    aria-label={`Disminuir ${producto.titulo}`}
                  >
                    -
                  </button>

                  <button
                    type="button"
                    className="rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-100 hover:border-slate-500"
                    onClick={() => onAumentar(producto.id)}
                    aria-label={`Aumentar ${producto.titulo}`}
                  >
                    +
                  </button>

                  <button
                    type="button"
                    className="rounded-lg border border-orange-500/40 bg-orange-500/10 px-2 py-1 text-xs font-semibold text-orange-100 hover:border-orange-400/60"
                    onClick={() => onEliminar(producto.id)}
                    aria-label={`Eliminar ${producto.titulo}`}
                  >
                    Eliminar
                  </button>

                  <p className="text-sm font-semibold text-white">
                    {(producto.precio * producto.cantidad).toLocaleString(
                      "es-MX",
                      {
                        style: "currency",
                        currency: "MXN",
                        maximumFractionDigits: 0,
                      }
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-50">
          <span className="text-sm font-semibold">
            <span aria-hidden="true" className="mr-2">
              &#x1F4B0;
            </span>
            Total
          </span>
          <span className="text-base font-bold">{monto}</span>
        </div>
      </article>
    </div>
  );
}

export default Carrito;
