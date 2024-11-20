import { useEffect, useState } from "react";
import Start from "./Start";
import {
  AnyArticle,
  GenerateContentProps,
  useGenerateContent,
} from "./useGenrateContent";

import { DataView } from "primereact/dataview";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";

function App() {
  const [queryParams, setQueryParams] = useState<GenerateContentProps>(
    {} as GenerateContentProps
  );
  const { data, error, loading, generateContent } = useGenerateContent();

  useEffect(() => {
    // Obtener parámetros de la URL usando URLSearchParams
    const params = new URLSearchParams(window.location.search);
    const paramsObject: GenerateContentProps = {} as GenerateContentProps;

    params.forEach((value, key) => {
      paramsObject[key as keyof GenerateContentProps] = value;
    });
    console.log(paramsObject);

    setQueryParams(paramsObject);
  }, []);

  useEffect(() => {
    if (queryParams && Object.keys(queryParams).length) {
      // Llamar a generateContent cuando los parámetros estén disponibles
      generateContent(queryParams);
    }
  }, [queryParams]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!Object.keys(queryParams).length) {
    return <Start />;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  function linkMeli(name: string) {
    const url = new URL(
      `https://listado.mercadolibre.com.co/${name.replace(
        " ",
        "-"
      )}_PriceRange_${data.PrecioMinimo}-${data.PrecioMaximo}`
    );
    window.open(url, "_blank");
  }

  const itemTemplate = (product: AnyArticle, index: number) => {
    return (
      <div
        className="col-12 hover:bg-blue-200 cursor-pointer"
        key={product.nombreLargo}
        onClick={() => linkMeli(product.nombreLargo)}
      >
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 }
          )}
        >
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">
                {product.nombreLargo}
              </div>
              <div className="text-sm text-700">{product.descripcion}</div>
              <div className="">
                <h4 className="text-xl font-bold p-0 m-0">Propiedades:</h4>
                <ul className="list-none m-0 p-0">
                  {Object.entries(product.propiedades).map(([key, value]) => (
                    <li key={key} className="flex align-items-center gap-2">
                      <span className="font-semibold capitalize">{key}:</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;

    const list = items.map((data, index) => {
      return itemTemplate(data, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };
  if (data) {
    return (
      <div className="mb-7 ml-8 mt-3 mr-3">
        <DataView value={data.Articulos} listTemplate={listTemplate} />
      </div>
    );
  }
  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div>
          <p>
            Estos son los productos que encontramos para ti{" "}
            <strong>{queryParams.name_user}</strong>
          </p>
        </div>
      )}
      {!loading && !error && !data && (
        <p>Please wait while we process your request...</p>
      )}
    </div>
  );
}

export default App;
