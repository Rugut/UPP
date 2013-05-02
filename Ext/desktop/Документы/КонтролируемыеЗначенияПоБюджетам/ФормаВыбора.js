Ext.define('Документы.КонтролируемыеЗначенияПоБюджетам.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контролируемые значения по бюджетам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
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
					text:'Состояние',
					width:'120',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'120',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Вид контролируемых значений',
					width:'120',
					dataIndex:'ВидКонтролируемыхЗначений',
					flex:1,
				},
				{
					text:'Использование контролируемых значений',
					width:'120',
					dataIndex:'ИспользованиеКонтролируемыхЗначений',
					flex:1,
				},
				{
					text:'Вид ограничения оборотов',
					width:'120',
					dataIndex:'ВидОграниченияОборотов',
					flex:1,
				},
				{
					text:'Контролирующий сценарий',
					width:'120',
					dataIndex:'КонтролирующийСценарий',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтролируемыеЗначенияПоБюджетам/ВыбратьПоСсылке/100'},
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
						name:'Состояние',
					},
					{
						name:'Сценарий',
					},
					{
						name:'ВидКонтролируемыхЗначений',
					},
					{
						name:'ИспользованиеКонтролируемыхЗначений',
					},
					{
						name:'ВидОграниченияОборотов',
					},
					{
						name:'КонтролирующийСценарий',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
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