Ext.define('Справочники.ВнешниеОбработки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные печатные формы, обработки, заполнение табличных частей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:167px;top:33px;width:433px;height:280px;',
			height: 280,width: 433,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид обработки',
					width:'120',
					dataIndex:'ВидОбработки',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Комментарий к файлу источнику',
					width:'120',
					dataIndex:'КомментарийКФайлуИсточнику',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидОбработки',
					},
					{
						name:'Код',
					},
					{
						name:'Комментарий',
					},
					{
						name:'КомментарийКФайлуИсточнику',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:153px;height:280px;',
			height: 280,width: 153,
			columns:
			[
				{
					text:'Наименование',
					width:'143',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Доступ к справочнику в целом',
				},
			]
		},
	]
});