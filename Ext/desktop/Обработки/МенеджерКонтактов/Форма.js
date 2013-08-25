Ext.require(['Данные.Обработки.МенеджерКонтактов'], function () 
{
	Ext.define('Обработки.МенеджерКонтактов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:837px;height:496px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Менеджер контактов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:25px;width:837px;height:471px;',
			height: 471,width: 837,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:804px;height:457px;',
			height: 457,width: 804,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВыбКонтрагент',
			width: 220,
			height: 19,
			style: 'position:absolute;left:89px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:1px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:24px;width:804px;height:24px;',
			width: 804,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Настроить интервал',
				},
				'-',
				{
					text:'Настроить отбор',
				},
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Снять отбор',
				},
				'-',
				'-',
				'-',
				{
					text:'Анализ заказа',
				},
				{
					text:'Документы по заказу',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Настроить интервал',
				},
				'-',
				{
					text:'Настроить отбор',
				},
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Снять отбор',
				},
				'-',
				'-',
			]
		},
		{
			id: 'ЗаказыИСобытияПредставление',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:48px;width:804px;height:409px;',
			height: 409,width: 804,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Важность',
					flex:1,
				},
				{
					text:'Дата документа',
					width:'52',
					dataIndex:'ДатаДокумента',
					flex:1,
				},
				{
					text:'Дата события',
					width:'93',
					dataIndex:'ДатаСобытия',
					flex:1,
				},
				{
					text:'Номер',
					width:'76',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'101',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'96',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'138',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Информация',
					width:'140',
					dataIndex:'Информация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МенеджерКонтактов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Состояние',
					},
					{
						name:'Важность',
					},
					{
						name:'ДатаДокумента',
					},
					{
						name:'ДатаСобытия',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Информация',
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
						var грид = Ext.getCmp('ЗаказыИСобытияПредставление');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МенеджерКонтактов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МенеджерКонтактов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьМесяца',
			text: 'НадписьМесяца',
			style: 'position:absolute;left:0px;top:0px;width:513px;height:22px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНедели',
			text: 'НадписьНедели',
			style: 'position:absolute;left:0px;top:0px;width:623px;height:22px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДеньНазад',
			text: '< Пред. день',
			style: 'position:absolute;left:651px;top:0px;width:75px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДеньВперед',
			text: 'След. день >',
			style: 'position:absolute;left:730px;top:0px;width:74px;height:22px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:30px;width:671px;height:427px;',
			height: 427,width: 671,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'СделкиДень',
			xtype: 'grid',
			style: 'position:absolute;left:339px;top:0px;width:332px;height:427px;',
			height: 427,width: 332,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'КартинкаДокумента',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'ВидДокументаЗаказа',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'135',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'132',
					dataIndex:'Контрагент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МенеджерКонтактов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КартинкаДокумента',
					},
					{
						name:'ВидДокументаЗаказа',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'Контрагент',
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
						var грид = Ext.getCmp('СделкиДень');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МенеджерКонтактов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МенеджерКонтактов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДня',
			text: 'НадписьДня',
			style: 'position:absolute;left:0px;top:0px;width:200px;height:22px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:671px;top:420px;width:133px;height:26px;',
			width: 133,
			height: 26,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаНеделяНазад',
			text: '< Пред. неделя',
			style: 'position:absolute;left:627px;top:0px;width:87px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНеделяВперед',
			text: 'След. неделя >',
			style: 'position:absolute;left:718px;top:0px;width:86px;height:22px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМесяцНазад',
			text: '< Пред. месяц',
			style: 'position:absolute;left:517px;top:0px;width:87px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаМесяцВперед',
			text: 'След. месяц >',
			style: 'position:absolute;left:607px;top:0px;width:86px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбратьМесяц',
			text: 'Выбрать месяц',
			style: 'position:absolute;left:697px;top:0px;width:107px;height:22px;',
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЭлектронныеПисьмаСписок',
			xtype: 'grid',
			style: 'position:absolute;left:231px;top:30px;width:578px;height:161px;',
			height: 161,width: 578,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'НеРассмотрено',
					flex:1,
				},
				{
					text:'',
					width:'19',
					dataIndex:'СостояниеПотомкаПисьма',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'ЕстьВложения',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'СтатусПисьма',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Объекты',
					flex:1,
				},
				{
					text:'От кого',
					width:'120',
					dataIndex:'ОтправительИмя',
					flex:1,
				},
				{
					text:'Кому',
					width:'120',
					dataIndex:'КомуПредставление',
					flex:1,
				},
				{
					text:'Тема',
					width:'220',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'Дата отправления',
					width:'120',
					dataIndex:'ДатаОтправления',
					flex:1,
				},
				{
					text:'Дата транспорта',
					width:'120',
					dataIndex:'ДатаТранспорта',
					flex:1,
				},
				{
					text:'Не рассмотрено с ...',
					width:'63',
					dataIndex:'ГраницаКонтроляОтветаНаПисьмо',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'104',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'83',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Предмет',
					width:'86',
					dataIndex:'Предмет',
					flex:1,
				},
				{
					text:'Группа учетной записи',
					width:'103',
					dataIndex:'ГруппаУчетнойЗаписи',
					flex:1,
				},
				{
					text:'Основание',
					width:'99',
					dataIndex:'Основание',
					flex:1,
				},
				{
					text:'Номер',
					width:'87',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'106',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Копии',
					width:'99',
					dataIndex:'КопииПредставление',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'99',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Текст письма',
					width:'99',
					dataIndex:'ТекстПисьма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МенеджерКонтактов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НеРассмотрено',
					},
					{
						name:'СостояниеПотомкаПисьма',
					},
					{
						name:'ЕстьВложения',
					},
					{
						name:'СтатусПисьма',
					},
					{
						name:'Объекты',
					},
					{
						name:'ОтправительИмя',
					},
					{
						name:'КомуПредставление',
					},
					{
						name:'Тема',
					},
					{
						name:'ДатаОтправления',
					},
					{
						name:'ДатаТранспорта',
					},
					{
						name:'ГраницаКонтроляОтветаНаПисьмо',
					},
					{
						name:'Дата',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Предмет',
					},
					{
						name:'ГруппаУчетнойЗаписи',
					},
					{
						name:'Основание',
					},
					{
						name:'Номер',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'КопииПредставление',
					},
					{
						name:'Комментарий',
					},
					{
						name:'ТекстПисьма',
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
						var грид = Ext.getCmp('ЭлектронныеПисьмаСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МенеджерКонтактов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МенеджерКонтактов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:283px;top:373px;width:473px;height:24px;',
			width: 473,
			height: 24,
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Создать событие по письму',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить """"Рассмотрено""""',
				},
				{
					text:'Установить """"Не рассмотрено""""',
				},
				'-',
				{
					text:'Структура подчиненности',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Создать фильтр по письму',
				},
				{
					text:'Применить к выбранным письмам фильтры',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Выделить видимые строки',
				},
				'-',
				{
					text:'Настройка списка...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:310px;top:330px;width:200px;height:24px;',
			width: 200,
			height: 24,
			items:
			[
				{
					text:'',
				},
				{
					text:'Изменить предмет',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Установить/Снять скрытость предмета',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:231px;top:197px;width:578px;height:49px;',
			height: 49,width: 578,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'От кого:',
			style: 'position:absolute;left:6px;top:0px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Тема:',
			style: 'position:absolute;left:6px;top:24px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеОтправитель',
			width: 220,
			height: 19,
			style: 'position:absolute;left:64px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеТема',
			width: 220,
			height: 19,
			style: 'position:absolute;left:64px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Кому:',
			style: 'position:absolute;left:290px;top:0px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Копии:',
			style: 'position:absolute;left:290px;top:24px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеКому',
			width: 220,
			height: 19,
			style: 'position:absolute;left:336px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеКопии',
			width: 220,
			height: 19,
			style: 'position:absolute;left:336px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВложения',
			text: '',
			style: 'position:absolute;left:556px;top:0px;width:22px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:6px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:30px;width:220px;height:433px;',
			height: 433,width: 220,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ГруппыПисемДерево',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:210px;',
			height: 210,width: 220,
			columns:
			[
				{
					text:'Группа',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'90',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МенеджерКонтактов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Владелец',
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
						var грид = Ext.getCmp('ГруппыПисемДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МенеджерКонтактов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МенеджерКонтактов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ПредметыСписок',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:216px;width:220px;height:217px;',
			height: 217,width: 220,
			columns:
			[
				{
					text:'Предметы писем',
					width:'180',
					dataIndex:'Предмет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МенеджерКонтактов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Предмет',
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
						var грид = Ext.getCmp('ПредметыСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МенеджерКонтактов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МенеджерКонтактов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'ГруппыПисемДерево1',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:433px;',
			height: 433,width: 220,
			columns:
			[
				{
					text:'Группа',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'60',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МенеджерКонтактов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Владелец',
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
						var грид = Ext.getCmp('ГруппыПисемДерево1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МенеджерКонтактов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МенеджерКонтактов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:705px;height:25px;',
			width: 705,
			height: 25,
			items:
			[
				{
					text:'Список событий',
				},
				'-',
				{
					text:'День',
				},
				'-',
				{
					text:'Неделя',
				},
				'-',
				{
					text:'Месяц',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:705px;top:0px;width:132px;height:25px;',
			width: 132,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:755px;height:25px;',
			width: 755,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:755px;top:0px;width:82px;height:25px;',
			width: 82,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});