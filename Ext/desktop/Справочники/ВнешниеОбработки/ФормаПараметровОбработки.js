Ext.define('Справочники.ВнешниеОбработки.ФормаПараметровОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:341px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные параметры обработки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Принять',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:384px;height:276px;',
			height: 276,width: 384,
			columns:
			[
				{
					text:'Имя',
					width:'149',
					dataIndex:'ИмяПараметра',
					flex:1,
				},
				{
					text:'Значение',
					width:'152',
					dataIndex:'ЗначениеПараметра',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИмяПараметра',
					},
					{
						name:'ЗначениеПараметра',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:24px;',
			items:
			[
			]
		},
	]
});