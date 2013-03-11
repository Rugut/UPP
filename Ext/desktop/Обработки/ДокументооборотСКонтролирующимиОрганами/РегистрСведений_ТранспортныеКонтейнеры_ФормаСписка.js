Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ТранспортныеКонтейнеры_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 697,
	iconCls: 'bogus',
	title: 'Список Транспортные контейнеры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:681px;height:259px;',
			height: 259,width: 681,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ТранспортноеСообщение',
				},
				{
					text:'ИмяФайла1',
				},
				{
					text:'Размер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:697px;height:25px;',
			items:
			[
				{
					text:'ВыгрузитьВФайл',
				},
				{
					text:'Разделитель4',
				},
			]
		},
	]
});