import React from "react";
import StarRating from "../../../components/StarRating";

export default function ReviewCard({link, title, rating, review, destroy}) {
	function deleteReview() {
		if(confirm('Are you sure you want to delete "' + title + '"?')) {
			destroy();
		}
	}

	return (
		<div className="review-card">
			<div className="review-title"><a href={link}>{title}</a></div>
			<div className="review-rating">
				<StarRating rating={rating} readonly />
			</div>
			<div className="review-content" dangerouslySetInnerHTML={{__html: review}}></div>
			<button className="delete-button" onClick={deleteReview}>Delete</button>
		</div>
	);
}
