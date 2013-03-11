Ext.define('Отчеты.ГрафикВыпускаПродукцииПодЗаказыПокупателей.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	height: 464,width: 694,
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
					text:'ОткрытьВНовомОкне',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Настройки',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Заголовок',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:678px;height:103px;',
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
	]
});