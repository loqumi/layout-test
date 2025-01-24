import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import InfoTab from './Components/InfoTab';
import IdentificationTab from './Components/IdentificationTab';
import ButtonGoBack from "./Components/ButtonGoBack";

function App() {
    const [activeTab, setActiveTab] = useState('info');
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setIsSidebarVisible(false);
    };

    return (
        <div className="app-container">
            <Header isVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>

            <div className="request-info">
                <h1>Данные запроса</h1>
                <p className="grey-text">Номер транспортного средства</p>
                <p>а111нх125</p>
            </div>

            <div className="content-container">
                <Sidebar
                    activeTab={activeTab}
                    setActiveTab={handleTabChange}
                    isVisible={isSidebarVisible}
                    setIsSidebarVisible={setIsSidebarVisible}
                />

                <main className={`main-content ${isSidebarVisible ? 'hidden' : ''}`}>
                    {activeTab === 'info' && <InfoTab />}
                    {activeTab === 'identification' && <IdentificationTab />}
                </main>
            </div>

            <footer className="footer-container">
                <ButtonGoBack isVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
            </footer>
        </div>
    );
}

export default App;