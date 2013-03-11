Ext.define('Документы.УстановкаЦенНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 313,width: 470,
	iconCls: 'bogus',
	title: 'Установка цен номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:101px;width:454px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоПоступлению',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОбновитьПоЦенамНоменклатуры1',
				},
				{
					text:'Прайс',
				},
				{
					text:'ДобавитьПоПлановымЦенам',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'ЗаполнитьПоЦенамНоменклатурыКонтрагентов',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ОбновитьПоПлановымЦенам',
				},
				{
					text:'Подбор',
				},
				{
					text:'ДобавитьПоЦенамНоменклатурыКонтрагентов',
				},
				{
					text:'ДобавитьПоПоступлению',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РассчитатьПоБазовымЦенам',
				},
				{
					text:'ОбновитьПоЦенамНоменклатурыКонтрагентов',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ЗаполнитьПоПлановымЦенам',
				},
				{
					text:'ЗаполнитьПоЦенамНоменклатуры1',
				},
				{
					text:'ДобавитьПоЦенамНоменклатуры',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:454px;height:106px;',
			height: 106,width: 454,
			columns:
			[
				{
					text:'ИндексСтрокиТаблицыЦен',
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
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:102px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:202px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:261px;width:360px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписокТиповЦен',
			style: 'position:absolute;left:102px;top:57px;width:360px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:102px;top:237px;width:360px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель1',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:288px;width:470px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
			]
		},
	]
});