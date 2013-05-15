Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки допроведения документов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:659px;height:259px;',
			height: 259,width: 659,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'284',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Автоматич.',
					width:'65',
					dataIndex:'ЗапускатьАвтоматически',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'237',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиДопроведенияДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ЗапускатьАвтоматически',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:675px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});