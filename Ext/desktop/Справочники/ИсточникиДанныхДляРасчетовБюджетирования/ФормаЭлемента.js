Ext.require(['Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования'], function () 
{
	Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:601px;height:440px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Элемент Источники данных для расчетов бюджетирования',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:601px;height:25px;',
			width: 601,
			height: 25,
			items:
			[
				{
					text:'Проверить',
				},
				'-',
				{
					text:'Произвольный запрос',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 370,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеРегистра',
			width: 499,
			height: 19,
			style: 'position:absolute;left:94px;top:57px;width:499px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставлениеРегистра',
			text: 'Источник:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:84px;width:585px;height:323px;',
			height: 323,width: 585,
			items:
			[
				{
					items:
					[
		{
			id: 'ДатыОтбораДанныхИсточника',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:571px;height:100px;',
			height: 100,width: 571,
			columns:
			[
				{
					text:'Имя',
					width:'100',
					dataIndex:'ИмяДатаГраницы',
					flex:1,
				},
				{
					text:'Представление',
					width:'133',
					dataIndex:'ПредставлениеДатыГраницы',
					flex:1,
				},
				{
					text:'Начальная граница',
					width:'95',
					dataIndex:'НачальнаяГраницаОтсчета',
					flex:1,
				},
				{
					text:'Дата начальной границы',
					width:'134',
					dataIndex:'ДатаНачальнойГраницыОтсчета',
					flex:1,
				},
				{
					text:'Период смещения',
					width:'102',
					dataIndex:'ПериодСмещения',
					flex:1,
				},
				{
					text:'Сдвиг (в периодах)',
					width:'115',
					dataIndex:'Сдвиг',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования").data,
					fields: ['Ссылка','Родитель.Представление','ИмяДатаГраницы','ПредставлениеДатыГраницы','НачальнаяГраницаОтсчета','ДатаНачальнойГраницыОтсчета','ПериодСмещения','Сдвиг',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиДанныхДляРасчетовБюджетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяДатаГраницы',
					},
					{
						name:'ПредставлениеДатыГраницы',
					},
					{
						name:'НачальнаяГраницаОтсчета',
					},
					{
						name:'ДатаНачальнойГраницыОтсчета',
					},
					{
						name:'ПериодСмещения',
					},
					{
						name:'Сдвиг',
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
						var грид = Ext.getCmp('ДатыОтбораДанныхИсточника');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:6px;top:133px;width:264px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'Показатели',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:173px;width:264px;height:124px;',
			height: 124,width: 264,
			columns:
			[
				{
					text:'№',
					width:'24',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Использование',
					width:'29',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Представление',
					width:'211',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','Использование','Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиДанныхДляРасчетовБюджетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Использование',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('Показатели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:149px;width:264px;height:24px;',
			width: 264,
			height: 24,
			items:
			[
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
			]
		},
		{
			id: 'ИзмеренияИсточника',
			xtype: 'grid',
			style: 'position:absolute;left:276px;top:173px;width:300px;height:124px;',
			height: 124,width: 300,
			columns:
			[
				{
					text:'Поле источника',
					width:'180',
					dataIndex:'ИмяПоляИсточника',
					flex:1,
				},
				{
					text:'Измерение',
					width:'120',
					dataIndex:'ИзмерениеБюджетирования',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования").data,
					fields: ['Ссылка','Родитель.Представление','ИмяПоляИсточника','ИзмерениеБюджетирования',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиДанныхДляРасчетовБюджетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяПоляИсточника',
					},
					{
						name:'ИзмерениеБюджетирования',
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
						var грид = Ext.getCmp('ИзмеренияИсточника');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:571px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:276px;top:149px;width:300px;height:24px;',
			width: 300,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:276px;top:133px;width:300px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:380px;height:24px;',
			width: 380,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:380px;height:273px;',
			height: 273,width: 380,
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
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'160',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'80',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'80',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования").data,
					fields: ['Ссылка','Родитель.Представление','Использование','Имя','ВидСравнения','Значение','ЗначениеС','ЗначениеПо',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиДанныхДляРасчетовБюджетирования/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:392px;top:24px;width:185px;height:273px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:571px;height:291px;',
			height: 291,width: 571,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:259px;width:144px;height:24px;',
			width: 144,
			height: 24,
			items:
			[
				{
					text:'Конструктор',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:539px;height:24px;',
			width: 539,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
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
					text:'&Скопировать',
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
			id: 'Параметры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:539px;height:253px;',
			height: 253,width: 539,
			columns:
			[
				{
					text:'Имя параметра',
					width:'235',
					dataIndex:'ИмяПараметра',
					flex:1,
				},
				{
					text:'Значение параметра',
					width:'279',
					dataIndex:'ЗначениеПараметра',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования").data,
					fields: ['Ссылка','Родитель.Представление','ИмяПараметра','ЗначениеПараметра',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиДанныхДляРасчетовБюджетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяПараметра',
					},
					{
						name:'ЗначениеПараметра',
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
						var грид = Ext.getCmp('Параметры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлементаСобытия");
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
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:468px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 81,
			height: 19,
			style: 'position:absolute;left:512px;top:33px;width:81px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:601px;height:25px;',
			width: 601,
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