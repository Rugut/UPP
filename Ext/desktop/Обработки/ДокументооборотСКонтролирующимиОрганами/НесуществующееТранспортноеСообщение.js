Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НесуществующееТранспортноеСообщение',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:480px;height:285px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:464px;height:243px;',
			height: 243,width: 464,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:260px;width:480px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});