Ext.define('Документы.СчетФактураПолученный.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 746,
	iconCls: 'bogus',
	title: 'Счета-фактуры полученные',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:730px;height:380px;',
			height: 380,width: 730,
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
					text:'ВидСчетаФактуры',
				},
				{
					text:'ДокументОснование',
				},
				{
					text:'НомерВходящегоДокумента',
				},
				{
					text:'ДатаВходящегоДокумента',
				},
				{
					text:'Исправление',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:746px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});