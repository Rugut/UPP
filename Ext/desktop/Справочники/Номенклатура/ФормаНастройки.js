Ext.define('Справочники.Номенклатура.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:698px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка формы элемента Номенклатура',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:698px;height:25px;',
			items:
			[
				{
					text:'ВосстановитьНастройки',
				},
				{
					text:'СохранитьНастройки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:698px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Настройки по умолчанию',
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:682px;height:226px;',
			height: 226,width: 682,
			items:
			[
				{
					title:'Настройка страниц',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:668px;height:24px;',
			items:
			[
				{
					text:'Видимые',
				},
				{
					text:'Невидимые',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:668px;height:170px;',
			height: 170,width: 668,
			columns:
			[
				{
					text:'Видимость',
					width:'61',
					dataIndex:'Видимость',
					flex:1,
				},
				{
					text:'Страница',
					width:'247',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Видимость системная',
					width:'60',
					dataIndex:'ВидимостьСистемная',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Видимость',
					},
					{
						name:'Представление',
					},
					{
						name:'ВидимостьСистемная',
					},
				]
			},
		},
					]
				},
				{
					title:'Настройка реквизитов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:668px;height:24px;',
			items:
			[
				{
					text:'Видимые',
				},
				{
					text:'Невидимые',
				},
				'-',
				{
					text:'Обязательные',
				},
				{
					text:'Необязательные',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:668px;height:170px;',
			height: 170,width: 668,
			columns:
			[
				{
					text:'Видимость',
					width:'71',
					dataIndex:'Доступность',
					flex:1,
				},
				{
					text:'Обязательность',
					width:'88',
					dataIndex:'Обязательность',
					flex:1,
				},
				{
					text:'Уникальность',
					width:'78',
					dataIndex:'Уникальность',
					flex:1,
				},
				{
					text:'Реквизит',
					width:'237',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Видимость системная',
					width:'72',
					dataIndex:'ДоступностьСистемная',
					flex:1,
				},
				{
					text:'Обязательность системная',
					width:'87',
					dataIndex:'ОбязательностьСистемная',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Доступность',
					},
					{
						name:'Обязательность',
					},
					{
						name:'Уникальность',
					},
					{
						name:'Представление',
					},
					{
						name:'ДоступностьСистемная',
					},
					{
						name:'ОбязательностьСистемная',
					},
				]
			},
		},
					]
				},
				{
					title:'Настройка цен номенклатуры',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:668px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Видимые',
				},
				{
					text:'Невидимые',
				},
				'-',
				{
					text:'Обязательные',
				},
				{
					text:'Необязательные',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:668px;height:170px;',
			height: 170,width: 668,
			columns:
			[
				{
					text:'Видимость',
					width:'71',
					dataIndex:'Доступность',
					flex:1,
				},
				{
					text:'Обязательность',
					width:'88',
					dataIndex:'Обязательность',
					flex:1,
				},
				{
					text:'Тип цен номенклатуры',
					width:'237',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Доступность',
					},
					{
						name:'Обязательность',
					},
					{
						name:'Представление',
					},
				]
			},
		},
					]
				},
			]
		},
	]
});