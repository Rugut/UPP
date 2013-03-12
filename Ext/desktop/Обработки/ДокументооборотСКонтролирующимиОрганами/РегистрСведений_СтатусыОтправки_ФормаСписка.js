Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СтатусыОтправки_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:689px;height:359px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статусы отправки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:673px;height:318px;',
			height: 318,width: 673,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Объект',
					width:'465',
				},
				{
					text:'Статус',
					width:'155',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:689px;height:25px;',
			items:
			[
			]
		},
	]
});