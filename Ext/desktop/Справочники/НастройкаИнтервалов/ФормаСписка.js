Ext.define('Справочники.НастройкаИнтервалов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:384px;height:387px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки временных интервалов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:368px;height:100px;',
			height: 100,width: 368,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаИнтервалов/ВыбратьПоСсылке/100'},
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:139px;width:368px;height:240px;',
			height: 240,width: 368,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Граница интервала',
					width:'120',
					dataIndex:'НачалоИнтервала',
					flex:1,
				},
				{
					text:'Подпись',
					width:'220',
					dataIndex:'Подпись',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаИнтервалов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НачалоИнтервала',
					},
					{
						name:'Подпись',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});