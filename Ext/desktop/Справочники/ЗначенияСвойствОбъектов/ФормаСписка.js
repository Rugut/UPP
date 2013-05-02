Ext.define('Справочники.ЗначенияСвойствОбъектов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:376px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Значения свойств объектов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:360px;height:280px;',
			height: 280,width: 360,
			columns:
			[
				{
					text:' ',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Владелец',
					width:'100',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Родитель',
					width:'166',
					dataIndex:'Родитель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияСвойствОбъектов/ВыбратьПоСсылке/100'},
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
						name:'Владелец',
					},
					{
						name:'Родитель',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:25px;',
			items:
			[
			]
		},
	]
});