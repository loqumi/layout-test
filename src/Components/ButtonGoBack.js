import React from "react";

const LinkGoBack = ({isVisible, setIsSidebarVisible}) => {
	return (
		<a onClick={() => setIsSidebarVisible(!isVisible)} className="back-link">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className="icon" d="M10 13L5 8L10 3" stroke="#E7682A" strokeLinecap="round"
					  strokeLinejoin="round"/>
			</svg>

			Вернуться к отчетам
		</a>
	)
}

export default LinkGoBack;