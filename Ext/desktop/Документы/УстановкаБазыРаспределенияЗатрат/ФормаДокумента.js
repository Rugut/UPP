Ext.define('Документы.УстановкаБазыРаспределенияЗатрат.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 402,width: 669,
	iconCls: 'bogus',
	title: 'Установка базы распределения затрат',
	
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
			style: 'position:absolute;left:96px;top:350px;width:564px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:669px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель6',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:326px;width:564px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:669px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:652px;height:171px;',
			height: 171,width: 652,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Продукция',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Спецификация',
				},
				{
					text:'Заказ',
				},
				{
					text:'ВариантВыпускаПродукции',
				},
				{
					text:'ВидВыпуска',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
				{
					text:'БазаПриход',
				},
				{
					text:'База',
				},
				{
					text:'БазаОстатокНЗП',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:125px;width:652px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоШаблону',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатрат',
			style: 'position:absolute;left:96px;top:81px;width:219px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатратШаблон',
			style: 'position:absolute;left:423px;top:81px;width:237px;height:19px;',
		},
	]
});