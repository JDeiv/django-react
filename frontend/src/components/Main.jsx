import React, { useState } from 'react';
import {Link} from 'react-router-dom';
//Importamos la api.js dela conexion con la base de datos
import { useGetProductsQuery, useDeleteProductMutation } from '../services/api';

import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

export const List = () => {

    const { data: crud, error, isLoading } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id).unwrap();
            // No es necesario recargar ni actualizar el estado manualmente, Redux lo hace por ti
        } catch (error) {
            console.error("Error al eliminar el producto", error);
        }
    }


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Oh no, there was an error</p>;
    return (
        <>


            <div className='p-4'>
                <h1 className="text-2xl font-bold mb-4">Product List</h1>
                <Link to="/create"><button type='button' className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Agregar Nuevo</button></Link>
                <div className='flex flex-col gap-6 justify-center border m-4'>
                    {crud.map((product) => (
                        <div key={product.id} className='grid grid-cols-4  items-center justify-center border gap-4 px-4 py-2 h-full font-semibold text-left'>
                            <h1 className=" p-2 ">{product.id}</h1>
                            <h2 className=" p-2 ">{product.name}</h2>
                            <p className='text-semibold col-span-1'>{product.description}</p>
                            <div className=" p-2 flex items-center justify-center gap-2">
                                <Link to='/update' state={product}>
                                    <button
                                        className="rounded-lg bg-yellow-500 text-white px-2 py-1 flex items-center">
                                        <GrUpdate className='m-1' />   Update
                                    </button></Link>
                                <button
                                    className="rounded-lg bg-red-500 text-white px-2 py-1 flex items-center m-1"
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    <MdDeleteForever /> Delete
                                </button>
                            </div>

                        </div>
                    ))}


                </div>
            </div>

        </>

    )
}
