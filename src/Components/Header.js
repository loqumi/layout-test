import React from 'react';
import '../styles/Header.css';
import ButtonGoBack from "./ButtonGoBack";

const Header = ({isVisible, setIsSidebarVisible}) => {
	return (
		<header className="header">
			<ButtonGoBack isVisible={isVisible} setIsSidebarVisible={setIsSidebarVisible}/>
			<button className="download-button">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3 8V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2H9.5L13 5.5V8"
						stroke="#87878C" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M9.5 2V5.5H13" stroke="#87878C" strokeLinecap="round" strokeLinejoin="round"/>
					<path
						d="M3 12.5H4C4.26522 12.5 4.51957 12.3946 4.70711 12.2071C4.89464 12.0196 5 11.7652 5 11.5C5 11.2348 4.89464 10.9804 4.70711 10.7929C4.51957 10.6054 4.26522 10.5 4 10.5H3V13.5"
						stroke="#87878C" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M13.5 10.5H11.75V13.5" stroke="#87878C" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M13.25 12.25H11.75" stroke="#87878C" strokeLinecap="round" strokeLinejoin="round"/>
					<path
						d="M8 13.5C8.39782 13.5 8.77936 13.342 9.06066 13.0607C9.34196 12.7794 9.5 12.3978 9.5 12C9.5 11.6022 9.34196 11.2206 9.06066 10.9393C8.77936 10.658 8.39782 10.5 8 10.5H7.125V13.5H8Z"
						stroke="#87878C" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
				Скачать отчет
			</button>
		</header>
	);
};

export default Header;
