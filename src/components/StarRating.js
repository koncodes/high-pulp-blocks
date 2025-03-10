import React, {useState} from 'react';
import "./StarRating.scss";

export default function StarRating({rating, setRating, readonly}){
	const [hover, setHover] = useState(rating || 0);

	return <div className={'stars' + (readonly ? ' readonly' : '')}>
		{[1,2,3,4,5].map(star =>
			<span
				className={(star <= hover) ? 'star on' : 'star off'}
				key={star}
				onMouseEnter={() => !readonly && setHover(star)}
				onMouseLeave={() => !readonly  && setHover(rating)}
				onClick={() =>  !readonly && setRating(star)}
			>★</span>
		)}
	</div>
}
