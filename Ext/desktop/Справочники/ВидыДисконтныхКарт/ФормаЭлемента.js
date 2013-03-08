Ext.define('Справочники.ВидыДисконтныхКарт.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 400,
	iconCls: 'bogus',
	title: 'Виды дисконтных карт',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:93px;top:33px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:58px;width:299px;height:19px;',
		},
	]
});