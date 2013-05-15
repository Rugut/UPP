Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:693px;height:362px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск дублирующихся элементов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:677px;height:318px;',
			height: 318,width: 677,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:663px;height:261px;',
			height: 261,width: 663,
			columns:
			[
				{
					text:'Имя настройки',
					width:'256',
					dataIndex:'ИмяНастройки',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'148',
					dataIndex:'ТипСравнения',
					flex:1,
				},
				{
					text:'Значение настройки',
					width:'236',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискИЗаменаДублирующихсяЭлементов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИмяНастройки',
					},
					{
						name:'ТипСравнения',
					},
					{
						name:'Представление',
					},
				]
			},
		},
					]
				},
				{
					title:'Результаты поиска',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:663px;height:257px;',
			height: 257,width: 663,
			columns:
			[
				{
					text:'Ссылка',
					width:'320',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Правильный',
					width:'100',
					dataIndex:'Правильный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискИЗаменаДублирующихсяЭлементов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Правильный',
					},
				]
			},
		},
					]
				},
				{
					title:'Зависимые элементы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:663px;height:108px;',
			height: 108,width: 663,
			columns:
			[
				{
					text:'Не правильный',
					width:'179',
					dataIndex:'НеПравильный',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'ВключатьВПоиск',
					flex:1,
				},
				{
					text:'Правильный',
					width:'226',
					dataIndex:'Правильный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискИЗаменаДублирующихсяЭлементов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НеПравильный',
					},
					{
						name:'ВключатьВПоиск',
					},
					{
						name:'Правильный',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:153px;width:663px;height:134px;',
			height: 134,width: 663,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискИЗаменаДублирующихсяЭлементов/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
					]
				},
				{
					title:'Замена',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:663px;height:259px;',
			height: 259,width: 663,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискИЗаменаДублирующихсяЭлементов/ВыбратьПоСсылке/100'},
				fields:
				[
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
			style: 'position:absolute;left:0px;top:0px;width:693px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Настройка',
				},
			]
		},
	]
});