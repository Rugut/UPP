Ext.define('Обработки.АдреснаяКнига.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:466px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Адресная книга (выбор)',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:450px;height:408px;',
			height: 408,width: 450,
			items:
			[
				{
					title:'Контрагенты (контактные лица)',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:143px;',
			height: 143,width: 436,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:230px;width:436px;height:128px;',
			height: 128,width: 436,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Контактное лицо контрагента',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Роль',
					width:'120',
					dataIndex:'РольКонтактногоЛица',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'Должность',
					},
					{
						name:'РольКонтактногоЛица',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:206px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:178px;width:150px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
		},
					]
				},
				{
					title:'Физические лица',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Фрагмент имени или адреса поиска (разделитель для поиска по И - "&&"):',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
		},
					]
				},
				{
					title:'Прочие контактные лица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
		},
					]
				},
				{
					title:'Организации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
		},
					]
				},
				{
					title:'Личные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
		},
					]
				},
				{
					title:'Пользователи',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'34',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'66',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'280',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
		},
					]
				},
				{
					title:'Группы объектов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:435px;height:178px;',
			height: 178,width: 435,
			columns:
			[
				{
					text:'',
					width:'19',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Группа рассылки',
					width:'288',
					dataIndex:'ГруппаРассылки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'ГруппаРассылки',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:212px;width:435px;height:146px;',
			height: 146,width: 435,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Состав группы',
					width:'411',
					dataIndex:'ОбъектРассылки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ОбъектРассылки',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:291px;top:363px;width:150px;height:19px;',
		},
					]
				},
				{
					title:'Поиск',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтрокаПоиска',
			style: 'position:absolute;left:6px;top:30px;width:361px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:78px;width:436px;height:280px;',
			height: 280,width: 436,
			columns:
			[
				{
					text:'Объект',
					width:'197',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'E-Mail по умолчанию',
					width:'108',
					dataIndex:'ПредставлениеЗначенияПоУмолчанию',
					flex:1,
				},
				{
					text:'Тип объекта',
					width:'107',
					dataIndex:'ТипОбъекта',
					flex:1,
				},
				{
					text:'ДоступныеАдреса',
					width:'21',
					dataIndex:'ДоступныеАдреса',
					flex:1,
				},
				{
					text:'ЗначениеПоУмолчанию',
					width:'22',
					dataIndex:'ЗначениеПоУмолчанию',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Объект',
					},
					{
						name:'ПредставлениеЗначенияПоУмолчанию',
					},
					{
						name:'ТипОбъекта',
					},
					{
						name:'ДоступныеАдреса',
					},
					{
						name:'ЗначениеПоУмолчанию',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНайти',
			text: 'Найти',
			style: 'position:absolute;left:372px;top:30px;width:70px;height:19px;',
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
			style: 'position:absolute;left:0px;top:425px;width:466px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});