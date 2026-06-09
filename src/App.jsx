import products from './data/products'
import ProductCard from './assets/components/ProductCard'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1 className="title">My Fashion Store</h1>
      <p className="subtitle">ร้านขายสินค้าแฟชั่นและเสื้อผ้าคุณภาพดี</p>

      <div className="product-list">
        {products.map((prod) => (
          <ProductCard 
            key={prod.id} 
            name={prod.name} 
            price={prod.price} 
            category={prod.category} 
            image={prod.image}
            stock={prod.stock}
            bestSeller={prod.bestSeller}
          />
        ))}
      </div>
    </div>
  )
}

export default App