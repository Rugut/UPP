Ext.define('Документы.РезервированиеПомещений.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:781px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Резервирования помещений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:765px;height:380px;',
			height: 380,width: 765,
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
					text:'Помещение',
					width:'100',
					dataIndex:'Помещение',
					flex:1,
				},
				{
					text:'Занятость',
					width:'60',
					dataIndex:'Занятость',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'80',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'80',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РезервированиеПомещений/ВыбратьПоСсылке/100'},
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
						name:'Помещение',
					},
					{
						name:'Занятость',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:781px;height:25px;',
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