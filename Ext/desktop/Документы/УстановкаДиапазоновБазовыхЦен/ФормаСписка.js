Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:610px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка диапазонов базовых цен',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:594px;height:259px;',
			height: 259,width: 594,
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
					width:'86',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'114',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'164',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'166',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'270',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаДиапазоновБазовыхЦен/ВыбратьПоСсылке/100'},
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
					{
						name:'ТипЦен',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:610px;height:25px;',
			items:
			[
			]
		},
	]
});