Ext.define('Документы.АттестацияРаботника.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 501,
	iconCls: 'bogus',
	title: 'Аттестации сотрудников',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:485px;height:380px;',
			height: 380,width: 485,
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
					text:'Физлицо',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:501px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
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
			]
		},
	]
});