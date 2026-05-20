import React from 'react'
import './ProductItem.css'

const ProductItem = ({ product, onToggle, onDelete }) => {
	return (
		<li className={`product-item ${product.isBought ? 'bought' : ''}`}>
			<div className="product-info">
				<h3 className="product-title">{product.title}</h3>
				<div className="product-meta">
					<span className="product-amount">
						Количество: {product.amount}
					</span>
					<span className="product-category">{product.category}</span>
				</div>
			</div>

			<div className="product-actions">
				<button
					className={`action-btn toggle-btn ${product.isBought ? 'active' : ''}`}
					onClick={() => onToggle(product.id)}
					aria-label={
						product.isBought
							? 'Отметить как не купленное'
							: 'Отметить как купленное'
					}
				>
					{product.isBought ? (
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline points="20 6 9 17 4 12" />
						</svg>
					) : (
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<circle cx="12" cy="12" r="10" />
						</svg>
					)}
					<span>{product.isBought ? 'Куплено' : 'Купить'}</span>
				</button>

				<button
					className="action-btn delete-btn"
					onClick={() => onDelete(product.id)}
					aria-label="Удалить продукт"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<polyline points="3 6 5 6 21 6" />
						<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
					</svg>
				</button>
			</div>
		</li>
	)
}

export default ProductItem
