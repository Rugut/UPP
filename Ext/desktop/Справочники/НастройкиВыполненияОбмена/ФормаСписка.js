Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:715px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Настройки выполнения обмена',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:699px;height:384px;',
			height: 384,width: 699,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'70',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'352',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'169',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиВыполненияОбмена/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:715px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Выполнить обмен',
				},
				{
					text:'Настройка обновления конфигурации',
				},
					]
				},
				'-',
				{
					text:'Выполнить обмен',
				},
			]
		},
	]
});