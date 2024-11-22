import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const MODEL_CURRENT = "gemini-1.5-flash-8b"; //gemini-1.5-flash ||  gemini-1.5-flash-8b

interface Article {
  nombreLargo: string;
  nombreCorto: string;
  precio: string;
  descripcion: string;
}

export interface AnyArticle extends Article {
  propiedades: {
    [key: string]: string; // Claves de tipo string con valores de tipo string
  };
}
export interface reponse {
  PrecioMaximo: string;
  PrecioMinimo: string;
  Articulos: AnyArticle[];
}

export interface GenerateContentProps {
  name_user: string;
  token: string;
  type_product: string;
  use_product: string;
  type_product_current: string;
}

export const useGenerateContent = () => {
  const [data, setData] = useState<reponse>({} as reponse);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const generateContent = async (props: GenerateContentProps) => {
    setLoading(true);
    setError(null);

    const { type_product, use_product, type_product_current, token } = props;

    const promptMessageEs = `Genera una lista de articulos del tipo ${type_product}, adecuados para ${use_product}, con un presupuesto de ${type_product_current} pesos colombianos. Quiero que devuelvas el resultado en formato JSON con la siguiente estructura:
    {
    PrecioMaximo: "Precio del producto en formato numérico, dentro del presupuesto especificado"
    PrecioMinimo: "Precio del producto en formato numérico, dentro del presupuesto especificado"
    Articulos :[
      {
        "nombreLargo": "Un nombre detallado del producto",
        "nombreCorto": "Un nombre conciso del producto",
        "precio": "Precio del producto en formato numérico, dentro del presupuesto especificado",
        "descripcion": "Descripción basada en el uso previsto",
        "propiedades": {
          "key1": "value1",
          "key2": "value2",
          ...
        }
      },
      {
        "nombreLargo": "Otro nombre de producto",
        "nombreCorto": "Otro nombre conciso",
        "precio": "Otro precio",
        "descripcion": "Descripción basada en el uso previsto",
        "propiedades": {
          "key1": "value1",
          "key2": "value2",
          ...
        }
      }
    ]
  }
incluye 10 Articulos.  Solo, y Solo dame El Json que te pedi, sin incluir mas texto.
`;

    try {
      const genAI = new GoogleGenerativeAI(token);
      const model = genAI.getGenerativeModel({ model: MODEL_CURRENT });
      const result = await model.generateContent(promptMessageEs);
      const response = await result.response;
      const rawText = response.text();

      // Remover el bloque de código si está presente
      const cleanedText = rawText.replace(/```json|```/g, "").trim();
      console.log("Cleaned Text:", cleanedText);

      try {
        //Convertir el texto JSON en un objeto JavaScript
        const jsonData = await JSON.parse(cleanedText);
        setData(jsonData);
        console.log("Parsed JSON:", jsonData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }

      /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, generateContent };
};
