Ext.define('Обработки.ПереходНаПорядокИсчисленияПособий2010.СписокСотрудников',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:251px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:235px;height:354px;',
			height: 354,width: 235,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Отставники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:235px;height:354px;',
			height: 354,width: 235,
			columns:
			[
				{
					text:'Физическое лицо',
					width:'146',
					dataIndex:'ФизЛицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереходНаПорядокИсчисленияПособий2010/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ФизЛицо',
					},
				]
			},
		},
					]
				},
				{
					title:'Облученные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:235px;height:354px;',
			height: 354,width: 235,
			columns:
			[
				{
					text:'Физическое лицо',
					width:'184',
					dataIndex:'ФизЛицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереходНаПорядокИсчисленияПособий2010/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ФизЛицо',
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