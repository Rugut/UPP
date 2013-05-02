Ext.define('Документы.ГТДИмпорт.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ГТД по импорту',
	
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
					width:'20',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'НУ',
					width:'20',
					dataIndex:'ОтражатьВНалоговомУчете',
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
					text:'Номер ГТД',
					width:'120',
					dataIndex:'НомерГТД',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Таможенный сбор валютный',
					width:'80',
					dataIndex:'ТаможенныйСборВал',
					flex:1,
				},
				{
					text:'Таможенный сбор',
					width:'80',
					dataIndex:'ТаможенныйСбор',
					flex:1,
				},
				{
					text:'Таможенный штраф в валюте',
					width:'80',
					dataIndex:'ТаможенныйШтрафВал',
					flex:1,
				},
				{
					text:'Таможенный штраф',
					width:'80',
					dataIndex:'ТаможенныйШтраф',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Договор контрагента (регл)',
					width:'120',
					dataIndex:'ДоговорКонтрагентаРегл',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГТДИмпорт/ВыбратьПоСсылке/100'},
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
						name:'ОтражатьВНалоговомУчете',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Организация',
					},
					{
						name:'Ответственный',
					},
					{
						name:'ТаможенныйСборВал',
					},
					{
						name:'ТаможенныйСбор',
					},
					{
						name:'ТаможенныйШтрафВал',
					},
					{
						name:'ТаможенныйШтраф',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'ДоговорКонтрагентаРегл',
					},
					{
						name:'Подразделение',
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