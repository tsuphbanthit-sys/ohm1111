const ProductCard = ({ name, price, category, image, stock, bestSeller }) => {
  return (
    <div className="product-card">
      {bestSeller && <span className="best-seller-badge">🔥 สินค้าขายดี</span>}
      <img src={image} alt={name} className="product-image" />
      
      <div className="product-content">
        <h2>{name}</h2>
        <p className="category">Categories: {category}</p>
        <p className="price">Price: {price} บาท</p>
        <p className="stock">Stock: {stock} ชิ้น</p>
        <span className="ready-badge">✅ พร้อมขาย</span>
      </div>
    </div>
  )
}

export default ProductCard