/**
 * @properties={typeid:24,uuid:"7BE7358C-ADA6-4E81-A25F-41C3A1862196"}
 */
function createForms() {
	var serverName = "example_data";
	var tables = databaseManager.getTableNames(serverName);
	var jsForm, jsTable, jsField, columns, formName;
	
	for (var i = 0; i < tables.length; i++) {
		formName = tables[i]+"_tbl";
		jsForm = solutionModel.getForm(formName);
		if (!jsForm) {
			jsForm = solutionModel.newForm(formName, databaseManager.getDataSource(serverName, tables[i]), null, false, 500, 500);
			jsForm.view = JSForm.LOCKED_TABLE_VIEW;
			jsTable = databaseManager.getTable(serverName,tables[i]);
			columns = jsTable.getColumnNames();
			
			for (var j = 0; j < columns.length; j++) {
				jsField = jsForm.newField(columns[j], JSField.TEXT_FIELD, j, 0, 100, 20);
				jsField.titleText = columns[j];
			}
			servoyDeveloper.save(jsForm);
		}
	}
}