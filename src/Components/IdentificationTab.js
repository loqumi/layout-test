import React from 'react';
import IconCalendar from '../icons/CalendarBlank.svg'

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
								<p className='calendar'><img src={IconCalendar} alt={'calendar'}/>2021</p>
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
								<p className='calendar'><img src={IconCalendar} alt={'calendar'}/>2021</p>
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