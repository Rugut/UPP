Ext.define('Документы.ВосстановлениеНДС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 507,
	iconCls: 'bogus',
	title: 'Восстановления НДС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:491px;height:380px;',
			height: 380,width: 491,
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
					text:'ОтразитьВКнигеПродаж',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:507px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});