import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') {
			return initialValue
		}
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			return initialValue
		}
	})

	const setValue = (value) => {
		try {
			setStoredValue(value)
			window.localStorage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.log(error)
		}
	}

	return [storedValue, setValue]
}

export const useProductsStorage = () => {
	const [products, setProducts] = useLocalStorage('shoppingProducts', [])
	return [products, setProducts]
}
