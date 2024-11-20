export const Links = (text: string) => {
  return (
    <a
      href={
        "https://www.linio.com.co/search?scroll=&q=" + text.replace(" ", "+")
      }
      target={"_blank"}
    >
      Links
    </a>
  );
};
