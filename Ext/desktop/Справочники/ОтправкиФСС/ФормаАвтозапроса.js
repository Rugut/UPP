Ext.define('Справочники.ОтправкиФСС.ФормаАвтозапроса',
	{
	extend: 'Ext.window.Window',
	height: 103,width: 367,
	iconCls: 'bogus',
	title: 'Автообмен с сервером ФСС',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:44px;width:351px;height:51px;',
			height: 51,width: 351,
			items:
			[
				{
					title:'СтраницаОтсчета',
					items:
					[
					]
				},
				{
					title:'СтраницаРезультата',
					items:
					[
					]
				},
			]
		},
	]
});