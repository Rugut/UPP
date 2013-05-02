Ext.define('Документы.ПриемНаРаботу.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прием на работу',
	
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
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:326px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:326px;width:518px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:624px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:33px;width:192px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:608px;height:259px;',
			height: 259,width: 608,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:594px;height:209px;',
			height: 209,width: 594,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'70',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Должность',
					width:'85',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Ставка',
					width:'35',
					dataIndex:'ЗанимаемыхСтавок',
					flex:1,
				},
				{
					text:'Дата приема',
					width:'80',
					dataIndex:'ДатаПриема',
					flex:1,
				},
				{
					text:'По',
					width:'55',
					dataIndex:'ДатаПо',
					flex:1,
				},
				{
					text:'Регистрировать увольнение отдельным документом',
					width:'20',
					dataIndex:'НапомнитьПоЗавершении',
					flex:1,
				},
				{
					text:'Испытательный срок',
					width:'120',
					dataIndex:'ИспытательныйСрок',
					flex:1,
				},
				{
					text:'График работы',
					width:'120',
					dataIndex:'ГрафикРаботы',
					flex:1,
				},
				{
					text:'Способ отражения в упр учете',
					width:'120',
					dataIndex:'СпособОтраженияВУпрУчете',
					flex:1,
				},
				{
					text:'Учитывать начисления по организации',
					width:'120',
					dataIndex:'УчетНачисленийПоОрганизации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПриемНаРаботу/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'ЗанимаемыхСтавок',
					},
					{
						name:'ДатаПриема',
					},
					{
						name:'ДатаПо',
					},
					{
						name:'НапомнитьПоЗавершении',
					},
					{
						name:'ИспытательныйСрок',
					},
					{
						name:'ГрафикРаботы',
					},
					{
						name:'СпособОтраженияВУпрУчете',
					},
					{
						name:'УчетНачисленийПоОрганизации',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:594px;height:24px;',
			items:
			[
				{
					text:'Кандидатами',
				},
				{
					text:'Сотрудниками, принятыми в организацию',
				},
			]
		},
					]
				},
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:594px;height:209px;',
			height: 209,width: 594,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'70',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'245',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР1',
					flex:1,
				},
				{
					text:'Тарифный разряд 1',
					width:'125',
					dataIndex:'ТарифныйРазряд1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР2',
					flex:1,
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
					dataIndex:'ТарифныйРазряд2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР3',
					flex:1,
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
					dataIndex:'ТарифныйРазряд3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР4',
					flex:1,
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
					dataIndex:'ТарифныйРазряд4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР5',
					flex:1,
				},
				{
					text:'Тарифный разряд5',
					width:'125',
					dataIndex:'ТарифныйРазряд5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР6',
					flex:1,
				},
				{
					text:'Тарифный разряд6',
					width:'125',
					dataIndex:'ТарифныйРазряд6',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПриемНаРаботу/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказательТР1',
					},
					{
						name:'ТарифныйРазряд1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказательТР2',
					},
					{
						name:'ТарифныйРазряд2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказательТР3',
					},
					{
						name:'ТарифныйРазряд3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказательТР4',
					},
					{
						name:'ТарифныйРазряд4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказательТР5',
					},
					{
						name:'ТарифныйРазряд5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'НаименованиеПоказательТР6',
					},
					{
						name:'ТарифныйРазряд6',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:594px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Взыскания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:594px;height:209px;',
			height: 209,width: 594,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Физлицо',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Показатели для расчета взыскания',
					width:'245',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПриемНаРаботу/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Физлицо',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:594px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
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
		},
	]
});