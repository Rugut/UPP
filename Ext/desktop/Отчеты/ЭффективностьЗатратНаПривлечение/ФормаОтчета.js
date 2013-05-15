Ext.define('Отчеты.ЭффективностьЗатратНаПривлечение.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:538px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:345px;top:33px;width:397px;height:107px;',
			height: 107,width: 397,
			tabBar:{hidden:true},
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
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Левое значение',
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
					text:'Правое значение',
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
					text:'Левое значение',
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
					text:'Правое значение',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭффективностьЗатратНаПривлечение/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:475px;top:0px;width:275px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:485px;top:2px;width:260px;height:19px;',
			height: 19,width: 260,
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
			name: 'ПолеВводаНачалоПериода',
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
			name: 'ПолеВводаКонецПериода',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период затрат',
			style: 'position:absolute;left:11px;top:19px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаРасходовС',
			style: 'position:absolute;left:121px;top:19px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:206px;top:19px;width:15px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
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
			xtype: 'label',
			name: 'Надпись3',
			text: 'Период результата ',
			style: 'position:absolute;left:13px;top:43px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаПриходовС',
			style: 'position:absolute;left:122px;top:43px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:207px;top:43px;width:15px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
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
			xtype: 'fieldset',
			title: 'Периоды затрат и оценки результатов',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Данные',
			style: 'position:absolute;left:122px;top:67px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормировать',
			text: 'Формировать по:',
			style: 'position:absolute;left:13px;top:67px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Валюта',
			style: 'position:absolute;left:122px;top:90px;width:185px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:478px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройки...',
				},
				'-',
				{
					text:'На принтер',
				},
				'-',
				{
					text:'Новый отчет',
				},
				{
					text:'Быстрые отборы',
				},
				'-',
				{
					text:'Восстановить настройки',
				},
				{
					text:'Сохранить настройки',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Настройки...',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
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