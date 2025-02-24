/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { RichText, PlainText } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import StarRating from "../../components/StarRating";


export default function Edit( {attributes, setAttributes} ) {
	return (
		<div {...useBlockProps()}>
			<StarRating
				rating={attributes.stars}
				setRating={stars => setAttributes({stars: parseInt(stars)})}
			/>
			<RichText
				className="quote"
				tagName="div"
				placeholder="I love cake."
				value={ attributes.quote }
				onChange={ value => setAttributes({quote: value}) }
			/>
			<div className="quote-profile">
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ avatarURL: media.sizes?.thumbnail?.url || media.url })
							}
							allowedTypes={['image']}
							render={({ open }) => (
								<img
									onClick={() => open()} // Ensuring open is triggered
									src={attributes.avatarURL}
									alt="Choose image"
								/>
							)}
						/>
					</MediaUploadCheck>

				</div>
				<div className="text">
					<PlainText
						className="author"
						tagName="p"
						value={ attributes.author }
						onChange={ author => setAttributes({author}) }
					/>
					<p className="location">Point Place, WI</p>
				</div>
			</div>
		</div>
);
}
