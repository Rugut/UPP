Ext.define('Справочники.НастройкиРегламентногоФормированияДокументовПоНДС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки регламентного формирования документов по НДС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:551px;height:259px;',
			height: 259,width: 551,
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
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Автоматич.',
					width:'75',
					dataIndex:'ФормироватьДокументыАвтоматически',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
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
					{
						name:'Организация',
					},
					{
						name:'ФормироватьДокументыАвтоматически',
					},
					{
						name:'Комментарий',
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
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
			]
		},
	]
});