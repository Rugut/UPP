Ext.define('Отчеты.ПланированиеЗакупок.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планирование закупок',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:784px;height:123px;',
			height: 123,width: 784,
			items:
			[
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКонПродаж',
			style: 'position:absolute;left:248px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачПродаж',
			style: 'position:absolute;left:148px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПродаж',
			text: 'Период анализа продаж с:',
			style: 'position:absolute;left:6px;top:6px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПродажПо',
			text: 'по:',
			style: 'position:absolute;left:230px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПродаж',
			text: '...',
			style: 'position:absolute;left:330px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКонЗакупок',
			style: 'position:absolute;left:248px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачЗакупок',
			style: 'position:absolute;left:148px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодЗакупок',
			text: 'Период закупок с:',
			style: 'position:absolute;left:6px;top:30px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗакупокПо',
			text: 'по:',
			style: 'position:absolute;left:230px;top:30px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗакупок',
			text: '...',
			style: 'position:absolute;left:330px;top:30px;width:19px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:691px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:586px;top:30px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаОкруглятьВБольшуюСторону',
			style: 'position:absolute;left:586px;top:54px;width:190px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показать только необходимые закупки',
			style: 'position:absolute;left:6px;top:54px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаТипЦенНоменклатуры',
			style: 'position:absolute;left:148px;top:78px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦенНоменклатуры',
			text: 'Тип цен номенклатуры:',
			style: 'position:absolute;left:6px;top:78px;width:140px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:691px;top:78px;width:85px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По всей номенклатуре',
			style: 'position:absolute;left:238px;top:54px;width:140px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:67px;',
			height: 67,width: 770,
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
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланированиеЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
					]
				},
				{
					title:'Дополнительные поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:67px;',
			height: 67,width: 770,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланированиеЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
				]
			},
		},
					]
				},
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:770px;height:91px;',
			height: 91,width: 770,
			columns:
			[
				{
					text:'',
					width:'23',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Показатель',
					width:'100',
					dataIndex:'Показатель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланированиеЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Показатель',
					},
				]
			},
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
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'Сформировать заказ',
				},
				{
					text:'Формирование внутренних заказов...',
				},
				'-',
				{
					text:'Восстановить настройки...',
				},
				{
					text:'Сохранить настройки...',
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
					text:'Сформировать заказ',
				},
				'-',
				{
					text:'Формирование внутренних заказов...',
				},
				'-',
				{
					text:'Восстановить настройки...',
				},
				{
					text:'Сохранить настройки...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});