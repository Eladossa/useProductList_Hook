import { useState, useEffect } from "react";

export default function useProductList() {
  const [productList, setProductObjsList] = useState([]);
  let randomProducts = [];

  const fetchData = () =>
    new Promise(() => {
      fetch("www.bbc.co.uk")
        .then((response) => response.text())
        .then(
          (xml) =>
            new window.DOMParser().parseFromString(xml, "text/xml")
              .documentElement.firstChild.textContent
        )
        .then((data) => {
          console.log(data);
          setProductObjsList(data);
          return data;
        })
        .catch((e) => console.error("Critical failure: " + e.message));
    });

  const randomProduct = (productObjectList) => {
    console.log("randomProduct()", productObjectList);
  };

  useEffect(() => {
    fetchData().then((result) => randomProduct(result));
  }, []);

  return randomProducts;
}
