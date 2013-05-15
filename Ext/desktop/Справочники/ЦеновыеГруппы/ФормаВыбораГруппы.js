Ext.define('Справочники.ЦеновыеГруппы.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:571px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Ценовые группы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:555px;height:259px;',
			height: 259,width: 555,
			columns:
			[
				{
					text:'Код',
					width:'74',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'267',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Порядок',
					width:'63',
					dataIndex:'Порядок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЦеновыеГруппы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'Порядок',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:571px;height:25px;',
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