Ext.define('Отчеты.УниверсальныйОтчетПоМетаданным.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:694px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:678px;height:103px;',
			height: 103,width: 678,
			tabBar:{hidden:true},
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
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'75',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'ПредставлениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'75',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'100',
					dataIndex:'ТипДляПодробногоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'ПредставлениеДляПодробногоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'100',
					dataIndex:'ТипДляКраткогоОтображенияГруппы',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчетПоМетаданным/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ТипДляПодробногоОтображенияГруппы',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияГруппы',
					},
					{
						name:'ТипДляКраткогоОтображенияГруппы',
					},
				]
			},
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Интервал',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаНачалоПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:52px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:136px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаКонецПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:153px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:238px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьС',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:50px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:126px;top:0px;width:50px;height:19px;text-align:center;',
		},
					]
				},
				{
					title:'Период',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаПериод',
			width: 80,
			height: 19,
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
			xtype: 'label',
			name: 'НадписьТипДанных',
			text: 'Тип данных:',
			style: 'position:absolute;left:8px;top:33px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТипДанных',
			width: 140,
			height: 19,
			style: 'position:absolute;left:79px;top:33px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяОбъекта',
			text: 'Объект:',
			style: 'position:absolute;left:226px;top:33px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяОбъекта',
			width: 188,
			height: 19,
			style: 'position:absolute;left:276px;top:33px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяТаблицы',
			text: 'Таблица:',
			style: 'position:absolute;left:472px;top:33px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяТаблицы',
			width: 165,
			height: 19,
			style: 'position:absolute;left:521px;top:33px;width:165px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:414px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройки...',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Открыть в новом окне',
				},
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Загрузить настройки отчета',
				},
				{
					text:'Сохранить настройки отчета',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
			]
		},
	]
});