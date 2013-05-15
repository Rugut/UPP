Ext.define('Обработки.ПерерасчетЗарплатыОрганизаций.СписокПодразделений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:277px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор по подразделениям',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:261px;height:251px;',
			height: 251,width: 261,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'168',
					dataIndex:'Подразделение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПерерасчетЗарплатыОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Подразделение',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:277px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});