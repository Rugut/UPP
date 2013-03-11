Ext.define('Отчеты.ЭффективностьЗатратНаПривлечение.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	height: 538,width: 750,
	iconCls: 'bogus',
	title: 'Отчет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:478px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Печать',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Отбор',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'ОткрытьВНовомОкне',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Настройки',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Настройки',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Отбор',
				},
				{
					text:'ВосстановитьЗначения___',
				},
				{
					text:'Действие',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:345px;top:33px;width:397px;height:107px;',
			height: 107,width: 397,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:397px;height:107px;',
			height: 107,width: 397,
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
			style: 'position:absolute;left:475px;top:0px;width:275px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:485px;top:2px;width:260px;height:19px;',
			height: 19,width: 260,
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:331px;height:109px;',
			height: 109,width: 331,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасходовС',
			style: 'position:absolute;left:121px;top:19px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасходовПо',
			style: 'position:absolute;left:226px;top:19px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:310px;top:19px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриходовС',
			style: 'position:absolute;left:122px;top:43px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриходовПо',
			style: 'position:absolute;left:227px;top:43px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода1',
			text: '...',
			style: 'position:absolute;left:310px;top:43px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Данные',
			style: 'position:absolute;left:122px;top:67px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:122px;top:90px;width:185px;height:19px;',
		},
					]
				},
			]
		},
	]
});