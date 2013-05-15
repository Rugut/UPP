Ext.define('Обработки.ГрупповаяОбработкаОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:328px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Групповая обработка объектов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:484px;height:264px;',
			height: 264,width: 484,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОписаниеТипаОбъектов',
			text: 'Тип объектов:',
			style: 'position:absolute;left:8px;top:8px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеТипаОбъектов',
			style: 'position:absolute;left:88px;top:8px;width:386px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять обработку в одной транзакции',
			style: 'position:absolute;left:88px;top:32px;width:386px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Снимать пометку с обработанных объектов',
			style: 'position:absolute;left:88px;top:56px;width:386px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить сообщения об обработанных объектах',
			style: 'position:absolute;left:88px;top:80px;width:386px;height:19px;',
		},
					]
				},
				{
					title:'Обрабатываемые объекты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:466px;height:176px;',
			height: 176,width: 466,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Объект',
					width:'400',
					dataIndex:'Объект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Пометка',
					},
					{
						name:'Объект',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обрабатывать элементы выбранных групп',
			style: 'position:absolute;left:8px;top:220px;width:252px;height:15px;',
		},
					]
				},
				{
					title:'Устанавливаемые свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:466px;height:204px;',
			height: 204,width: 466,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Свойство',
					width:'200',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Значение',
					width:'200',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Свойство',
					},
					{
						name:'Пометка',
					},
					{
						name:'Значение',
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
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:303px;width:500px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});