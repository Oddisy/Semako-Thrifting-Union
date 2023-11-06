import React from "react";
import "./TransactionHistory.css";
import {TransactionHistoryApi} from "../../../services/apiService";
import Button from "../../../components/button/Button";
function formatDate(dateTime) {
	const date = new Date(dateTime);
	const day = date.getDate();
	const month = date.toLocaleString("en-US");
	return {day, month};
}

function Transactionhistory() {
	return (
		<div className="transaction-history-api">
			<div className="transaction-history-card">
				{TransactionHistoryApi.map((item, index) => (
					<div key={index}>
						<span className="item-history">{item.History}</span>
						<div className="history-container">
							{item.transactions?.map((data, index) => (
								<div className="mapped-transaction" key={index}>
									<div className="transaction-datas">
										<div className="date-container">
											<div className="date">
												<div classNzame="month">
													{formatDate(data.dateTime).month}
												</div>
											</div>

											<div>{data.bankName}</div>
										</div>

										<div className="description">{data.description}</div>
										<div
											className={`transaction-amount ${
												data.amount && data.transactionType === "Debit"
													? "debit-style"
													: "credit-style"
											}`}
										>
											{data.amount}
										</div>

										<div
											className={`transaction-type ${
												data.transactionType === "Debit"
													? "debit-style"
													: "credit-style"
											}`}
										>
											{data.transactionType}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
				<div className="button-container">
					<button className="btnClassName">Make Payment</button>
					<button className="btnClassName">Deposit Funds</button>
				</div>
			</div>
		</div>
	);
}

export default Transactionhistory;
