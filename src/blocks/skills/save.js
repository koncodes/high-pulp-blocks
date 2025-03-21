/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { skills } = attributes;
	const blockProps = useBlockProps.save();
	/**
	 * Style overrides for the block
	 * @type CSSProperties
	 */
	const divStyles = {
		"--background-color": attributes.backgroundColor,
		"--text-color": attributes.textColor,
	}
	return (
		<div {...blockProps} style={divStyles}>
			<div className="skills-list">
				{skills.map((skill, index) => (
					<div key={index} className="skill-item">
						{skill.imageUrl && <img className="skill-img" src={skill.imageUrl} alt={skill.name} />}
						{attributes.showName && skill.name && <h3 className="skill-name">{skill.name}</h3>}
						{attributes.showDesc && skill.description && <p className="skill-desc">{skill.description}</p>}
					</div>
				))}
			</div>
		</div>
	);
}

