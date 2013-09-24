Ext.require(['Данные.Обработки.ВыгрузкаДанныхCommerceML'], function () 
{
	Ext.define('Обработки.ВыгрузкаДанныхCommerceML.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:611px;height:513px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выгрузка данных в формате CommerceML',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:611px;height:25px;',
			width: 611,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:44px;top:56px;width:428px;height:19px;',
			width: 428,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Укажите данные, которые нужно выгрузить:',
			style: 'position:absolute;left:44px;top:33px;width:274px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:611px;height:25px;',
			width: 611,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выгрузить данные',
					tooltip:'Выгрузить данные',
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
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:80px;width:603px;height:405px;',
			height: 405,width: 603,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:71px;width:591px;height:334px;',
			height: 334,width: 591,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ПостроительОтчетаКаталогОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:591px;height:262px;',
			height: 262,width: 591,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ПостроительОтчетаКаталогОтбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Отбор для выгрузки информации о товарах',
			style: 'position:absolute;left:0px;top:23px;width:591px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:42px;width:591px;height:24px;',
			width: 591,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Имя выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяКаталога',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Имя прайс-листа:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПрайса',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
		{
			id: 'ПостроительОтчетаПрайсаОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:591px;height:259px;',
			height: 259,width: 591,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ПостроительОтчетаПрайсаОтбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Отбор для выгрузки прайс-листа',
			style: 'position:absolute;left:0px;top:23px;width:591px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:42px;width:591px;height:24px;',
			width: 591,
			height: 24,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:66px;width:591px;height:24px;',
			width: 591,
			height: 24,
			items:
			[
				{
					text:'',
					tooltip:'Снять флажки',
				},
				{
					text:'',
					tooltip:'Установить флажки',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор документов для выгрузки',
				},
				{
					text:'Заполнить',
					tooltip:'Заполняет дерево выгружаемых документов по отбору',
				},
				'-',
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Очистить',
					tooltip:'Очистить список выгружаемых документов',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:101px;top:0px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеНастройкиКонтрагент.Представление',
			width: 201,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:256px;top:0px;width:201px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:23px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеНастройкиСДокументДата',
			width: 84,
			height: 19,
			style: 'position:absolute;left:101px;top:23px;width:84px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеНастройкиПоДокументДата',
			width: 84,
			height: 19,
			style: 'position:absolute;left:212px;top:23px;width:84px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:302px;top:23px;width:19px;height:19px;',
		},
		{
			id: 'ДеревоДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:94px;width:591px;height:233px;',
			height: 233,width: 591,
			columns:
			[
				{
					text:'Контрагент/Документ',
					width:'352',
					dataIndex:'Строка',
					flex:1,
				},
				{
					text:'Обрабатывать',
					width:'100',
					dataIndex:'Обрабатывать',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Строка',
					},
					{
						name:'Обрабатывать',
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
						var грид = Ext.getCmp('ДеревоДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Документы для выгрузки',
			style: 'position:absolute;left:0px;top:46px;width:591px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'Классификатор',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:110px;width:242px;height:219px;',
			height: 219,width: 242,
			columns:
			[
				{
					text:'',
					width:'29',
					dataIndex:'Использовать',
					flex:1,
				},
				{
					text:'Свойство',
					width:'387',
					dataIndex:'Свойство',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использовать',
					},
					{
						name:'Свойство',
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
						var грид = Ext.getCmp('Классификатор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ПостроительОтчетаПрайсCML_1Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:248px;top:136px;width:343px;height:193px;',
			height: 193,width: 343,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ПостроительОтчетаПрайсCML_1Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаДанныхCommerceML.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:248px;top:108px;width:343px;height:24px;',
			width: 343,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать каталог товаров',
			style: 'position:absolute;left:0px;top:23px;width:167px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать сведения об организации',
			style: 'position:absolute;left:171px;top:23px;width:208px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Отбор для прайс-листа',
			style: 'position:absolute;left:248px;top:89px;width:343px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПрайсаCML_1',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Имя прайс-листа:',
			style: 'position:absolute;left:0px;top:0px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаПоУмолчанию.Представление',
			width: 102,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:130px;top:42px;width:102px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Единица по умолчанию:',
			style: 'position:absolute;left:0px;top:42px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Выгружать свойства',
			style: 'position:absolute;left:0px;top:89px;width:242px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Действительно с:',
			style: 'position:absolute;left:0px;top:66px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'по:',
			style: 'position:absolute;left:227px;top:66px;width:21px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПрайсCML_1',
			text: '...',
			style: 'position:absolute;left:356px;top:66px;width:19px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДействительноС',
			width: 91,
			height: 19,
			style: 'position:absolute;left:130px;top:66px;width:91px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДействительноПо',
			width: 91,
			height: 19,
			style: 'position:absolute;left:257px;top:66px;width:91px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:48px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 355,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:48px;width:355px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыгрузкаДанныхCommerceML.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:24px;width:591px;height:21px;',
			height: 21,width: 591,
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
			name: 'ИмяФайлаВыгрузки',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Файл выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяКаталога',
			text: 'Каталог выгрузки:',
			style: 'position:absolute;left:0px;top:0px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяКаталогаВыгрузки',
			width: 355,
			height: 19,
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Выгрузить данные в файл',
			style: 'position:absolute;left:6px;top:0px;width:164px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выгрузить данные по электронной почте',
			style: 'position:absolute;left:175px;top:0px;width:234px;height:19px;',
		},
			]
		},
					]
				},
				{
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