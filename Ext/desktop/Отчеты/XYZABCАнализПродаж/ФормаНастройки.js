Ext.require(['Данные.Отчеты.XYZABCАнализПродаж'], function () 
{
	Ext.define('Отчеты.XYZABCАнализПродаж.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:522px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка XYZ/ABC-анализ продаж',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:506px;height:309px;',
			height: 309,width: 506,
			items:
			[
				{
					items:
					[
		{
			id: 'Показатели',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:164px;width:492px;height:119px;',
			height: 119,width: 492,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Представление',
					width:'339',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/XYZABCАнализПродаж/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						Ext.require(['Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:140px;width:492px;height:24px;',
			width: 492,
			height: 24,
			items:
			[
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
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
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
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:54px;width:207px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:218px;top:53px;width:163px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:148px;top:100px;width:350px;height:19px;',
			width: 350,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:148px;top:76px;width:350px;height:19px;',
			width: 350,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Анализируемый параметр:',
			style: 'position:absolute;left:6px;top:76px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Анализируемый объект:',
			style: 'position:absolute;left:6px;top:100px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:171px;top:30px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 80,
			height: 19,
			style: 'position:absolute;left:189px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Количество периодов:',
			style: 'position:absolute;left:6px;top:30px;width:115px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодовАнализа',
			style: 'position:absolute;left:121px;top:30px;width:48px;height:19px;',
			width: 48,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичность',
			text: 'Периодичность:',
			style: 'position:absolute;left:6px;top:6px;width:115px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Периодичность.Представление',
			width: 148,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:121px;top:6px;width:148px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.XYZABCАнализПродаж.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.XYZABCАнализПродаж.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.XYZABCАнализПродаж.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.XYZABCАнализПродаж.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Показатели',
			style: 'position:absolute;left:6px;top:124px;width:492px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'ИзмеренияСтроки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:113px;width:492px;height:170px;',
			height: 170,width: 492,
			columns:
			[
				{
					text:'Поле',
					width:'266',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'169',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/XYZABCАнализПродаж/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ИзмеренияСтроки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:89px;width:492px;height:24px;',
			width: 492,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'Группы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:492px;height:65px;',
			height: 65,width: 492,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Группировка',
					width:'100',
					dataIndex:'Группировка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/XYZABCАнализПродаж/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Группировка',
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
						var грид = Ext.getCmp('Группы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:492px;height:24px;',
			width: 492,
			height: 24,
			items:
			[
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
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
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:86px;width:492px;height:197px;',
			height: 197,width: 492,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'156',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'112',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'81',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'81',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'81',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/XYZABCАнализПродаж/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:62px;width:492px;height:24px;',
			width: 492,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'XYZ-класс:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборЗначениеКласс',
			width: 244,
			height: 19,
			style: 'position:absolute;left:254px;top:6px;width:244px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:88px;top:6px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'АВС-класс',
			style: 'position:absolute;left:6px;top:29px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборЗначениеКлассABC',
			width: 244,
			height: 19,
			style: 'position:absolute;left:254px;top:29px;width:244px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:88px;top:29px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'Порядок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:492px;height:253px;',
			height: 253,width: 492,
			columns:
			[
				{
					text:'Поле',
					width:'289',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'138',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/XYZABCАнализПродаж/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
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
						var грид = Ext.getCmp('Порядок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.XYZABCАнализПродаж.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:492px;height:24px;',
			width: 492,
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
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:154px;top:30px;width:17px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПараметрXКлассаНач',
			style: 'position:absolute;left:68px;top:30px;width:81px;height:19px;',
			width: 81,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Y-класс c: ',
			style: 'position:absolute;left:6px;top:55px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПараметрYКлассаНач',
			style: 'position:absolute;left:68px;top:55px;width:81px;height:19px;',
			width: 81,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Z-класс c:',
			style: 'position:absolute;left:6px;top:80px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПараметрZКлассаНач',
			style: 'position:absolute;left:68px;top:80px;width:81px;height:19px;',
			width: 81,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Критерии распределения XYZ',
			style: 'position:absolute;left:6px;top:6px;width:492px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'по:',
			style: 'position:absolute;left:154px;top:55px;width:17px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'по:',
			style: 'position:absolute;left:154px;top:80px;width:17px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПараметрXКлассаКон',
			style: 'position:absolute;left:176px;top:30px;width:81px;height:19px;',
			width: 81,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПараметрYКлассаКон',
			style: 'position:absolute;left:176px;top:55px;width:81px;height:19px;',
			width: 81,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПараметрZКлассаКон',
			style: 'position:absolute;left:176px;top:80px;width:81px;height:19px;',
			width: 81,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'X-класс c: ',
			style: 'position:absolute;left:6px;top:30px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'А-класс:',
			style: 'position:absolute;left:6px;top:144px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентAКласса',
			style: 'position:absolute;left:68px;top:144px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'B-класс:',
			style: 'position:absolute;left:6px;top:168px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентBКласса',
			style: 'position:absolute;left:68px;top:168px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'С-класс:',
			style: 'position:absolute;left:6px;top:192px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентCКласса',
			style: 'position:absolute;left:68px;top:192px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: '%',
			style: 'position:absolute;left:150px;top:168px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: '%',
			style: 'position:absolute;left:150px;top:144px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: '%',
			style: 'position:absolute;left:150px;top:192px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Критерии распределения ABC (процент от общей суммы параметров)',
			style: 'position:absolute;left:6px;top:119px;width:492px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			style: 'position:absolute;left:0px;top:325px;width:522px;height:25px;',
			width: 522,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});