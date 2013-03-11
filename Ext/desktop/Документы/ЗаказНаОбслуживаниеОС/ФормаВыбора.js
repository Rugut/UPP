Ext.define('Документы.ЗаказНаОбслуживаниеОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 780,
	iconCls: 'bogus',
	title: 'Заказы на обслуживание ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
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
					text:'Услуга',
				},
				{
					text:'ПричинаЗаказаНаОбслуживаниеОС',
				},
				{
					text:'ДатаОбслуживанияОС',
				},
				{
					text:'ВидОбслуживанияОС',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
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
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});