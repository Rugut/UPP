Ext.define('Документы.УстановкаЦенНоменклатурыКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 620,
	iconCls: 'bogus',
	title: 'Установки цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:604px;height:380px;',
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
					text:'Информация',
				},
				{
					text:'Контрагент',
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
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеПечать1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель16',
				},
			]
		},
	]
});