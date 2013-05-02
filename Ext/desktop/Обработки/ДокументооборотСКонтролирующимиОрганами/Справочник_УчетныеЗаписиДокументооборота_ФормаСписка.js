Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_УчетныеЗаписиДокументооборота_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:988px;height:426px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Учетные записи документооборота',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:972px;height:385px;',
			height: 385,width: 972,
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
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Адрес электронной почты',
					width:'149',
					dataIndex:'АдресЭлектроннойПочты',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'126',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'ОбменЧерезСпецоператора',
					flex:1,
				},
				{
					text:'Сервер документооборота',
					width:'137',
					dataIndex:'СерверДокументооборота',
					flex:1,
				},
				{
					text:'Имя пользователя POP3',
					width:'160',
					dataIndex:'ИмяПользователяPOP3',
					flex:1,
				},
				{
					text:'Сервер POP3',
					width:'160',
					dataIndex:'СерверPOP3',
					flex:1,
				},
				{
					text:'Порт POP3',
					width:'80',
					dataIndex:'ПортPOP3',
					flex:1,
				},
				{
					text:'Имя пользователя SMTP',
					width:'160',
					dataIndex:'ИмяПользователяSMTP',
					flex:1,
				},
				{
					text:'Сервер SMTP',
					width:'160',
					dataIndex:'СерверSMTP',
					flex:1,
				},
				{
					text:'Порт SMTP',
					width:'80',
					dataIndex:'ПортSMTP',
					flex:1,
				},
				{
					text:'Требуется SMTP Аутентификация',
					width:'24',
					dataIndex:'ТребуетсяSMTPАутентификация',
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
						name:'НалоговыйОрган',
					},
					{
						name:'ОбменЧерезСпецоператора',
					},
					{
						name:'СерверДокументооборота',
					},
					{
						name:'ИмяПользователяPOP3',
					},
					{
						name:'СерверPOP3',
					},
					{
						name:'ПортPOP3',
					},
					{
						name:'ИмяПользователяSMTP',
					},
					{
						name:'СерверSMTP',
					},
					{
						name:'ПортSMTP',
					},
					{
						name:'ТребуетсяSMTPАутентификация',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:988px;height:25px;',
			items:
			[
				{
					text:'Ручная настройка',
				},
				{
					text:'Автоматическая настройка (для абонентов """"Такском"""")',
				},
			]
		},
	]
});