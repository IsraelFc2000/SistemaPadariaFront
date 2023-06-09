import { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/useProductDataMutate";
import { ProductData } from "../../interface/ProductData";

import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps{
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal({closeModal}: ModalProps){

    const [name, setTitle] = useState("");
    const [salePrice, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading }= useProductDataMutate();

    const submit = () => {
        const productData: ProductData = {
            name, 
            salePrice,
            image
            
        }
        mutate(productData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
               <h2>Cadastre um Novo Produto</h2> 
               <form className="input-container">
                    <Input label="title" value={name} updateValue={setTitle}/>
                    <Input label="price" value={salePrice} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
               </form>
               <button onClick={submit} className="btn-secondary">
               {isLoading ? 'adicionando...' : 'Adicionar'}
                </button>
            </div>
        </div>
    )
}