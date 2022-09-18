import React from 'react'
import './previewCollection.style.scss'
import CollectionItem from '../collection-item/CollectionItems'

export default function PreviewCollection({ items, title }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>
        {title}
      </h1>
      <div className='preview'>
        {items
          .filter((item, id) => id < 4)
          .map(({ id, ...otherItemProps }) => <CollectionItem key={id} {...otherItemProps} />)
        }
      </div>
    </div>
  )
}
