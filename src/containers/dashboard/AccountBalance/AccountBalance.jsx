import React from "react";
import "./AccountBalance.css";
import {AccountBalanceApi} from "../../../services/apiService";
import Card from "../../../components/card/Card";

function AccountBalance() {
	return (
		<div className="AccountBalanceContainer">
			<p className="Account">Account</p>
			<div className="AccountBalanceCardContainer">
				{AccountBalanceApi.map((item, index) => {
					return (
						<div className="mappedCard" key={index}>
							<Card
								Amount={item.Amount}
								CurrencyCode={item.currencyCode}
								accountName={item.accountName}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AccountBalance;
