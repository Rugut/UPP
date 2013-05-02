Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаНавигацииПоОшибкам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:649px;height:148px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Навигация по ошибкам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:649px;height:124px;',
			height: 124,width: 649,
			columns:
			[
				{
					text:'Отчет',
					width:'100',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Описание',
					width:'102',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Страница',
					width:'98',
					dataIndex:'Страница',
					flex:1,
				},
				{
					text:'Строка',
					width:'100',
					dataIndex:'Строка',
					flex:1,
				},
				{
					text:'Графа',
					width:'100',
					dataIndex:'Графа',
					flex:1,
				},
				{
					text:'Имя ячейки',
					width:'100',
					dataIndex:'ИмяЯчейки',
					flex:1,
				},
				{
					text:'Строка п/п',
					width:'100',
					dataIndex:'СтрокаПП',
					flex:1,
				},
				{
					text:'Документ-отчет',
					width:'100',
					dataIndex:'ОтчетДок',
					flex:1,
				},
				{
					text:'Раздел',
					width:'100',
					dataIndex:'Раздел',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаРегламентированныхОтчетов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Отчет',
					},
					{
						name:'Описание',
					},
					{
						name:'Страница',
					},
					{
						name:'Строка',
					},
					{
						name:'Графа',
					},
					{
						name:'ИмяЯчейки',
					},
					{
						name:'СтрокаПП',
					},
					{
						name:'ОтчетДок',
					},
					{
						name:'Раздел',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:24px;',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоОшибок',
			text: '',
			style: 'position:absolute;left:193px;top:5px;width:450px;height:15px;text-align:right;',
		},
	]
});