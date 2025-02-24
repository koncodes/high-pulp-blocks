import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { RichText, PlainText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export default function SkillEditor({ skill, onChange, onRemove }) {
	// Ensure skill is always an object
	const { name = '', imageUrl = '', description = '' } = skill || {};

	const handleNameChange = (value) => {
		onChange({ ...skill, name: value });
	};

	const handleDescriptionChange = (value) => {
		onChange({ ...skill, description: value });
	};

	const handleImageChange = (media) => {
		onChange({ ...skill, imageUrl: media.url });
	};

	return (
		<div className="skill-item">
			<PlainText
				className="skill-name"
				tagName="p"
				label={__('Skill Name', 'skills')}
				value={name}
				onChange={handleNameChange}
			/>
			<RichText
				className="skill-desc"
				tagName="div"
				placeholder={__('Enter skill description.', 'skills')}
				value={description}
				onChange={handleDescriptionChange}
			/>
			<MediaUploadCheck>
				<MediaUpload
					className="skill-upload"
					onSelect={handleImageChange}
					allowedTypes={['image']}
					render={({ open }) => (
						<Button onClick={open}>
							{imageUrl ? __('Replace Image', 'skills') : __('Upload Image', 'skills')}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{imageUrl && (
				<img className="skill-img" src={imageUrl} alt={__('Skill Image', 'skills')} style={{ maxWidth: '100px' }} />
			)}
			<Button isDestructive onClick={onRemove}>
				{__('Remove Skill', 'skills')}
			</Button>
		</div>
	);
}
