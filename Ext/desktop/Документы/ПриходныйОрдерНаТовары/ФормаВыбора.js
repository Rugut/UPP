Ext.define('Документы.ПриходныйОрдерНаТовары.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 620,
	iconCls: 'bogus',
	title: 'Приходные ордера на товары',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:604px;height:380px;',
			height: 380,width: 604,
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
					text:'ВидОперации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Организация',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ФизЛицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПроводкиДтКтНУ',
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
					text:'Разделитель',
				},
			]
		},
	]
});