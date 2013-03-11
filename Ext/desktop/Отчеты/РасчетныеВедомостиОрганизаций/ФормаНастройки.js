Ext.define('Отчеты.РасчетныеВедомостиОрганизаций.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 462,width: 645,
	iconCls: 'bogus',
	title: 'Настройки отчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:437px;width:645px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:62px;width:182px;height:82px;',
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
			style: 'position:absolute;left:34px;top:149px;width:182px;height:96px;',
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
			style: 'position:absolute;left:38px;top:254px;width:178px;height:80px;',
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
			style: 'position:absolute;left:34px;top:347px;width:182px;height:74px;',
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
			style: 'position:absolute;left:8px;top:23px;width:222px;height:406px;',
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
			style: 'position:absolute;left:258px;top:9px;width:379px;height:420px;',
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
					title:'СтраницаНеТаблица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:193px;width:365px;height:191px;',
			height: 191,width: 365,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Расположение',
				},
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:365px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:365px;height:95px;',
			height: 95,width: 365,
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
			style: 'position:absolute;left:0px;top:169px;width:365px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:9px;top:275px;width:348px;height:24px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
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
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
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
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
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
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
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
					text:'Действие',
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
			style: 'position:absolute;left:235px;top:8px;width:16px;height:420px;',
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
			style: 'position:absolute;left:0px;top:96px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево31',
			text: '<',
			style: 'position:absolute;left:0px;top:119px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Вправо33',
			text: '>',
			style: 'position:absolute;left:0px;top:270px;width:16px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'Влево33',
			text: '<',
			style: 'position:absolute;left:0px;top:296px;width:16px;height:21px;',
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
			style: 'position:absolute;left:21px;top:110px;width:203px;height:24px;',
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