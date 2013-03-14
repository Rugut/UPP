Ext.define('Справочники.МаршрутыСогласования.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:504px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					width:'412',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:504px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});