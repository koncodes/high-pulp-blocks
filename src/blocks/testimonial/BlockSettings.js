import React from "react";
import { useState } from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, PanelRow, ColorPalette, ColorPicker, ToggleControl } from "@wordpress/components";
import colors from "../../common/colors"

export default function BlockSettings({attributes, setAttributes}) {
		const [ hasFixedBackground, setHasFixedBackground ] = useState( false );

		return (
		<InspectorControls>
			<PanelBody title="Basic" initialOpen={true}>
				<PanelRow>
					<h4>Quote Background Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.backgroundColor}
						onChange={backgroundColor => setAttributes({backgroundColor})}
						disableCustomColors={true}
					/>
				</PanelRow>
				<PanelRow>
					<h4>Quote Text Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPicker
						color={attributes.textColor}
						onChange={textColor => setAttributes({textColor})}
						enableAlpha
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Show Author"
						help={
							attributes.showAuthor
								? 'Showing Author.'
								: 'Hiding Author.'
						}
						checked={ attributes.showAuthor }
						onChange={ showAuthor => {
							setAttributes({showAuthor});
						} }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	)
}
