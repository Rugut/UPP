Ext.define('Отчеты.РасчетныеЛистки.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 461,width: 645,
	iconCls: 'bogus',
	title: 'Настройки отчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:436px;width:645px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Действие',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:59px;width:182px;height:82px;',
			height: 82,width: 182,
			columns:
			[
				{
					text:'Заголовок',
				},
				{
					text:'Выбор',
				},
				{
					text:'Отбор',
				},
				{
					text:'Порядок',
				},
				{
					text:'УсловноеОформление',
				},
				{
					text:'ПараметрыВывода',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:146px;width:182px;height:96px;',
			height: 96,width: 182,
			columns:
			[
				{
					text:'Заголовок',
				},
				{
					text:'Выбор',
				},
				{
					text:'Отбор',
				},
				{
					text:'Порядок',
				},
				{
					text:'УсловноеОформление',
				},
				{
					text:'ПараметрыВывода',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:38px;top:251px;width:178px;height:80px;',
			height: 80,width: 178,
			columns:
			[
				{
					text:'Заголовок',
				},
				{
					text:'Выбор',
				},
				{
					text:'Отбор',
				},
				{
					text:'Порядок',
				},
				{
					text:'УсловноеОформление',
				},
				{
					text:'ПараметрыВывода',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:344px;width:182px;height:74px;',
			height: 74,width: 182,
			columns:
			[
				{
					text:'Заголовок',
				},
				{
					text:'Выбор',
				},
				{
					text:'Отбор',
				},
				{
					text:'Порядок',
				},
				{
					text:'УсловноеОформление',
				},
				{
					text:'ПараметрыВывода',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:22px;width:222px;height:406px;',
			height: 406,width: 222,
			columns:
			[
				{
					text:'Заголовок',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:258px;top:6px;width:379px;height:420px;',
			height: 420,width: 379,
			items:
			[
				{
					title:'СтруктураОтчета',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:384px;',
			height: 384,width: 365,
			items:
			[
				{
					title:'СтраницаТаблица',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:365px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:365px;height:340px;',
			height: 340,width: 365,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Поле',
				},
				{
					text:'ТипГруппировки',
				},
				{
					text:'ПолеДляДаты',
				},
				{
					text:'ТипДополнения',
				},
				{
					text:'НачалоПериода',
				},
				{
					text:'КонецПериода',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:318px;width:348px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ОтборИСортировка',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:384px;',
			height: 384,width: 365,
			items:
			[
				{
					title:'СтраницаБезПараметров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:365px;height:144px;',
			height: 144,width: 365,
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:365px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:240px;width:365px;height:144px;',
			height: 144,width: 365,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Поле',
				},
				{
					text:'ТипУпорядочивания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:214px;width:365px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Оформление',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:385px;',
			height: 385,width: 365,
			items:
			[
				{
					title:'Оформление',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:114px;width:365px;height:271px;',
			height: 271,width: 365,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'ОформлениеДляКраткогоОтображенияЭлемента',
				},
				{
					text:'ОтборДляКраткогоОтображенияЭлемента',
				},
				{
					text:'ОбластиДляКраткогоОтображенияЭлемента',
				},
				{
					text:'ПредставлениеДляКраткогоОтображенияЭлемента',
				},
				{
					text:'ОформлениеДляПодробногоОтображенияЭлемента',
				},
				{
					text:'ОтборДляПодробногоОтображенияЭлемента',
				},
				{
					text:'ОбластиДляПодробногоОтображенияЭлемента',
				},
				{
					text:'ПредставлениеДляПодробногоОтображенияЭлемента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:86px;width:365px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:235px;top:6px;width:16px;height:420px;',
			height: 420,width: 16,
			items:
			[
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'button',
			name: 'Вправо31',
			text: '>',
			style: 'position:absolute;left:0px;top:209px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево31',
			text: '<',
			style: 'position:absolute;left:0px;top:238px;width:16px;height:21px;',
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'button',
			name: 'Вправо21',
			text: '>',
			style: 'position:absolute;left:0px;top:107px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево21',
			text: '<',
			style: 'position:absolute;left:0px;top:130px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Вправо22',
			text: '>',
			style: 'position:absolute;left:0px;top:312px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево22',
			text: '<',
			style: 'position:absolute;left:0px;top:335px;width:16px;height:21px;',
		},
					]
				},
				{
					title:'Страница0',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:21px;top:107px;width:203px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});