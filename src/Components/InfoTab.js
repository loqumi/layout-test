import React from "react";
import '../styles/InfoTab.css'

const InfoTab = () => {
	return (
		<div className="tab-content">
			<h2>Информация о госзнаке</h2>
			<table className="data-table">
				<tbody>
				<tr>
					<td className="info-section">
						<p className="grey-text">Номер</p>
						<p>GRZ a111hx125</p>
					</td>
				</tr>
				<tr>
					<td className="info-section">
						<p className="grey-text">Выявленные лица</p>
						<p><a href="#">Гудимов Павел Александрович, 18.07.1981 г.р.</a> • 34 года</p>
					</td>
				</tr>
				</tbody>
			</table>
			<h1>Установленные лица</h1>
			<table className="data-table">
				<thead>
				<tr><th className="table-header">ВНУТРЕННИЕ ПАСПОРТА</th></tr>
				</thead>
				<tbody>
				<tr><td className='custom-link'><p><a href="#">Гудимов Павел Александрович, 18.07.1981 г.р.</a></p></td></tr>
				<tr><td className='custom-link'><p><a href="#">Гудимов Павел Александрович, 18.07.1981 г.р.</a></p></td></tr>
				<tr><td className='custom-link'><p><a href="#">Гудимов Павел Александрович, 18.07.1981 г.р.</a></p></td></tr>
				</tbody>
			</table>
		</div>
	);
}

export default InfoTab;