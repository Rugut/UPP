Ext.define('Документы.ВводКоэффициентовИндексацииЗаработка.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы Ввод коэффициентов индексации заработка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:644px;height:259px;',
			height: 259,width: 644,
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
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Месяц',
					width:'84',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'80',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Сотрудники',
					width:'100',
					dataIndex:'КраткийСоставДокумента',
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
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводКоэффициентовИндексацииЗаработка/ВыбратьПоСсылке/100'},
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
						name:'Организация',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'КраткийСоставДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
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
					text:'Движения документа по регистрам',
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