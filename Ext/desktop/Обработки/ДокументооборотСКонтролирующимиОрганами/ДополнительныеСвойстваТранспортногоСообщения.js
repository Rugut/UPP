Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ДополнительныеСвойстваТранспортногоСообщения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительно...',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:10px;width:448px;height:391px;',
			height: 391,width: 448,
			columns:
			[
				{
					text:'Имя',
					width:'221',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Значение',
					width:'194',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Имя',
					},
					{
						name:'Значение',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:464px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});