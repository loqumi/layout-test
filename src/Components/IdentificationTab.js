import React from 'react';

const IdentificationTab = () => {
	return (
		<div className="tab-content">
			<h2>Идентифицированные лица</h2>
			<p>Идентифицировано 2 лица</p>

			<div className="individual-record">
				<table className="data-table">
					<thead>
					<tr>
						<th className="table-header">ОБЪЕКТ № 1 ⁄ 2021</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td className="info-section">
							<p>Полное имя</p>
							<p><a href="#">Илькун Виктор Антонович</a></p>
						</td>
					</tr>
					<tr>
						<td className="info-section">
							<p>Дата рождения</p>
							<p>20 января 1990 года • 34 года</p>
						</td>
					</tr>
					<tr>
						<td className="info-section">
							<p>Транспортные средства</p>
							<div className="additional-info">
								<p className='calendar'>
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.125 1.5625H1.875C1.70241 1.5625 1.5625 1.70241 1.5625 1.875V8.125C1.5625 8.29759 1.70241 8.4375 1.875 8.4375H8.125C8.29759 8.4375 8.4375 8.29759 8.4375 8.125V1.875C8.4375 1.70241 8.29759 1.5625 8.125 1.5625Z"
											stroke="#87878C" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M6.875 0.9375V2.1875" stroke="#87878C" strokeLinecap="round"
											  strokeLinejoin="round"/>
										<path d="M3.125 0.9375V2.1875" stroke="#87878C" strokeLinecap="round"
											  strokeLinejoin="round"/>
										<path d="M1.5625 3.4375H8.4375" stroke="#87878C" strokeLinecap="round"
											  strokeLinejoin="round"/>
									</svg>
									2021
								</p>
								<p>ДРУГАЯ МАРКА TOYOTA CROWN ГРЗ А111НХ125</p>
								<p className='grey-text'>СТС 235234634673476</p>
							</div>
						</td>
					</tr>
					<tr>
						<td className="info-section">
							<p>Записей в базах</p>
							<p><a href="#">3</a></p>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
			<div className="individual-record">
				<table className="data-table">
					<thead>
					<tr>
						<th className="table-header">ОБЪЕКТ № 2 ⁄ 2021</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td className="info-section">
							<p>Полное имя</p>
							<p><a href="#">Илькун Виктор Антонович</a></p>
						</td>
					</tr>
					<tr>
						<td className="info-section">
							<p>Дата рождения</p>
							<p> 20 января 1990 года • 34 года</p>
						</td>
					</tr>
					<tr>
						<td className="info-section">
							<p>Транспортные средства</p>
							<div className="additional-info">
								<p className='calendar'>
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.125 1.5625H1.875C1.70241 1.5625 1.5625 1.70241 1.5625 1.875V8.125C1.5625 8.29759 1.70241 8.4375 1.875 8.4375H8.125C8.29759 8.4375 8.4375 8.29759 8.4375 8.125V1.875C8.4375 1.70241 8.29759 1.5625 8.125 1.5625Z"
											stroke="#87878C" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M6.875 0.9375V2.1875" stroke="#87878C" strokeLinecap="round"
											  strokeLinejoin="round"/>
										<path d="M3.125 0.9375V2.1875" stroke="#87878C" strokeLinecap="round"
											  strokeLinejoin="round"/>
										<path d="M1.5625 3.4375H8.4375" stroke="#87878C" strokeLinecap="round"
											  strokeLinejoin="round"/>
									</svg>
									2021
								</p>
								<p>ДРУГАЯ МАРКА TOYOTA CROWN ГРЗ А111НХ125</p>
								<p className='grey-text'>СТС 235234634673476</p>
							</div>
						</td>
					</tr>
					<tr>
						<td className="info-section">
							<p>Записей в базах</p>
							<p>0</p>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default IdentificationTab;