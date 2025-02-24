import { __ } from '@wordpress/i18n';
import { TextControl, Button, TextareaControl } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

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
			<TextControl
				label={__('Skill Name', 'skills')}
				value={name}
				onChange={handleNameChange}
			/>
			<TextareaControl
				label={__('Skill Description', 'skills')}
				value={description}
				onChange={handleDescriptionChange}
				help={__('Add a brief description of the skill.', 'skills')}
			/>
			<MediaUploadCheck>
				<MediaUpload
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
				<img src={imageUrl} alt={__('Skill Image', 'skills')} style={{ maxWidth: '100px' }} />
			)}
			<Button isDestructive onClick={onRemove}>
				{__('Remove Skill', 'skills')}
			</Button>
		</div>
	);
}
