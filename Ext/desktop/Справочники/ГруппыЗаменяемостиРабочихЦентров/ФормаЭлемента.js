Ext.define('Справочники.ГруппыЗаменяемостиРабочихЦентров.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 353,width: 430,
	iconCls: 'bogus',
	title: 'Группы заменяемости рабочих центров',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
	]
});