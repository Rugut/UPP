Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВыборСертификатаОтветственногоЛица',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:810px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор сертификата ответственного лица для подписания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:810px;height:25px;',
			items:
			[
				'-',
				{
					text:'Справка',
				},
				{
					text:'Выбрать',
				},
				{
					text:'Открыть',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:794px;height:396px;',
			height: 396,width: 794,
			columns:
			[
				{
					text:'Владелец',
					width:'215',
				},
				{
					text:'Сертификат',
					width:'546',
				},
			]
		},
	]
});