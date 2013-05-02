Ext.define('Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оплаты от покупателей платежными картами',
	
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
					text:'Вид операции',
					width:'120',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Валюта документа',
					width:'70',
					dataIndex:'ВалютаДокумента1',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Плательщик',
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
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
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
					width:'142',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Способ заполнения',
					width:'148',
					dataIndex:'СпособЗаполнения',
					flex:1,
				},
				{
					text:'Номер чека ККМ',
					width:'120',
					dataIndex:'НомерЧекаККМ',
					flex:1,
				},
				{
					text:'Эквайрер',
					width:'106',
					dataIndex:'Эквайрер',
					flex:1,
				},
				{
					text:'Договор эквайринга',
					width:'169',
					dataIndex:'ДоговорЭквайринга',
					flex:1,
				},
				{
					text:'Договор расчетов по эквайрингу',
					width:'100',
					dataIndex:'ДоговорРасчетовПоЭквайрингу',
					flex:1,
				},
				{
					text:'Счет учета расчетов с эквайером',
					width:'89',
					dataIndex:'СчетУчетаРасчетовСЭквайером',
					flex:1,
				},
				{
					text:'Вид оплаты',
					width:'121',
					dataIndex:'ВидОплаты',
					flex:1,
				},
				{
					text:'% торговой уступки',
					width:'109',
					dataIndex:'ПроцентТорговойУступки',
					flex:1,
				},
				{
					text:'Сумма торговой уступки',
					width:'132',
					dataIndex:'СуммаТорговойУступки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОплатаОтПокупателяПлатежнойКартой/ВыбратьПоСсылке/100'},
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
						name:'ВидОперации',
					},
					{
						name:'ВалютаДокумента1',
					},
					{
						name:'СуммаДокумента',
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
						name:'Подразделение',
					},
					{
						name:'Комментарий',
					},
					{
						name:'Ответственный',
					},
					{
						name:'СпособЗаполнения',
					},
					{
						name:'НомерЧекаККМ',
					},
					{
						name:'Эквайрер',
					},
					{
						name:'ДоговорЭквайринга',
					},
					{
						name:'ДоговорРасчетовПоЭквайрингу',
					},
					{
						name:'СчетУчетаРасчетовСЭквайером',
					},
					{
						name:'ВидОплаты',
					},
					{
						name:'ПроцентТорговойУступки',
					},
					{
						name:'СуммаТорговойУступки',
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