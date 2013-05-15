Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификации покупателей по стадиям взаимоотношений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:259px;',
			height: 259,width: 704,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'80',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'80',
					dataIndex:'Периодичность',
					flex:1,
				},
				{
					text:'X класс нач',
					width:'80',
					dataIndex:'XКлассНач',
					flex:1,
				},
				{
					text:'X класс кон',
					width:'80',
					dataIndex:'XКлассКон',
					flex:1,
				},
				{
					text:'Y класс нач',
					width:'80',
					dataIndex:'YКлассНач',
					flex:1,
				},
				{
					text:'Y класс кон',
					width:'80',
					dataIndex:'YКлассКон',
					flex:1,
				},
				{
					text:'Z класс нач',
					width:'80',
					dataIndex:'ZКлассНач',
					flex:1,
				},
				{
					text:'Z класс кон',
					width:'80',
					dataIndex:'ZКлассКон',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'160',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлассификацияПокупателейПоСтадиямВзаимоотношений/ВыбратьПоСсылке/100'},
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
						name:'ДатаОкончания',
					},
					{
						name:'Периодичность',
					},
					{
						name:'XКлассНач',
					},
					{
						name:'XКлассКон',
					},
					{
						name:'YКлассНач',
					},
					{
						name:'YКлассКон',
					},
					{
						name:'ZКлассНач',
					},
					{
						name:'ZКлассКон',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
	]
});