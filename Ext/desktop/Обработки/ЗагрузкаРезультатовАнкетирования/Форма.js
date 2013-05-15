Ext.define('Обработки.ЗагрузкаРезультатовАнкетирования.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:573px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка результатов анкетирования',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:557px;height:377px;',
			height: 377,width: 557,
			items:
			[
				{
					title:'Загрузка из почты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:99px;width:222px;height:151px;',
			height: 151,width: 222,
			columns:
			[
				{
					text:'Тема',
					width:'135',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'Эл. справочника',
					width:'70',
					dataIndex:'ОбъектЗагрузки',
					flex:1,
				},
				{
					text:'Анкета',
					width:'144',
					dataIndex:'Анкета',
					flex:1,
				},
				{
					text:'Опрос',
					width:'215',
					dataIndex:'Опрос',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Тема',
					},
					{
						name:'ОбъектЗагрузки',
					},
					{
						name:'Анкета',
					},
					{
						name:'Опрос',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только непрочитанные входящие письма',
			style: 'position:absolute;left:6px;top:6px;width:234px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Предварительный просмотр:',
			style: 'position:absolute;left:234px;top:74px;width:171px;height:25px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:256px;width:222px;height:93px;',
			height: 93,width: 222,
			columns:
			[
				{
					text:'Вложения',
					width:'101',
					dataIndex:'Вложение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Вложение',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:234px;top:281px;width:315px;height:68px;',
			height: 68,width: 315,
			columns:
			[
				{
					text:'Вопрос',
					width:'89',
					dataIndex:'Вопрос',
					flex:1,
				},
				{
					text:'Ответ',
					width:'96',
					dataIndex:'Ответ',
					flex:1,
				},
				{
					text:'Развернутый ответ',
					width:'198',
					dataIndex:'РазвернутыйОтвет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Вопрос',
					},
					{
						name:'Ответ',
					},
					{
						name:'РазвернутыйОтвет',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать письма по указанной анкете',
			style: 'position:absolute;left:6px;top:26px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:245px;top:26px;width:304px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:234px;top:256px;width:315px;height:25px;',
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УчетнаяЗапись',
			style: 'position:absolute;left:245px;top:48px;width:304px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По учетной записи',
			style: 'position:absolute;left:6px;top:48px;width:222px;height:19px;',
		},
					]
				},
				{
					title:'Загрузка из каталога',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:129px;width:273px;height:222px;',
			height: 222,width: 273,
			columns:
			[
				{
					text:'Файл',
					width:'60',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Анкета',
					width:'61',
					dataIndex:'Анкета',
					flex:1,
				},
				{
					text:'Эл. справочника',
					width:'88',
					dataIndex:'ОбъектЗагрузки',
					flex:1,
				},
				{
					text:'Опрос',
					width:'63',
					dataIndex:'Опрос',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИмяФайла',
					},
					{
						name:'Анкета',
					},
					{
						name:'ОбъектЗагрузки',
					},
					{
						name:'Опрос',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяКаталога',
			style: 'position:absolute;left:65px;top:5px;width:484px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:285px;top:129px;width:264px;height:221px;',
			height: 221,width: 264,
			columns:
			[
				{
					text:'Вопрос',
					width:'99',
					dataIndex:'Вопрос',
					flex:1,
				},
				{
					text:'Ответ',
					width:'148',
					dataIndex:'Ответ',
					flex:1,
				},
				{
					text:'Развернутый ответ',
					width:'148',
					dataIndex:'РазвернутыйОтвет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаРезультатовАнкетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Вопрос',
					},
					{
						name:'Ответ',
					},
					{
						name:'РазвернутыйОтвет',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Результаты опросов ',
			style: 'position:absolute;left:6px;top:66px;width:543px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Просматривать подкаталоги',
			style: 'position:absolute;left:6px;top:27px;width:175px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Предварительный просмотр:',
			style: 'position:absolute;left:285px;top:85px;width:169px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Файлы с ответами:',
			style: 'position:absolute;left:6px;top:84px;width:169px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Каталог:',
			style: 'position:absolute;left:6px;top:5px;width:57px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать файлы по указанной анкете',
			style: 'position:absolute;left:6px;top:44px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АнкетаОтбораФайлы',
			style: 'position:absolute;left:245px;top:44px;width:304px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:573px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Справка',
				},
			]
		},
	]
});