Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 669,
	iconCls: 'bogus',
	title: 'Планы движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:653px;height:259px;',
			height: 259,width: 653,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Сценарий',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'ДатаПланирования',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ВидДенежныхСредств',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:669px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});