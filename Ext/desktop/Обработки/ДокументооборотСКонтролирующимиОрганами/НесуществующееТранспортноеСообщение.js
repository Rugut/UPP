Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НесуществующееТранспортноеСообщение',
	{
	extend: 'Ext.window.Window',
	height: 285,width: 480,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:260px;width:480px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:464px;height:243px;',
			height: 243,width: 464,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});