Ext.define('Документы.ВводИндивидуальныхГрафиковРаботыОрганизации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 720,
	iconCls: 'bogus',
	title: 'Ввод индивидуальных графиков работы организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:379px;',
			height: 379,width: 704,
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
					text:'ПодразделениеОрганизации',
				},
				{
					text:'КраткийСоставДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});