import { Component } from "react";
import SHOP_DATA from "./shop-data";
import PreviewCollection from "../../components/preview-collections/PreviewCollection";
class Shop extends Component {
  constructor(props) {
    // pass props in super when we want to access this.props in constuctor
    super(props);
    console.log(this.props)
    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const { collections } = this.state
    return <div className="shop-page">
      {
        collections.map(({ id, ...otherCollectionProps }) => <PreviewCollection key={id} {...otherCollectionProps} />)
      }
    </div>
  }
}
export default Shop