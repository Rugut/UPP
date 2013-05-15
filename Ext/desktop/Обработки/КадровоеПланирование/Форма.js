Ext.define('Обработки.КадровоеПланирование.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кадровое планирование',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:539px;',
			height: 539,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:255px;width:200px;height:284px;',
			height: 284,width: 200,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Подразделения организаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:32px;width:200px;height:252px;',
			height: 252,width: 200,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КадровоеПланирование/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:200px;height:31px;',
			height: 31,width: 200,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:6px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:79px;top:6px;width:115px;height:19px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:206px;top:255px;width:558px;height:147px;',
			height: 147,width: 558,
			columns:
			[
				{
					text:'Период',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Количество ставок',
					width:'50',
					dataIndex:'КоличествоСтавок',
					flex:1,
				},
				{
					text:'Занято ставок',
					width:'50',
					dataIndex:'ЗанятоСтавок',
					flex:1,
				},
				{
					text:'Вакантно',
					width:'50',
					dataIndex:'Вакантно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КадровоеПланирование/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Период',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'КоличествоСтавок',
					},
					{
						name:'ЗанятоСтавок',
					},
					{
						name:'Вакантно',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:764px;height:24px;',
			items:
			[
				{
					text:'Добавить вакансию',
				},
				'-',
				{
					text:'Изменить кадровый план',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредприятие',
			text: ' Предприятие',
			style: 'position:absolute;left:0px;top:199px;width:764px;height:20px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:764px;height:169px;',
			height: 169,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:764px;height:137px;',
			height: 137,width: 764,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'189',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'166',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Должность',
					width:'140',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Заявитель',
					width:'137',
					dataIndex:'Заявитель',
					flex:1,
				},
				{
					text:'Ответственный за вакансию',
					width:'151',
					dataIndex:'ОтветственныйЗаВакансию',
					flex:1,
				},
				{
					text:'Закрыть до',
					width:'94',
					dataIndex:'ПлановаяДатаЗакрытия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КадровоеПланирование/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'Заявитель',
					},
					{
						name:'ОтветственныйЗаВакансию',
					},
					{
						name:'ПлановаяДатаЗакрытия',
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
			style: 'position:absolute;left:558px;top:224px;width:206px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:206px;top:437px;width:558px;height:102px;',
			height: 102,width: 558,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'77',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата изменений',
					width:'105',
					dataIndex:'ДатаИзменений',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КадровоеПланирование/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Номер',
					},
					{
						name:'ДатаИзменений',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:571px;top:408px;width:193px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Новый документ',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:778px;top:33px;width:214px;height:539px;',
			height: 539,width: 214,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:944px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Состояние кадрового плана',
				},
				{
					text:'Исполнение кадрового плана',
				},
				'-',
				{
					text:'Коэффициент текучести кадров',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:854px;top:0px;width:146px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
			]
		},
	]
});