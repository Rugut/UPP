Ext.define('Справочники.ТранспортныеУпаковки.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Транспортные упаковки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:608px;height:335px;',
			height: 335,width: 608,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'42',
					dataIndex:'НомерУпаковки',
					flex:1,
				},
				{
					text:'Наименование',
					width:'365',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'80',
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
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});