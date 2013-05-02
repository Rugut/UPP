Ext.define('Справочники.НастройкиРегламентногоФормированияДокументовПоНДС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:576px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Настройки регламентного формирования документов по НДС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:409px;height:259px;',
			height: 259,width: 409,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиРегламентногоФормированияДокументовПоНДС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиРегламентногоФормированияДокументовПоНДС/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:576px;height:25px;',
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