import React from "react";

function Button({btnText, btnClassName}) {
	return (
		<div className="p-4">
			<button className={btnClassName}>{btnText}</button>
		</div>
	);
}

export default Button;
