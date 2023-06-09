import { useState } from 'react'
import './App.css'
//import { ProductData } from './interface/ProductData';
import { Card } from './components/card/card';
import { useProductData } from './hooks/useProductData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const {data} = useProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () =>{
    setIsModalOpen( prev => !prev)
  }

  return (

      <div className="container">
        <h1>Produtos Em Estoque</h1>
        <div className="card-grid">
          {data?.map(productData => 
          <Card 
              salePrice={productData.salePrice} 
              name={productData.name} 
              image={productData.image}/>
            )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
      </div>
      
    
  )
}

export default App
