import { useParams } from "react-router-dom";

function Product() {
    const {productID} = useParams();

    return (
        <>
            <h1>PRODUCT ID: {productID}</h1>
        </>
    )
}

export default Product;