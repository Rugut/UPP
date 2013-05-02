Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СчетчикиНеформализованныхДокументовНалогоплательщика_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:689px;height:359px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счетчики неформализованных документов налогоплательщика',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:673px;height:318px;',
			height: 318,width: 673,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'140',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'339',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'ИФНС',
					width:'76',
					dataIndex:'ИФНС',
					flex:1,
				},
				{
					text:'Счетчик',
					width:'74',
					dataIndex:'Счетчик',
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
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'ИФНС',
					},
					{
						name:'Счетчик',
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