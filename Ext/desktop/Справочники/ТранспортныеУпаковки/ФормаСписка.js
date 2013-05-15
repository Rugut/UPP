Ext.define('Справочники.ТранспортныеУпаковки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:612px;height:340px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Транспортные упаковки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:596px;height:299px;',
			height: 299,width: 596,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'39',
					dataIndex:'НомерУпаковки',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'79',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Владелец',
					width:'350',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТранспортныеУпаковки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'НомерУпаковки',
					},
					{
						name:'Наименование',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Владелец',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:612px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});