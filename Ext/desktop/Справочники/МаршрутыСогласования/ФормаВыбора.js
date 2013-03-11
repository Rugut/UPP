Ext.define('Справочники.МаршрутыСогласования.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 504,
	iconCls: 'bogus',
	title: 'Маршруты согласования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:488px;height:380px;',
			height: 380,width: 488,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:504px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});