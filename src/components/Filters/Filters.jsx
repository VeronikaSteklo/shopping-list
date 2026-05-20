import React from 'react'
import './Filters.css'

const Filters = ({ filter, setFilter, search, setSearch }) => {
	const filters = [
		{ id: 'all', label: 'Все' },
		{ id: 'bought', label: 'Купленные' },
		{ id: 'notBought', label: 'Не купленные' },
	]

	return (
		<section className="filters-section">
			<div className="filters-container">
				<div className="filter-buttons">
					{filters.map((f) => (
						<button
							key={f.id}
							className={`filter-btn ${filter === f.id ? 'active' : ''}`}
							onClick={() => setFilter(f.id)}
						>
							{f.label}
						</button>
					))}
				</div>
				<div className="search-container">
					<input
						type="text"
						className="search-input"
						placeholder="Поиск по названию..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<svg
						className="search-icon"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.35-4.35" />
					</svg>
				</div>
			</div>
		</section>
	)
}

export default Filters
