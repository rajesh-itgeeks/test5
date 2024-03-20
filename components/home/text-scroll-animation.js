import { Tween, ScrollTrigger } from 'react-gsap';
import style from './text-scroll-animation.module.scss';
import { useRef, useEffect } from 'react';
import Button from '../Button';
import SpinningAsterisk from '../svgs/spinning-asterisk';
import Asterisk from '../svgs/black-asterick-svg';
import animateWords from '../ui/animate-words';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../ui/animations';
import ProductsRelated from '../product-single/products-related';

function TextScrollAnimation({ data }) {
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef.current) {
			animateWords(containerRef);
		}
	}, []);

	const ContentContain = () => {
		return (
			<>
				<h3 className={`productTitle ${style.leadin}`}>
					WELCOME TO LFG ENERGY
				</h3>
				<h2 className={`${style.mainTitle} productText`}>
					Products That give A{' '}
					<span>
						f
						<span>
							<Tween
								to={{
									rotate: 360,
									scrollTrigger: {
										trigger: '.outer',
										start: `center center`,
										end: `bottom bottom`,
										endTrigger: '.endTrigger',
										scrub: 1,
									},
								}}
							>
								<div className={style.extraSpin}>
									<SpinningAsterisk />
								</div>
							</Tween>
						</span>
						ck
					</span>
				</h2>
				<p className={style.bodyText}>
					We crafted clean products with Beta-Alanine and Maca for sustained
					physical and mental endurance. Life is complicated, our energy drink
					isn't—5 super ingredients, zero sugar, zero after-taste.
				</p>
			</>
		);
	};

	return (
		<section className={style.textScrollAnimation}>
			<div className={`endTrigger ${style.container}`}>
				<div className={style.desktopContain}>
					<div className={`outer ${style.pinParent}`}>
						<div className={style.innerPin} ref={containerRef}>
							<ContentContain />
						</div>
					</div>
				</div>

				<div className={style.asterick}>
					<Asterisk />
				</div>
			</div>
			<ProductsRelated data={data} noBgStar hideTitle />
			<div className={style.badgesContainer}>
				<div className={style.valuePropBadges}>
					<div className={style.badgeContain}>
						<img src={`/images/value-prop-badges/value-prop-badge1.svg`} />
					</div>
					<div className={style.badgeContain}>
						<img src={`/images/value-prop-badges/value-prop-badge2.svg`} />
					</div>
					<div className={style.badgeContain}>
						<img src={`/images/value-prop-badges/value-prop-badge4.svg`} />
					</div>
					<div className={style.badgeContain}>
						<img src={`/images/value-prop-badges/value-prop-badge3.svg`} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default TextScrollAnimation;
