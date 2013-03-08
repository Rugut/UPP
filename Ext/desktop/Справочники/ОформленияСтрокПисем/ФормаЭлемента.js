Ext.define('Справочники.ОформленияСтрокПисем.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 209,width: 400,
	iconCls: 'bogus',
	title: 'Оформление строки',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:93px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:58px;width:299px;height:19px;',
		},
	]
});