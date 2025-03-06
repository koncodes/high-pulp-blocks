import React, {useState} from 'react';

export default function StaffListItem({post}) {

	return (
		<li>
			{post.title.rendered} &mdash; {post.acf['staff_position']}
		</li>
	)
}
