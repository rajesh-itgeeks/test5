import React from 'react';
import style from './ingredients.module.scss';
import CheckVerified from '../../svgs/check-verified';

function Ingredients({ data }) {
	return (
		<div className={style.ingredients}>
			<div className={style.ingredientBody}>
				<span className='ingredientNo'> {data.after_taste}</span>
				<span className='ingredientText'>Aftertaste</span>
			</div>
			<div className={style.ingredientBody}>
				<span className='ingredientNo'> {data.sugar}</span>
				<span className='ingredientText'>Added Sugar</span>
			</div>
			<div className={style.ingredientBody}>
				<span
					className={`${style.rotate15} ingredientText`}
				>
					Just
				</span>
				<span className='ingredientNo'> {data.calories}</span>
				<span className='ingredientText'>Calories</span>
			</div>
			<div className={style.ingredientBody}>
				<span className='ingredientNo'> {data.super_ingredients}</span>
				<span className='ingredientText'>Super Ingredients</span>
			</div>
			<div className={style.ingredientBody}>
				<CheckVerified />
				<span className='ingredientText' style={{ paddingTop: '10px' }}>
					Antioxidants
				</span>
			</div>
		</div>
	);
}

export default Ingredients;
