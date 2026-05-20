import { useState } from 'react'
import { useProductsStorage } from './useLocalStorage'

export const useProducts = () => {
	const [products, setProducts] = useProductsStorage()

	const addProduct = (product) => {
		const newProduct = {
			...product,
			id: crypto.randomUUID(),
			isBought: false,
		}
		setProducts((prev) => [newProduct, ...prev])
	}

	const toggleProduct = (id) => {
		setProducts((prev) =>
			prev.map((p) =>
				p.id === id ? { ...p, isBought: !p.isBought } : p,
			),
		)
	}

	const deleteProduct = (id) => {
		setProducts((prev) => prev.filter((p) => p.id !== id))
	}

	const getStats = () => {
		const total = products.length
		const bought = products.filter((p) => p.isBought).length
		return {
			total,
			bought,
			remaining: total - bought,
		}
	}

	return {
		products,
		addProduct,
		toggleProduct,
		deleteProduct,
		getStats,
	}
}
