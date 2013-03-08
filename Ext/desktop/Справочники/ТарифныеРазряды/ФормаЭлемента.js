Ext.define('Справочники.ТарифныеРазряды.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 286,width: 434,
	iconCls: 'bogus',
	title: 'Тарифный разряд',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:346px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:33px;width:220px;height:19px;',
		},
	]
});