Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.ФормаСформированныхЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сформированные заказы на обслуживание ОС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Дата',
					width:'84',
				},
				{
					text:'Номер',
					width:'106',
				},
				{
					text:'Услуга',
					width:'106',
				},
				{
					text:'Вид обслуживания',
					width:'102',
				},
				{
					text:'Дата обслуживания',
					width:'110',
				},
				{
					text:'Причина',
					width:'181',
				},
			]
		},
	]
});