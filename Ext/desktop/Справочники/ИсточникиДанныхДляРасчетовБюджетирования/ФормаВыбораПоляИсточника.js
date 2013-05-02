Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораПоляИсточника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:236px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поля запроса',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:220px;height:320px;',
			height: 320,width: 220,
			columns:
			[
				{
					text:'Поле',
					width:'220',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиДанныхДляРасчетовБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:220px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:236px;height:25px;',
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
	]
});