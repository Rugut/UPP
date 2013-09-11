Ext.require(['Данные.Документы.ЗаписьКУДиР'], function () 
{
	Ext.define('Документы.ЗаписьКУДиР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Запись книги учета доходов и расходов УСН (ручной учет)',
	
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
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаписьКУДиР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаписьКУДиР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаписьКУДиР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаписьКУДиР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			width: 736,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'Дт/кт',
					tooltip:'Проводки НУ',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:368px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 634,
			height: 19,
			style: 'position:absolute;left:94px;top:368px;width:634px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:86px;width:720px;height:253px;',
			height: 253,width: 720,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:698px;height:24px;',
			width: 698,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'Строки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:698px;height:197px;',
			height: 197,width: 698,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата и № первичного документа',
					width:'60',
					dataIndex:'ДатаНомер',
					flex:1,
				},
				{
					text:'Содержание',
					width:'120',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Доходы всего',
					width:'80',
					dataIndex:'Графа4',
					flex:1,
				},
				{
					text:'Доходы, учитываемые при расчете ЕН ',
					width:'80',
					dataIndex:'Графа5',
					flex:1,
				},
				{
					text:'Расходы всего',
					width:'80',
					dataIndex:'Графа6',
					flex:1,
				},
				{
					text:'Расходы, учитываемые при расчете ЕН',
					width:'128',
					dataIndex:'Графа7',
					flex:1,
				},
				{
					text:'НДС',
					width:'128',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Доходы по деятельности ЕНВД',
					width:'120',
					dataIndex:'ДоходыЕНВД',
					flex:1,
				},
				{
					text:'Расходы, подлежат распределению по видам деятельности',
					width:'120',
					dataIndex:'РасходыЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаписьКУДиР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаНомер',
					},
					{
						name:'Содержание',
					},
					{
						name:'Графа4',
					},
					{
						name:'Графа5',
					},
					{
						name:'Графа6',
					},
					{
						name:'Графа7',
					},
					{
						name:'НДС',
					},
					{
						name:'ДоходыЕНВД',
					},
					{
						name:'РасходыЕНВД',
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
						var грид = Ext.getCmp('Строки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗаписьКУДиР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаписьКУДиР.ФормаДокументаСобытия");
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
			id: 'ОС',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:706px;height:197px;',
			height: 197,width: 706,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'120',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
					dataIndex:'Графа5_ПервоначальнаяСтоимость',
					flex:1,
				},
				{
					text:'Дата подачи док. на гос. регистрацию',
					width:'100',
					dataIndex:'Графа4_ГосударственнаяРегистрация',
					flex:1,
				},
				{
					text:'Остаточная стоимость',
					width:'80',
					dataIndex:'Графа6_ОстаточнаяСтоимость',
					flex:1,
				},
				{
					text:'Количество кварталов в отчет. периоде',
					width:'80',
					dataIndex:'Графа8_КолКварталовВОтчетномПериоде',
					flex:1,
				},
				{
					text:'Количество кварталов в нал. периоде',
					width:'80',
					dataIndex:'Графа9_КолКварталовВНалПериоде',
					flex:1,
				},
				{
					text:'Доля расходов за нал. период (%)',
					width:'79',
					dataIndex:'Графа10_ДоляРасходовЗаНалПериод',
					flex:1,
				},
				{
					text:'Доля расходов за квартал (%)',
					width:'80',
					dataIndex:'Графа11_ДоляРасходовЗаКвартал',
					flex:1,
				},
				{
					text:'Сумма расходов за отчетн. период',
					width:'80',
					dataIndex:'Графа12_СуммаРасходовЗаОтчетнПериод',
					flex:1,
				},
				{
					text:'Сумма расходов за квартал',
					width:'80',
					dataIndex:'Графа13_СуммаРасходовЗаКвартал',
					flex:1,
				},
				{
					text:'Расходы предыдущих периодов',
					width:'80',
					dataIndex:'Графа14_РасходыПрошлыхПериодов',
					flex:1,
				},
				{
					text:'Остаток расходов',
					width:'80',
					dataIndex:'Графа15_ОстатокРасходов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаписьКУДиР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'Графа5_ПервоначальнаяСтоимость',
					},
					{
						name:'Графа4_ГосударственнаяРегистрация',
					},
					{
						name:'Графа6_ОстаточнаяСтоимость',
					},
					{
						name:'Графа8_КолКварталовВОтчетномПериоде',
					},
					{
						name:'Графа9_КолКварталовВНалПериоде',
					},
					{
						name:'Графа10_ДоляРасходовЗаНалПериод',
					},
					{
						name:'Графа11_ДоляРасходовЗаКвартал',
					},
					{
						name:'Графа12_СуммаРасходовЗаОтчетнПериод',
					},
					{
						name:'Графа13_СуммаРасходовЗаКвартал',
					},
					{
						name:'Графа14_РасходыПрошлыхПериодов',
					},
					{
						name:'Графа15_ОстатокРасходов',
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
						var грид = Ext.getCmp('ОС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗаписьКУДиР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаписьКУДиР.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:706px;height:24px;',
			width: 706,
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
			id: 'НМА',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:706px;height:197px;',
			height: 197,width: 706,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Нематериальный актив',
					width:'120',
					dataIndex:'НематериальныйАктив',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
					dataIndex:'Графа5_ПервоначальнаяСтоимость',
					flex:1,
				},
				{
					text:'Остаточная стоимость',
					width:'80',
					dataIndex:'Графа6_ОстаточнаяСтоимость',
					flex:1,
				},
				{
					text:'Количество кварталов в отчет. периоде',
					width:'80',
					dataIndex:'Графа8_КолКварталовВОтчетномПериоде',
					flex:1,
				},
				{
					text:'Количество кварталов в нал. периоде',
					width:'80',
					dataIndex:'Графа9_КолКварталовВНалПериоде',
					flex:1,
				},
				{
					text:'Доля расходов за нал. период (%)',
					width:'80',
					dataIndex:'Графа10_ДоляРасходовЗаНалПериод',
					flex:1,
				},
				{
					text:'Доля расходов за квартал (%)',
					width:'80',
					dataIndex:'Графа11_ДоляРасходовЗаКвартал',
					flex:1,
				},
				{
					text:'Сумма расходов за отчетн. период',
					width:'80',
					dataIndex:'Графа12_СуммаРасходовЗаОтчетнПериод',
					flex:1,
				},
				{
					text:'Сумма расходов за квартал',
					width:'80',
					dataIndex:'Графа13_СуммаРасходовЗаКвартал',
					flex:1,
				},
				{
					text:'Расходы предыдущих периодов',
					width:'80',
					dataIndex:'Графа14_РасходыПрошлыхПериодов',
					flex:1,
				},
				{
					text:'Остаток расходов',
					width:'80',
					dataIndex:'Графа15_ОстатокРасходов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаписьКУДиР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НематериальныйАктив',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'Графа5_ПервоначальнаяСтоимость',
					},
					{
						name:'Графа6_ОстаточнаяСтоимость',
					},
					{
						name:'Графа8_КолКварталовВОтчетномПериоде',
					},
					{
						name:'Графа9_КолКварталовВНалПериоде',
					},
					{
						name:'Графа10_ДоляРасходовЗаНалПериод',
					},
					{
						name:'Графа11_ДоляРасходовЗаКвартал',
					},
					{
						name:'Графа12_СуммаРасходовЗаОтчетнПериод',
					},
					{
						name:'Графа13_СуммаРасходовЗаКвартал',
					},
					{
						name:'Графа14_РасходыПрошлыхПериодов',
					},
					{
						name:'Графа15_ОстатокРасходов',
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
						var грид = Ext.getCmp('НМА');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗаписьКУДиР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаписьКУДиР.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:706px;height:24px;',
			width: 706,
			height: 24,
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:344px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 634,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:344px;width:634px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаписьКУДиР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаписьКУДиР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаписьКУДиР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаписьКУДиР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:736px;height:25px;',
			width: 736,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
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