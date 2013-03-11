Ext.define('Документы.ПереоценкаТоваровОтданныхНаКомиссию.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 780,
	iconCls: 'bogus',
	title: 'Переоценки товаров отданных на комиссию',
	
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
					text:'ВалютаДокумента',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Организация',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Ответственный',
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
					text:'Подменю3',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});