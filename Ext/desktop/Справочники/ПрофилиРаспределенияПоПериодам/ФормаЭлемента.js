Ext.define('Справочники.ПрофилиРаспределенияПоПериодам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 404,width: 406,
	iconCls: 'bogus',
	title: 'Профили распределения по периодам',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:318px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:94px;top:60px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подпериод',
			style: 'position:absolute;left:94px;top:84px;width:120px;height:19px;',
		},
	]
});