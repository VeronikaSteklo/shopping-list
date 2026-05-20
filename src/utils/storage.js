export const storage = {
	getProducts: () => {
		const data = localStorage.getItem('shoppingProducts')
		return data ? JSON.parse(data) : []
	},

	saveProducts: (products) => {
		localStorage.setItem('shoppingProducts', JSON.stringify(products))
	},

	getTheme: () => {
		return localStorage.getItem('shoppingTheme') || 'light'
	},

	saveTheme: (theme) => {
		localStorage.setItem('shoppingTheme', theme)
	},
}
