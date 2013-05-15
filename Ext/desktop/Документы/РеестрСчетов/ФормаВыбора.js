Ext.define('Документы.РеестрСчетов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестры счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:259px;',
			height: 259,width: 584,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'132',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Организация',
					width:'220',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Номер аккредитива',
					width:'110',
					dataIndex:'НомерАккредитива',
					flex:1,
				},
				{
					text:'Дата аккредитива',
					width:'79',
					dataIndex:'ДатаАккредитива',
					flex:1,
				},
				{
					text:'Счет организации',
					width:'191',
					dataIndex:'СчетОрганизации',
					flex:1,
				},
				{
					text:'Юр физ лицо контрагента',
					width:'220',
					dataIndex:'ЮрФизЛицоКонтрагента',
					flex:1,
				},
				{
					text:'Сумма аккредитива',
					width:'80',
					dataIndex:'СуммаАккредитива',
					flex:1,
				},
				{
					text:'Дата закрытия',
					width:'79',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РеестрСчетов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Организация',
					},
					{
						name:'НомерАккредитива',
					},
					{
						name:'ДатаАккредитива',
					},
					{
						name:'СчетОрганизации',
					},
					{
						name:'ЮрФизЛицоКонтрагента',
					},
					{
						name:'СуммаАккредитива',
					},
					{
						name:'ДатаЗакрытия',
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
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			dock: 'top',
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