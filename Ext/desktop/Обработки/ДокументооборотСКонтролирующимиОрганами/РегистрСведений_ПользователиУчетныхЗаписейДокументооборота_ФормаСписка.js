Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ПользователиУчетныхЗаписейДокументооборота_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:689px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Пользователи учетных записей документооборота и их настройки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:673px;height:259px;',
			height: 259,width: 673,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'224',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'224',
					dataIndex:'Пользователь',
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
						name:'УчетнаяЗапись',
					},
					{
						name:'Пользователь',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:689px;height:25px;',
			items:
			[
			]
		},
	]
});