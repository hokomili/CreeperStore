import jsonInfo from "../json/jsonInfo.json";

export const getTitle = url => {
   const json = jsonInfo.find(
     x => x.url === url
   );
   return json?json.title:"Hello Firework";
 }
 export const getName = url => {
  const json = jsonInfo.find(
    x => x.url === url
  );
  return json?json.name:"allProducts";
}
