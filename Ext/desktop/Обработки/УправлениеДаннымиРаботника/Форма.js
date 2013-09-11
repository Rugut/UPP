Ext.require(['Данные.Обработки.УправлениеДаннымиРаботника'], function () 
{
	Ext.define('Обработки.УправлениеДаннымиРаботника.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Иванова Анна Петровна',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:51px;width:780px;height:399px;',
			height: 399,width: 780,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНачислениеЗарплаты',
			text: 'Начислить зарплату',
			style: 'position:absolute;left:37px;top:289px;width:145px;height:25px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:31px;top:263px;width:251px;height:131px;',
		},
		{
			id: 'СписокФизлиц',
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'63',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УправлениеДаннымиРаботника/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('СписокФизлиц');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УправлениеДаннымиРаботника.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УправлениеДаннымиРаботника.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			width: 475,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
					tooltip:'168f070-087c-448e-ae3a-6740f424076',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:288px;top:263px;width:487px;height:131px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДФЛ',
			text: 'Вычеты НДФЛ',
			style: 'position:absolute;left:37px;top:364px;width:189px;height:25px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПервичныеДокументыОрганизаций',
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'Вид документа',
					flex:1,
				},
				{
					text:'Номер',
					width:'77',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'84',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Месяц',
					width:'84',
					dataIndex:'Месяц',
					flex:1,
				},
				{
					text:'Организация',
					width:'92',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'161',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УправлениеДаннымиРаботника/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Вид документа',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'Месяц',
					},
					{
						name:'Организация',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('ПервичныеДокументыОрганизаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УправлениеДаннымиРаботника.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УправлениеДаннымиРаботника.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			width: 475,
			height: 25,
			items:
			[
				{
					text:'Начисление зарплаты',
					tooltip:'Ввести документ Начисление зарплаты',
				},
				'-',
				{
					text:'Премия',
					tooltip:'Ввести начисление премии',
				},
				{
					text:'Разовое начисление',
					tooltip:'Ввести разовое начисление',
				},
				'-',
				{
					text:'Отпуск',
					tooltip:'Отпуск',
				},
				{
					text:'Больничный лист',
					tooltip:'Больничный лист',
				},
				{
					text:'Оплата по среднему заработку',
					tooltip:'Оплата по среднему заработку',
				},
				'-',
				{
					text:'Невыход',
					tooltip:'Невыход',
				},
				{
					text:'Простой',
					tooltip:'Простой',
				},
				'-',
				{
					text:'Разовое удержание',
					tooltip:'Ввести разовое удержание',
				},
				'-',
				{
					text:'Сдельный наряд',
					tooltip:'Сдельный наряд',
				},
				'-',
				{
					text:'Работа в праздники',
					tooltip:'Работа в праздники',
				},
				{
					text:'Сверхурочные часы',
					tooltip:'Сверхурочные часы',
				},
				'-',
				{
					text:'Начисление дивидендов',
					tooltip:'Начисление дивидендов',
				},
				{
					text:'Единовременные пособия за счет ФСС',
					tooltip:'Единовременные пособия за счет ФСС',
				},
				'-',
				{
					text:'Расчет при увольнении',
					tooltip:'Расчет при увольнении',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:31px;top:263px;width:251px;height:131px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:288px;top:263px;width:487px;height:131px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПлановыеДанныеДляРасчета',
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'Вид документа',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УправлениеДаннымиРаботника/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Вид документа',
					},
					{
						name:'Дата',
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
						var грид = Ext.getCmp('ПлановыеДанныеДляРасчета');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УправлениеДаннымиРаботника.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УправлениеДаннымиРаботника.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			width: 475,
			height: 25,
			items:
			[
				{
					text:'Изменить плановые начисления',
					tooltip:'Изменить плановые начисления',
				},
				'-',
				{
					text:'Изменить плановые удержания',
					tooltip:'Изменить плановые удержания',
				},
				{
					text:'Исполнительный лист',
					tooltip:'Исполнительный лист',
				},
				'-',
				{
					text:'Прием на работу',
					tooltip:'Прием на работу',
				},
				{
					text:'Отпуск по уходу',
					tooltip:'Отпуск по уходу',
				},
				{
					text:'Кадровое перемещение',
					tooltip:'Кадровое перемещение',
				},
				{
					text:'Увольнение',
					tooltip:'Увольнение',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:31px;top:263px;width:251px;height:131px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:288px;top:263px;width:487px;height:131px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсполнительныйЛист',
			text: 'Ввести исполнительный лист',
			style: 'position:absolute;left:37px;top:364px;width:164px;height:25px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись11',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Надпись21',
			style: 'position:absolute;left:0px;top:257px;width:27px;height:142px;',
		},
		{
			id: 'УчетКадровОрганизаций',
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'Вид документа',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Организация',
					width:'109',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Сотрудники',
					width:'127',
					dataIndex:'Работники',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'150',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УправлениеДаннымиРаботника/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Вид документа',
					},
					{
						name:'Дата',
					},
					{
						name:'Организация',
					},
					{
						name:'Работники',
					},
					{
						name:'Ответственный',
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
						var грид = Ext.getCmp('УчетКадровОрганизаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УправлениеДаннымиРаботника.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УправлениеДаннымиРаботника.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			width: 475,
			height: 25,
			items:
			[
				{
					text:'Прием на работу',
					tooltip:'',
				},
				{
					text:'Кадровое перемещение',
					tooltip:'',
				},
				{
					text:'Увольнение',
					tooltip:'',
				},
				'-',
				{
					text:'Анкета застрахованного лица',
					tooltip:'',
				},
				{
					text:'Заявление об обмене...',
					tooltip:'Заявление об обмене дубликате страхового свидетельства',
				},
				{
					text:'СЗВ-К',
					tooltip:'Сведения о трудовом стаже застрахованного лица (СЗВ-К)',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:31px;top:263px;width:251px;height:131px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:288px;top:263px;width:487px;height:131px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПриемНаРаботу',
			text: 'Принять на работу',
			style: 'position:absolute;left:36px;top:289px;width:145px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКадровоеПеремещение',
			text: 'Переместить',
			style: 'position:absolute;left:36px;top:314px;width:145px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнкетаЗастрахованногоЛица',
			text: 'Отправить анкету',
			style: 'position:absolute;left:36px;top:339px;width:145px;height:25px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись12',
			text: '  Все первичные документы',
			style: 'position:absolute;left:294px;top:269px;width:475px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			id: 'НалогиОрганизаций',
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'Вид документа',
					flex:1,
				},
				{
					text:'Дата',
					width:'84',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'Колонка1',
					flex:1,
				},
				{
					text:'Организация',
					width:'93',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'161',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УправлениеДаннымиРаботника/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Вид документа',
					},
					{
						name:'Дата',
					},
					{
						name:'Колонка1',
					},
					{
						name:'Организация',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('НалогиОрганизаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УправлениеДаннымиРаботника.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УправлениеДаннымиРаботника.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			width: 475,
			height: 25,
			items:
			[
				{
					text:'Начисление страховых взносов',
					tooltip:'Ввести документ Начисление страховых взносов',
				},
				{
					text:'Отражение зарплаты в регл. учете',
					tooltip:'Ввести документ по отражение зарплаты в регл. учете',
				},
				'-',
				{
					text:'Расчет ЕСН',
					tooltip:'Ввести документ Расчет ЕСН',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:31px;top:263px;width:251px;height:131px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:288px;top:263px;width:487px;height:131px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетЕСН',
			text: 'Рассчитать ЕСН',
			style: 'position:absolute;left:36px;top:289px;width:240px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеЗПвРеглУчете',
			text: 'Отражение зарплаты в регл. учете',
			style: 'position:absolute;left:36px;top:314px;width:240px;height:25px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:26px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					text:'Основное',
					tooltip:'',
				},
				'-',
				{
					text:'Кадровые данные',
					tooltip:'',
				},
				'-',
				{
					text:'Плановые начисления и удержания',
					tooltip:'',
				},
				'-',
				{
					text:'Расчеты, зарплата',
					tooltip:'',
				},
				'-',
				{
					text:'Страховые взносы, ЕСН и отражение зарплаты в учете',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:727px;top:2px;width:53px;height:24px;',
			width: 53,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Обновить',
					tooltip:'Обновить содержимое окна',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'Физлицо.Представление',
			width: 229,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:151px;top:4px;width:229px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.УправлениеДаннымиРаботника.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.УправлениеДаннымиРаботника.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.УправлениеДаннымиРаботника.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.УправлениеДаннымиРаботника.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:380px;top:2px;width:201px;height:24px;',
			width: 201,
			height: 24,
			items:
			[
				{
					text:'Выбрать',
					tooltip:'',
				},
				'-',
				{
					text:'Открыть',
					tooltip:'',
				},
				'-',
				{
					text:'Ввести нового',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МесяцСтрока',
			width: 136,
			height: 19,
			style: 'position:absolute;left:4px;top:4px;width:136px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});