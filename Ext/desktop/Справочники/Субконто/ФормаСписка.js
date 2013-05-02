Ext.define('Справочники.Субконто.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:481px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Субконто',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:299px;height:259px;',
			height: 259,width: 299,
			columns:
			[
				{
					text:'',
					width:'32',
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
					width:'220',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Субконто/ВыбратьПоСсылке/100'},
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
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Субконто/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:481px;height:25px;',
			items:
			[
			]
		},
	]
});