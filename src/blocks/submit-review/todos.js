export default class BlockApp extends React.Component {

	componentDidMount() {
		this.getReviews();
		this.getLoggedInUser();
	}

	getReviews(){
		// this is a backbone.js model
		const reviewCollection = new wp.api.collections.Review();
		// .done() returns a jqXHR object (YAY! JQUERY!)
		reviewCollection.fetch().done(() => {
			this.setState({reviews: reviewCollection.models});
			console.log('models', reviewCollection.models);
		});
	}

	addReview(newReview){
		const post = new wp.api.models.Review(newReview);

		// .save() returns a jqXHR object (YAY! JQUERY!)
		post.save().done(data => {
			console.log('saved', data);
			this.getReviews();
		});
	}

	getLoggedInUser(){
		let user = new wp.api.models.UsersMe();
		user.fetch()
			.done(data => {
				console.log('user', data);
				this.setState({loggedIn: true});
			})
			.fail(() => {
				console.log('not logged in');
				this.setState({loggedIn: false});
			});
	}

	render() {
		return (
			<div>
				<h3>Latest Reviews</h3>
				<ReviewList reviews={this.state.reviews} />
				<hr />
				<h3>Submit a Review</h3>
				{this.state.loggedIn === true && <AddReviewForm addReview={newReview => this.addReview(newReview)} />}
				{this.state.loggedIn === false && <div className="error-msg">You need to log in to submit a review</div>}
			</div>
		);
	}
}


// languages/frameworks/tools
// wordpress, php, js, html, css, sass, react, backbone.js, jquery, docker, git, npm, webpack, apis/ajax, json
// also: sql backend, custom post types, etc


export default class ReviewCard extends React.Component {
	render(){
		let {title, rating, review} = this.props;
		return (
			<div className="review-card">
				<div className="review-title">{title}</div>
				<StarRating rating={rating} readonly />
				<div className="review-content" dangerouslySetInnerHTML={{__html: review}}></div>
			</div>
		)
	}
}

export default class ReviewList extends React.Component {
	render(){
		return (
			<div className="review-list">
				{this.props.reviews.map(review => (
					<ReviewCard title={review.attributes.title.rendered}
								rating={review.attributes.acf.review_rating}
								review={review.attributes.content.rendered}
								key={review.attributes.id}
					/>
				))}
			</div>
		)
	}
}
