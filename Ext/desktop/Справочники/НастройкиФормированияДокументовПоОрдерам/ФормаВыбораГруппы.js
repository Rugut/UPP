Ext.define('Справочники.НастройкиФормированияДокументовПоОрдерам.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:453px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы настроек формирования документов по ордерам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:437px;height:259px;',
			height: 259,width: 437,
			columns:
			[
				{
					text:'Наименование',
					width:'296',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиФормированияДокументовПоОрдерам/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:453px;height:25px;',
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