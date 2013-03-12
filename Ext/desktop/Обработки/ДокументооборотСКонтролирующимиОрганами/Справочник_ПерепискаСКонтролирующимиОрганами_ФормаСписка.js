Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ПерепискаСКонтролирующимиОрганами_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:765px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Переписка с контролирующими органами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:765px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:749px;height:259px;',
			height: 259,width: 749,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Статус',
					width:'109',
				},
				{
					text:'Дата',
					width:'119',
				},
				{
					text:'Отправитель',
					width:'112',
				},
				{
					text:'Получатель',
					width:'112',
				},
				{
					text:'Тема',
					width:'144',
				},
			]
		},
	]
});