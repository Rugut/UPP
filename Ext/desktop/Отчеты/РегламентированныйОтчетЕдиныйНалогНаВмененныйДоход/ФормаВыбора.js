Ext.define('Отчеты.РегламентированныйОтчетЕдиныйНалогНаВмененныйДоход.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:287px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор из списка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:584px;height:246px;',
			height: 246,width: 584,
			columns:
			[
				{
					text:'Код',
					width:'160',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Название',
					width:'220',
					dataIndex:'Название',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчетЕдиныйНалогНаВмененныйДоход/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Название',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:262px;width:600px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
			]
		},
	]
});