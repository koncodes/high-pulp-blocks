import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { RichText, PlainText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export default function SkillEditor({ skill, onChange, onRemove }) {
	// Ensure skill is always an object
	const { name = '', imageUrl = '', description = '' } = skill || {};

	return (
		<div className="skill-item">
			<PlainText
				className="skill-name"
				tagName="p"
				placeholder={__('Enter skill name.', 'skills')}
				value={name}
				onChange={(value) => onChange({ ...skill, name: value })}
			/>
			<RichText
				className="skill-desc"
				tagName="div"
				placeholder={__('Enter skill description.', 'skills')}
				value={description}
				onChange={(value) => onChange({ ...skill, description: value })}
			/>
			<MediaUploadCheck>
				<MediaUpload
					className="skill-upload"
					onSelect={(media) => onChange({ ...skill, imageUrl: media.url })}
					allowedTypes={['image']}
					render={({ open }) => (
						<Button onClick={open} className="skill-img">
							{imageUrl ? __('Replace Image', 'skills') : __('Upload Image', 'skills')}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{imageUrl && (
				<img className="skill-img" src={imageUrl} alt={__('Skill Image', 'skills')} />
			)}
			<Button isDestructive onClick={onRemove} className="skill-remove">
				{__('Remove Skill', 'skills')}
			</Button>
		</div>
	);
}
