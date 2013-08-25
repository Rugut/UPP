Ext.require(['Данные.Документы.СдельныйНаряд'], function () 
{
	Ext.define('Документы.СдельныйНаряд.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:692px;height:577px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Сдельный наряд на выполненные работы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
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
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:336px;top:57px;width:83px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СдельныйНаряд.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СдельныйНаряд.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СдельныйНаряд.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СдельныйНаряд.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:525px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:525px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:525px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 260,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:525px;width:260px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СдельныйНаряд.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СдельныйНаряд.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СдельныйНаряд.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СдельныйНаряд.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СдельныйНаряд.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СдельныйНаряд.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СдельныйНаряд.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СдельныйНаряд.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Заказ:',
			style: 'position:absolute;left:338px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Заказ',
			width: 220,
			height: 19,
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			width: 692,
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
				{
					text:'Графики работы по видам времени',
				},
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:189px;width:676px;height:331px;',
			height: 331,width: 676,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			width: 622,
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
			]
		},
		{
			id: 'Выработка',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:662px;height:267px;',
			height: 267,width: 662,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Технологическая операция',
					width:'150',
					dataIndex:'ТехнологическаяОперация',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'80',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Расценка',
					width:'60',
					dataIndex:'Расценка',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Сумма в валюте расценки',
					width:'100',
					dataIndex:'СуммаЗаРаботуВВалюте',
					flex:1,
				},
				{
					text:'Сумма за работу',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма за работу (регл)',
					width:'100',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Расходы в НУ',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Счет бух.учета',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет нал. учета',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Аналитика',
					width:'100',
					dataIndex:'Аналитика',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'130',
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
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'100',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Объект строительства',
					width:'100',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Способ строительства',
					width:'100',
					dataIndex:'СпособСтроительства',
					flex:1,
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'100',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СдельныйНаряд/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТехнологическаяОперация',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'Расценка',
					},
					{
						name:'Валюта',
					},
					{
						name:'Количество',
					},
					{
						name:'СуммаЗаРаботуВВалюте',
					},
					{
						name:'Сумма',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'Аналитика',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Продукция',
					},
					{
						name:'ХарактеристикаПродукции',
					},
					{
						name:'СерияПродукции',
					},
					{
						name:'ОбъектСтроительства',
					},
					{
						name:'СпособСтроительства',
					},
					{
						name:'СпособРаспределенияЗатратНаВыпуск',
					},
					{
						name:'Проект',
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
						var грид = Ext.getCmp('Выработка');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СдельныйНаряд.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СдельныйНаряд.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:6px;top:140px;width:668px;height:24px;',
			width: 668,
			height: 24,
			items:
			[
				{
					text:'Рассчитать',
				},
				{
					text:'Рассчитать с комментарием',
				},
			]
		},
		{
			id: 'Исполнители',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:165px;width:668px;height:137px;',
			height: 137,width: 668,
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
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'КТУ',
					width:'60',
					dataIndex:'КТУ',
					flex:1,
				},
				{
					text:'Тариф',
					width:'50',
					dataIndex:'Тариф',
					flex:1,
				},
				{
					text:'Отработано часов',
					width:'100',
					dataIndex:'ОтработаноЧасов',
					flex:1,
				},
				{
					text:'Отработано дней',
					width:'100',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Сумма к начислению',
					width:'100',
					dataIndex:'СуммаКНачислению',
					flex:1,
				},
				{
					text:'Сумма к начислению (регл)',
					width:'100',
					dataIndex:'СуммаКНачислениюРегл',
					flex:1,
				},
				{
					text:'1',
					width:'30',
					dataIndex:'День1',
					flex:1,
				},
				{
					text:'2',
					width:'30',
					dataIndex:'День2',
					flex:1,
				},
				{
					text:'3',
					width:'30',
					dataIndex:'День3',
					flex:1,
				},
				{
					text:'4',
					width:'30',
					dataIndex:'День4',
					flex:1,
				},
				{
					text:'5',
					width:'30',
					dataIndex:'День5',
					flex:1,
				},
				{
					text:'6',
					width:'30',
					dataIndex:'День6',
					flex:1,
				},
				{
					text:'7',
					width:'30',
					dataIndex:'День7',
					flex:1,
				},
				{
					text:'8',
					width:'30',
					dataIndex:'День8',
					flex:1,
				},
				{
					text:'9',
					width:'30',
					dataIndex:'День9',
					flex:1,
				},
				{
					text:'10',
					width:'30',
					dataIndex:'День10',
					flex:1,
				},
				{
					text:'11',
					width:'30',
					dataIndex:'День11',
					flex:1,
				},
				{
					text:'12',
					width:'30',
					dataIndex:'День12',
					flex:1,
				},
				{
					text:'13',
					width:'30',
					dataIndex:'День13',
					flex:1,
				},
				{
					text:'14',
					width:'30',
					dataIndex:'День14',
					flex:1,
				},
				{
					text:'15',
					width:'30',
					dataIndex:'День15',
					flex:1,
				},
				{
					text:'16',
					width:'30',
					dataIndex:'День16',
					flex:1,
				},
				{
					text:'17',
					width:'30',
					dataIndex:'День17',
					flex:1,
				},
				{
					text:'18',
					width:'30',
					dataIndex:'День18',
					flex:1,
				},
				{
					text:'19',
					width:'30',
					dataIndex:'День19',
					flex:1,
				},
				{
					text:'20',
					width:'30',
					dataIndex:'День20',
					flex:1,
				},
				{
					text:'21',
					width:'30',
					dataIndex:'День21',
					flex:1,
				},
				{
					text:'22',
					width:'30',
					dataIndex:'День22',
					flex:1,
				},
				{
					text:'23',
					width:'30',
					dataIndex:'День23',
					flex:1,
				},
				{
					text:'24',
					width:'30',
					dataIndex:'День24',
					flex:1,
				},
				{
					text:'25',
					width:'30',
					dataIndex:'День25',
					flex:1,
				},
				{
					text:'26',
					width:'30',
					dataIndex:'День26',
					flex:1,
				},
				{
					text:'27',
					width:'30',
					dataIndex:'День27',
					flex:1,
				},
				{
					text:'28',
					width:'30',
					dataIndex:'День28',
					flex:1,
				},
				{
					text:'29',
					width:'30',
					dataIndex:'День29',
					flex:1,
				},
				{
					text:'30',
					width:'30',
					dataIndex:'День30',
					flex:1,
				},
				{
					text:'31',
					width:'30',
					dataIndex:'День31',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени1',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней1',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов1',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени2',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней2',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов2',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени3',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней3',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов3',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени4',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней4',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов4',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени5',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней5',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов5',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СдельныйНаряд/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'КТУ',
					},
					{
						name:'Тариф',
					},
					{
						name:'ОтработаноЧасов',
					},
					{
						name:'ОтработаноДней',
					},
					{
						name:'СуммаКНачислению',
					},
					{
						name:'СуммаКНачислениюРегл',
					},
					{
						name:'День1',
					},
					{
						name:'День2',
					},
					{
						name:'День3',
					},
					{
						name:'День4',
					},
					{
						name:'День5',
					},
					{
						name:'День6',
					},
					{
						name:'День7',
					},
					{
						name:'День8',
					},
					{
						name:'День9',
					},
					{
						name:'День10',
					},
					{
						name:'День11',
					},
					{
						name:'День12',
					},
					{
						name:'День13',
					},
					{
						name:'День14',
					},
					{
						name:'День15',
					},
					{
						name:'День16',
					},
					{
						name:'День17',
					},
					{
						name:'День18',
					},
					{
						name:'День19',
					},
					{
						name:'День20',
					},
					{
						name:'День21',
					},
					{
						name:'День22',
					},
					{
						name:'День23',
					},
					{
						name:'День24',
					},
					{
						name:'День25',
					},
					{
						name:'День26',
					},
					{
						name:'День27',
					},
					{
						name:'День28',
					},
					{
						name:'День29',
					},
					{
						name:'День30',
					},
					{
						name:'День31',
					},
					{
						name:'ВидВремени1',
					},
					{
						name:'Дней1',
					},
					{
						name:'Часов1',
					},
					{
						name:'ВидВремени2',
					},
					{
						name:'Дней2',
					},
					{
						name:'Часов2',
					},
					{
						name:'ВидВремени3',
					},
					{
						name:'Дней3',
					},
					{
						name:'Часов3',
					},
					{
						name:'ВидВремени4',
					},
					{
						name:'Дней4',
					},
					{
						name:'Часов4',
					},
					{
						name:'ВидВремени5',
					},
					{
						name:'Дней5',
					},
					{
						name:'Часов5',
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
						var грид = Ext.getCmp('Исполнители');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СдельныйНаряд.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СдельныйНаряд.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:35px;width:668px;height:105px;',
			height: 105,width: 668,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Порядок расчета',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять только приработок',
			style: 'position:absolute;left:8px;top:20px;width:193px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать КТУ',
			style: 'position:absolute;left:8px;top:39px;width:117px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать тариф',
			style: 'position:absolute;left:8px;top:59px;width:117px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Сотрудники',
			style: 'position:absolute;left:0px;top:83px;width:668px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать отработанное время',
			style: 'position:absolute;left:223px;top:20px;width:193px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособВводаДанных',
			text: 'Способ ввода времени',
			style: 'position:absolute;left:450px;top:20px;width:189px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'При расчете и в табеле',
			style: 'position:absolute;left:231px;top:39px;width:153px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только при расчете',
			style: 'position:absolute;left:231px;top:59px;width:153px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По дням периода',
			style: 'position:absolute;left:458px;top:39px;width:166px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сводно, в целом за период',
			style: 'position:absolute;left:458px;top:59px;width:166px;height:19px;',
		},
			]
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
			xtype: 'label',
			name: 'Надпись8',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:499px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:574px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:424px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:8px;top:77px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.СдельныйНаряд.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СдельныйНаряд.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.СдельныйНаряд.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.СдельныйНаряд.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:106px;width:676px;height:78px;',
			height: 78,width: 676,
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
			name: 'ПериодРегистрации',
			width: 110,
			height: 19,
			style: 'position:absolute;left:228px;top:51px;width:110px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПериода',
			width: 110,
			height: 19,
			style: 'position:absolute;left:228px;top:27px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Период наряда',
			style: 'position:absolute;left:6px;top:6px;width:332px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По результатам работы за один день',
			style: 'position:absolute;left:6px;top:27px;width:216px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По результатам работы за месяц',
			style: 'position:absolute;left:6px;top:51px;width:216px;height:19px;',
		},
			]
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
			style: 'position:absolute;left:0px;top:552px;width:692px;height:25px;',
			width: 692,
			height: 25,
			dock: 'bottom',
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});