Ext.define('Документы.ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод распределения основного заработка сотрудников',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:280px;',
			height: 280,width: 684,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'134',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'77',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Месяц',
					width:'84',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'110',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'110',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'Комментарий',
					},
					{
						name:'Ответственный',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
	]
});