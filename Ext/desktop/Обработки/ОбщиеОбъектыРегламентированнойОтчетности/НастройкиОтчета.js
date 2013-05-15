Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.НастройкиОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:497px;height:476px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки отчета',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:483px;height:435px;',
			height: 435,width: 483,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:468px;height:403px;',
			height: 403,width: 468,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
					]
				},
				{
					title:'Свойства разделов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:469px;height:378px;',
			height: 378,width: 469,
			columns:
			[
				{
					text:'Страницы',
					width:'241',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Показывать',
					width:'68',
					dataIndex:'ПоказатьСтраницу',
					flex:1,
				},
				{
					text:'Печатать',
					width:'68',
					dataIndex:'ВыводНаПечать',
					flex:1,
				},
				{
					text:'Выгружать',
					width:'68',
					dataIndex:'ВыгрузитьСтраницу',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Представление',
					},
					{
						name:'ПоказатьСтраницу',
					},
					{
						name:'ВыводНаПечать',
					},
					{
						name:'ВыгрузитьСтраницу',
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
			style: 'position:absolute;left:0px;top:451px;width:497px;height:25px;',
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