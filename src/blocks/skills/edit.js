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
import { Button } from '@wordpress/components';
import SkillEditor from '../../components/SkillEditor';

export default function Edit({ attributes, setAttributes }) {
	const { skills } = attributes;
	const blockProps = useBlockProps();

	const addSkill = () => {
		if (skills.length < 10) {
			setAttributes({
				skills: [...skills, { name: '', imageUrl: '', description: '' }],
			});
		}
	};

	const updateSkill = (index, updatedSkill) => {
		const updatedSkills = [...skills];
		updatedSkills[index] = updatedSkill;
		setAttributes({ skills: updatedSkills });
	};

	const removeSkill = (index) => {
		const updatedSkills = skills.filter((_, i) => i !== index);
		setAttributes({ skills: updatedSkills });
	};

	return (
		<div {...blockProps}>
			{skills.map((skill, index) => (
				<SkillEditor
					key={index}
					skill={skill}
					onChange={(updatedSkill) => updateSkill(index, updatedSkill)}
					onRemove={() => removeSkill(index)}
				/>
			))}
			{skills.length < 10 && (
				<Button variant="primary" onClick={addSkill}>
					{__('Add Skill', 'skills')}
				</Button>
			)}
		</div>
	);
}
