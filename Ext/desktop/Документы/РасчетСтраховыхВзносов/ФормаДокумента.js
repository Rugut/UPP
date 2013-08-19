Ext.require(['Данные.Документы.РасчетСтраховыхВзносов'], function () 
{
	Ext.define('Документы.РасчетСтраховыхВзносов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:782px;height:531px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Начисление страховых взносов в ПФР, ФОМС и ФСС',
	
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
			style: 'position:absolute;left:365px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:453px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:533px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:553px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:59px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 220,
			height: 19,
			style: 'position:absolute;left:113px;top:59px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:365px;top:59px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:453px;top:59px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:33px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:365px;top:85px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:453px;top:85px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:782px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:479px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 678,
			height: 19,
			style: 'position:absolute;left:96px;top:479px;width:678px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:766px;height:341px;',
			height: 341,width: 766,
			items:
			[
				{
					title:'Взносы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
				{
					text:'Пересчитать страховые взносы',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			id: 'ИсчисленныеСтраховыеВзносы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
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
					width:'100',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'ФСС, соц.страхование',
					width:'125',
					dataIndex:'ФСС',
					flex:1,
				},
				{
					text:'ФСС, несчастные случаи',
					width:'125',
					dataIndex:'ФССНесчастныеСлучаи',
					flex:1,
				},
				{
					text:'ФФОМС',
					width:'100',
					dataIndex:'ФФОМС',
					flex:1,
				},
				{
					text:'ТФОМС',
					width:'100',
					dataIndex:'ТФОМС',
					flex:1,
				},
				{
					text:'ПФР, страховая часть',
					width:'115',
					dataIndex:'ПФРСтраховая',
					flex:1,
				},
				{
					text:'ПФР, накопительная часть',
					width:'121',
					dataIndex:'ПФРНакопительная',
					flex:1,
				},
				{
					text:'ФСС, ЕНВД',
					width:'100',
					dataIndex:'ФССЕНВД',
					flex:1,
				},
				{
					text:'ФФОМС, ЕНВД',
					width:'100',
					dataIndex:'ФФОМСЕНВД',
					flex:1,
				},
				{
					text:'ТФОМС, ЕНВД',
					width:'100',
					dataIndex:'ТФОМСЕНВД',
					flex:1,
				},
				{
					text:'ПФР, страховая часть, ЕНВД',
					width:'159',
					dataIndex:'ПФРСтраховаяЕНВД',
					flex:1,
				},
				{
					text:'ПФР, накопительная часть, ЕНВД',
					width:'159',
					dataIndex:'ПФРНакопительнаяЕНВД',
					flex:1,
				},
				{
					text:'ПФР, по дополнительному тарифу',
					width:'100',
					dataIndex:'ПФРПоДополнительномуТарифу',
					flex:1,
				},
				{
					text:'На доплату к пенсии в угольной промышленности',
					width:'100',
					dataIndex:'ПФРНаДоплатуКПенсииШахтерам',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетСтраховыхВзносов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ФСС',
					},
					{
						name:'ФССНесчастныеСлучаи',
					},
					{
						name:'ФФОМС',
					},
					{
						name:'ТФОМС',
					},
					{
						name:'ПФРСтраховая',
					},
					{
						name:'ПФРНакопительная',
					},
					{
						name:'ФССЕНВД',
					},
					{
						name:'ФФОМСЕНВД',
					},
					{
						name:'ТФОМСЕНВД',
					},
					{
						name:'ПФРСтраховаяЕНВД',
					},
					{
						name:'ПФРНакопительнаяЕНВД',
					},
					{
						name:'ПФРПоДополнительномуТарифу',
					},
					{
						name:'ПФРНаДоплатуКПенсииШахтерам',
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
						var грид = Ext.getCmp('ИсчисленныеСтраховыеВзносы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Осн. начисления',
					items:
					[
		{
			id: 'ОсновныеНачисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
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
					text:'Начисление',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Вид дохода',
					width:'100',
					dataIndex:'ВидДохода',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'ПериодДействияНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ПериодДействияКонец',
					flex:1,
				},
				{
					text:'Результат',
					width:'100',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'42',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'101',
					dataIndex:'ОблагаетсяПоДополнительномуТарифу',
					flex:1,
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'100',
					dataIndex:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					flex:1,
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
					dataIndex:'ЯвляетсяДоходомФармацевта',
					flex:1,
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
					dataIndex:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
					flex:1,
				},
				{
					text:'Сторно',
					width:'43',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетСтраховыхВзносов/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидДохода',
					},
					{
						name:'ПериодДействияНачало',
					},
					{
						name:'ПериодДействияКонец',
					},
					{
						name:'Результат',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'ОблагаетсяПоДополнительномуТарифу',
					},
					{
						name:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					},
					{
						name:'ЯвляетсяДоходомФармацевта',
					},
					{
						name:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
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
						Ext.require(['Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
				{
					text:'Подбор',
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
			id: 'ДополнительныеНачисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
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
					text:'Начисление',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Вид дохода',
					width:'100',
					dataIndex:'ВидДохода',
					flex:1,
				},
				{
					text:'Результат',
					width:'100',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'40',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'100',
					dataIndex:'ОблагаетсяПоДополнительномуТарифу',
					flex:1,
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'100',
					dataIndex:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					flex:1,
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
					dataIndex:'ЯвляетсяДоходомФармацевта',
					flex:1,
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
					dataIndex:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетСтраховыхВзносов/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидДохода',
					},
					{
						name:'Результат',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'ОблагаетсяПоДополнительномуТарифу',
					},
					{
						name:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					},
					{
						name:'ЯвляетсяДоходомФармацевта',
					},
					{
						name:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
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
						var грид = Ext.getCmp('ДополнительныеНачисления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Необлагаемые суммы',
					items:
					[
		{
			id: 'НеоблагаемыеСуммыДоходов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
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
					text:'Вид дохода',
					width:'220',
					dataIndex:'ВидДохода',
					flex:1,
				},
				{
					text:'Скидка',
					width:'100',
					dataIndex:'Скидка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетСтраховыхВзносов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ВидДохода',
					},
					{
						name:'Скидка',
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
						var грид = Ext.getCmp('НеоблагаемыеСуммыДоходов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
				{
					text:'Пересчитать скидки',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Пособия по соц. страхованию',
					items:
					[
		{
			id: 'ПособияПоСоциальномуСтрахованию',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
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
					text:'Вид пособия',
					width:'100',
					dataIndex:'ВидПособияСоциальногоСтрахования',
					flex:1,
				},
				{
					text:'Финансирование',
					width:'100',
					dataIndex:'СпособФинансированияПособий',
					flex:1,
				},
				{
					text:'Страховой случай:',
					width:'64',
					dataIndex:'ЗаголовокСтраховогоСлучая',
					flex:1,
				},
				{
					text:'Новый',
					width:'44',
					dataIndex:'УчитыватьКакНовыйСтраховойСлучай',
					flex:1,
				},
				{
					text:'Дата события',
					width:'84',
					dataIndex:'ДатаСтраховогоСлучая',
					flex:1,
				},
				{
					text:'Период оплаты:',
					width:'178',
					dataIndex:'ЗаголовокПериодаОплаты',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'89',
					dataIndex:'ПериодДействияНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'89',
					dataIndex:'ПериодДействияКонец',
					flex:1,
				},
				{
					text:'Сумма пособия',
					width:'90',
					dataIndex:'СуммаВсего',
					flex:1,
				},
				{
					text:'Оплаченные дни',
					width:'90',
					dataIndex:'ОплаченныеДни',
					flex:1,
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'80',
					dataIndex:'СуммаСверхНорм',
					flex:1,
				},
				{
					text:'Расшифровка выплат за счет федерального бюджета',
					width:'80',
					dataIndex:'ВыплатаЗаСчетФедеральногоБюджета',
					flex:1,
				},
				{
					text:'Начисление',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'41',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
					dataIndex:'ЯвляетсяДоходомФармацевта',
					flex:1,
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'100',
					dataIndex:'ОблагаетсяПоДополнительномуТарифу',
					flex:1,
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'100',
					dataIndex:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					flex:1,
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
					dataIndex:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Сторно',
					width:'44',
					dataIndex:'Сторно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетСтраховыхВзносов/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидПособияСоциальногоСтрахования',
					},
					{
						name:'СпособФинансированияПособий',
					},
					{
						name:'ЗаголовокСтраховогоСлучая',
					},
					{
						name:'УчитыватьКакНовыйСтраховойСлучай',
					},
					{
						name:'ДатаСтраховогоСлучая',
					},
					{
						name:'ЗаголовокПериодаОплаты',
					},
					{
						name:'ПериодДействияНачало',
					},
					{
						name:'ПериодДействияКонец',
					},
					{
						name:'СуммаВсего',
					},
					{
						name:'ОплаченныеДни',
					},
					{
						name:'СуммаСверхНорм',
					},
					{
						name:'ВыплатаЗаСчетФедеральногоБюджета',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'ЯвляетсяДоходомФармацевта',
					},
					{
						name:'ОблагаетсяПоДополнительномуТарифу',
					},
					{
						name:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					},
					{
						name:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'Сторно',
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
						var грид = Ext.getCmp('ПособияПоСоциальномуСтрахованию');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'По уходу за ребенком до полутора лет',
					items:
					[
		{
			id: 'ПособияПоУходуЗаРебенкомДоПолутораЛет',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
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
					text:'Дата начала',
					width:'100',
					dataIndex:'ПериодДействияНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ПериодДействияКонец',
					flex:1,
				},
				{
					text:'Пособие по уходу за первым ребенком',
					width:'100',
					dataIndex:'ПособиеПоУходуЗаПервымРебенком',
					flex:1,
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'80',
					dataIndex:'ПособиеПоУходуЗаПервымРебенкомСверхНорм',
					flex:1,
				},
				{
					text:'Пособие по уходу за вторым ребенком',
					width:'100',
					dataIndex:'ПособиеПоУходуЗаВторымРебенком',
					flex:1,
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'80',
					dataIndex:'ПособиеПоУходуЗаВторымРебенкомСверхНорм',
					flex:1,
				},
				{
					text:'Расшифровка выплат за счет федерального бюджета',
					width:'100',
					dataIndex:'ВыплатаЗаСчетФедеральногоБюджета',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'41',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'100',
					dataIndex:'ОблагаетсяПоДополнительномуТарифу',
					flex:1,
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'100',
					dataIndex:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					flex:1,
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
					dataIndex:'ЯвляетсяДоходомФармацевта',
					flex:1,
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
					dataIndex:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
					flex:1,
				},
				{
					text:'Сторно',
					width:'47',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетСтраховыхВзносов/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ПериодДействияНачало',
					},
					{
						name:'ПериодДействияКонец',
					},
					{
						name:'ПособиеПоУходуЗаПервымРебенком',
					},
					{
						name:'ПособиеПоУходуЗаПервымРебенкомСверхНорм',
					},
					{
						name:'ПособиеПоУходуЗаВторымРебенком',
					},
					{
						name:'ПособиеПоУходуЗаВторымРебенкомСверхНорм',
					},
					{
						name:'ВыплатаЗаСчетФедеральногоБюджета',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'ОблагаетсяПоДополнительномуТарифу',
					},
					{
						name:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					},
					{
						name:'ЯвляетсяДоходомФармацевта',
					},
					{
						name:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
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
						var грид = Ext.getCmp('ПособияПоУходуЗаРебенкомДоПолутораЛет');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетСтраховыхВзносов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
				{
					text:'Подбор',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить и рассчитать',
			style: 'position:absolute;left:8px;top:85px;width:193px;height:36px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:506px;width:782px;height:25px;',
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