Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИСравнениеНастроек',
	{
	extend: 'Ext.window.Window',
	height: 77,width: 646,
	iconCls: 'bogus',
	title: 'Сравнение настроек',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:52px;width:646px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
			]
		},
	]
});