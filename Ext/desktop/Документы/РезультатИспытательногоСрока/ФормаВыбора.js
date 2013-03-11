Ext.define('Документы.РезультатИспытательногоСрока.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 701,
	iconCls: 'bogus',
	title: 'Результаты испытательных сроков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:685px;height:380px;',
			height: 380,width: 685,
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
					text:'Сотрудник',
				},
				{
					text:'Решение',
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
			style: 'position:absolute;left:0px;top:0px;width:701px;height:25px;',
			items:
			[
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
					text:'СтруктураПодчиненностиДокумента',
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