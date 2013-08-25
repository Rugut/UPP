Ext.require(['Данные.Документы.ОтражениеЗарплатыВРеглУчете'], function () 
{
	Ext.define('Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:659px;height:479px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отражение зарплаты в регламентированном учете',
	
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
			style: 'position:absolute;left:326px;top:33px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:431px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:513px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:531px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:326px;top:57px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:431px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:81px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:431px;top:81px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:659px;height:25px;',
			width: 659,
			height: 25,
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
					text:'Очистить',
				},
				'-',
				{
					text:'Открыть свойства',
				},
				{
					text:'Открыть категории',
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
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:110px;width:643px;height:312px;',
			height: 312,width: 643,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:629px;height:24px;',
			width: 629,
			height: 24,
			items:
			[
				{
					text:'Все проводки',
				},
				'-',
				{
					text:'Начисления',
				},
				{
					text:'Пособия за счет ФСС',
				},
				{
					text:'Удержания',
				},
				{
					text:'НДФЛ',
				},
				{
					text:'ЕСН и взносы в ПФР',
				},
				{
					text:'Взносы в ФСС на НС и ПЗ',
				},
				{
					text:'Списание РБП',
				},
				{
					text:'Отчисления в резервы',
				},
				'-',
				{
					text:'Прочие',
				},
				{
					text:'Пустой счет дебета',
				},
				{
					text:'Пустой счет кредита',
				},
			]
		},
		{
			id: 'ОтражениеВУчете',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:629px;height:262px;',
			height: 262,width: 629,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'60',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Подразделение Дт',
					width:'100',
					dataIndex:'ПодразделениеДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'100',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатрат',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'60',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Подразделение Кт',
					width:'100',
					dataIndex:'ПодразделениеКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'100',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'101',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'101',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Счет Дт НУ',
					width:'71',
					dataIndex:'СчетДтНУ',
					flex:1,
				},
				{
					text:'Субконто Дт НУ',
					width:'99',
					dataIndex:'СубконтоДтНУ1',
					flex:1,
				},
				{
					text:'',
					width:'99',
					dataIndex:'СубконтоДтНУ2',
					flex:1,
				},
				{
					text:'',
					width:'99',
					dataIndex:'СубконтоДтНУ3',
					flex:1,
				},
				{
					text:'Счет Кт НУ',
					width:'71',
					dataIndex:'СчетКтНУ',
					flex:1,
				},
				{
					text:'Субконто Кт НУ',
					width:'100',
					dataIndex:'СубконтоКтНУ1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКтНУ2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКтНУ3',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'84',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Вид начисления (удержания)',
					width:'100',
					dataIndex:'ВидНачисленияУдержанияИП',
					flex:1,
				},
				{
					text:'Вид начислений оплаты труда по статье 255 НК',
					width:'100',
					dataIndex:'ВидНачисленийОплатыТрудаПоСтатье255НК',
					flex:1,
				},
				{
					text:'Сумма',
					width:'75',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма НУ',
					width:'100',
					dataIndex:'СуммаНУ',
					flex:1,
				},
				{
					text:'Сумма ПР',
					width:'100',
					dataIndex:'СуммаПР',
					flex:1,
				},
				{
					text:'Сумма ВР',
					width:'100',
					dataIndex:'СуммаВР',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтражениеЗарплатыВРеглУчете/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетДт',
					},
					{
						name:'ПодразделениеДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СпособРаспределенияЗатрат',
					},
					{
						name:'СчетКт',
					},
					{
						name:'ПодразделениеКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
					},
					{
						name:'СчетДтНУ',
					},
					{
						name:'СубконтоДтНУ1',
					},
					{
						name:'СубконтоДтНУ2',
					},
					{
						name:'СубконтоДтНУ3',
					},
					{
						name:'СчетКтНУ',
					},
					{
						name:'СубконтоКтНУ1',
					},
					{
						name:'СубконтоКтНУ2',
					},
					{
						name:'СубконтоКтНУ3',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'ВидНачисленияУдержанияИП',
					},
					{
						name:'ВидНачисленийОплатыТрудаПоСтатье255НК',
					},
					{
						name:'Сумма',
					},
					{
						name:'СуммаНУ',
					},
					{
						name:'СуммаПР',
					},
					{
						name:'СуммаВР',
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
						var грид = Ext.getCmp('ОтражениеВУчете');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия");
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:629px;height:24px;',
			width: 629,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			id: 'ОсновныеНачисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:629px;height:262px;',
			height: 262,width: 629,
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
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'116',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'116',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'97',
					dataIndex:'ПериодДействияНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'97',
					dataIndex:'ПериодДействияКонец',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'49',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Подразделение Дт',
					width:'100',
					dataIndex:'ПодразделениеДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'104',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'104',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'104',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатрат',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'49',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Подразделение Кт',
					width:'100',
					dataIndex:'ПодразделениеКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'100',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Счет Дт НУ',
					width:'65',
					dataIndex:'СчетДтНУ',
					flex:1,
				},
				{
					text:'Субконто Дт НУ',
					width:'100',
					dataIndex:'СубконтоДтНУ1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДтНУ2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДтНУ3',
					flex:1,
				},
				{
					text:'Счет Кт НУ',
					width:'73',
					dataIndex:'СчетКтНУ',
					flex:1,
				},
				{
					text:'Субконто Кт НУ',
					width:'126',
					dataIndex:'СубконтоКтНУ1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКтНУ2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКтНУ3',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'85',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Вид начислений оплаты труда по статье 255 НК',
					width:'100',
					dataIndex:'ВидНачисленийОплатыТрудаПоСтатье255НК',
					flex:1,
				},
				{
					text:'Результат',
					width:'80',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Сумма НУ',
					width:'100',
					dataIndex:'СуммаНУ',
					flex:1,
				},
				{
					text:'Сумма ПР',
					width:'100',
					dataIndex:'СуммаПР',
					flex:1,
				},
				{
					text:'Сумма ВР',
					width:'100',
					dataIndex:'СуммаВР',
					flex:1,
				},
				{
					text:'Сторно',
					width:'42',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтражениеЗарплатыВРеглУчете/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						name:'ПериодДействияНачало',
					},
					{
						name:'ПериодДействияКонец',
					},
					{
						name:'СчетДт',
					},
					{
						name:'ПодразделениеДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СпособРаспределенияЗатрат',
					},
					{
						name:'СчетКт',
					},
					{
						name:'ПодразделениеКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'СчетДтНУ',
					},
					{
						name:'СубконтоДтНУ1',
					},
					{
						name:'СубконтоДтНУ2',
					},
					{
						name:'СубконтоДтНУ3',
					},
					{
						name:'СчетКтНУ',
					},
					{
						name:'СубконтоКтНУ1',
					},
					{
						name:'СубконтоКтНУ2',
					},
					{
						name:'СубконтоКтНУ3',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'ВидНачисленийОплатыТрудаПоСтатье255НК',
					},
					{
						name:'Результат',
					},
					{
						name:'СуммаНУ',
					},
					{
						name:'СуммаПР',
					},
					{
						name:'СуммаВР',
					},
					{
						name:'Сторно',
					},
					{
						name:'ДокументОснование',
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
						var грид = Ext.getCmp('ОсновныеНачисления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия");
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:629px;height:24px;',
			width: 629,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			id: 'ДополнительныеНачисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:629px;height:262px;',
			height: 262,width: 629,
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
					width:'68',
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
					text:'Вид расчета',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'52',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Подразделение Дт',
					width:'100',
					dataIndex:'ПодразделениеДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'109',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'74',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'74',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатрат',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'52',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Подразделение Кт',
					width:'100',
					dataIndex:'ПодразделениеКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'100',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Счет Дт НУ',
					width:'66',
					dataIndex:'СчетДтНУ',
					flex:1,
				},
				{
					text:'Субконто Дт НУ',
					width:'92',
					dataIndex:'СубконтоДтНУ1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДтНУ2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДтНУ3',
					flex:1,
				},
				{
					text:'Счет Кт НУ',
					width:'75',
					dataIndex:'СчетКтНУ',
					flex:1,
				},
				{
					text:'Субконто Кт НУ',
					width:'95',
					dataIndex:'СубконтоКтНУ1',
					flex:1,
				},
				{
					text:'',
					width:'128',
					dataIndex:'СубконтоКтНУ2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКтНУ3',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'88',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Вид начислений оплаты труда по статье 255 НК',
					width:'100',
					dataIndex:'ВидНачисленийОплатыТрудаПоСтатье255НК',
					flex:1,
				},
				{
					text:'Результат',
					width:'76',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Сумма НУ',
					width:'100',
					dataIndex:'СуммаНУ',
					flex:1,
				},
				{
					text:'Сумма ПР',
					width:'100',
					dataIndex:'СуммаПР',
					flex:1,
				},
				{
					text:'Сумма ВР',
					width:'100',
					dataIndex:'СуммаВР',
					flex:1,
				},
				{
					text:'Сторно',
					width:'38',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'104',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Дата начисления',
					width:'80',
					dataIndex:'ДатаНачисления',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтражениеЗарплатыВРеглУчете/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						name:'СчетДт',
					},
					{
						name:'ПодразделениеДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СпособРаспределенияЗатрат',
					},
					{
						name:'СчетКт',
					},
					{
						name:'ПодразделениеКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'СчетДтНУ',
					},
					{
						name:'СубконтоДтНУ1',
					},
					{
						name:'СубконтоДтНУ2',
					},
					{
						name:'СубконтоДтНУ3',
					},
					{
						name:'СчетКтНУ',
					},
					{
						name:'СубконтоКтНУ1',
					},
					{
						name:'СубконтоКтНУ2',
					},
					{
						name:'СубконтоКтНУ3',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'ВидНачисленийОплатыТрудаПоСтатье255НК',
					},
					{
						name:'Результат',
					},
					{
						name:'СуммаНУ',
					},
					{
						name:'СуммаПР',
					},
					{
						name:'СуммаВР',
					},
					{
						name:'Сторно',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'ДатаНачисления',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтражениеЗарплатыВРеглУчете.ФормаДокументаСобытия");
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
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:427px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 548,
			height: 19,
			style: 'position:absolute;left:86px;top:427px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			width: 120,
			height: 19,
			style: 'position:absolute;left:113px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:64px;width:120px;height:36px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:454px;width:659px;height:25px;',
			width: 659,
			height: 25,
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});