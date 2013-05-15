Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаСпискаФайловИИзображений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:651px;height:254px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Хранилище дополнительной информации',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:10px;width:635px;height:236px;',
			height: 236,width: 635,
			items:
			[
				{
					title:'Изображения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:435px;height:180px;',
			height: 180,width: 435,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Описание изображения',
					width:'357',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Объект',
					width:'164',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХранилищеДополнительнойИнформации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Объект',
					},
				]
			},
		},
					]
				},
				{
					title:'Файлы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:621px;height:180px;',
			height: 180,width: 621,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'198',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Наименование',
					width:'245',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Объект',
					width:'203',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХранилищеДополнительнойИнформации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Наименование',
					},
					{
						name:'Объект',
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
	]
});