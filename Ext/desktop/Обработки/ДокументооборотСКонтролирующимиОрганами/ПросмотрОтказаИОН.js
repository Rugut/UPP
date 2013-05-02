Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрОтказаИОН',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:575px;height:603px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:578px;width:575px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:28px;width:559px;height:542px;',
			height: 542,width: 559,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Текст сообщения',
					width:'100',
					dataIndex:'ТекстСообщения',
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
						name:'НомерСтроки',
					},
					{
						name:'ТекстСообщения',
					},
				]
			},
		},
	]
});