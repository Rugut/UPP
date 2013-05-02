Ext.define('Справочники.СчетаБюджета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:776px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счета бюджета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:33px;width:522px;height:259px;',
			height: 259,width: 522,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'81',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'133',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Статья баланса',
					width:'265',
					dataIndex:'СтатьяБаланса',
					flex:1,
				},
				{
					text:'Знак',
					width:'42',
					dataIndex:'Знак',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетаБюджета/ВыбратьПоСсылке/100'},
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
						name:'СтатьяБаланса',
					},
					{
						name:'Знак',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:232px;height:259px;',
			height: 259,width: 232,
			columns:
			[
				{
					text:'Наименование',
					width:'229',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетаБюджета/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:25px;',
			items:
			[
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
			]
		},
	]
});