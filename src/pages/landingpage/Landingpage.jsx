import React from "react";
import Header from "../../components/header/header";
TransactionHistory;
import {useEffect, useState} from "react";
import "./Landingpage.css";
import {AccountBalanceApi} from "../../services/apiService";
import AccountBalance from "../../containers/dashboard/accountbalance/AccountBalance/";
import TransactionHistory from "../../containers/dashboard/transactionhistory/TransactionHistory/";
function Landingpage() {
	// const [ApiData, setApiData] = useState([]);

	// async function fetchProductApi() {
	// try {
	// const response = AccountBalanceApi;

	// const data = await response.json();
	// console.log(response);
	// setApiData(data);
	// } catch (error) {
	// console.log("Error", error);
	// }
	// }
	// useEffect(() => {
	// fetchProductApi();
	// }, []);
	return (
		<div>
			<div>
				<Header />
			</div>
			<div className="PageAccountBalance">
				<AccountBalance />
			</div>
			<div className="page-account-balance">
				<TransactionHistory />{" "}
			</div>
		</div>
	);
}

export default Landingpage;
