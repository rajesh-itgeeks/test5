import { useState, useEffect, useRef } from 'react';
import ProductCard from '../product-overview/product-overview-card';
import s from './products-related.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowCircleSVG from '../svgs/uparrow';
// Fisher-Yates (aka Knuth) Shuffle Algorithm
function shuffle(array) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function ProductsRelated({ data, currentProductID, noBgStar, hideTitle }) {
	const [shuffledProducts, setShuffledProducts] = useState([]);
	const carouselRef = useRef(null)
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleNext = () => {
		carouselRef.current.slickNext();
	  };
	
	  const handlePrev = () => {
		carouselRef.current.slickPrev();
	  };
	useEffect(() => {
		let shuffled = shuffle(data?.collection?.products?.nodes);
		setShuffledProducts(shuffled);
	}, [data]);

	const [settings] = useState({
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		beforeChange: (current, next) => setCurrentSlide(next),
		autoplay: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 800,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				}
			},
		]
	});


	function NextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, visibility: 'hidden', background: "green", }}
				onClick={onClick}
			>
				<div className={'accentArrow'} style={{ visibility: 'visible', rotate: '90deg', marginTop: '-50px' }}>
					<ArrowCircleSVG color="#FFFFFF" width='64' height='64' />
				</div>
			</div>
		);
	}

	function PrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, visibility: 'hidden', background: "green", marginLeft: '-10px' }}
				onClick={onClick}
			>
				<div className={'accentArrow'} style={{ visibility: 'visible', rotate: '-90deg' }}>
					<ArrowCircleSVG color="#FFFFFF" width='64' height='64' />
				</div>
			</div>
		);
	}
	const slideItems = !currentProductID ? shuffledProducts :shuffledProducts
	.filter(
		(prod) => prod?.id !== currentProductID && !prod.hide_product,
	) 
	return (
		<section className={`${s.productsRelated} ${noBgStar ? s.transparentBg : s.coloredBg}`}>
			{!noBgStar && <img className={s.bgStar} alt="Bg-Star" src='/images/large-star-right.svg' />}
			<div className={s.container}>
				{!hideTitle && <span className={`faqHeaderText ${s.mainTitle}`}>
					You may also like
				</span>}

				<div className={`${s.productContainer} related-productSlider`}>
					 <Slider ref={carouselRef}  {...settings} >
						{slideItems
							.map((prod, index) => {
								return (
									<div
										key={prod?.handle + index}>
										<ProductCard
											key={prod?.handle + index}
											data={prod}
											noImagePadding={false}
											darkMode={false}
										/>
									</div>
								);
							})}
					</Slider>
						<div className={s.mobileArrows}>
							<div
							onClick={handlePrev}
							className={`${s.left} ${currentSlide === 0 && s.disabled}`}><ArrowCircleSVG color="#FFFFFF" width='32' height='32' /></div>
							<div
							onClick={handleNext}
							className={`${s.right} ${(currentSlide === slideItems?.length - 1) && s.disabled}`}><ArrowCircleSVG color="#FFFFFF" width='32' height='32' /></div>
						</div>

				</div>
			</div>
		</section>
	);
}

export default ProductsRelated;
