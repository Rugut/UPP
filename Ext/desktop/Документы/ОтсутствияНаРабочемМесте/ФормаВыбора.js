Ext.define('Документы.ОтсутствияНаРабочемМесте.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 871,
	iconCls: 'bogus',
	title: 'Отсутствия на рабочем месте',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:855px;height:380px;',
			height: 380,width: 855,
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
					text:'ПериодОтсутствия',
				},
				{
					text:'ПричинаОтсутствия',
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
			style: 'position:absolute;left:0px;top:0px;width:871px;height:25px;',
			items:
			[
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
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});