Ext.define('Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 780,
	iconCls: 'bogus',
	title: 'Отражения начисления НДС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:280px;',
			height: 280,width: 764,
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
					text:'Организация',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ЗаписьВКнигуПродаж',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'РасчетныйДокумент',
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
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});