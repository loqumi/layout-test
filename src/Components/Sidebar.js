import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({activeTab, setActiveTab, isVisible}) => {
	return (
		<aside className={`sidebar ${isVisible ? 'visible' : ''}`}>
			<ul className="menu">
				<li
					className={activeTab === 'info' ? 'menu-item active' : 'menu-item'}
					onClick={() => setActiveTab('info')}
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="menu-icon" d="M8 8L14 2" stroke="#2D2D31" strokeLinecap="round"
							  strokeLinejoin="round"/>
						<path className="menu-icon"
							  d="M12.2438 3.75624C11.1801 2.68934 9.75457 2.06065 8.24945 1.99461C6.74433 1.92858 5.26926 2.43 4.1162 3.39965C2.96314 4.36929 2.21612 5.73649 2.02301 7.23063C1.82989 8.72477 2.20474 10.237 3.07337 11.4679C3.942 12.6989 5.24111 13.5589 6.71356 13.8777C8.18601 14.1965 9.72449 13.9509 11.0245 13.1895C12.3245 12.4281 13.2913 11.2064 13.7335 9.7662C14.1758 8.326 14.0612 6.77225 13.4125 5.41249"
							  stroke="#2D2D31" strokeLinecap="round" strokeLinejoin="round"/>
						<path className="menu-icon"
							  d="M10.1188 5.88124C9.62327 5.38715 8.97037 5.08222 8.27346 5.01944C7.57654 4.95665 6.87965 5.13997 6.30383 5.53754C5.72802 5.93512 5.30966 6.52184 5.12143 7.19578C4.9332 7.86973 4.98699 8.58831 5.27346 9.22673C5.55992 9.86514 6.06097 10.383 6.68955 10.6905C7.31814 10.9979 8.03456 11.0754 8.71436 10.9096C9.39416 10.7437 9.99439 10.345 10.4108 9.78265C10.8272 9.2203 11.0335 8.52985 10.9938 7.83124"
							  stroke="#2D2D31" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					Информация о госзнаке
				</li>
				<li
					className={activeTab === 'identification' ? 'menu-item active' : 'menu-item'}
					onClick={() => setActiveTab('identification')}
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="menu-icon" d="M9.5 7H12" stroke="#2D2D31" strokeLinecap="round"
							  strokeLinejoin="round"/>
						<path className="menu-icon" d="M9.5 9H12" stroke="#2D2D31" strokeLinecap="round"
							  strokeLinejoin="round"/>
						<path className="menu-icon"
							  d="M5.75626 9C6.58468 9 7.25626 8.32843 7.25626 7.5C7.25626 6.67157 6.58468 6 5.75626 6C4.92783 6 4.25626 6.67157 4.25626 7.5C4.25626 8.32843 4.92783 9 5.75626 9Z"
							  stroke="#2D2D31" strokeLinecap="round" strokeLinejoin="round"/>
						<path className="menu-icon"
							  d="M3.81876 10.5C3.92891 10.0698 4.17911 9.6885 4.52991 9.4162C4.88072 9.1439 5.31217 8.99609 5.75626 8.99609C6.20034 8.99609 6.6318 9.1439 6.9826 9.4162C7.33341 9.6885 7.58361 10.0698 7.69376 10.5"
							  stroke="#2D2D31" strokeLinecap="round" strokeLinejoin="round"/>
						<path className="menu-icon"
							  d="M13.5 3H2.5C2.22386 3 2 3.22386 2 3.5V12.5C2 12.7761 2.22386 13 2.5 13H13.5C13.7761 13 14 12.7761 14 12.5V3.5C14 3.22386 13.7761 3 13.5 3Z"
							  stroke="#2D2D31" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					Идентифицированные лица
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;