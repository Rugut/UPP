Ext.define('Документы.ОперацияБух.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 780,
	iconCls: 'bogus',
	title: 'Операции (бухгалтерский и налоговый учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:157px;',
			height: 157,width: 764,
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
					text:'СуммаОперации',
				},
				{
					text:'Содержание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
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
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОрганизация',
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:220px;width:764px;height:242px;',
			height: 242,width: 764,
			items:
			[
				{
					title:'ДвиженияБУ',
				},
				{
					title:'ДвиженияНУ',
				},
			]
		},
	]
});