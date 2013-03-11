Ext.define('Документы.КомплектацияОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 516,
	iconCls: 'bogus',
	title: 'Комплектация ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:500px;height:380px;',
			height: 380,width: 500,
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
					text:'Ответственный',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:516px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});