Ext.define('Справочники.ТарифыПочтовогоСбора.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 305,width: 400,
	iconCls: 'bogus',
	title: 'Тариф почтового сбора',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:309px;top:33px;width:83px;height:19px;',
		},
	]
});