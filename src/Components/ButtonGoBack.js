import React from "react";
import IconCaretDown from "../icons/CaretDown.svg";

const LinkGoBack = ({isVisible, setIsSidebarVisible}) => {
	return (
		<a onClick={() => setIsSidebarVisible(!isVisible)} className="back-link">
			<img alt={'pdf icon'} src={IconCaretDown} />
			Вернуться к отчетам
		</a>
	)
}

export default LinkGoBack;