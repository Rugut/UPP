Ext.define('Документы.ПоступлениеОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:333px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:333px;width:555px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПериодНачало',
			style: 'position:absolute;left:422px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:512px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПериодКонец',
			style: 'position:absolute;left:530px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:84px;width:634px;height:24px;',
			items:
			[
				{
					text:'Заполнить за период',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:108px;width:634px;height:220px;',
			height: 220,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'ОС',
					width:'100',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Учитывать как ОС',
					width:'100',
					dataIndex:'УчитыватьКакОС',
					flex:1,
				},
				{
					text:'Дата принятия к учету',
					width:'100',
					dataIndex:'ДатаПринятияКУчету',
					flex:1,
				},
				{
					text:'Местонахождение',
					width:'100',
					dataIndex:'МестонахождениеОбъекта',
					flex:1,
				},
				{
					text:'МОЛ',
					width:'100',
					dataIndex:'МОЛ',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'100',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Срок полезного использования',
					width:'100',
					dataIndex:'СрокПолезногоИспользования',
					flex:1,
				},
				{
					text:'Счет снижения стоимости',
					width:'100',
					dataIndex:'СчетСниженияСтоимости',
					flex:1,
				},
				{
					text:'Начислять амортизацию',
					width:'100',
					dataIndex:'НачислятьАмортизацию',
					flex:1,
				},
				{
					text:'Метод начисления амортизации',
					width:'100',
					dataIndex:'МетодНачисленияАмортизации',
					flex:1,
				},
				{
					text:'Счет начисления амортизации',
					width:'100',
					dataIndex:'СчетНачисленияАмортизации',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'100',
					dataIndex:'ПервоначальнаяСтоимость',
					flex:1,
				},
				{
					text:'Ликвидационная стоимость',
					width:'100',
					dataIndex:'ЛиквидационнаяСтоимость',
					flex:1,
				},
				{
					text:'Коэффициент ускорения',
					width:'100',
					dataIndex:'КоэффициентУскорения',
					flex:1,
				},
				{
					text:'Счет затрат',
					width:'100',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'100',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Предполагаемый объем продукции',
					width:'98',
					dataIndex:'ПредполагаемыйОбъемПродукции',
					flex:1,
				},
				{
					text:'Сумма начисленной амортизации',
					width:'100',
					dataIndex:'СуммаНачисленнойАмортизации',
					flex:1,
				},
				{
					text:'Новый счет учета',
					width:'100',
					dataIndex:'СчетУчетаНовый',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'100',
					dataIndex:'Субконто1Нов',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'100',
					dataIndex:'Субконто2Нов',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'100',
					dataIndex:'Субконто3Нов',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Кор. счет',
					width:'100',
					dataIndex:'КоррСчет',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'100',
					dataIndex:'Субконто1Кт',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'100',
					dataIndex:'Субконто2Кт',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'100',
					dataIndex:'Субконто3Кт',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеОсновныхСредствМеждународный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'УчитыватьКакОС',
					},
					{
						name:'ДатаПринятияКУчету',
					},
					{
						name:'МестонахождениеОбъекта',
					},
					{
						name:'МОЛ',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'СрокПолезногоИспользования',
					},
					{
						name:'СчетСниженияСтоимости',
					},
					{
						name:'НачислятьАмортизацию',
					},
					{
						name:'МетодНачисленияАмортизации',
					},
					{
						name:'СчетНачисленияАмортизации',
					},
					{
						name:'ПервоначальнаяСтоимость',
					},
					{
						name:'ЛиквидационнаяСтоимость',
					},
					{
						name:'КоэффициентУскорения',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто3',
					},
					{
						name:'ПредполагаемыйОбъемПродукции',
					},
					{
						name:'СуммаНачисленнойАмортизации',
					},
					{
						name:'СчетУчетаНовый',
					},
					{
						name:'Субконто1Нов',
					},
					{
						name:'Субконто2Нов',
					},
					{
						name:'Субконто3Нов',
					},
					{
						name:'Сумма',
					},
					{
						name:'КоррСчет',
					},
					{
						name:'Субконто1Кт',
					},
					{
						name:'Субконто2Кт',
					},
					{
						name:'Субконто3Кт',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:650px;height:25px;',
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
					text:'OK',
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
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:622px;top:33px;width:19px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});