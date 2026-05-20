import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Stats from './components/Stats/Stats'
import Filters from './components/Filters/Filters'
import ProductForm from './components/ProductForm/ProductForm'
import ProductList from './components/ProductList/ProductList'
import { useProducts } from './hooks/useProducts'
import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
	const { products, addProduct, toggleProduct, deleteProduct, getStats } =
		useProducts()
	const [filter, setFilter] = useState('all')
	const [search, setSearch] = useState('')
	const [theme, setTheme] = useLocalStorage('shoppingTheme', 'light')

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	const filteredProducts = products.filter((product) => {
		const matchesFilter =
			filter === 'all' ||
			(filter === 'bought' && product.isBought) ||
			(filter === 'notBought' && !product.isBought)

		const matchesSearch = product.title
			.toLowerCase()
			.includes(search.toLowerCase())

		return matchesFilter && matchesSearch
	})

	return (
		<div className={`app ${theme}`}>
			<Header theme={theme} toggleTheme={toggleTheme} />

			<main className="main-content">
				<Stats stats={getStats()} />

				<ProductForm onAdd={addProduct} />

				<Filters
					filter={filter}
					setFilter={setFilter}
					search={search}
					setSearch={setSearch}
				/>

				<section className="list-section">
					<ProductList
						products={filteredProducts}
						onToggle={toggleProduct}
						onDelete={deleteProduct}
					/>
				</section>
			</main>

			<footer className="app-footer">
				<p>© 2026 Список продуктов. Все права защищены.</p>
			</footer>
		</div>
	)
}

export default App
