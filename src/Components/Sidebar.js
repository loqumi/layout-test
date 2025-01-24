import React from 'react';
import '../styles/Sidebar.css';
import IconTarget from '../icons/Target.svg'
import IconIdentificationCard from '../icons/IdentificationCard.svg'

const Sidebar = ({ activeTab, setActiveTab, isVisible }) => {
	return (
		<aside className={`sidebar ${isVisible ? 'visible' : ''}`}>
			<ul className="menu">
				<li
					className={activeTab === 'info' ? 'menu-item active' : 'menu-item'}
					onClick={() => setActiveTab('info')}
				>
					<img className="menu-icon" src={IconTarget} alt={'IconTarget'} /> Информация о госзнаке
				</li>
				<li
					className={activeTab === 'identification' ? 'menu-item active' : 'menu-item'}
					onClick={() => setActiveTab('identification')}
				>
					<img className="menu-icon" src={IconIdentificationCard} alt={'IconIdentificationCard'}/> Идентифицированные лица
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;