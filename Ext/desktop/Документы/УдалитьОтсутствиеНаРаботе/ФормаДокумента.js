Ext.define('Документы.УдалитьОтсутствиеНаРаботе.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 298,width: 447,
	iconCls: 'bogus',
	title: 'Отсутствие на работе',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:246px;width:343px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:431px;height:120px;',
			height: 120,width: 431,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'ПричинаОтсутствия',
				},
				{
					text:'ДатаС',
				},
				{
					text:'ДатаПо',
				},
				{
					text:'НапомнитьПоЗавершении',
				},
				{
					text:'ОсвобождатьСтавку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:431px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Подбор',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:273px;width:447px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:222px;width:343px;height:19px;',
		},
	]
});