import Layout from '../../components/layout';
import Footer from '../../components/footer';
import {
	getourStoryPage,
	getGlobalData,
	getPageSingleData,
} from '../../lib/api';
import Button from '../../components/Button';
import FAQ from '../../components/globals/faq/faq';
import style from './faq.module.scss';
import Link from 'next/link';
import ArrowWithCircleSVG from '../../components/svgs/arrow-with-circle-svg';
import { useRouter } from 'next/router';
import Dropdown from '../../components/dropdown';

const generalFAQs = [
    {
        "question": "What makes LUCKY FCK Energy different from other energy drinks?",
        "answer": "LUCKY FCK Energy is unique due to its blend of five super ingredients including maca and beta-alanine, offering a balanced and sustained energy boost without crash or jitters. It has zero sugar, zero aftertaste, and only five calories."
    },
    {
        "question": "What flavors does LUCKY FCK Energy come in?",
        "answer": "LUCKY FCK Energy is available in 5 flavors: OG Luck, Bodacious Berry, Tropical Thrill, Red Ryder Punch, and Orange Drizzle."
    },
    {
        "question": "Where can I buy LUCKY FCK Energy?",
        "answer": "LUCKY FCK Energy can be purchased on Amazon.com and at select retailers. Store locations are listed on the company's website."
    },
    {
        "question": "How much caffeine is in a can of LUCKY FCK Energy?",
        "answer": "Each can of LUCKY FCK Energy contains 200mg of caffeine."
    },
    {
        "question": "Is LUCKY FCK Energy vegan?",
        "answer": "Yes, all flavors of LUCKY FCK Energy are vegan and gluten-free."
    },
    {
        "question": "Is LUCKY FCK Energy safe for pregnant or breastfeeding individuals?",
        "answer": "Pregnant and breastfeeding individuals should consult a physician before consuming LUCKY FCK Energy."
    },
    {
        "question": "How long does the energy boost from LUCKY FCK Energy last?",
        "answer": "The duration of the energy boost varies by individual, but it generally lasts for several hours."
    },
    {
        "question": "Will LUCKY FCK Energy make me crash?",
        "answer": "LUCKY FCK Energy is formulated to avoid crashes or jitters, but excessive caffeine consumption can lead to negative side effects."
    },
    {
        "question": "Can I mix LUCKY FCK Energy with other drinks?",
        "answer": "LUCKY FCK Energy can be mixed with water or juice, but mixing with alcohol is not recommended."
    },
    {
        "question": "Can I drink LUCKY FCK Energy every day?",
        "answer": "Consumption of LUCKY FCK Energy should be limited to two cans per day, adhering to the 400mg daily caffeine limit."
    },
    {
        "question": "What is the measurement of beta-alanine in LUCKY FCK Energy?",
        "answer": "LUCKY FCK Energy contains half a gram of beta-alanine per drink, less than some competitors to avoid the niacin tingle flush."
    }
]

const additionalFAQs = [
    {
        "question": "What are the ingredients in LUCKY FCK Energy?",
        "answer": "The ingredients include carbonated water, citric acid, natural flavors, caffeine, taurine, beta-alanine, ginseng extract, and maca extract."
    },
    {
        "question": "What are the benefits of using LUCKY FCK Energy?",
        "answer": "LUCKY FCK Energy offers a balanced and sustained energy boost without crash or jitters, is zero-sugar, and contains a simple list of recognizable ingredients for a guilt-free experience."
    },
    {
        "question": "What is the company's commitment to sustainability?",
        "answer": "The company uses recyclable cans, sources ingredients from sustainable suppliers, and is actively working on reducing its carbon footprint."
    },
    {
        "question": "What is the company's customer service policy?",
        "answer": "The company is committed to exceptional customer service and encourages customers to contact them with any questions or concerns."
    }
]




function FAQPage({ globalData }) {
	// console.log(ourStoryPage);
	const router = useRouter()

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		const offset = 30; // Adjust this value to set the desired margin from the top
		const bodyRect = document.body.getBoundingClientRect().top;
		const elementRect = element.getBoundingClientRect().top;
		const offsetPosition = elementRect - bodyRect - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	};


	return (
		<>
			<Layout global={globalData}>
				<div className={style.faqContainer}>
					{/* <Dropdown /> */}
					<div className={style.btnWrap}>
						<div
							className={`${style.prevBtn} swiper-button-prev`}
							role='button'
							aria-label='Previous slide'
						>
							<span onClick={() => router.back()}>
								<ArrowWithCircleSVG fill='#333' stroke='#333' />
							</span>
						</div>
					</div>
					<p style={{ textAlign: 'center' }} className='faqHeaderText'>
						FAQ<span style={{textTransform:"lowercase"}}>s</span>
					</p>
					<div
						className={style.btnsContainer}
					>
						<Button className={style.btn} title='General' noHref={true} onClick={() => scrollToSection('general')} />
						<Button className={style.btn} title='Additional' noHref={true} onClick={() => scrollToSection('additional')} />
					</div>

					<div id='general' className={style.ques}>
						<p className='faqTitle' style={{ paddingBottom: '10px' }}>
							General Questions
						</p>
						{generalFAQs.map((faq, index) => {
							return (
								<div className={style.faqBox}>
									<FAQ
										question={faq.question}
										answer={faq.answer}
									/>
								</div>
							);
						})}
					</div>
					<div id='additional' className={style.ques}>
						<p className='faqTitle'>Additional Questions</p>
						{additionalFAQs.map((faq, index) => {
							return (
								<div className={style.faqBox}>
									<FAQ
										question={faq.question}
										answer={faq.answer}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<Footer global={globalData} hideMarquee />
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	// const ourStoryPage = await getourStoryPage();
	const globalData = await getGlobalData();
	// const pageSeoData = await getPageSingleData("faq");

	return {
		props: { globalData },
		revalidate: 60,
	};
}

export default FAQPage;
