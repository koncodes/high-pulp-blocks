import React, {useState} from "react";
import {
	TextControl,
	__experimentalNumberControl as NumberControl,
	TextareaControl, Button
} from "@wordpress/components";
// TODO: import StarRating from "../../../components/StarRating";

export default function AddReviewForm(props) {
	const [title, setTitle] = useState('');
	const [review, setReview] = useState('');
	const [rating, setRating] = useState(0);

	function addReview(e) {
		e.preventDefault();

		const newReview = {
			title,
			content: review,
			acf: {
				review_rating: rating || 0,
			},

			// maybe you should validate better before doing this? set to draft instead?
			status: 'publish',
		}

		// we can't assume any props are provided
		// ?. only calls the method if it exists
		props.addReview?.(newReview);

		// clear the form
		setTitle('');
		setRating(0);
		setReview('');
	}

	return (
		<form
			className="new-review-form"
			onSubmit={e => addReview(e)}
		>

			<TextControl
				label="Title"
				value={title}
				onChange={title => setTitle(title)}
				__nextHasNoMarginBottom
			/>

			<NumberControl
				label="Overall Rating"
				value={rating}
				onChange={rating => setRating(rating)}
				min={0}
				max={5}
				step={1}
			/>
			{/*	TODO: Use StarRating component? */}

			<TextareaControl
				label="Review"
				value={review}
				onChange={review => setReview(review)}
				__nextHasNoMarginBottom
			/>

			<Button className="wp-element-button" type="submit">Add Review</Button>
		</form>
	);
};
