import React from 'react';
import '../styles/Header.css';
import IconPDF from '../icons/FilePdf.svg'
import ButtonGoBack from "./ButtonGoBack";

const Header = ({isVisible, setIsSidebarVisible}) => {
	return (
		<header className="header">
			<ButtonGoBack isVisible={isVisible} setIsSidebarVisible={setIsSidebarVisible} />
			<button className="download-button"><img alt={'pdf icon'} src={IconPDF} />Скачать отчет</button>
		</header>
	);
};

export default Header;
