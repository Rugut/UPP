Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 672,
	iconCls: 'bogus',
	title: 'Установки скидок номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:656px;height:380px;',
			height: 380,width: 656,
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
					text:'ВидСкидки',
				},
				{
					text:'Условие',
				},
				{
					text:'ЗначениеУсловия',
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
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю3',
				},
			]
		},
	]
});