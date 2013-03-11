Ext.define('Документы.СчетНаОплатуПоставщика.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 600,
	iconCls: 'bogus',
	title: 'Счет на оплату поставщика',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:380px;',
			height: 380,width: 584,
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
					text:'СуммаДокумента',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Организация',
				},
				{
					text:'ДатаВходящегоДокумента',
				},
				{
					text:'НомерВходящегоДокумента',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ДатаОплаты',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});