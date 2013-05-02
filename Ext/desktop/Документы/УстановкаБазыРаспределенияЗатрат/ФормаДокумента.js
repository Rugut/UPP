Ext.define('Документы.УстановкаБазыРаспределенияЗатрат.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:669px;height:402px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка базы распределения затрат',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:350px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:350px;width:564px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:669px;height:25px;',
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
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:326px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:326px;width:564px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:669px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:652px;height:171px;',
			height: 171,width: 652,
			columns:
			[
				{
					text:'N',
					width:'39',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'100',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'100',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Продукция',
					width:'100',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'99',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Заказ',
					width:'101',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Вариант выпуска продукции',
					width:'149',
					dataIndex:'ВариантВыпускаПродукции',
					flex:1,
				},
				{
					text:'Вид выпуска',
					width:'100',
					dataIndex:'ВидВыпуска',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'База приход',
					width:'100',
					dataIndex:'БазаПриход',
					flex:1,
				},
				{
					text:'База',
					width:'100',
					dataIndex:'База',
					flex:1,
				},
				{
					text:'База остаток НЗП',
					width:'100',
					dataIndex:'БазаОстатокНЗП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаБазыРаспределенияЗатрат/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Продукция',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказ',
					},
					{
						name:'ВариантВыпускаПродукции',
					},
					{
						name:'ВидВыпуска',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'БазаПриход',
					},
					{
						name:'База',
					},
					{
						name:'БазаОстатокНЗП',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:125px;width:652px;height:24px;',
			items:
			[
				{
					text:'Заполнить по шаблону',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатрат',
			text: 'Способ распределения:',
			style: 'position:absolute;left:8px;top:80px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатрат',
			style: 'position:absolute;left:96px;top:81px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатратШаблон',
			text: 'Способ распред. (шаблон):',
			style: 'position:absolute;left:335px;top:80px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатратШаблон',
			style: 'position:absolute;left:423px;top:81px;width:237px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:494px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:563px;top:33px;width:97px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:424px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'МСФО',
			style: 'position:absolute;left:423px;top:57px;width:237px;height:19px;',
		},
	]
});