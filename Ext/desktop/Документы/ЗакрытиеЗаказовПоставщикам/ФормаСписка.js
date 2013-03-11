Ext.define('Документы.ЗакрытиеЗаказовПоставщикам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 423,width: 620,
	iconCls: 'bogus',
	title: 'Закрытия заказов поставщикам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:35px;width:604px;height:380px;',
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
					text:'Организация',
				},
				{
					text:'ПодразделениеКомпании',
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
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});