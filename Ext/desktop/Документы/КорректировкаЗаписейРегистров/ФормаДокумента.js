Ext.require(['Данные.Документы.КорректировкаЗаписейРегистров'], function () 
{
	Ext.define('Документы.КорректировкаЗаписейРегистров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:363px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Корректировка записей регистров',
	
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
			style: 'position:absolute;left:8px;top:33px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:139px;top:33px;width:16px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:157px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			width: 650,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'Структура подчиненности документа',
					tooltip:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'Настройка состава регистров',
					tooltip:'Настройка состава регистров',
				},
				'-',
				{
					text:'',
					tooltip:'Открыть свойства',
				},
				{
					text:'',
					tooltip:'Открыть категории',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:311px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 548,
			height: 19,
			style: 'position:absolute;left:94px;top:311px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:287px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 548,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:287px;width:548px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаЗаписейРегистров.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаЗаписейРегистров.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаЗаписейРегистров.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаЗаписейРегистров.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:57px;width:634px;height:225px;',
			height: 225,width: 634,
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать заполнение движений',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:27px;width:620px;height:168px;',
			height: 168,width: 620,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:4px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЗаполнениеДвижений',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:620px;height:144px;',
			height: 144,width: 620,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Действие',
					width:'191',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Документ',
					width:'181',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Примечание',
					width:'216',
					dataIndex:'Примечание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Действие',
					},
					{
						name:'Документ',
					},
					{
						name:'Примечание',
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
						var грид = Ext.getCmp('ЗаполнениеДвижений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:24px;',
			width: 620,
			height: 24,
			items:
			[
				'-',
				{
					text:'Заполнить движения',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ПодсказкаВыполняемыеДействия',
			text: 'Документ содержит сервис автоматического заполнения движений.\r\n\r\nСервис подключается при установке флажка «Использовать заполнение движений» на закладке «Заполнение движений». При этом становится видимой табличная часть «Заполнение движений».\r\n\r\nПри нажатии на кнопку «Заполнить движения» для каждой строки табличной части «Заполнение движений» выполняются указанные действия и, при необходимости, заполняются движения регистров накопления, регистров сведений и регистров бухгалтерии. Заполненные движения регистров отображаются на соответствующих закладках.\r\n\r\nПосле заполнения движения можно отредактировать или удалить.\r\n\r\n\r\n',
			style: 'position:absolute;left:0px;top:9px;width:620px;height:159px;',
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
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					items:
					[
		{
			id: 'ТабличноеПолеДвиженияБУ',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
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
					text:'Количество Дт',
					width:'80',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Валюта Дт',
					width:'80',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Вал. сумма Дт',
					width:'80',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'80',
					dataIndex:'СчетКт',
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
					text:'Количество Кт',
					width:'80',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Валюта Кт',
					width:'80',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Вал. сумма Кт',
					width:'80',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'80',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ журнала',
					width:'80',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'СчетДт',
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
						name:'КоличествоДт',
					},
					{
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'СчетКт',
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
						name:'КоличествоКт',
					},
					{
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
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
						var грид = Ext.getCmp('ТабличноеПолеДвиженияБУ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			width: 606,
			height: 24,
			items:
			[
				'-',
				{
					text:'Сортировать по возрастанию',
					tooltip:'Упорядочить по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'Упорядочить по убыванию',
				},
				'-',
				{
					text:'Переключить активность',
					tooltip:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				'-',
				{
					text:'Заполнить',
					tooltip:'Заполнить данные налогового учета по бухгалтерскому',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеДвиженияНУ',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'88',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'88',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Вид учета Дт',
					width:'88',
					dataIndex:'ВидУчетаДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'136',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'136',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'136',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'95',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'95',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Вид учета Кт',
					width:'95',
					dataIndex:'ВидУчетаКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'142',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'142',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'142',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Сумма',
					width:'124',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'124',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ журнала',
					width:'124',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'СчетДт',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'ВидУчетаДт',
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
						name:'СчетКт',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'ВидУчетаКт',
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
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
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
						var грид = Ext.getCmp('ТабличноеПолеДвиженияНУ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			width: 606,
			height: 24,
			items:
			[
				'-',
				{
					text:'Сортировать по возрастанию',
					tooltip:'Упорядочить по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'Упорядочить по убыванию',
				},
				'-',
				{
					text:'Переключить активность',
					tooltip:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеДвиженияМУ',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'56',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'СубконтоДт1',
					width:'95',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'СубконтоДт2',
					width:'95',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'СубконтоДт3',
					width:'95',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'40',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Вал. сумма',
					width:'92',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Количество',
					width:'98',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'78',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'СубконтоКт1',
					width:'97',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'СубконтоКт2',
					width:'97',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'СубконтоКт3',
					width:'97',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Вал. сумма',
					width:'80',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Количество',
					width:'85',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Сумма',
					width:'63',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'162',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ж',
					width:'23',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Организация',
					},
					{
						name:'СчетДт',
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
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'СчетКт',
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
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
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
						var грид = Ext.getCmp('ТабличноеПолеДвиженияМУ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			width: 606,
			height: 24,
			items:
			[
				'-',
				{
					text:'Сортировать по возрастанию',
					tooltip:'Упорядочить по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'Упорядочить по убыванию',
				},
				'-',
				{
					text:'Переключить активность',
					tooltip:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеДвиженияБюджетирование',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:606px;height:132px;',
			height: 132,width: 606,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'155',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'56',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Валюта Дт',
					width:'70',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Сумма вал. Дт',
					width:'81',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'42',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'73',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'184',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'56',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Валюта Кт',
					width:'66',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Сумма вал. Кт',
					width:'80',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'194',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'194',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'194',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Сумма упр.',
					width:'49',
					dataIndex:'СуммаУпр',
					flex:1,
				},
				{
					text:'Сумма сценария',
					width:'86',
					dataIndex:'СуммаСценария',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'37',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'84',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'227',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Сценарий',
					},
					{
						name:'СчетДт',
					},
					{
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
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
						name:'СчетКт',
					},
					{
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
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
						name:'СуммаУпр',
					},
					{
						name:'СуммаСценария',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'СтатьяОборотов',
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
						var грид = Ext.getCmp('ТабличноеПолеДвиженияБюджетирование');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаЗаписейРегистров.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			width: 606,
			height: 24,
			items:
			[
				'-',
				{
					text:'Сортировать по возрастанию',
					tooltip:'Упорядочить по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'Упорядочить по убыванию',
				},
				'-',
				{
					text:'Переключить активность',
					tooltip:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыСведений2',
			text: 'На этой закладке отображаются движения по регистрам бухгалтерии. \r\nЧтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаНастройкаСоставаРегистровБухгалтерии',
			text: 'Настройка состава регистров бухгалтерии',
			style: 'position:absolute;left:6px;top:47px;width:606px;height:19px;',
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
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыСведений1',
			text: 'На этой закладке отображаются движения по регистрам накопления. \r\nЧтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаНастройкаСоставаРегистровНакопления',
			text: 'Настройка состава регистров накопления',
			style: 'position:absolute;left:6px;top:47px;width:606px;height:19px;',
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
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыСведений',
			text: 'На этой закладке отображаются движения по регистрам сведений. \r\nЧтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаНастройкаСоставаРегистровСведений',
			text: 'Настройка состава регистров сведений',
			style: 'position:absolute;left:6px;top:47px;width:606px;height:19px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:338px;width:650px;height:25px;',
			width: 650,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать',
				},
				'-',
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});