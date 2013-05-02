Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораРеквизита',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:355px;height:457px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор реквизита',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:432px;width:355px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:12px;width:339px;height:412px;',
			height: 412,width: 339,
			columns:
			[
				{
					text:'Реквизиты',
					width:'145',
					dataIndex:'Реквизиит',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаСправочниковИДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Реквизиит',
					},
				]
			},
		},
	]
});