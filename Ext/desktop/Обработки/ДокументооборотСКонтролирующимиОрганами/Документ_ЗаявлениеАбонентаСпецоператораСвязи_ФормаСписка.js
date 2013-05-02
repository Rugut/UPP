Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:988px;height:440px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявления на подключение к электронному документообороту',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:988px;height:25px;',
			items:
			[
				{
					text:'Мастер заполнения',
				},
				{
					text:'Ручное заполнение',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:972px;height:399px;',
			height: 399,width: 972,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'78',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'89',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Организация',
					width:'185',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Статус',
					width:'97',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата отправки',
					width:'115',
					dataIndex:'ДатаОтправкиЗаявления',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'100',
					dataIndex:'ДатаПолученияОтвета',
					flex:1,
				},
				{
					text:'Дополнительная информация',
					width:'187',
					dataIndex:'СтатусКомментарий',
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
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'Организация',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаОтправкиЗаявления',
					},
					{
						name:'ДатаПолученияОтвета',
					},
					{
						name:'СтатусКомментарий',
					},
				]
			},
		},
	]
});