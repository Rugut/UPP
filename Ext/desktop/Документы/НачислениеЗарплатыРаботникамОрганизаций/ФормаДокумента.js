Ext.require(['Данные.Документы.НачислениеЗарплатыРаботникамОрганизаций'], function () 
{
	Ext.define('Документы.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:578px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление зарплаты сотрудникам организации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:416px;top:33px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:510px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 102,
			height: 19,
			style: 'position:absolute;left:610px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:56px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 202,
			height: 19,
			style: 'position:absolute;left:110px;top:56px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:416px;top:56px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 202,
			height: 19,
			style: 'position:absolute;left:510px;top:56px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:526px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 627,
			height: 19,
			style: 'position:absolute;left:85px;top:526px;width:627px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Полный расчет',
				},
				'-',
				{
					text:'Расчет начислений',
				},
				{
					text:'Погашение займов',
				},
				{
					text:'Расчет НДФЛ',
				},
				{
					text:'Расчет удержаний',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:158px;width:704px;height:231px;',
			height: 231,width: 704,
			items:
			[
				{
					title:'Основные начисления',
					items:
					[
		{
			id: 'Начисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
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
					width:'30',
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
					width:'111',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Начисление',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
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
					width:'75',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Дней',
					width:'39',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Часов',
					width:'39',
					dataIndex:'ОтработаноЧасов',
					flex:1,
				},
				{
					text:'отработано',
					width:'78',
					dataIndex:'ОтработанноеВремя',
					flex:1,
				},
				{
					text:'Оплачено дней/часов',
					width:'75',
					dataIndex:'ОплаченоДнейЧасов',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'73',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'73',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Дополнительный результат',
					width:'100',
					dataIndex:'ДополнительныйРезультат',
					flex:1,
				},
				{
					text:'Оплачивать часов',
					width:'72',
					dataIndex:'ОплачиватьЧасов',
					flex:1,
				},
				{
					text:'Сторно',
					width:'39',
					dataIndex:'Колонка1',
					flex:1,
				},
				{
					text:'Зачесть в норму дней',
					width:'66',
					dataIndex:'НормаДней',
					flex:1,
				},
				{
					text:'Зачесть в норму часов',
					width:'66',
					dataIndex:'НормаЧасов',
					flex:1,
				},
				{
					text:'Норма по пятидневке',
					width:'99',
					dataIndex:'НормаДнейПоПятидневке',
					flex:1,
				},
				{
					text:'Отработано по пятидневке',
					width:'99',
					dataIndex:'ОтработаноДнейПоПятидневке',
					flex:1,
				},
				{
					text:'Норма часов по пятидневке',
					width:'100',
					dataIndex:'НормаЧасовПоПятидневке',
					flex:1,
				},
				{
					text:'Отработано часов по пятидневке',
					width:'100',
					dataIndex:'ОтработаноЧасовПоПятидневке',
					flex:1,
				},
				{
					text:'Начало расчетного периода',
					width:'96',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаНачало',
					flex:1,
				},
				{
					text:'Окончание расчетного периода',
					width:'96',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаОкончание',
					flex:1,
				},
				{
					text:'Дата начала события',
					width:'116',
					dataIndex:'ДатаНачалаСобытия',
					flex:1,
				},
				{
					text:'Сторнируемый документ',
					width:'100',
					dataIndex:'СторнируемыйДокумент',
					flex:1,
				},
				{
					text:'Расчетная база за единицу нормы времени',
					width:'100',
					dataIndex:'РасчетнаяБазаЗаЕдиницуНормыВремени',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникамОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'ОтработаноДней',
					},
					{
						name:'ОтработаноЧасов',
					},
					{
						name:'ОтработанноеВремя',
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
						name:'ДополнительныйРезультат',
					},
					{
						name:'ОплачиватьЧасов',
					},
					{
						name:'Колонка1',
					},
					{
						name:'НормаДней',
					},
					{
						name:'НормаЧасов',
					},
					{
						name:'НормаДнейПоПятидневке',
					},
					{
						name:'ОтработаноДнейПоПятидневке',
					},
					{
						name:'НормаЧасовПоПятидневке',
					},
					{
						name:'ОтработаноЧасовПоПятидневке',
					},
					{
						name:'ПериодРасчетаСреднегоЗаработкаНачало',
					},
					{
						name:'ПериодРасчетаСреднегоЗаработкаОкончание',
					},
					{
						name:'ДатаНачалаСобытия',
					},
					{
						name:'СторнируемыйДокумент',
					},
					{
						name:'РасчетнаяБазаЗаЕдиницуНормыВремени',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Начисления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:60px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
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
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
				{
					title:'Договоры (подряда)',
					items:
					[
		{
			id: 'ДоговорыНаВыполнениеРабот',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'№',
					width:'42',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'69',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Договор',
					width:'168',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'84',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'84',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Начисление',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Сумма по договору',
					width:'100',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Результат',
					width:'100',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Код вычета',
					width:'80',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Сумма вычета',
					width:'100',
					dataIndex:'СуммаВычета',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Сторно',
					width:'42',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникамОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'ДокументОснование',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Размер',
					},
					{
						name:'Результат',
					},
					{
						name:'КодВычета',
					},
					{
						name:'СуммаВычета',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'Сторно',
					},
					{
						name:'СторнируемыйДокумент',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ДоговорыНаВыполнениеРабот');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:56px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
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
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
				{
					title:'Дополнительные начисления',
					items:
					[
		{
			id: 'ДополнительныеНачисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
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
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'76',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'104',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Начисление',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'84',
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
					width:'75',
					dataIndex:'Результат',
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
					width:'119',
					dataIndex:'СуммаВычета',
					flex:1,
				},
				{
					text:'Начало расчетного периода',
					width:'100',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаНачало',
					flex:1,
				},
				{
					text:'Окончание расчетного периода',
					width:'100',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаОкончание',
					flex:1,
				},
				{
					text:'Дата начала события',
					width:'100',
					dataIndex:'ДатаНачалаСобытия',
					flex:1,
				},
				{
					text:'Оплачено дней/часов',
					width:'80',
					dataIndex:'ОплаченоДнейЧасов',
					flex:1,
				},
				{
					text:'Сторно',
					width:'42',
					dataIndex:'Колонка1',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникамОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'КодВычета',
					},
					{
						name:'СуммаВычета',
					},
					{
						name:'ПериодРасчетаСреднегоЗаработкаНачало',
					},
					{
						name:'ПериодРасчетаСреднегоЗаработкаОкончание',
					},
					{
						name:'ДатаНачалаСобытия',
					},
					{
						name:'ОплаченоДнейЧасов',
					},
					{
						name:'Колонка1',
					},
					{
						name:'СторнируемыйДокумент',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ДополнительныеНачисления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:70px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
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
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
				{
					title:'Погашение займов',
					items:
					[
		{
			id: 'ПогашениеЗаймов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'№',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'',
					width:'33',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'210',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Договор займа',
					width:'120',
					dataIndex:'ДоговорЗайма',
					flex:1,
				},
				{
					text:'Начислено %%',
					width:'80',
					dataIndex:'НачисленоПроцентов',
					flex:1,
				},
				{
					text:'Погашено займа и %%',
					width:'120',
					dataIndex:'ПогашениеОсновногоДолга',
					flex:1,
				},
				{
					text:'В т.ч. погашено %%',
					width:'120',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Материальная выгода',
					width:'120',
					dataIndex:'МатериальнаяВыгода',
					flex:1,
				},
				{
					text:'Ставка',
					width:'40',
					dataIndex:'СтавкаНалогообложенияМатвыгоды',
					flex:1,
				},
				{
					text:'Налог по 35%',
					width:'80',
					dataIndex:'НалогНаМатериальнуюВыгоду',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникамОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ДоговорЗайма',
					},
					{
						name:'НачисленоПроцентов',
					},
					{
						name:'ПогашениеОсновногоДолга',
					},
					{
						name:'Результат',
					},
					{
						name:'МатериальнаяВыгода',
					},
					{
						name:'СтавкаНалогообложенияМатвыгоды',
					},
					{
						name:'НалогНаМатериальнуюВыгоду',
					},
					{
						name:'ПодразделениеОрганизации',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ПогашениеЗаймов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:81px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
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
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
				{
					title:'НДФЛ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:61px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
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
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
		{
			id: 'НДФЛ',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'№',
					width:'42',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'200',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Месяц налогового периода',
					width:'120',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'320',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Налог',
					width:'80',
					dataIndex:'Налог',
					flex:1,
				},
				{
					text:'Личный вычет ',
					width:'80',
					dataIndex:'ПримененныйВычетЛичный',
					flex:1,
				},
				{
					text:'Вычеты на первого ребенка',
					width:'180',
					dataIndex:'ЗаголовокВычетовНаДетей',
					flex:1,
				},
				{
					text:'Примененный вычет на детей',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетей',
					flex:1,
				},
				{
					text:'Примененный вычет на детей двойной',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейДвойной',
					flex:1,
				},
				{
					text:'Примененный вычет на детей двойной второй',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейДвойнойВторой',
					flex:1,
				},
				{
					text:'Вычеты на второго ребенка',
					width:'180',
					dataIndex:'ЗаголовокВычетовНаВторыхДетей',
					flex:1,
				},
				{
					text:'Примененный вычет на второго ребенка',
					width:'60',
					dataIndex:'ПримененныйВычетНаВторогоРебенка',
					flex:1,
				},
				{
					text:'Примененный вычет на второго ребенка двойной',
					width:'60',
					dataIndex:'ПримененныйВычетНаВторогоРебенкаДвойной',
					flex:1,
				},
				{
					text:'Примененный вычет на второго ребенка двойной второй',
					width:'60',
					dataIndex:'ПримененныйВычетНаВторогоРебенкаДвойнойВторой',
					flex:1,
				},
				{
					text:'Вычеты на третьего и посл. детей',
					width:'180',
					dataIndex:'ЗаголовокВычетовНаТретьихДетей',
					flex:1,
				},
				{
					text:'Примененный вычет на третьего ребенка',
					width:'60',
					dataIndex:'ПримененныйВычетНаТретьегоРебенка',
					flex:1,
				},
				{
					text:'Примененный вычет на третьего ребенка двойной',
					width:'60',
					dataIndex:'ПримененныйВычетНаТретьегоРебенкаДвойной',
					flex:1,
				},
				{
					text:'Примененный вычет на третьего ребенка двойной второй',
					width:'60',
					dataIndex:'ПримененныйВычетНаТретьегоРебенкаДвойнойВторой',
					flex:1,
				},
				{
					text:'Вычеты на детей-инвалидов',
					width:'180',
					dataIndex:'ЗаголовокВычетовНаДетейИнвалидов',
					flex:1,
				},
				{
					text:'Примененный вычет на детей-инвалидов',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейИнвалидов',
					flex:1,
				},
				{
					text:'Примененный вычет на детей инвалидов двойной',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейИнвалидовДвойной',
					flex:1,
				},
				{
					text:'Примененный вычет на детей инвалидов двойной второй',
					width:'60',
					dataIndex:'ПримененныйВычетНаДетейИнвалидовДвойнойВторой',
					flex:1,
				},
				{
					text:'Имущественные вычеты',
					width:'120',
					dataIndex:'ЗаголовокИмущественныхВычетов',
					flex:1,
				},
				{
					text:'Примененный вычет имущественный - расход',
					width:'60',
					dataIndex:'ПримененныйВычетИмущественныйРасход',
					flex:1,
				},
				{
					text:'Примененный вычет имущественный - %% по кредитам',
					width:'60',
					dataIndex:'ПримененныйВычетИмущественныйПроцентыПоКредитам',
					flex:1,
				},
				{
					text:'Примененный вычет имущественный - %% при перекредитовании',
					width:'60',
					dataIndex:'ПримененныйВычетИмущественныйПроцентыПриПерекредитовании',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникамОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'Налог',
					},
					{
						name:'ПримененныйВычетЛичный',
					},
					{
						name:'ЗаголовокВычетовНаДетей',
					},
					{
						name:'ПримененныйВычетНаДетей',
					},
					{
						name:'ПримененныйВычетНаДетейДвойной',
					},
					{
						name:'ПримененныйВычетНаДетейДвойнойВторой',
					},
					{
						name:'ЗаголовокВычетовНаВторыхДетей',
					},
					{
						name:'ПримененныйВычетНаВторогоРебенка',
					},
					{
						name:'ПримененныйВычетНаВторогоРебенкаДвойной',
					},
					{
						name:'ПримененныйВычетНаВторогоРебенкаДвойнойВторой',
					},
					{
						name:'ЗаголовокВычетовНаТретьихДетей',
					},
					{
						name:'ПримененныйВычетНаТретьегоРебенка',
					},
					{
						name:'ПримененныйВычетНаТретьегоРебенкаДвойной',
					},
					{
						name:'ПримененныйВычетНаТретьегоРебенкаДвойнойВторой',
					},
					{
						name:'ЗаголовокВычетовНаДетейИнвалидов',
					},
					{
						name:'ПримененныйВычетНаДетейИнвалидов',
					},
					{
						name:'ПримененныйВычетНаДетейИнвалидовДвойной',
					},
					{
						name:'ПримененныйВычетНаДетейИнвалидовДвойнойВторой',
					},
					{
						name:'ЗаголовокИмущественныхВычетов',
					},
					{
						name:'ПримененныйВычетИмущественныйРасход',
					},
					{
						name:'ПримененныйВычетИмущественныйПроцентыПоКредитам',
					},
					{
						name:'ПримененныйВычетИмущественныйПроцентыПриПерекредитовании',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('НДФЛ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Прочие удержания',
					items:
					[
		{
			id: 'Удержания',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
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
					text:'Сотрудник',
					width:'170',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Удержание',
					width:'170',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'170',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Получатель',
					width:'170',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Показатели для расчета удержания',
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
					width:'100',
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
					text:'Размер2',
					width:'100',
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
					text:'Размер3',
					width:'100',
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
					text:'Размер4',
					width:'100',
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
					text:'Размер5',
					width:'100',
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
					text:'Размер6',
					width:'100',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Результат',
					width:'100',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Начало расчетного периода',
					width:'100',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаНачало',
					flex:1,
				},
				{
					text:'Окончание расчетного периода',
					width:'100',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаОкончание',
					flex:1,
				},
				{
					text:'Дата начала события',
					width:'100',
					dataIndex:'ДатаНачалаСобытия',
					flex:1,
				},
				{
					text:'Порядок исчисления издержек',
					width:'100',
					dataIndex:'ПорядокИсчисленияИздержек',
					flex:1,
				},
				{
					text:'Дополнительные данные',
					width:'100',
					dataIndex:'ДополнительныеДанные',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникамОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'ФизЛицо',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'Получатель',
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
						name:'ПериодРасчетаСреднегоЗаработкаНачало',
					},
					{
						name:'ПериодРасчетаСреднегоЗаработкаОкончание',
					},
					{
						name:'ДатаНачалаСобытия',
					},
					{
						name:'ПорядокИсчисленияИздержек',
					},
					{
						name:'ДополнительныеДанные',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Удержания');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:101px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
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
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:590px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:33px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации',
			width: 202,
			height: 19,
			style: 'position:absolute;left:110px;top:33px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:416px;top:79px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 202,
			height: 19,
			style: 'position:absolute;left:510px;top:79px;width:202px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:414px;width:704px;height:75px;',
			height: 75,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодНачисления',
			text: 'Режим начисления:',
			style: 'position:absolute;left:8px;top:79px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПериодНачисления',
			width: 202,
			height: 19,
			style: 'position:absolute;left:110px;top:79px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчета',
			text: 'За период с:',
			style: 'position:absolute;left:8px;top:102px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:130px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:91px;top:130px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчистить',
			text: 'Очистить',
			style: 'position:absolute;left:174px;top:130px;width:84px;height:22px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодНачисленияДатаНачала',
			width: 90,
			height: 19,
			style: 'position:absolute;left:110px;top:102px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодНачисленияДатаОкончания',
			width: 90,
			height: 19,
			style: 'position:absolute;left:222px;top:102px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодНачисленияПо',
			text: 'по:',
			style: 'position:absolute;left:203px;top:102px;width:17px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказыватьРасчетныйЛисток',
			text: 'Надпись показывать расчетный листок',
			style: 'position:absolute;left:8px;top:395px;width:704px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныйЛисток',
			text: ' Расчетный листок',
			style: 'position:absolute;left:8px;top:395px;width:449px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:553px;width:246px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:492px;width:466px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:500px;top:492px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:583px;top:492px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:553px;width:474px;height:25px;',
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
});