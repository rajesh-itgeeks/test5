import React, { useEffect, useState } from "react";
import { FaStar as Star } from "react-icons/fa";

const colors = {
	pink: "#FCBF02;",
	grey: "#D0D5DD",
};

const RatingStars = ({ rating }) => {

	const [currentValue, setCurrentValue] = useState(rating);
	const stars = Array(5).fill(0);
	const fullStars = Math.floor(currentValue);
	const halfStar = currentValue - fullStars >= 0.5 ? 1 : 0;
	useEffect(() => {
		setCurrentValue(rating);
	}, [rating]);

	const renderStar = (index) => {
		const starValue = index + 1;
		let starColor = colors.grey;
		if (rating >= starValue) {
			starColor = colors.pink;
		} else if (rating > starValue - 1) {
			// Check if the current star should be half filled
			// Render the star with a clip-path based on the fractional part
			let fractionalPart = rating - (starValue - 1);
			if (fractionalPart <= 0.5) {

				fractionalPart = 0.5;
			} else {
				fractionalPart = 1;
			}

			starColor = colors.pink;
			return (
				<div

					key={index}
					style={{
						marginRight: 6,
						cursor: "default",
						position: "relative",
						height: '1.625rem',
						width: '1.625rem'
					}}
				>
					<Star
						color={colors.grey}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							height: '1.625rem',
							width: '1.625rem'
						}}
					/>
					<Star
						color={starColor}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							clipPath: `inset(0 ${100 - fractionalPart * 100}% 0 0)`,
							height: '1.625rem',
							width: '1.625rem'
						}}
					/>
				</div>
			);
		}
		return (
			<Star
				className="h-[20px] w-[20px]"
				key={index}
				size={18}
				color={starColor}
				style={{
					marginRight: 4,
					cursor: "default",
				}}
			/>
		);
	};

	return (
		<div className="flex">{stars.map((e, index) => renderStar(index))}</div>
	);
};

export default RatingStars;
