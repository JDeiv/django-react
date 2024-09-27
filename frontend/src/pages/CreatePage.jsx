import { useState } from 'react';
import { useAddProductMutation } from '../services/Api';

const CreatePage = () => {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [addProduct] = useAddProductMutation();


  const onSave = async(e) => {
    e.preventDefault(); //evitamosque serecarguela pagina
    try {
      await addProduct({ name, description, price }).unwrap(); //añadimos elproducto
      alert('Producto creado'); //capturamoslos errores del servidor
    } catch (err) {
      alert('Error al crear el producto');
    }
    }
  
 

  return (
    <>
    <div>
    <h1 className='font-bold text-center p-4 uppercase'>Crear nuevo Producto</h1>
    </div>

      <form onSubmit={onSave} className="w-full max-w-sm p-4 border-r border-l border-b shadow-2xl m-auto">
      
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Nombre del Producto
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)} // Guardamos el nombre del producto
            placeholder="Nombre del producto"
            required
             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  />
            
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
              Descripción
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea 
           value={description}
           onChange={(e) => setDescription(e.target.value)} // Guardamos el precio del producto
           placeholder="Descripción del producto"
           required
            rows="3" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input 
            value={price}
            onChange={(e) => setPrice(e.target.value)} // Guardamos el precio del producto
            placeholder="Precio del producto"
            required
            className="text-lg border rounded-md py-1 " type="number" step="0.01"/>
            
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CreatePage