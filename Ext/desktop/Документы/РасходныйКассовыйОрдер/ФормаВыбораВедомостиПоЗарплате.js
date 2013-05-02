Ext.define('Документы.РасходныйКассовыйОрдер.ФормаВыбораВедомостиПоЗарплате',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:711px;height:299px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ведомости на выплату заработной платы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:274px;width:711px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:695px;height:258px;',
			height: 258,width: 695,
			columns:
			[
				{
					text:'Ссылка',
					width:'100',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Организация - ссылка',
					width:'100',
					dataIndex:'ОрганизацияСсылка',
					flex:1,
				},
				{
					text:'Физлицо - ссылка',
					width:'100',
					dataIndex:'ФизлицоСсылка',
					flex:1,
				},
				{
					text:'Документ',
					width:'100',
					dataIndex:'СсылкаПредставление',
					flex:1,
				},
				{
					text:'Дата',
					width:'100',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Физлицо',
					width:'100',
					dataIndex:'Физлицо',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасходныйКассовыйОрдер/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ОрганизацияСсылка',
					},
					{
						name:'ФизлицоСсылка',
					},
					{
						name:'СсылкаПредставление',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Сумма',
					},
					{
						name:'Организация',
					},
					{
						name:'Физлицо',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
	]
});