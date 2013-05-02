Ext.define('Справочники.ОтправкиФСС.ФормаСпискаОбщая',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Отправки в ФСС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата отправки',
					width:'115',
					dataIndex:'ДатаОтправки',
					flex:1,
				},
				{
					text:'Статус отправки',
					width:'95',
					dataIndex:'СтатусОтправки',
					flex:1,
				},
				{
					text:'Организация',
					width:'126',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Отчет',
					width:'100',
					dataIndex:'ОтчетСсылка',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'99',
					dataIndex:'ИдентификаторОтправкиНаСервере',
					flex:1,
				},
				{
					text:'Дата получения результата',
					width:'148',
					dataIndex:'ДатаПолученияРезультата',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтправкиФСС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ДатаОтправки',
					},
					{
						name:'СтатусОтправки',
					},
					{
						name:'Организация',
					},
					{
						name:'ОтчетСсылка',
					},
					{
						name:'ИдентификаторОтправкиНаСервере',
					},
					{
						name:'ДатаПолученияРезультата',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});