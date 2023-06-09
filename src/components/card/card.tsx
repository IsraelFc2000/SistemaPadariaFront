import "./card.css"

interface CardProps{
        salePrice: number,
        name: string,
        image: string
}

export function Card( {salePrice, name, image }: CardProps){
    return (
        <div className="card">
            <img src={image}/>
            <h2>{name}</h2>
            <p><b>Valor: R$</b>{salePrice}</p>
        </div>
        )
}