interface ProductCardProps {
    title: string,
    price: number,
    inStock: boolean
}


export const ProductCard: React.FC<ProductCardProps> = ({title, price, inStock}) => {
    return (
        <>
        <h1>The product name: {title}</h1>
        <h3>Price of the product: {price == 1 && "Free"} rs</h3>
        <h3>Is avilable in stock: {inStock ? "Yes" : "No"}</h3>
        </>
    )
}