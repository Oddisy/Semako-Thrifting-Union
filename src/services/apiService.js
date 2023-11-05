export const AccountBalanceApi = [
	{
		_id: 1,
		accountName: "TOTAL ASSETS",
		Amount: "300,000",
		Currency: "USD",
	},
	{
		_id: 2,
		accountName: "CORPORATE SAVING-",
		Amount: "210,220.23",
		Currency: "USD",
		currencyCode: "12345",
	},
	{
		_id: 3,
		accountName: "CORPORATE CHECKING-",
		Amount: "210,220.23",
		Currency: "USD",
		currencyCode: "12345",
	},
];

export const TransactionHistoryApi = [
	{
		_Id: "transaction",
		History: "TRANSACTION HISTORY",
		transactions: [
			{
				transactionType: "Debit",
				bankName: "JpMorgan",
				amount: "-$100",
				dateTime: new Date().getMonth,
				description: "Debit for a purchase",
			},
			{
				transactionType: "Credit",
				bankName: "wellsFargo",
				amount: "+$500",
				dateTime: new Date(),
				description: "Credit for refund",
			},
			{
				transactionType: "Debit",
				bankName: "starBucks",
				amount: "-$700",
				dateTime: new Date(),
				description: "Credit for refund",
			},
			{
				transactionType: "Credit",
				bankName: "chase",
				amount: "+$50,000",
				dateTime: new Date(),
				description: "deposit from tyler",
			},
		],
	},
];
