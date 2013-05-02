Ext.define('Справочники.МаршрутыСогласования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:702px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Маршруты согласования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:520px;height:320px;',
			height: 320,width: 520,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МаршрутыСогласования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:702px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МаршрутыСогласования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	]
});