Ext.define('Документы.ДенежныйЧек.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 780,
	iconCls: 'bogus',
	title: 'Денежные чеки',
	
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
					text:'Оплачено',
				},
				{
					text:'Дата',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'Номер',
				},
				{
					text:'Организация',
				},
				{
					text:'СчетОрганизации',
				},
				{
					text:'Касса',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'СуммаДокумента',
				},
				{
					text:'Ответственный',
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
					text:'Подменю3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});