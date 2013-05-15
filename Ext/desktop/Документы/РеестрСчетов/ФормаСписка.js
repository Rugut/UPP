Ext.define('Документы.РеестрСчетов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:616px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестры счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:600px;height:220px;',
			height: 220,width: 600,
			columns:
			[
				{
					text:' ',
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
					text:'Счет организации',
					width:'220',
					dataIndex:'СчетОрганизации',
					flex:1,
				},
				{
					text:'Аккредитив',
					width:'80',
					dataIndex:'СуммаАккредитива',
					flex:1,
				},
				{
					text:'Юр физ лицо контрагента',
					width:'220',
					dataIndex:'ЮрФизЛицоКонтрагента',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'220',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'220',
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
						name:'СчетОрганизации',
					},
					{
						name:'СуммаАккредитива',
					},
					{
						name:'ЮрФизЛицоКонтрагента',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать по умолчанию',
				},
			]
		},
	],
	dockedItems:
	[
	]
});