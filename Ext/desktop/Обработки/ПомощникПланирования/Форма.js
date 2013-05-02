Ext.define('Обработки.ПомощникПланирования.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:814px;height:541px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помощник планирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:814px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Выбирать даты периодом',
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Выбирать даты периодом',
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:516px;width:814px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Далее>>',
				},
				'-',
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:798px;height:475px;',
			height: 475,width: 798,
			items:
			[
				{
					title:'Конечные планы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:403px;',
			height: 403,width: 784,
			columns:
			[
				{
					text:'Вид плана',
					width:'100',
					dataIndex:'ВидПлана',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'200',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Дата нач.',
					width:'80',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:'Дата кон.',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
				{
					text:'Проект',
					width:'200',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'200',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Профиль распределения',
					width:'200',
					dataIndex:'ПрофильРаспределения',
					flex:1,
				},
				{
					text:'Профиль распределения (детализация плана)',
					width:'200',
					dataIndex:'ПрофильРаспределенияДетализацияПлана',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникПланирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидПлана',
					},
					{
						name:'Сценарий',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
					{
						name:'Проект',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ПрофильРаспределения',
					},
					{
						name:'ПрофильРаспределенияДетализацияПлана',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Стратегия расчета количества',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить результат расчета (%):',
			style: 'position:absolute;left:6px;top:430px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаИзменитьРезультатРасчетаКоличестваПроцент',
			style: 'position:absolute;left:198px;top:430px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатРасчетаКоличестваОкруглитьДо',
			text: 'округлить до:',
			style: 'position:absolute;left:280px;top:430px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:362px;top:430px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаРежимСложенияОбъединения',
			style: 'position:absolute;left:504px;top:430px;width:286px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:356px;',
			height: 356,width: 784,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:' Стратегия',
					width:'106',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид стратегии',
					width:'100',
					dataIndex:'ВидСтратегии',
					flex:1,
				},
				{
					text:' %',
					width:'60',
					dataIndex:'Процент',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'НаДату',
					flex:1,
				},
				{
					text:' Дата нач.',
					width:'80',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:' Дата кон.',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
				{
					text:' И',
					width:'20',
					dataIndex:'Исключить',
					flex:1,
				},
				{
					text:' Р',
					width:'20',
					dataIndex:'ВыполнятьРазузлование',
					flex:1,
				},
				{
					text:' Уровень',
					width:'60',
					dataIndex:'КоличествоУровнейРазузлования',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникПланирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидСтратегии',
					},
					{
						name:'Процент',
					},
					{
						name:'НаДату',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
					{
						name:'Исключить',
					},
					{
						name:'ВыполнятьРазузлование',
					},
					{
						name:'КоличествоУровнейРазузлования',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРежим',
			text: 'Режим:',
			style: 'position:absolute;left:462px;top:430px;width:40px;height:19px;text-align:right;',
		},
					]
				},
				{
					title:'Стратегия расчета суммы',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить результат расчета (%)',
			style: 'position:absolute;left:6px;top:430px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаИзменитьРезультатРасчетаСуммыПроцент',
			style: 'position:absolute;left:198px;top:430px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатРасчетаСуммыОкруглитьДо',
			text: 'округлить до:',
			style: 'position:absolute;left:280px;top:430px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:362px;top:430px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:356px;',
			height: 356,width: 784,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:' Стратегия',
					width:'200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:' Стратегия расчета суммы',
					width:'195',
					dataIndex:'СтратегияРасчетаСуммы',
					flex:1,
				},
				{
					text:' Тип цен',
					width:'200',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:' Функция',
					width:'80',
					dataIndex:'Функция',
					flex:1,
				},
				{
					text:' Дата',
					width:'80',
					dataIndex:'ДатаЦен',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникПланирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Наименование',
					},
					{
						name:'СтратегияРасчетаСуммы',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Функция',
					},
					{
						name:'ДатаЦен',
					},
				]
			},
		},
					]
				},
				{
					title:'Отборы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:381px;',
			height: 381,width: 784,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникПланирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:430px;width:210px;height:19px;',
		},
					]
				},
				{
					title:'Сформированные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:784px;height:403px;',
			height: 403,width: 784,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Проведен',
					flex:1,
				},
				{
					text:'Документ',
					width:'220',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Вид плана',
					width:'120',
					dataIndex:'ВидПлана',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникПланирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Проведен',
					},
					{
						name:'Документ',
					},
					{
						name:'ВидПлана',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:784px;height:24px;',
			items:
			[
				{
					text:'Установить пометки',
				},
				{
					text:'Снять пометки',
				},
				'-',
				{
					text:'Провести',
				},
				{
					text:'Установить/Снять пометку на удаление',
				},
				{
					text:'Удалить непосредственно',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
					]
				},
			]
		},
	]
});