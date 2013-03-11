Ext.define('Документы.ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 700,
	iconCls: 'bogus',
	title: 'Ввод распределения основного заработка сотрудников',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:280px;',
			height: 280,width: 684,
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
					text:'Период',
				},
				{
					text:'Организация',
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
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
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
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});