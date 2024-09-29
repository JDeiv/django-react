import {useState} from 'react'
import { useLocation } from 'react-router-dom';

import { useUpdateProductMutation } from '../services/api';



const UpdatePage = () => {

    const location = useLocation(); //Recuperamos too el producto parausar sus propiedades
    const product = location.state || {} 

    const [name, setName] = useState(product.name || '');;
    const [description, setDescription] = useState(product.description || '');
    const [price, setPrice] = useState(product.price || '');

    const [updateProduct,  { isLoading }] = useUpdateProductMutation();

    const onSave = async (e) => {
        e.preventDefault();
        try {
            await updateProduct({ 
                id: product.id, // Incluimos el ID del producto creado
                name: name || product.name,
                description:description || product.description,
                price: parseFloat(price)|| product.price,
             }).unwrap();
            alert('Producto actualizado');
        } catch (err) {
            alert('Error al actualizar el producto');
        }
    }
    if (!product.id) {
        return <div>Producto no encontrado</div>;
    }


  return (
    <>
    <div><h1 className='uppercase text-center font-bold text-xl'>Actualizar Producto</h1></div>
    <div className='flex gap-2 items-center justify-center p-1 m-2  '><h2 className='text-gray-500 font-bold border-b shadow-lg p-2'>Nombre: {product.name} - ID: {product.id}</h2></div>
    <form onSubmit={onSave} className="w-full max-w-sm m-auto">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" >
              Nombre del producto
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)} // Guardamos el nombre del producto
            
            
             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"  />
            
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" >
              Descripción
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea 
           value={description}
           onChange={(e) => setDescription(e.target.value)} // Guardamos el precio del producto
           
           
            rows="3" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-semibold border-2 rounded-md">
            <input 
            value={price}
            onChange={(e) => setPrice(e.target.value)} // Guardamos el precio del producto
            
            
            className="mr-2 leading-tight text-lg p-1" type="number" step="0.01"/>
            
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button type="submit" disabled={isLoading} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
              {isLoading ? 'Actualizando...' : 'Actualizar Producto'}
            </button>
            
          </div>
        </div>
      </form>
    </>
  )
}

export default UpdatePage