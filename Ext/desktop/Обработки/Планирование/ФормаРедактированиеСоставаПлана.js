Ext.define('Обработки.Планирование.ФормаРедактированиеСоставаПлана',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Редактирование состава плана',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:700px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:684px;height:309px;',
			height: 309,width: 684,
			items:
			[
				{
					title:'Состав плана',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:253px;',
			height: 253,width: 670,
			columns:
			[
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика',
					width:'200',
				},
				{
					text:'Распределяемое количество',
					width:'160',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Ед.',
					width:'49',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Заказ',
					width:'200',
				},
				{
					text:'Контрагент',
					width:'200',
				},
				{
					text:'Договор',
					width:'200',
				},
				{
					text:'Спецификация',
					width:'200',
				},
				{
					text:'Вариант распределения',
					width:'200',
				},
				{
					text:'Источник',
					width:'200',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Производственная программа',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:253px;',
			height: 253,width: 670,
			columns:
			[
				{
					text:'Период',
					width:'80',
				},
				{
					text:'Подразделение',
					width:'200',
				},
				{
					text:'Рабочий центр',
					width:'200',
				},
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика',
					width:'200',
				},
				{
					text:'Заказ',
					width:'200',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Источник',
					width:'200',
				},
				{
					text:'Спецификация',
					width:'200',
				},
				{
					text:'Точка маршрута',
					width:'100',
				},
				{
					text:'Вид воспроизводства',
					width:'200',
				},
				{
					text:'Вариант распределения',
					width:'104',
				},
				{
					text:'Идентификатор',
					width:'96',
				},
				{
					text:'Идентификатор (источник)',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
	]
});