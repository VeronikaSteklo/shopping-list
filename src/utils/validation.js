export const validateProduct = (title, amount, category) => {
	const errors = {}

	if (!title?.trim()) {
		errors.title = 'Введите название продукта'
	} else if (title.trim().length < 2) {
		errors.title = 'Минимум 2 символа'
	}

	if (!amount) {
		errors.amount = 'Укажите количество'
	} else if (Number(amount) <= 0) {
		errors.amount = 'Должно быть больше 0'
	}

	if (!category) {
		errors.category = 'Выберите категорию'
	}

	return errors
}

export const isValidProduct = (title, amount, category) => {
	return title?.trim().length >= 2 && Number(amount) > 0 && category
}
