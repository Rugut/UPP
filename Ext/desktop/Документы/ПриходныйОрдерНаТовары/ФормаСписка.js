Ext.define('Документы.ПриходныйОрдерНаТовары.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 780,
	iconCls: 'bogus',
	title: 'Приходные ордера на товары',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:764px;height:380px;',
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
					text:'ВидОперации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'СкладКомпании',
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
				{
					text:'ФизЛицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'Разделитель15',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});