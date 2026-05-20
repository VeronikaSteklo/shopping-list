import React from 'react'
import './EmptyState.css'

const EmptyState = () => {
	return (
		<div className="empty-state">
			<svg
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
			>
				<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
			</svg>
			<h3>Список продуктов пуст</h3>
			<p>Добавьте первый продукт</p>
		</div>
	)
}

export default EmptyState
