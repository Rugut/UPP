Ext.define('Документы.РегистрацияРазовыхНачисленийРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:712px;height:513px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация разовых начислений сотрудникам организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:396px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:484px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:564px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:584px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 220,
			height: 19,
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:461px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 608,
			height: 19,
			style: 'position:absolute;left:96px;top:461px;width:608px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:396px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:484px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:696px;height:334px;',
			height: 334,width: 696,
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:85px;width:682px;height:223px;',
			height: 223,width: 682,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
					dataIndex:'Авторасчет',
					flex:1,
				},
				{
					text:'№',
					width:'42',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'80',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'118',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Начисление',
					width:'125',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'125',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'190',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
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
					text:'Показатель',
					width:'110',
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
					text:'Показатель',
					width:'110',
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
					text:'Показатель',
					width:'110',
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
					text:'Показатель',
					width:'110',
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
					text:'Результат',
					width:'80',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'96',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'96',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Оплачивать часов',
					width:'96',
					dataIndex:'ОплачиватьЧасов',
					flex:1,
				},
				{
					text:'Отработано дней',
					width:'100',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Отработано часов',
					width:'100',
					dataIndex:'ОтработаноЧасов',
					flex:1,
				},
				{
					text:'Оплачено дней/часов',
					width:'80',
					dataIndex:'ОплаченоДнейЧасов',
					flex:1,
				},
				{
					text:'Зачесть в норму дней',
					width:'100',
					dataIndex:'НормаДней',
					flex:1,
				},
				{
					text:'Зачесть в норму часов',
					width:'100',
					dataIndex:'НормаЧасов',
					flex:1,
				},
				{
					text:'Отработано дней по пятидневке',
					width:'100',
					dataIndex:'ОтработаноДнейПоПятидневке',
					flex:1,
				},
				{
					text:'Зачесть в норму дней по пятидневке',
					width:'100',
					dataIndex:'НормаДнейПоПятидневке',
					flex:1,
				},
				{
					text:'Отработано часов по пятидневке',
					width:'100',
					dataIndex:'ОтработаноЧасовПоПятидневке',
					flex:1,
				},
				{
					text:'Норма часов по пятидневке',
					width:'100',
					dataIndex:'НормаЧасовПоПятидневке',
					flex:1,
				},
				{
					text:'Дата начала события',
					width:'100',
					dataIndex:'ДатаНачалаСобытия',
					flex:1,
				},
				{
					text:'Сторно',
					width:'45',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Сторнируемый документ',
					width:'100',
					dataIndex:'СторнируемыйДокумент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияРазовыхНачисленийРаботниковОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Авторасчет',
					},
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
						name:'ПодразделениеОрганизации',
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
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Результат',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'ОплачиватьЧасов',
					},
					{
						name:'ОтработаноДней',
					},
					{
						name:'ОтработаноЧасов',
					},
					{
						name:'ОплаченоДнейЧасов',
					},
					{
						name:'НормаДней',
					},
					{
						name:'НормаЧасов',
					},
					{
						name:'ОтработаноДнейПоПятидневке',
					},
					{
						name:'НормаДнейПоПятидневке',
					},
					{
						name:'ОтработаноЧасовПоПятидневке',
					},
					{
						name:'НормаЧасовПоПятидневке',
					},
					{
						name:'ДатаНачалаСобытия',
					},
					{
						name:'Сторно',
					},
					{
						name:'СторнируемыйДокумент',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРегистрацииВремени',
			text: 'Период оплачиваемого времени:',
			style: 'position:absolute;left:6px;top:7px;width:170px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Сотрудники',
			style: 'position:absolute;left:6px;top:45px;width:682px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Целодневный (целосменный)',
			style: 'position:absolute;left:180px;top:7px;width:174px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внутрисменный',
			style: 'position:absolute;left:180px;top:26px;width:174px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Доп. начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:682px;height:284px;',
			height: 284,width: 682,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
					dataIndex:'Авторасчет',
					flex:1,
				},
				{
					text:'№',
					width:'42',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
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
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Начисление',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Договор-основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'190',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Показатель1',
					width:'60',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'60',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'60',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'60',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'60',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'60',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Результат',
					width:'76',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Оплачено дней/часов',
					width:'68',
					dataIndex:'ОплаченоДнейЧасов',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'87',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'87',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Код вычета',
					width:'62',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Сумма вычета (количество детей)',
					width:'100',
					dataIndex:'СуммаВычета',
					flex:1,
				},
				{
					text:'Сторно',
					width:'41',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Сторнируемый документ',
					width:'100',
					dataIndex:'СторнируемыйДокумент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияРазовыхНачисленийРаботниковОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Авторасчет',
					},
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
						name:'ПодразделениеОрганизации',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'ДокументОснование',
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
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Результат',
					},
					{
						name:'ОплаченоДнейЧасов',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'КодВычета',
					},
					{
						name:'СуммаВычета',
					},
					{
						name:'Сторно',
					},
					{
						name:'СторнируемыйДокумент',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:419px;width:459px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:491px;top:419px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:575px;top:419px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:316px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Начисления списком сотрудников',
				},
				{
					text:'Доп. начисления списком сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:712px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
	]
});