import "./card.css";

interface CardProps {
    price: number,
    name: string,
    img_url: string
}

export function Card({price, name, img_url} : CardProps) {
    return (
        <div className="card">
            <img src={img_url}/>
            <h2>{name}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}