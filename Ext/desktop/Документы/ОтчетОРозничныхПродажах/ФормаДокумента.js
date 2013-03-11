Ext.define('Документы.ОтчетОРозничныхПродажах.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 457,width: 672,
	iconCls: 'bogus',
	title: 'Отчет о розничных продажах',
	
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
			style: 'position:absolute;left:94px;top:405px;width:570px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:94px;top:357px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:381px;width:220px;height:19px;',
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
			name: 'КассаККМ',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнвентаризацияТоваровНаСкладе',
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:432px;width:672px;height:25px;',
			items:
			[
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:428px;top:381px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:428px;top:356px;width:236px;height:20px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:656px;height:244px;',
			height: 244,width: 656,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'ОплатаПлатежнымиКартами',
				},
				{
					title:'ОплатаБанковскимиКредитами',
				},
				{
					title:'ПродажиПоДисконтнымКартам',
				},
			]
		},
	]
});