import Link from 'next/link';
import style from './footer.module.scss';
import FooterForm from './footer-form';
import ScrollDirectionMarquee from './home/scroll-direction-marquee';
import MarqueeGlobal from './globals/marquee-global/marquee-global';
import SocialIcons from './globals/social/social-icons';
import { getValueByKey } from './ui/field-helpers';
import NewFooter from './NewFooter';

const marqueeData2 = [
	'We are all lucky F*ckers',
	'We are all lucky F*ckers',
	'We are all lucky F*ckers',
	'We are all lucky F*ckers',
	'We are all lucky F*ckers',
];

function Footer({ global, className , hideMarquee}) {
	let currentYear = new Date().getFullYear();
	const marqueeText = getValueByKey(global, 'footer_marquee');
	const marqueeImages = global?.metaobjects?.nodes[0]?.fields.filter(
		(target) => target.key === 'footer_image_marquee',
	)[0].references?.nodes;

	return (
		<>
			{!hideMarquee &&
				<>
					<MarqueeGlobal
						data={JSON.parse(marqueeText)}
						darkMode
						darkModeAlt
						duration='180s'
						borderTop
					/>
					<ScrollDirectionMarquee data={marqueeImages} darkMode />{' '}
				</>
			}
				<NewFooter/>
			{/* <footer id='' className={`${style.footerMain} ${className}`}>
				<div className={style.container}>
					<div className={style.columnContain}>
						<div className={style.column}>
							<h2 className={`h6 ${style.title}`}>
								Sign up, <em>LUCKY F*CK</em>
							</h2>

							<p className='footer-type'>
								We are humans—we are messy—we are real. Lucky fathers, lucky
								daughters, lucky friends, and lucky husbands. Join our
								community.
							</p>

							<video playsInline muted loop autoPlay>
								<source src={'/media/coin-black.mp4'} type='video/mp4' />
								Your browser does not support the video tag.
							</video>

							<FooterForm />
						</div>
						<div className={style.column}>
							<nav className={style.footerNav}>
								<ul>
									<li>
										<Link href='/products' className='footer-links'>
											Products
										</Link>
									</li>
									<li>
										<Link href='/our-story' className='footer-links'>
											Our Story
										</Link>
									</li>
									<li>
										<ul className={style.footerSubNav}>
											<li>
												<Link href='/products/og-luck' className='footer-links'>
													OG Luck
												</Link>
											</li>
											<li>
												<Link
													href='/products/orange-drizzle'
													className='footer-links'
												>
													Orange Drizzle
												</Link>
											</li>
											<li>
												<Link
													href='/products/tropical-thrill'
													className='footer-links'
												>
													Tropical Thrill
												</Link>
											</li>
											<li>
												<Link
													href='/products/bodacious-berry'
													className='footer-links'
												>
													Bodacious Berry
												</Link>
											</li>
											<li>
												<Link
													href='/products/red-ryder-punch'
													className='footer-links'
												>
													Red Ryder Punch
												</Link>
											</li>
											<li>
												<Link href='/products' className='footer-links'>
													+ View All
												</Link>
											</li>
										</ul>
									</li>
									<li>
                    <Link href="/" className="footer-links">
                      Where to Buy
                    </Link>
                  </li>
								</ul>
							</nav>

							<SocialIcons className={style.socialContain} />

							<div className={style.subFooter}>
								<div>
									<p className='footer-detail'>
										&copy;{currentYear} Lucky Beverage Co
									</p>
								</div>
								
                 <div>
                  <p className="footer-detail">
                    <Link href="/pages/privacy-policy">Privacy Policy</Link>
                  </p>
                </div>

								<div>
									<p className='footer-detail'>
										<Link href='/pages/accessibility'>Accessibility</Link>
									</p>
								</div>

								<div>
                  <p className="footer-detail">
                    <Link href="/pages/terms-conditions">Terms &amp; Conditions</Link>
                  </p>
                </div> 

								<div className={style.moveticStamp}>
									<p className='footer-detail'>
										<a href='https://themovetic.com/' target='_blank'>
											SITE BY MOVETIC ⚡️
										</a>
									</p>
								</div>

								<div style={{ whiteSpace: 'nowrap' }}>
									<p className='footer-detail'>
										Contact Us:{' '}
										<a
											href='mailto:getlucky@luckyfckenergy.com'
											target='_blank'
										>
											getlucky@luckyfckenergy.com
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer> */}
		</>
	);
}

export default Footer;
