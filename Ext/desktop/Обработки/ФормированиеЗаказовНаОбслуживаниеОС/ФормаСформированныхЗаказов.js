Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.ФормаСформированныхЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 323,width: 643,
	iconCls: 'bogus',
	title: 'Сформированные заказы на обслуживание ОС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:627px;height:281px;',
			height: 281,width: 627,
			columns:
			[
				{
					text:'СостояиеДокумента',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Услуга',
				},
				{
					text:'ВидОбслуживания',
				},
				{
					text:'ДатаОбслуживания',
				},
				{
					text:'Причина',
				},
			]
		},
	]
});