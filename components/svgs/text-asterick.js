import { motion } from 'framer-motion';

function TextAsterik(props) {
	const spinningAnimation = {
		initial: {
			rotate: 0,
		},
		animate: {
			rotate: 360,
			transition: {
				duration: 20,
				repeat: Infinity,
				ease: 'linear',
			},
		},
	};

	return (
		<motion.svg
			width={props.width || '36'}
			height={props.height || '35'}
			viewBox='0 0 36 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			initial='initial'
			animate='animate'
			variants={spinningAnimation}
		>
			<path
				id='Path 15820'
				d='M17.3314 1.5H15.779L15.8324 3.05151L16.1953 13.6007L6.75609 7.99163L5.48685 7.2374L4.71264 8.49448L3.7231 10.1012L2.87224 11.4827L4.31622 12.2227L13.9672 17.1688L4.31659 22.115L2.87269 22.855L3.72365 24.2365L4.71331 25.8432L5.48764 27.1003L6.75682 26.3461L16.1955 20.7368L15.8335 31.286L15.7802 32.8375H17.3326H19.3118H20.8643L20.8109 31.286L20.4483 20.7462L29.8066 26.3439L31.0773 27.104L31.8538 25.8432L32.8433 24.2365L33.6941 22.8551L32.2503 22.115L22.5998 17.1688L32.2499 12.2227L33.6932 11.4829L32.843 10.1016L31.8541 8.49492L31.0778 7.23356L29.8067 7.99381L20.448 13.5915L20.8098 3.05151L20.8631 1.5H19.3106L17.3314 1.5Z'
				fill='white'
				stroke='white'
				stroke-width='3'
			/>
		</motion.svg>
	);
}

export default TextAsterik;
