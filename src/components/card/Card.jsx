import React from "react";
import "./card.css";

const Card = ({accountName, Amount, currencyCode}) => {
	return (
		<div className="card-container">
			<p className="avail-balance">Available Balance</p>
			<div className="card-item">
				<span className="Amount">
					<sup className="dollar">$</sup>
					{Amount}
				</span>
				<div className="currency-code">
					<span className="accountName">{accountName}</span>
					<span>{currencyCode}</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
