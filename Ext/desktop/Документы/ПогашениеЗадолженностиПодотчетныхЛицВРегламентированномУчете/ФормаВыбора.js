Ext.define('Документы.ПогашениеЗадолженностиПодотчетныхЛицВРегламентированномУчете.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Погашения задолженности подотчетных лиц в регламентированном учете',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:380px;',
			height: 380,width: 684,
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
					text:'Организация',
					width:'147',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'За период',
					width:'84',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'122',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'350',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПогашениеЗадолженностиПодотчетныхЛицВРегламентированномУчете/ВыбратьПоСсылке/100'},
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
						name:'Организация',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'Комментарий',
					},
					{
						name:'Ответственный',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
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