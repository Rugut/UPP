Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:219px;',
			height: 219,width: 400,
			columns:
			[
				{
					text:' ',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Владелец',
					width:'120',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Наименование',
					width:'320',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'ОКП',
					width:'128',
					dataIndex:'ОКП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХарактеристикиНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Владелец',
					},
					{
						name:'Наименование',
					},
					{
						name:'ОКП',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
			]
		},
	]
});