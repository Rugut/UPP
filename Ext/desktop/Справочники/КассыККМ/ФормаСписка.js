Ext.define('Справочники.КассыККМ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:529px;height:360px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кассы ККМ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:513px;height:319px;',
			height: 319,width: 513,
			columns:
			[
				{
					text:'',
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
					width:'261',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'224',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Формировать нефискальные чеки',
					width:'70',
					dataIndex:'ФормироватьНефискальныеЧеки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КассыККМ/ВыбратьПоСсылке/100'},
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
						name:'ФормироватьНефискальныеЧеки',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:25px;',
			items:
			[
				'-',
			]
		},
	]
});