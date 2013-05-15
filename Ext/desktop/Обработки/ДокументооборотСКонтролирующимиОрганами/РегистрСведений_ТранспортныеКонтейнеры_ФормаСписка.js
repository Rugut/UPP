Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ТранспортныеКонтейнеры_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:697px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Транспортные контейнеры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:681px;height:259px;',
			height: 259,width: 681,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Транспортное сообщение',
					width:'225',
					dataIndex:'ТранспортноеСообщение',
					flex:1,
				},
				{
					text:'Имя',
					width:'222',
					dataIndex:'ИмяФайла1',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'149',
					dataIndex:'Размер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ТранспортноеСообщение',
					},
					{
						name:'ИмяФайла1',
					},
					{
						name:'Размер',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:697px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Выгрузить',
				},
			]
		},
	]
});