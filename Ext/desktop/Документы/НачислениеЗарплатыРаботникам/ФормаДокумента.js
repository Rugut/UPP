Ext.require(['Данные.Документы.НачислениеЗарплатыРаботникам'], function () 
{
	Ext.define('Документы.НачислениеЗарплатыРаботникам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:555px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление зарплаты сотрудникам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 96,
			height: 19,
			style: 'position:absolute;left:496px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:594px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 100,
			height: 19,
			style: 'position:absolute;left:612px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 200,
			height: 19,
			style: 'position:absolute;left:110px;top:57px;width:200px;height:19px;',
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
			name: 'Подразделение',
			width: 200,
			height: 19,
			style: 'position:absolute;left:110px;top:33px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:503px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 616,
			height: 19,
			style: 'position:absolute;left:96px;top:503px;width:616px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:411px;top:57px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 216,
			height: 19,
			style: 'position:absolute;left:496px;top:57px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер',
			style: 'position:absolute;left:411px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:151px;width:704px;height:231px;',
			height: 231,width: 704,
			items:
			[
				{
					title:'Начисления',
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
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Признак автоматического расчета',
					width:'20',
					dataIndex:'Авторасчет',
					flex:1,
				},
				{
					text:'№',
					width:'40',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'75',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Начисление',
					width:'160',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'80',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'80',
					dataIndex:'ДатаОкончания',
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
					text:'',
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
					width:'100',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Отработано дней',
					width:'90',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Отработано часов',
					width:'90',
					dataIndex:'ОтработаноЧасов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникам/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'Сотрудник',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
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
						Ext.require(['Справочники.НачислениеЗарплатыРаботникам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Удержания',
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
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Признак автоматического расчета',
					width:'20',
					dataIndex:'Авторасчет',
					flex:1,
				},
				{
					text:'№',
					width:'40',
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
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Удержание',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'80',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'80',
					dataIndex:'ДатаОкончания',
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
					text:'',
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
					width:'101',
					dataIndex:'Результат',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникам/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'Физлицо',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
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
						Ext.require(['Справочники.НачислениеЗарплатыРаботникам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
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
					width:'110',
					dataIndex:'НачисленоПроцентов',
					flex:1,
				},
				{
					text:'Погашено займа и %%',
					width:'120',
					dataIndex:'ПогашеноЗайма',
					flex:1,
				},
				{
					text:'В т.ч. погашено %%',
					width:'120',
					dataIndex:'ПогашеноПроцентов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеЗарплатыРаботникам/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						name:'ПогашеноЗайма',
					},
					{
						name:'ПогашеноПроцентов',
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
						Ext.require(['Справочники.НачислениеЗарплатыРаботникам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеЗарплатыРаботникам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:123px;width:704px;height:29px;',
			height: 29,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Расчет по временной схеме мотивации: ',
			style: 'position:absolute;left:0px;top:5px;width:225px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидСхемыМотивации',
			width: 477,
			height: 19,
			style: 'position:absolute;left:227px;top:5px;width:477px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:408px;width:704px;height:91px;',
			height: 91,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПодменюЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:97px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:91px;top:97px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчистить',
			text: 'Очистить',
			style: 'position:absolute;left:174px;top:97px;width:84px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказыватьРасчетныйЛисток',
			text: 'Надпись показывать расчетный листок',
			style: 'position:absolute;left:8px;top:389px;width:704px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныйЛисток',
			text: 'Расчетный листок',
			style: 'position:absolute;left:12px;top:389px;width:448px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			dock: 'top',
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
					text:'Расчет удержаний',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:530px;width:720px;height:25px;',
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