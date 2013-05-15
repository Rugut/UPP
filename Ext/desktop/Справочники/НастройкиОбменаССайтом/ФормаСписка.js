Ext.define('Справочники.НастройкиОбменаССайтом.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:724px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Настройки обмена с WEB - сайтом',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:708px;height:259px;',
			height: 259,width: 708,
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
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'181',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Загрузка',
					width:'110',
					dataIndex:'ЗагрузкаДанных',
					flex:1,
				},
				{
					text:'Выгрузка',
					width:'100',
					dataIndex:'ВыгрузкаДанных',
					flex:1,
				},
				{
					text:'Папка/URL для обмена',
					width:'250',
					dataIndex:'АдресДляОбмена',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'101',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Сайт',
					width:'200',
					dataIndex:'HTTPОбменАдресСайта',
					flex:1,
				},
				{
					text:'Каталог выгрузки',
					width:'200',
					dataIndex:'КаталогВыгрузки',
					flex:1,
				},
				{
					text:'Выгружать на сайт',
					width:'70',
					dataIndex:'ВыгружатьНаСайт',
					flex:1,
				},
				{
					text:'Узел обмена товарами',
					width:'100',
					dataIndex:'УзелОбменаТоварами',
					flex:1,
				},
				{
					text:'Узел обмена заказами',
					width:'100',
					dataIndex:'УзелОбменаЗаказами',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаССайтом/ВыбратьПоСсылке/100'},
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
						name:'ЗагрузкаДанных',
					},
					{
						name:'ВыгрузкаДанных',
					},
					{
						name:'АдресДляОбмена',
					},
					{
						name:'Комментарий',
					},
					{
						name:'HTTPОбменАдресСайта',
					},
					{
						name:'КаталогВыгрузки',
					},
					{
						name:'ВыгружатьНаСайт',
					},
					{
						name:'УзелОбменаТоварами',
					},
					{
						name:'УзелОбменаЗаказами',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:724px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Монитор обменов',
				},
				{
					text:'Выполнить обмен',
				},
					]
				},
				'-',
				{
					text:'Помощник настройки',
				},
				{
					text:'Монитор обменов',
				},
				'-',
				{
					text:'Выполнить обмен',
				},
			]
		},
	]
});