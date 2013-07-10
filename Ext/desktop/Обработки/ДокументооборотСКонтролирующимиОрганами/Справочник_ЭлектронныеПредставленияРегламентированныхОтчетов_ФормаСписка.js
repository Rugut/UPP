Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:848px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Электронные представления регламентированных отчетов',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:111px;width:832px;height:192px;',
			height: 192,width: 832,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'100',
					dataIndex:'ВидОтчета',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'83',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Тип пол.',
					width:'62',
					dataIndex:'ТипПолучателя',
					flex:1,
				},
				{
					text:'Пол.',
					width:'62',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Вид',
					width:'36',
					dataIndex:'Версия',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'87',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Дата импорта',
					width:'124',
					dataIndex:'ДатаИмпорта',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'118',
					dataIndex:'Периодичность',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидОтчета',
					},
					{
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'ТипПолучателя',
					},
					{
						name:'Получатель',
					},
					{
						name:'Версия',
					},
					{
						name:'Комментарий',
					},
					{
						name:'ДатаИмпорта',
					},
					{
						name:'Периодичность',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:832px;height:25px;',
			height: 25,width: 832,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:236px;top:1px;width:596px;height:21px;',
			height: 21,width: 596,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По виду отчета',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОтчета',
			width: 596,
			height: 19,
			style: 'position:absolute;left:0px;top:1px;width:596px;height:19px;',
		},
					]
				},
				{
					title:'По периоду отчета',
				},
				{
					title:'По виду документа',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:310px;top:1px;width:41px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '№ корректировки:',
			style: 'position:absolute;left:195px;top:3px;width:111px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'первичный',
			style: 'position:absolute;left:2px;top:3px;width:74px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'корректирующий',
			style: 'position:absolute;left:81px;top:3px;width:106px;height:15px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Доп. отбор:',
			style: 'position:absolute;left:0px;top:4px;width:77px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидДополнительногоОтбора',
			width: 147,
			height: 19,
			style: 'position:absolute;left:82px;top:2px;width:147px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:832px;height:30px;',
			height: 30,width: 832,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:174px;top:4px;width:55px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:832px;height:20px;',
			height: 20,width: 832,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:2px;width:77px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Получатель',
			width: 100,
			height: 19,
			style: 'position:absolute;left:732px;top:1px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-clear-trigger',
			trigger4Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 488,
			height: 19,
			style: 'position:absolute;left:82px;top:1px;width:488px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТипПолучателя',
			width: 80,
			height: 19,
			style: 'position:absolute;left:646px;top:1px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:309px;width:832px;height:126px;',
			height: 126,width: 832,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница ФНС',
					items:
					[
		{
			id: 'ЦиклыОбмена',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Наименование',
					width:'1200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата создания',
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
					text:'',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Уведомление об уточнении налоговой декларации (отчета)',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ЦиклыОбмена');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Страница заявление',
					items:
					[
		{
			id: 'ЦиклыОбменаЗаявление',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Наименование',
					width:'1200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата создания',
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
					text:'',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'Возврат',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'25',
					dataIndex:'ПодтверждениеВозврата',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
						name:'Возврат',
					},
					{
						name:'ПодтверждениеВозврата',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Страница ПФР',
					items:
					[
		{
			id: 'ЦиклыОбменаПФР',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Наименование',
					width:'1200',
					dataIndex:'Наименование',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ЦиклыОбменаПФР');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Страница ФСС',
					items:
					[
		{
			id: 'ОтправкиФСС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаОтправки',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаПолученияРезультата',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'192',
					dataIndex:'ИдентификаторОтправкиНаСервере',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ДатаОтправки',
					},
					{
						name:'ДатаПолученияРезультата',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'Результат',
					},
					{
						name:'ИдентификаторОтправкиНаСервере',
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
						var грид = Ext.getCmp('ОтправкиФСС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Страница ФСГС',
					items:
					[
		{
			id: 'ЦиклыОбменаФСГС',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
			columns:
			[
				{
					text:'Наименование',
					width:'1200',
					dataIndex:'Наименование',
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
					text:'Подтверждение доставки документа в орган ФСГС',
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
					text:'Извещение о получении протокола',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ЦиклыОбменаФСГС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:848px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'&Загрузить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Дополнительный отбор',
				},
				'-',
				{
					text:'Отображать панель обмена',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Журнал обмена',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});