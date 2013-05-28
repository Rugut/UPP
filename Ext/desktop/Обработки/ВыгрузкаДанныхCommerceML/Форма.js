Ext.define('Обработки.ВыгрузкаДанныхCommerceML.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:611px;height:513px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгрузка данных в формате CommerceML',
	
	items:
	[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:44px;top:56px;width:428px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Укажите данные, которые нужно выгрузить:',
			style: 'position:absolute;left:44px;top:33px;width:274px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:611px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выгрузить данные',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:80px;width:603px;height:405px;',
			height: 405,width: 603,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница данные',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:71px;width:591px;height:334px;',
			height: 334,width: 591,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Выгрузка информации о товарах',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:591px;height:262px;',
			height: 262,width: 591,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
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
		{
			xtype: 'fieldset',
			title: 'Отбор для выгрузки информации о товарах',
			style: 'position:absolute;left:0px;top:23px;width:591px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Имя выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяКаталога',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
				{
					title:'Выгрузка прайса',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Имя прайс-листа:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПрайса',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:591px;height:259px;',
			height: 259,width: 591,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
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
		{
			xtype: 'fieldset',
			title: 'Отбор для выгрузки прайс-листа',
			style: 'position:absolute;left:0px;top:23px;width:591px;height:16px;',
		},
					]
				},
				{
					title:'Выгрузки документов',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:101px;top:0px;width:150px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеНастройкиКонтрагент',
			width: 201,
			height: 19,
			style: 'position:absolute;left:256px;top:0px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:23px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеНастройкиСДокументДата',
			width: 84,
			height: 19,
			style: 'position:absolute;left:101px;top:23px;width:84px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеНастройкиПоДокументДата',
			width: 84,
			height: 19,
			style: 'position:absolute;left:212px;top:23px;width:84px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:302px;top:23px;width:19px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:94px;width:591px;height:233px;',
			height: 233,width: 591,
			columns:
			[
				{
					text:'Контрагент/Документ',
					width:'352',
					dataIndex:'Строка',
					flex:1,
				},
				{
					text:'Обрабатывать',
					width:'100',
					dataIndex:'Обрабатывать',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Строка',
					},
					{
						name:'Обрабатывать',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Документы для выгрузки',
			style: 'position:absolute;left:0px;top:46px;width:591px;height:16px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:110px;width:242px;height:219px;',
			height: 219,width: 242,
			columns:
			[
				{
					text:'',
					width:'29',
					dataIndex:'Использовать',
					flex:1,
				},
				{
					text:'Свойство',
					width:'387',
					dataIndex:'Свойство',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использовать',
					},
					{
						name:'Свойство',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:248px;top:136px;width:343px;height:193px;',
			height: 193,width: 343,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
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
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать каталог товаров',
			style: 'position:absolute;left:0px;top:23px;width:167px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать сведения об организации',
			style: 'position:absolute;left:171px;top:23px;width:208px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отбор для прайс-листа',
			style: 'position:absolute;left:248px;top:89px;width:343px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПрайсаCML_1',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Имя прайс-листа:',
			style: 'position:absolute;left:0px;top:0px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаПоУмолчанию',
			width: 102,
			height: 19,
			style: 'position:absolute;left:130px;top:42px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Единица по умолчанию:',
			style: 'position:absolute;left:0px;top:42px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Выгружать свойства',
			style: 'position:absolute;left:0px;top:89px;width:242px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Действительно с:',
			style: 'position:absolute;left:0px;top:66px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'по:',
			style: 'position:absolute;left:227px;top:66px;width:21px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПрайсCML_1',
			text: '...',
			style: 'position:absolute;left:356px;top:66px;width:19px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДействительноС',
			width: 91,
			height: 19,
			style: 'position:absolute;left:130px;top:66px;width:91px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДействительноПо',
			width: 91,
			height: 19,
			style: 'position:absolute;left:257px;top:66px;width:91px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:48px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 355,
			height: 19,
			style: 'position:absolute;left:107px;top:48px;width:355px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:24px;width:591px;height:21px;',
			height: 21,width: 591,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Файл',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаВыгрузки',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
				{
					title:'Каталог',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Файл выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяКаталога',
			text: 'Каталог выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяКаталогаВыгрузки',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Выгрузить данные в файл',
			style: 'position:absolute;left:6px;top:0px;width:164px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выгрузить данные по электронной почте',
			style: 'position:absolute;left:175px;top:0px;width:234px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:611px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});