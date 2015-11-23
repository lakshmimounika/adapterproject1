 var query1Statement = WL.Server.createSQLStatement("insert into emp1(name,empid,salary,position,state) values(?,?,?,?,?)");
function query1(name,empid,salary,position,state) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : query1Statement,
		parameters : [name,empid,salary,position,state]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
function query2() {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "query1"
	});
}

