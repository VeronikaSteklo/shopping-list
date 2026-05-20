import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import EmptyState from '../EmptyState/EmptyState'
import './ProductList.css'

const ProductList = ({ products, onToggle, onDelete }) => {
	if (products.length === 0) {
		return <EmptyState />
	}

	return (
		<ul className="products-list">
			{products.map((product) => (
				<ProductItem
					key={product.id}
					product={product}
					onToggle={onToggle}
					onDelete={onDelete}
				/>
			))}
		</ul>
	)
}

export default ProductList
