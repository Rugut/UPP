Ext.define('Документы.СчетФактураВыданный.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 691,
	iconCls: 'bogus',
	title: 'Счета-фактуры выданные',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:675px;height:380px;',
			height: 380,width: 675,
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
					text:'ДокументОснование',
				},
				{
					text:'ВидСчетаФактуры',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Исправление',
				},
				{
					text:'Выставлен',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:691px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
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
				{
					text:'ПроводкиДтКт',
				},
			]
		},
	]
});