Ext.define('Документы.ОтменаСкидокНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:688px;height:380px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отмена скидок номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:672px;height:339px;',
			height: 339,width: 672,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'159',
					dataIndex:'Номер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтменаСкидокНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:688px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
	]
});