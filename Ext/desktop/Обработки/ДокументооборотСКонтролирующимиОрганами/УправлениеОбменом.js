Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменом',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:794px;height:524px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Документооборот с контролирующими органами',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:794px;height:25px;',
			width: 794,
			height: 25,
			items:
			[
				{
					text:'Заявления на подключение',
					tooltip:'',
				},
				'-',
				{
					text:'Учетные записи документооборота',
					tooltip:'Учетные записи документооборота',
				},
				{
					text:'Серверы документооборота',
					tooltip:'',
				},
				'-',
				{
					text:'Налоговые органы',
					tooltip:'5417137-62c5-4275-ba35-6d5d4cf9de9',
				},
				{
					text:'Органы ПФР',
					tooltip:'cfe6da8-e458-439b-89e2-536617212a7',
				},
				{
					text:'Органы ФСГС',
					tooltip:'Органы ФСГС',
				},
				'-',
				{
					text:'Регламентированные отчеты',
					tooltip:'b817ee1-fd28-4e7f-bb4a-53686b2b153',
				},
				{
					text:'Виды отправляемых документов',
					tooltip:'Виды отправляемых документов',
				},
				{
					text:'Внешние электронные представления отчетов',
					tooltip:'Электронные представления отчетов, импортированные из других программ',
				},
				'-',
				{
					text:'Архив документооборота с ФНС',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:561px;top:0px;width:233px;height:24px;',
			width: 233,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сегодня',
					tooltip:'',
				},
				{
					text:'Текущая неделя',
					tooltip:'',
				},
				{
					text:'Текущий месяц',
					tooltip:'',
				},
				{
					text:'Текущий квартал',
					tooltip:'',
				},
				{
					text:'Текущий год',
					tooltip:'',
				},
				'-',
				{
					text:'Вчера',
					tooltip:'',
				},
				{
					text:'Предыдущая неделя',
					tooltip:'',
				},
				{
					text:'Предыдущий месяц',
					tooltip:'',
				},
				{
					text:'Предыдущий квартал',
					tooltip:'',
				},
				{
					text:'Предыдущий год',
					tooltip:'',
				},
				'-',
				{
					text:'Произвольный период',
					tooltip:'',
				},
				{
					text:'Без ограничений',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:778px;height:23px;',
			height: 23,width: 778,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1УчетнаяЗапись',
			text: 'Учетная запись:',
			style: 'position:absolute;left:0px;top:2px;width:92px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ОтборУчетнаяЗапись.Представление',
			width: 681,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:0px;width:681px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:60px;width:778px;height:456px;',
			height: 456,width: 778,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:201px;top:0px;width:577px;height:456px;',
			height: 456,width: 577,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаОтчетность',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:85px;width:529px;height:331px;',
			height: 331,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'120',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Период',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Вид',
					width:'36',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема отчетности',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Извещение о получении результата обработки',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'120',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Период',
					},
					{
						name:'Вид',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
					{
						name:'Организация',
					},
					{
						name:'НалоговыйОрган',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаОтчетность');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			name: 'ВидОтбораЦикловОбмена',
			width: 148,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			name: 'ОтчетДляОтбора',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораСтрока',
			width: 331,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОтчета.Представление',
			width: 376,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
				},
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:310px;top:0px;width:41px;height:19px;',
			width: 41,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: '№ корректировки:',
			style: 'position:absolute;left:195px;top:2px;width:111px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'первичный',
			style: 'position:absolute;left:2px;top:2px;width:74px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'корректирующий',
			style: 'position:absolute;left:81px;top:2px;width:106px;height:15px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЭлектронноеПредставлениеДляОтбора.Представление',
			width: 376,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
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
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:52px;width:529px;height:33px;',
			height: 33,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:93px;top:4px;width:55px;height:20px;',
			width: 55,
			height: 20,
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'Подписать',
					tooltip:'',
				},
				'-',
				{
					text:'Сформировать подтверждения',
					tooltip:'',
				},
				'-',
				{
					text:'Зашифровать',
					tooltip:'',
				},
				{
					text:'Расшифровать',
					tooltip:'',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЦиклыОбменаЗаявление',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:85px;width:529px;height:331px;',
			height: 331,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'120',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Период',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема отчетности',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Извещение о получении результата обработки',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Возврат заявления',
					width:'25',
					dataIndex:'Возврат',
					flex:1,
				},
				{
					text:'Извещение о получении сообщения о возврате заявления',
					width:'25',
					dataIndex:'ПодтверждениеВозврата',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'120',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Период',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
					{
						name:'Возврат',
					},
					{
						name:'ПодтверждениеВозврата',
					},
					{
						name:'Организация',
					},
					{
						name:'НалоговыйОрган',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаЗаявление');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			name: 'ВидОтбораЦикловОбменаЗаявление',
			width: 148,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			name: 'ОтчетДляОтбораЗаявление',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление1',
			text: 'Янв',
			style: 'position:absolute;left:1px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление3',
			text: 'I кв',
			style: 'position:absolute;left:57px;top:4px;width:28px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление5',
			text: 'Май',
			style: 'position:absolute;left:114px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление7',
			text: 'Июл',
			style: 'position:absolute;left:171px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление9',
			text: 'III кв',
			style: 'position:absolute;left:224px;top:4px;width:32px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление11',
			text: 'Ноя',
			style: 'position:absolute;left:282px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление2',
			text: 'Фев',
			style: 'position:absolute;left:30px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление4',
			text: 'Апр',
			style: 'position:absolute;left:86px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление6',
			text: 'II кв',
			style: 'position:absolute;left:141px;top:4px;width:28px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление8',
			text: 'Авг',
			style: 'position:absolute;left:198px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление10',
			text: 'Окт',
			style: 'position:absolute;left:256px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление12',
			text: 'IV кв',
			style: 'position:absolute;left:307px;top:4px;width:32px;height:17px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораЗаявлениеСтрока',
			width: 331,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЭлектронноеПредставлениеДляОтбораЗаявление.Представление',
			width: 376,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
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
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:52px;width:529px;height:33px;',
			height: 33,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьГодЗаявление',
			text: 'Год:',
			style: 'position:absolute;left:63px;top:7px;width:23px;height:15px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГодЗаявление',
			style: 'position:absolute;left:93px;top:4px;width:55px;height:20px;',
			width: 55,
			height: 20,
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'Выгрузить контейнеры и их содержимое',
					tooltip:'',
				},
				'-',
				{
					text:'Выгрузить контейнеры',
					tooltip:'',
				},
				{
					text:'Выгрузить содержимое',
					tooltip:'',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'Требования',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата документа',
					width:'99',
					dataIndex:'ДатаДокумента',
					flex:1,
				},
				{
					text:'Номер документа',
					width:'100',
					dataIndex:'НомерДокумента',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'227',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'106',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'Организация',
					width:'110',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаДокумента',
					},
					{
						name:'НомерДокумента',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'НалоговыйОрган',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('Требования');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'Открыть',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Отображать панель обмена',
					tooltip:'Отображать панель обмена',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаТребования',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ налогового орагана',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа налогоплательщику',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема документа',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаТребования');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ИсходящиеДокументыФНС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'119',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Получатель',
					width:'68',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Тема',
					width:'186',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Получатель',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ИсходящиеДокументыФНС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'&Новый',
					tooltip:'Добавить',
					iconCls:'x-add',
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
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Отображать панель обмена',
					tooltip:'Отображать панель обмена',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаИсходящиеДокументыФНС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Обращение налогоплательщика',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении обращения',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема обращения',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Наименование',
					width:'228',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаИсходящиеДокументыФНС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ВходящиеДокументыФНС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'120',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'83',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Тема',
					width:'173',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Отправитель',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ВходящиеДокументыФНС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'Открыть',
					tooltip:'',
				},
				{
					text:'Ответить',
					tooltip:'4e242c1-644d-4e0c-9142-e0c96b0e010',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Отображать панель обмена',
					tooltip:'Отображать панель обмена',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаВходящиеДокументыФНС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ налогоплательщика',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаВходящиеДокументыФНС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаЗапросы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема отчетности',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Извещение о получении результата обработки',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Наименование',
					width:'228',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаЗапросы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'&Новый',
					tooltip:'Добавить',
					iconCls:'x-add',
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
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Отображать панель обмена',
					tooltip:'Отображать панель обмена',
				},
			]
		},
		{
			id: 'Запросы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'119',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Начало периода',
					width:'100',
					dataIndex:'ДатаНачалаПериода',
					flex:1,
				},
				{
					text:'Конец периода',
					width:'100',
					dataIndex:'ДатаОкончанияПериода',
					flex:1,
				},
				{
					text:'Вид услуги',
					width:'104',
					dataIndex:'ВидУслуги',
					flex:1,
				},
				{
					text:'Организация',
					width:'90',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Ответ',
					width:'100',
					dataIndex:'Ответ',
					flex:1,
				},
				{
					text:'Формат ответа',
					width:'100',
					dataIndex:'ФорматОтвета',
					flex:1,
				},
				{
					text:'Номер',
					width:'90',
					dataIndex:'Номер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаНачалаПериода',
					},
					{
						name:'ДатаОкончанияПериода',
					},
					{
						name:'ВидУслуги',
					},
					{
						name:'Организация',
					},
					{
						name:'Ответ',
					},
					{
						name:'ФорматОтвета',
					},
					{
						name:'Номер',
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
						var грид = Ext.getCmp('Запросы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаОтчетностьПФР',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:529px;height:364px;',
			height: 364,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Отчет',
					width:'138',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Период',
					width:'109',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'75',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'74',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Протокол',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Квитанция на протокол',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'120',
					dataIndex:'ВидОтчета',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Орган ПФР',
					width:'120',
					dataIndex:'ОрганПФР',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Период',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ВидОтчета',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
					{
						name:'ОрганПФР',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаОтчетностьПФР');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			name: 'ВидОтбораЦикловОбменаПФР',
			width: 148,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			name: 'ОтчетДляОтбораПФР',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораСтрокаПФР',
			width: 331,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОтчетаПФР.Представление',
			width: 376,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЭлектронноеПредставлениеДляОтбораПФР.Представление',
			width: 376,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
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
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'Показать документы',
					tooltip:'',
				},
				{
					text:'Показать отчеты о состоянии',
					tooltip:'',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ИсходящиеДокументыПФР',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'119',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Получатель',
					width:'112',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Тема',
					width:'144',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Получатель',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ИсходящиеДокументыПФР');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'&Новый',
					tooltip:'Добавить',
					iconCls:'x-add',
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
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Отображать панель обмена',
					tooltip:'Отображать панель обмена',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаИсходящиеДокументыПФР',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ налогоплательщика',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Наименование',
					width:'228',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаИсходящиеДокументыПФР');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ВходящиеДокументыПФР',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'112',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'120',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Тема',
					width:'144',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'Отправитель',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ВходящиеДокументыПФР');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'Открыть',
					tooltip:'',
				},
				{
					text:'Ответить',
					tooltip:'4e242c1-644d-4e0c-9142-e0c96b0e010',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Отображать панель обмена',
					tooltip:'Отображать панель обмена',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаВходящиеДокументыПФР',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ налогоплательщика',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаВходящиеДокументыПФР');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаОтчетностьФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:529px;height:364px;',
			height: 364,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Отчет',
					width:'138',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Период',
					width:'109',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'75',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'74',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Протокол',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Квитанция на протокол',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'120',
					dataIndex:'ВидОтчета',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Орган ФСГС',
					width:'120',
					dataIndex:'ОрганФСГС',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Период',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ВидОтчета',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
					{
						name:'ОрганФСГС',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаОтчетностьФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			name: 'ВидОтбораЦикловОбменаФСГС',
			width: 148,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			name: 'ОтчетДляОтбораФСГС',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораСтрокаФСГС',
			width: 331,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОтчетаФСГС.Представление',
			width: 376,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЭлектронноеПредставлениеДляОтбораФСГС.Представление',
			width: 376,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
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
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'Показать документы',
					tooltip:'',
				},
				{
					text:'Показать отчеты о состоянии',
					tooltip:'',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ИсходящиеДокументыФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'119',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Получатель',
					width:'112',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Тема',
					width:'144',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Получатель',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ИсходящиеДокументыФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'&Новый',
					tooltip:'Добавить',
					iconCls:'x-add',
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
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Отображать панель обмена',
					tooltip:'Отображать панель обмена',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаИсходящиеДокументыФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ респондента',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в орган ФСГС',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Наименование',
					width:'228',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаИсходящиеДокументыФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ВходящиеДокументыФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'112',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'120',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Тема',
					width:'144',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Статус',
					},
					{
						name:'Отправитель',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ВходящиеДокументыФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			width: 529,
			height: 24,
			items:
			[
				{
					text:'Открыть',
					tooltip:'Открыть',
				},
				{
					text:'Ответить',
					tooltip:'Ответить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Отображать панель обмена',
					tooltip:'Отображать панель обмена',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ЦиклыОбменаВходящиеДокументыФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ ФСГС',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ДатаПоследнегоСообщения',
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
						var грид = Ext.getCmp('ЦиклыОбменаВходящиеДокументыФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
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
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ПрочиеСообщения',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:41px;width:543px;height:401px;',
			height: 401,width: 543,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'128',
					dataIndex:'ДатаТранспорта',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'159',
					dataIndex:'ОтКогоАдрес',
					flex:1,
				},
				{
					text:'Тема',
					width:'212',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'От кого',
					width:'122',
					dataIndex:'ОтКогоПредставление',
					flex:1,
				},
				{
					text:'Дата отправки',
					width:'128',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'153',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Пометка удаления',
					width:'70',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ДатаТранспорта',
					},
					{
						name:'ОтКогоАдрес',
					},
					{
						name:'Тема',
					},
					{
						name:'ОтКогоПредставление',
					},
					{
						name:'Дата',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'ПометкаУдаления',
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
						var грид = Ext.getCmp('ПрочиеСообщения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:543px;height:24px;',
			width: 543,
			height: 24,
			items:
			[
				{
					text:'Открыть',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:14px;width:543px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:9px;width:543px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:195px;height:456px;',
			height: 456,width: 195,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'УчетныеЗаписи',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:48px;width:195px;height:408px;',
			height: 408,width: 195,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Объект',
					width:'21',
					dataIndex:'Объект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Объект',
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
						var грид = Ext.getCmp('УчетныеЗаписи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменомСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Учетные записи',
			style: 'position:absolute;left:0px;top:2px;width:195px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:23px;width:195px;height:24px;',
			width: 195,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:21px;width:195px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
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
	]
	});
});