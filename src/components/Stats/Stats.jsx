import React from 'react'
import './Stats.css'

const Stats = ({ stats }) => {
	return (
		<section className="stats-section">
			<div className="stats-container">
				<div className="stat-card">
					<div className="stat-value">{stats.total}</div>
					<div className="stat-label">Всего продуктов</div>
				</div>
				<div className="stat-card bought">
					<div className="stat-value">{stats.bought}</div>
					<div className="stat-label">Куплено</div>
				</div>
				<div className="stat-card remaining">
					<div className="stat-value">{stats.remaining}</div>
					<div className="stat-label">Осталось купить</div>
				</div>
			</div>
		</section>
	)
}

export default Stats
