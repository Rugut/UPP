Ext.define('Документы.ПереоценкаВалютныхСтатейПриБюджетировании.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 780,
	iconCls: 'bogus',
	title: 'Переоценка валютных статей при бюджетировании',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
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
					text:'ДатаПереоценки',
				},
				{
					text:'СчетОтнесенияКурсовыхРазниц',
				},
				{
					text:'Ответственный',
				},
				{
					text:'СтатьяОборотов',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});