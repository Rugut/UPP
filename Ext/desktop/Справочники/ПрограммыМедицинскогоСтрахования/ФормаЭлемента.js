Ext.define('Справочники.ПрограммыМедицинскогоСтрахования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 218,width: 511,
	iconCls: 'bogus',
	title: 'Программа медицинского страхования',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:424px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:8px;top:77px;width:495px;height:108px;',
		},
	]
});