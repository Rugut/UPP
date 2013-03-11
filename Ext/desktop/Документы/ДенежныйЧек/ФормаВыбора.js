Ext.define('Документы.ДенежныйЧек.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 760,
	iconCls: 'bogus',
	title: 'Денежные чеки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:744px;height:380px;',
			height: 380,width: 744,
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
					text:'Комментарий',
				},
				{
					text:'Оплачено',
				},
				{
					text:'ДатаОплаты',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:760px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});