import React from "react"
import { useGlobalContext } from "./Context";
import {useQuery, useQueryClient} from '@tanstack/react-query'
import customFetch from "./utils";
import { useEffect } from "react";

const Gallery = () => {
  const {searchTerm} = useGlobalContext();
  
  const queryClient = useQueryClient()

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['imgData', searchTerm],
    queryFn: () =>
      customFetch.get(`&query=${searchTerm}`),
  })

  if(isLoading){
    console.log("loadingoccured");
    return <>Loading...</>
  }
  // if(error){
  //   console.log(error.response.data);
  //   return <>{error.response.data}</>
  // }
  if(isError){
    console.log("errroroccured");

    return <>Ther is an error...</>
  }

  console.log(data.data);
  const results = data.data.results;

  if(results.length < 1){
    return <>No result found...</>
  }
  
  return (
    <section className="img-container">
      {results.map((item, index) => {
        const url = item?.urls?.regular
        return (
          <div key={index} className="img-block">
            <img
              src={url}
              key={item.id}
              alt={item.alt_description}
              className="img"
            ></img>
          </div>
        )
      })}
    </section>
  )
}
export default Gallery

