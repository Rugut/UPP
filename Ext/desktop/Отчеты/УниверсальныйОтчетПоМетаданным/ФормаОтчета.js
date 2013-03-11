Ext.define('Отчеты.УниверсальныйОтчетПоМетаданным.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	height: 491,width: 694,
	iconCls: 'bogus',
	title: 'Отчет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:414px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОткрытьВНовомОкне',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Настройки',
				},
				{
					text:'Печать',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель6',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:678px;height:103px;',
			height: 103,width: 678,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:678px;height:103px;',
			height: 103,width: 678,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
				},
				{
					text:'ВидыСравненияДляПодробногоОтображенияЭлемента',
				},
				{
					text:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
				},
				{
					text:'ПредставлениеДляПодробногоОтображенияЭлемента',
				},
				{
					text:'ПредставлениеДляКраткогоОтображенияЭлемента',
				},
				{
					text:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
				},
				{
					text:'ВидыСравненияДляКраткогоОтображенияЭлемента',
				},
				{
					text:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
				},
				{
					text:'ТипДляПодробногоОтображенияГруппы',
				},
				{
					text:'ПредставлениеДляПодробногоОтображенияГруппы',
				},
				{
					text:'ТипДляКраткогоОтображенияГруппы',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:414px;top:0px;width:280px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:427px;top:2px;width:258px;height:19px;',
			height: 19,width: 258,
			items:
			[
				{
					title:'Интервал',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНачалоПериода',
			style: 'position:absolute;left:52px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКонецПериода',
			style: 'position:absolute;left:153px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:238px;top:0px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'Период',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПериод',
			style: 'position:absolute;left:178px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Пустой',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипДанных',
			style: 'position:absolute;left:79px;top:33px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяОбъекта',
			style: 'position:absolute;left:276px;top:33px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяТаблицы',
			style: 'position:absolute;left:521px;top:33px;width:165px;height:19px;',
		},
	]
});