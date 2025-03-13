import React from "react";

export default function Skeleton({
									  shape = "square",
									  size,
									  height,
									  borderRadius = "5px",
									  className = "",
									  children
								  }) {
	const skeletonStyles = {
		width: size,
		maxWidth: size,
		height: height || (shape === "line" ? "1em" : size),
		borderRadius: shape === "circle" ? "50%" : borderRadius,
	};

	return (
		<div
			className={`skeleton ${shape} ${className}`}
			style={skeletonStyles}
			aria-hidden="true"
		>
			{children}
		</div>
	);
}
