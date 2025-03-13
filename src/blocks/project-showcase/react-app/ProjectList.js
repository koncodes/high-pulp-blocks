import React from 'react';
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({ posts }) {
	return (
		<ul>
			{posts.map(post => (
				<ProjectListItem post={post} key={post.id} />
			))}
		</ul>
	);
}
