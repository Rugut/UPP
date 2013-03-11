Ext.define('Обработки.ПомощникПланирования.Форма',
	{
	extend: 'Ext.window.Window',
	height: 541,width: 814,
	iconCls: 'bogus',
	title: 'Помощник планирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:814px;height:25px;',
			items:
			[
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'РазделительВыбиратьДатыПериодом',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'РежимВыбораДатПериодом',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'РазделительВыбиратьДатыПериодом',
				},
				{
					text:'РазделительСправка',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'РежимВыбораДатПериодом',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:516px;width:814px;height:25px;',
			items:
			[
				{
					text:'Далее',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:798px;height:475px;',
			height: 475,width: 798,
			items:
			[
				{
					title:'КонечныеПланы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:403px;',
			height: 403,width: 784,
			columns:
			[
				{
					text:'ВидПлана',
				},
				{
					text:'Сценарий',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
				{
					text:'Проект',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ПрофильРаспределения',
				},
				{
					text:'ПрофильРаспределенияДетализацияПлана',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'СтраницаСтратегияРасчетаКоличества',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаИзменитьРезультатРасчетаКоличестваПроцент',
			style: 'position:absolute;left:198px;top:430px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаРежимСложенияОбъединения',
			style: 'position:absolute;left:504px;top:430px;width:286px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:356px;',
			height: 356,width: 784,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидСтратегии',
				},
				{
					text:'Процент',
				},
				{
					text:'НаДату',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
				{
					text:'Исключить',
				},
				{
					text:'ВыполнятьРазузлование',
				},
				{
					text:'КоличествоУровнейРазузлования',
				},
			]
		},
					]
				},
				{
					title:'СтраницаСтратегияРасчетаСуммы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаИзменитьРезультатРасчетаСуммыПроцент',
			style: 'position:absolute;left:198px;top:430px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:356px;',
			height: 356,width: 784,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Наименование',
				},
				{
					text:'СтратегияРасчетаСуммы',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'Функция',
				},
				{
					text:'ДатаЦен',
				},
			]
		},
					]
				},
				{
					title:'Отборы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:381px;',
			height: 381,width: 784,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'СформированныеДокументы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:403px;',
			height: 403,width: 784,
			columns:
			[
				{
					text:'Проведен',
				},
				{
					text:'Документ',
				},
				{
					text:'ВидПлана',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Провести',
				},
				{
					text:'ПометитьНаУдаление',
				},
				{
					text:'Печать',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'Разделитель2',
				},
			]
		},
					]
				},
			]
		},
	]
});