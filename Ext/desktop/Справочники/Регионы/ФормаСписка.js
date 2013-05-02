Ext.define('Справочники.Регионы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:582px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Регионы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:566px;height:280px;',
			height: 280,width: 566,
			columns:
			[
				{
					text:'Код',
					width:'110',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Код региона',
					width:'72',
					dataIndex:'КодРегиона',
					flex:1,
				},
				{
					text:'Наименование',
					width:'302',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'178',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Код адресного элемента',
					width:'200',
					dataIndex:'КодАдресногоЭлемента',
					flex:1,
				},
				{
					text:'Ж/Д станция назначения',
					width:'309',
					dataIndex:'ЖДСтанцияНазначения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Регионы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'КодРегиона',
					},
					{
						name:'Наименование',
					},
					{
						name:'Комментарий',
					},
					{
						name:'КодАдресногоЭлемента',
					},
					{
						name:'ЖДСтанцияНазначения',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
			]
		},
	]
});