Ext.define('Справочники.ДоговорыЭквайринга.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договоры эквайринга',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:642px;height:259px;',
			height: 259,width: 642,
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
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'175',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Эквайрер',
					width:'210',
					dataIndex:'Эквайрер',
					flex:1,
				},
				{
					text:'Договор',
					width:'194',
					dataIndex:'Договор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыЭквайринга/ВыбратьПоСсылке/100'},
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
						name:'Эквайрер',
					},
					{
						name:'Договор',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
			]
		},
	]
});