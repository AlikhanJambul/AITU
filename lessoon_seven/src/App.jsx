import './App.css'
import './reset.css'
import ProductCard from './components/Product_card/Product_card.jsx'

function App() {
  const products = [{
    name: "Apple",
    price: "200tg",
    description: "An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples have been grown for thousands of years in Eurasia and were introduced to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.",
    isAvailable: true
  },
  {
    name: "Banana",
    price: "250tg",
    description: "A banana is an elongated, edible fruit – botanically a berry[1] – produced by several kinds of large treelike herbaceous flowering plants in the genus Musa. In some countries, cooking bananas are called plantains, distinguishing them from dessert bananas. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a peel, which may have a variety of colors when ripe. It grows upward in clusters near the top of the plant.", 
    isAvailable: false
  },
  {
    name: "Orange",
    price: "180tg",
    description: "The orange, also called sweet orange to distinguish it from the bitter orange (Citrus × aurantium), is the fruit of a tree in the family Rutaceae. Botanically, this is the hybrid Citrus × sinensis, between the pomelo (Citrus maxima) and the mandarin orange (Citrus reticulata). The chloroplast genome, and therefore the maternal line, is that of pomelo. There are many related hybrids including of mandarins and sweet orange. The sweet orange has had its full genome sequenced.",
    isAvailable: true
  }
]
  
    

  return (
    <div className="product-cards-grid">
        {products.map((product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            description={product.description}
            isAvailable={product.isAvailable}
          />
        ))}
      </div>
  )
}

export default App
