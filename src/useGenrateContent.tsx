import { useState } from "react";

export interface GenerateContentProps {
  name_user: string;
  token: string;
  type_product: string;
  use_product: string;
  type_product_current: string;
}
export const useGenerateContent = () => {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const generateContent = async (props: GenerateContentProps) => {
    setLoading(true);
    setError(null);

    const { type_product, use_product, type_product_current, token } = props;

    // Crear el prompt usando las propiedades proporcionadas
    const promptMessage = `Generate a list of products of type ${type_product}, suitable for ${use_product}, with a budget of ${type_product_current}. I want you to return the result in JSON format with the following structure:

[
  {
    "long_name": "A detailed product name",
    "short_name": "A concise product name",
    "price": "Product price in numeric format, within the specified budget",
    "image_url": "A valid URL pointing to the product image",
    "description": "Description based on its intended use",
    "attributes": {
      "key1": "value1",
      "key2": "value2",
      ...
    }
  },
  {
    "long_name": "Another product name",
    "short_name": "Another concise name",
    "price": "Another price",
    "image_url": "Another image URL",
    "description": "Description based on its intended use",
    "attributes": {
      "key1": "value1",
      "key2": "value2",
      ...
    }
  }
]`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro-latest:generateContent?key=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: promptMessage,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      const rawText = result.candidates[0].content.parts[0].text;

      // Remover el bloque de código si está presente
      const cleanedText = rawText.replace(/```json|```/g, '').trim();

      try {
        // Convertir el texto JSON en un objeto JavaScript
        const jsonData = await JSON.parse(cleanedText);
        setData(jsonData)
        console.log('Parsed JSON:', jsonData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }


    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, generateContent };
};

