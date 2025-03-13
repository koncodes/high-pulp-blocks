/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import Skeleton from "./react-app/Skeleton";
import React from "react";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<Skeleton size="250px" height="200px">
				<div style={{display: 'flex', flexDirection: 'column', padding: '15px', gap: '15px'}}>
					<Skeleton
						shape="line"
						size="150px"
						borderRadius="20px"
						height="15px"
						className="mb-2"
					/>
					<Skeleton shape="square" size="100px" height="60px"/>

					<Skeleton
						shape="line"
						size="150px"
						borderRadius="20px"
						height="15px"
						className="mb-2"
					/>
					<Skeleton
						shape="line"
						size="150px"
						borderRadius="20px"
						height="15px"
						className="mb-2"
					/>
				</div>
			</Skeleton>
			<Skeleton size="250px" height="200px">
				<div style={{display: 'flex', flexDirection: 'column', padding: '15px', gap: '15px'}}>
					<Skeleton
						shape="line"
						size="150px"
						borderRadius="20px"
						height="15px"
						className="mb-2"
					/>
					<Skeleton shape="square" size="100px" height="60px"/>

					<Skeleton
						shape="line"
						size="150px"
						borderRadius="20px"
						height="15px"
						className="mb-2"
					/>
					<Skeleton
						shape="line"
						size="150px"
						borderRadius="20px"
						height="15px"
						className="mb-2"
					/>
				</div>
			</Skeleton>
		</div>
);
}
