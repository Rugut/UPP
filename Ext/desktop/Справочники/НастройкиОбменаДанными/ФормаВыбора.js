Ext.define('Справочники.НастройкиОбменаДанными.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:411px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Настройки обмена данными',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:648px;height:370px;',
			height: 370,width: 648,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'277',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Тип настройки',
					width:'120',
					dataIndex:'ТипНастройки',
					flex:1,
				},
				{
					text:'Узел информационной базы',
					width:'140',
					dataIndex:'УзелИнформационнойБазы',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке/100'},
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
						name:'ТипНастройки',
					},
					{
						name:'УзелИнформационнойБазы',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
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