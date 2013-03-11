Ext.define('Документы.СчетФактураПолученный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 489,width: 792,
	iconCls: 'bogus',
	title: 'Счет-фактура полученный',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:116px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:437px;width:686px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:792px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПерезаполнитьДаннымиИзЭД',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЭД',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:464px;width:792px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:413px;width:686px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:776px;height:143px;',
			height: 143,width: 776,
			items:
			[
				{
					title:'ОдноОснование',
				},
				{
					title:'НесколькоОснований',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:317px;width:776px;height:67px;',
			height: 67,width: 776,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:387px;width:776px;height:24px;',
			height: 24,width: 776,
			items:
			[
				{
					title:'СтраницаВсего',
				},
				{
					title:'СтраницаУвеличениеУменьшение',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:364px;height:92px;',
			height: 92,width: 364,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:82px;width:376px;height:44px;',
			height: 44,width: 376,
			items:
			[
				{
					title:'СтраницаКорректировочный',
				},
				{
					title:'СтраницаОбычный',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:32px;width:376px;height:19px;',
			height: 19,width: 376,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:57px;width:376px;height:19px;',
			height: 19,width: 376,
			items:
			[
				{
					title:'СтраницаИсправление',
				},
				{
					title:'СтраницаКорректировка',
				},
			]
		},
	]
});