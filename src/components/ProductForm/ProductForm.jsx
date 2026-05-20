import React, { useState } from 'react'
import { validateProduct, isValidProduct } from '../../utils/validation'
import './ProductForm.css'

const CATEGORIES = [
	'Молочные продукты',
	'Овощи и фрукты',
	'Мясо и рыба',
	'Хлеб и выпечка',
	'Напитки',
	'Сладости',
	'Бакалея',
	'Другое',
]

const ProductForm = ({ onAdd }) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [category, setCategory] = useState('')
	const [errors, setErrors] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault()

		const validationErrors = validateProduct(title, amount, category)
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors)
			return
		}

		onAdd({
			title: title.trim(),
			amount: Number(amount),
			category,
		})

		setTitle('')
		setAmount('')
		setCategory('')
		setErrors({})
	}

	const handleChange = (e) => {
		const { name, value } = e.target

		if (name === 'title') setTitle(value)
		if (name === 'amount') setAmount(value)
		if (name === 'category') setCategory(value)

		const currentTitle = name === 'title' ? value : title
		const currentAmount = name === 'amount' ? value : amount
		const currentCategory = name === 'category' ? value : category

		const allErrors = validateProduct(
			currentTitle,
			currentAmount,
			currentCategory,
		)

		setErrors((prev) => ({
			...prev,
			[name]: allErrors[name],
		}))
	}

	const isFormValid = isValidProduct(title, amount, category)

	return (
		<section className="form-section">
			<form className="product-form" onSubmit={handleSubmit}>
				<h2 className="form-title">Добавить продукт</h2>

				<div className="form-group">
					<label className="form-label">Название продукта</label>
					<input
						type="text"
						name="title"
						className={`form-input ${errors.title ? 'error' : ''}`}
						value={title}
						onChange={handleChange}
						placeholder="Например: Молоко"
					/>
					{errors.title && (
						<span className="error-text">{errors.title}</span>
					)}
				</div>

				<div className="form-row">
					<div className="form-group">
						<label className="form-label">Количество</label>
						<input
							type="number"
							name="amount"
							className={`form-input ${errors.amount ? 'error' : ''}`}
							value={amount}
							onChange={handleChange}
							placeholder="2"
							min="1"
						/>
						{errors.amount && (
							<span className="error-text">{errors.amount}</span>
						)}
					</div>

					<div className="form-group">
						<label className="form-label">Категория</label>
						<select
							name="category"
							className={`form-select ${errors.category ? 'error' : ''}`}
							value={category}
							onChange={handleChange}
						>
							<option value="">Выберите категорию</option>
							{CATEGORIES.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>
						{errors.category && (
							<span className="error-text">
								{errors.category}
							</span>
						)}
					</div>
				</div>

				<button
					type="submit"
					className={`submit-btn ${!isFormValid ? 'disabled' : ''}`}
					disabled={!isFormValid}
				>
					Добавить продукт
				</button>
			</form>
		</section>
	)
}

export default ProductForm
