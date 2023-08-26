
export default function  Fruits(fruit)
{
    const {name,color,qt,fresh,pricePerPiece} ={...fruit}; //{ }
    return (
        <div>
            <h1>Fruites</h1>

            <p>Fruit fresh: {name}</p>
            <p>Color: {color} </p>
            <p><b>Quantity: </b>  {qt +5}</p>
            <p>Fresh: {fresh ? "fresh" :"Not fresh"}</p>
            <p>price: {pricePerPiece}</p>
        </div>
        )
}



