Ext.define('Обработки.УниверсальныйЖурналДокументов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:681px;height:399px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Общий журнал документов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:196px;width:255px;height:24px;',
			items:
			[
				{
					text:'Заполнить автоматически все общие графы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:374px;width:681px;height:25px;',
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
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:269px;top:220px;width:404px;height:146px;',
			height: 146,width: 404,
			columns:
			[
				{
					text:'Представление',
					width:'146',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Имя',
					width:'151',
					dataIndex:'Имя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Представление',
					},
					{
						name:'Имя',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:220px;width:255px;height:146px;',
			height: 146,width: 255,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:618px;top:5px;width:55px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить',
				},
				{
					text:'&Удалить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:614px;top:196px;width:59px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отметить для всех документов по имени текущего реквизита',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:665px;height:146px;',
			height: 146,width: 665,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
	]
});