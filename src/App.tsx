import { useEffect, useState } from 'react'

interface QueryParams {
  [key: string]: string;
}

function App() {
  const [queryParams, setQueryParams] = useState<QueryParams>({});

  useEffect(() => {
    // Obtener parámetros de la URL usando URLSearchParams
    const params = new URLSearchParams(window.location.search);
    const paramsObject: QueryParams = {};

    params.forEach((value, key) => {
      paramsObject[key] = value;
    });

    setQueryParams(paramsObject);
  }, []);

  return (
    <div className="App">
      <h1>Parámetros de la URL:</h1>
      <pre>{JSON.stringify(queryParams, null, 2)}</pre>
    </div>
  );
}

export default App
