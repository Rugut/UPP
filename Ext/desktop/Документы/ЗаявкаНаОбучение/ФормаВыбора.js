Ext.define('Документы.ЗаявкаНаОбучение.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:721px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявка на обучение',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:705px;height:380px;',
			height: 380,width: 705,
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
					text:'Курс обучения',
					width:'120',
					dataIndex:'КурсОбучения',
					flex:1,
				},
				{
					text:'Дата завершения курса',
					width:'132',
					dataIndex:'ДатаЗавершенияКурса',
					flex:1,
				},
				{
					text:'Сотрудники',
					width:'100',
					dataIndex:'КраткийСоставДокумента',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявкаНаОбучение/ВыбратьПоСсылке/100'},
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
						name:'КурсОбучения',
					},
					{
						name:'ДатаЗавершенияКурса',
					},
					{
						name:'КраткийСоставДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:721px;height:25px;',
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