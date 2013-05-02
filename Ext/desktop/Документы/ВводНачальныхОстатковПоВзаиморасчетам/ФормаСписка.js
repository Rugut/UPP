Ext.define('Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод начальных остатков по взаиморасчетам',
	
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
					text:'УУ',
					width:'20',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'БУ',
					width:'21',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'Расчеты',
					width:'59',
					dataIndex:'ОтразитьРасчетыСКонтрагентами',
					flex:1,
				},
				{
					text:'Проводки',
					width:'60',
					dataIndex:'ФормироватьПроводки',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
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
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'200',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковПоВзаиморасчетам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ОтражатьВУправленческомУчете',
					},
					{
						name:'ОтражатьВБухгалтерскомУчете',
					},
					{
						name:'ОтразитьРасчетыСКонтрагентами',
					},
					{
						name:'ФормироватьПроводки',
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
						name:'ВидОперации',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
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
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});