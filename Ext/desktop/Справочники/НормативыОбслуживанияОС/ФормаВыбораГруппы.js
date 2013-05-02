Ext.define('Справочники.НормативыОбслуживанияОС.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Нормативы обслуживания ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:280px;',
			height: 280,width: 384,
			columns:
			[
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'342',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НормативыОбслуживанияОС/ВыбратьПоСсылке/100'},
				fields:
				[
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
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