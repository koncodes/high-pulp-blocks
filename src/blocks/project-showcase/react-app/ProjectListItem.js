import React, { useEffect, useState } from 'react';

export default function ProjectListItem({ post }) {
	const [galleryImages, setGalleryImages] = useState([]);

	// Fetch gallery images from WordPress API
	useEffect(() => {
		async function fetchImages() {
			if (post.projectGallery?.length > 0) {
				try {
					const imageUrls = await Promise.all(
						post.projectGallery.map(async (imageId) => {
							const response = await fetch(`/wp-json/wp/v2/media/${imageId}`);
							const data = await response.json();
							return data.source_url;
						})
					);
					setGalleryImages(imageUrls);
				} catch (error) {
					console.error("Error fetching gallery images:", error);
				}
			}
		}
		fetchImages();
	}, [post.projectGallery]);

	return (
		<li className="project-card">
			{/* Project Title */}
			<div className="project-name">
				<strong>{post.title.rendered}</strong>
			</div>

			{/* Gallery Images */}
			{galleryImages.length > 0 && (
				<div className="project-gallery" style={{ marginTop: '10px' }}>
					{galleryImages.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`${post.title.rendered} - Image ${index + 1}`}
							style={{ width: '100px', height: 'auto', marginRight: '5px' }}
						/>
					))}
				</div>
			)}

			{/* Project Links */}
			<div className="project-links">
				{post.liveLink && (
					<span><a href={post.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a></span>
				)}
				{post.gitLink && (
					<span><a href={post.gitLink} target="_blank" rel="noopener noreferrer">GitHub</a></span>
				)}
			</div>

			{/* Project Technologies */}
			<div className="project-tech">
				{post.projectTechnologies?.length > 0 && (
					<span>{post.projectTechnologies.join(', ')}</span>
				)}
			</div>
		</li>
	);
}
