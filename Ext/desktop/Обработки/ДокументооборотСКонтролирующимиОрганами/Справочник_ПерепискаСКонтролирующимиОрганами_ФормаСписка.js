Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ПерепискаСКонтролирующимиОрганами_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 765,
	iconCls: 'bogus',
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
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:749px;height:259px;',
			height: 259,width: 749,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Статус',
				},
				{
					text:'ДатаСообщения',
				},
				{
					text:'Отправитель',
				},
				{
					text:'Получатель',
				},
				{
					text:'Наименование',
				},
			]
		},
	]
});