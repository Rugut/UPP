Ext.define('Справочники.ПодразделенияОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:512px;height:380px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подразделения организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:496px;height:315px;',
			height: 315,width: 496,
			columns:
			[
				{
					text:'Наименование',
					width:'240',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'84',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'80',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'80',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Порядок',
					width:'49',
					dataIndex:'Порядок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодразделенияОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
					},
					{
						name:'Порядок',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:512px;height:25px;',
			items:
			[
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Доступ к справочнику в целом',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Подразделения организации',
			style: 'position:absolute;left:8px;top:33px;width:223px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:233px;top:33px;width:271px;height:19px;',
		},
	]
});