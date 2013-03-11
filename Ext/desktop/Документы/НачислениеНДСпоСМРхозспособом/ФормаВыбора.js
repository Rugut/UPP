Ext.define('Документы.НачислениеНДСпоСМРхозспособом.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 540,
	iconCls: 'bogus',
	title: 'Начисление НДС по СМР (хозспособ)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:524px;height:280px;',
			height: 280,width: 524,
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
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель7',
				},
			]
		},
	]
});