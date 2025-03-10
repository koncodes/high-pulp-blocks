import React from "react";
import { useState } from "react";
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {PanelBody, PanelRow, ColorPalette, ColorPicker, ToggleControl } from "@wordpress/components";
import colors from "../../common/colors"

export default function BlockSettings({attributes, setAttributes}) {
		const [ hasFixedBackground, setHasFixedBackground ] = useState( false );

		return (
			<InspectorControls>
				<PanelColorSettings
					title="Colors"
					colorSettings={[
						{
							value: attributes.cardColor,
							onChange: cardColor => setAttributes({cardColor}),
							label: 'Card Color',
						},
						{
							value: attributes.headingColor,
							onChange: headingColor => setAttributes({headingColor}),
							label: 'Heading Color',
						},
						{
							value: attributes.textColor,
							onChange: textColor => setAttributes({textColor}),
							label: 'Text Color',
						},
					]}
				/>
			</InspectorControls>
	)
}
