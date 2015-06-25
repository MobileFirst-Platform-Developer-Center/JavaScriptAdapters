/*
*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

*/

//Create SQL query
var getAccountsTransactionsStatement = WL.Server.createSQLStatement( 
	"SELECT transactionId, fromAccount, toAccount, transactionDate, transactionAmount, transactionType " + 
	"FROM accounttransactions " + 
	"WHERE accounttransactions.fromAccount = ? OR accounttransactions.toAccount = ? " +
	"ORDER BY transactionDate DESC " + 
	"LIMIT 20;"
);

//Invoke prepared SQL query and return invocation result	
function getAccountTransactions1(accountId){
	return WL.Server.invokeSQLStatement({
		preparedStatement : getAccountsTransactionsStatement,
		parameters : [accountId, accountId]
	});
}


//Invoke stored SQL procedure and return invocation result
function getAccountTransactions2(accountId){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getAccountTransactions",
		parameters : [accountId]
		
	});
}


