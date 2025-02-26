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
					<h4>Background Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.backgroundColor}
						onChange={backgroundColor => setAttributes({backgroundColor})}
						// disableCustomColors={true}
					/>
				</PanelRow>
				<PanelRow>
					<h4>Text Color</h4>
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
						label="Show Skill Name"
						help={
							attributes.showName
								? 'Showing Name.'
								: 'Hiding Name.'
						}
						checked={ attributes.showName }
						onChange={ showName => {
							setAttributes({showName});
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Show Skill Description"
						help={
							attributes.showDesc
								? 'Showing Description.'
								: 'Hiding Description.'
						}
						checked={ attributes.showDesc }
						onChange={ showDesc => {
							setAttributes({showDesc});
						} }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	)
}
