import { thisTypeAnnotation } from '@babel/types';
import { timesSeries } from 'async';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';
import React from 'react';


class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id}  {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }

}

export default ShopPage