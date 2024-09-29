import axios from 'axios';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//CONFIGURACION DE REDUX TOOLKIT QUERY


const API_URL = 'http://localhost:8000/api/v1/';

    // export const listAll = async () => {

    //     //Creamos una variable para llamar a Axios y con la propiedad .get solicitar todos los datos almacenados
    //     const response = await  axios.get(API_URL);
    //     return response.data;
    // }

    //Creamos una variable para llamar a Axios y con la propiedad .get solicitar todos los datos almacenados 
    // const response = axios.get('http://localhost:8080/api/v1/crud/'); 
    
    //return response; //Retornamos la variable cargada de datos

    export const apiSlice = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: API_URL }), // URL DE LA API BACKEND
        endpoints: (builder) => ({
          getProducts: builder.query({
            query: () => '/product', // Ruta para obtener productos
            providesTags: ['Product'], // Aquí se proporcionan los productos bajo el tag 'Product'
          }),
          addProduct: builder.mutation({
            query: (newProduct) => ({
              url: '/product/',
              method: 'POST',
              body: newProduct,
            }),
            invalidatesTags: ['Product'],
          }), //query para agregar un producto
          updateProduct: builder.mutation({
            query: (updatedProduct) => ({
              url: `product/${updatedProduct.id}/`,
              method: 'PUT',
              body: updatedProduct,
            }),
            invalidatesTags: ['Product'],
          }),

          deleteProduct: builder.mutation({
            query: (id) => ({
              url: `/product/${id}/`,
              method: 'DELETE',
            }),
            invalidatesTags: ['Product'],
          }),//query paraeliminar un producto
        }),
      });
      
      export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation  } = apiSlice;