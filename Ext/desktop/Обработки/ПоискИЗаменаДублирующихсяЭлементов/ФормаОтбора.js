Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:359px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Значения настроек',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:9px;width:343px;height:350px;',
			height: 350,width: 343,
			columns:
			[
				{
					text:'Представление',
					width:'276',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'ИндексКартинки',
					flex:1,
				},
				{
					text:'',
					width:'72',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискИЗаменаДублирующихсяЭлементов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Представление',
					},
					{
						name:'ИндексКартинки',
					},
					{
						name:'Значение',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:359px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});