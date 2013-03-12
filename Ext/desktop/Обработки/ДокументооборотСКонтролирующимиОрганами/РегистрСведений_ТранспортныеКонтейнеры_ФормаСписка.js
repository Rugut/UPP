Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ТранспортныеКонтейнеры_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:697px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'20',
				},
				{
					text:'Транспортное сообщение',
					width:'225',
				},
				{
					text:'Имя',
					width:'222',
				},
				{
					text:'Размер (в байтах)',
					width:'149',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:697px;height:25px;',
			items:
			[
				{
					text:'Выгрузить',
				},
				'-',
			]
		},
	]
});