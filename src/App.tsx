import { useEffect, useState } from 'react'
import Start from './Start';
import { GenerateContentProps, useGenerateContent } from './useGenrateContent';


function App() {
  const [queryParams, setQueryParams] = useState<GenerateContentProps >({} as GenerateContentProps);
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


  if(!Object.keys(queryParams).length) {return (<Start/>)}

  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="App">
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <div>
      <p>Estos son los productos que encontramos para ti <strong>{queryParams.name_user}</strong></p>


          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {!loading && !error && !data && <p>Please wait while we process your request...</p>}
    </div>
  );
}

export default App
