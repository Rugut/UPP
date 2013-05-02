Ext.define('Справочники.ПрочиеДоходыИРасходы.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:308px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы прочих доходов и расходов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:292px;height:280px;',
			height: 280,width: 292,
			columns:
			[
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрочиеДоходыИРасходы/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:308px;height:25px;',
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