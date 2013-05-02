Ext.define('Справочники.ДоговорыКонтрагентов.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:376px;height:312px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы договоров взаиморасчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:360px;height:272px;',
			height: 272,width: 360,
			columns:
			[
				{
					text:'Наименование',
					width:'282',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:376px;height:25px;',
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