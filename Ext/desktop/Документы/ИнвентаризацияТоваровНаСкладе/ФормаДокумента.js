Ext.define('Документы.ИнвентаризацияТоваровНаСкладе.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 472,width: 603,
	iconCls: 'bogus',
	title: 'Инвентаризация товаров на складе',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:420px;width:502px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:2px;top:0px;width:601px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:214px;width:588px;height:130px;',
			height: 130,width: 588,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'ЕдиницаМест',
				},
				{
					text:'КоэффициентМест',
				},
				{
					text:'КоличествоМест',
				},
				{
					text:'Отклонение',
				},
				{
					text:'Количество',
				},
				{
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'КоличествоУчет',
				},
				{
					text:'Цена',
				},
				{
					text:'ЦенаВРознице',
				},
				{
					text:'Сумма',
				},
				{
					text:'СуммаУчет',
				},
				{
					text:'Качество',
				},
				{
					text:'СуммаРегл',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:190px;width:588px;height:24px;',
			items:
			[
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ПерезаполнитьУчетныеКоличестваИСуммыУпрУчет',
				},
				{
					text:'ПерезаполнитьУчетныеКоличестваИСуммыРеглУчет',
				},
				{
					text:'ИзТерминалаСбораДанных',
				},
				{
					text:'ЗаполнитьПоОстаткамНаСкладе',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоОстаткамНаСкладеРеглУчет',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоОстаткамНаСкладеУпрУчет',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:397px;width:502px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:376px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПоФакту',
			style: 'position:absolute;left:474px;top:349px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПоУчету',
			style: 'position:absolute;left:474px;top:373px;width:122px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:447px;width:603px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:588px;height:48px;',
			height: 48,width: 588,
			items:
			[
				{
					title:'Страница2',
				},
			]
		},
	]
});