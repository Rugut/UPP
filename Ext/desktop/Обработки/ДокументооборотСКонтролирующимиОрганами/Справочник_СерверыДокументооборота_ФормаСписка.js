Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_СерверыДокументооборота_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:734px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Серверы документооборота',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:718px;height:259px;',
			height: 259,width: 718,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'48',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'195',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Адрес электронной почты (ФНС)',
					width:'186',
					dataIndex:'АдресЭлектроннойПочты',
					flex:1,
				},
				{
					text:'Адрес электронной почты (ПФР)',
					width:'186',
					dataIndex:'АдресЭлектроннойПочтыПФР',
					flex:1,
				},
				{
					text:'Адрес электронной почты (Росстат)',
					width:'186',
					dataIndex:'АдресЭлектроннойПочтыФСГС',
					flex:1,
				},
				{
					text:'Таймаут',
					width:'64',
					dataIndex:'ДлительностьОжиданияСервера',
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
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'АдресЭлектроннойПочты',
					},
					{
						name:'АдресЭлектроннойПочтыПФР',
					},
					{
						name:'АдресЭлектроннойПочтыФСГС',
					},
					{
						name:'ДлительностьОжиданияСервера',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:734px;height:25px;',
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