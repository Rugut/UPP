Ext.define('Документы.ВозвратМатериаловИзЭксплуатации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 383,width: 652,
	iconCls: 'bogus',
	title: 'Возврат материалов из эксплуатации',
	
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:331px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:636px;height:151px;',
			height: 151,width: 636,
			columns:
			[
				{
					text:'НомерCтроки',
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
					text:'ФизЛицо',
				},
				{
					text:'НазначениеИспользования',
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
					text:'Количество',
				},
				{
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'ТипСтоимости',
				},
				{
					text:'Цена',
				},
				{
					text:'Сумма',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'СчетПередачиБУ',
				},
				{
					text:'СчетПередачиНУ',
				},
				{
					text:'ДокументПередачи',
				},
				{
					text:'Качество',
				},
				{
					text:'ОтражениеВУСН',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:636px;height:26px;',
			items:
			[
				{
					text:'ДобавитьПоДокументуПередачи',
				},
				{
					text:'ЗаполнитьПоСрокуЭксплуатации',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоДокументуПередачи',
				},
				{
					text:'ЗаполнитьПоОстаткам',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:306px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:358px;width:652px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:82px;width:220px;height:19px;',
		},
	]
});