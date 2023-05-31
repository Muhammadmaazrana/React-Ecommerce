import { useProductContext } from "./context/ProductContext"
import Product from "./Product";
function FeatureProducts() {
    const {isLoading ,featureProducts}=useProductContext();

    if(isLoading){
    return <div>..........Loading</div>
}
    return (
    <div className="container">
      <h3>Check Now!</h3>
      <h2>Our Featured Service</h2>
      <div className="card1">
        {
            featureProducts.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}/>
            })
        }
      </div>
    </div>
  )
}

export default FeatureProducts
