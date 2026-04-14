export default function ProductCard(props) {
    const handleAddToCart = () => {
        alert("Add to cart is pressed")
    }

    return (
        <div className="card">
            <img
                src={props.imageUrl}
                className="card-img-top"
                alt="Product 1"
            />
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text">${props.price}</p>
                <a href="#" className="btn btn-primary" onClick={props.handleAddToCart}>Add to Cart</a>
            </div>
        </div>
    )
}