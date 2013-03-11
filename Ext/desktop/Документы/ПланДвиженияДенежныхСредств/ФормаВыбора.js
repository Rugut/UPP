Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 705,
	iconCls: 'bogus',
	title: 'Планы движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:689px;height:259px;',
			height: 259,width: 689,
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
					text:'ПометкаУдаления',
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
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:705px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});