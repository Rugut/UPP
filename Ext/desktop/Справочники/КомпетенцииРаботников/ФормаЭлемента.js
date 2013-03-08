Ext.define('Справочники.КомпетенцииРаботников.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 428,width: 406,
	iconCls: 'bogus',
	title: 'Компетенция сотрудника',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:117px;top:33px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:117px;top:58px;width:281px;height:19px;',
		},
	]
});