Ext.define('Документы.ВводКоэффициентовИндексацииЗаработка.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 660,
	iconCls: 'bogus',
	title: 'Документы Ввод коэффициентов индексации заработка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:644px;height:259px;',
			height: 259,width: 644,
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
					text:'ПериодРегистрации',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'КраткийСоставДокумента',
				},
				{
					text:'Комментарий',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});