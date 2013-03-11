Ext.define('Документы.КорректировкаЗаказаПокупателя.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 640,
	iconCls: 'bogus',
	title: 'Корректировки заказов покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:624px;height:380px;',
			height: 380,width: 624,
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
					text:'ЗаказПокупателя',
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
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:24px;',
			items:
			[
				{
					text:'Разделитель13',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель14',
				},
			]
		},
	]
});