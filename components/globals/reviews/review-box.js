import Image from 'next/image';
import RatingStars from '../starts';
import AvatarImage from './../../../public/images/Avatar.png';
import AmazonRoundSVG from '../../svgs/amazon-round-svg';
import style from './review-box.module.scss';
const ReviewBox = () => {

	return (
		<div className={style.reviewBox}>
			<div className={style.profileBox}>
				<Image src='/images/Avatar.png' width={48} height={48} />
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
					<span className='inter-n-18-500' style={{ color: '#FFF' }}>Mike Den</span>
					<span className='inter-n-14-400' style={{ color: '#929292' }}>September 25</span>
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ margin: '0.938rem 0' }}>
					<RatingStars rating={5} />
				</div>
				<span className='inter-n-18-600' style={{ color: '#FFF' }}>Best drink</span>
				<span className='inter-n-17-400' style={{ color: '#FFF' }}>This drink was amazing. I loved all flavors.</span>
				<span className='inter-n-17-400' style={{ color: '#929292' }}>Read More</span>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: '0.813rem', marginTop: '0.938rem' }}>
				<AmazonRoundSVG />
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
					<span className='inter-n-14-400' style={{ color: '#FFF' }}>Posted on</span>
					<a href='#' style={{ textDecoration: 'none' }}>
						<span className='inter-n-16-400' style={{ color: '#197BFF' }}>Amazon</span>
					</a>
				</div>
			</div>
		</div >
	);

};

export default ReviewBox;