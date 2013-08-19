Ext.require(['Данные.Обработки.РасчетПлановойСебестоимости'], function () 
{
	Ext.define('Обработки.РасчетПлановойСебестоимости.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Расчет плановой себестоимости',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:627px;height:384px;',
			height: 384,width: 627,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата основной спецификации:',
			style: 'position:absolute;left:6px;top:24px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 110,
			height: 19,
			style: 'position:absolute;left:169px;top:24px;width:110px;height:19px;',
		},
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:114px;width:613px;height:244px;',
			height: 244,width: 613,
			columns:
			[
				{
					text:'',
					width:'22',
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
					width:'240',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетПлановойСебестоимости/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:90px;width:613px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:50px;width:613px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры',
			style: 'position:absolute;left:6px;top:6px;width:613px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:6px;top:74px;width:613px;height:16px;',
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			id: 'ТаблицаНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:609px;height:328px;',
			height: 328,width: 609,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'150',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'150',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'СпецификацияНоменклатуры',
					flex:1,
				},
				{
					text:'Вид номенклатуры',
					width:'110',
					dataIndex:'ВидНоменклатуры',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'130',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетПлановойСебестоимости/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СпецификацияНоменклатуры',
					},
					{
						name:'ВидНоменклатуры',
					},
					{
						name:'НоменклатурнаяГруппа',
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
						var грид = Ext.getCmp('ТаблицаНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:609px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Настройка расчета',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'МетодРасчета.Представление',
			width: 231,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:178px;top:30px;width:231px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить',
			style: 'position:absolute;left:6px;top:80px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить',
			style: 'position:absolute;left:6px;top:105px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить',
			style: 'position:absolute;left:6px;top:130px;width:172px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Процент',
			style: 'position:absolute;left:309px;top:80px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Сумма',
			style: 'position:absolute;left:309px;top:105px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОкруглитьДо.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:309px;top:130px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 90,
			height: 19,
			style: 'position:absolute;left:178px;top:55px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 90,
			height: 19,
			style: 'position:absolute;left:295px;top:55px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:390px;top:55px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:273px;top:55px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'fieldset',
			title: 'Общие настройки расчета себестоимости',
			style: 'position:absolute;left:6px;top:6px;width:613px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить "Метод расчета:"',
			style: 'position:absolute;left:6px;top:30px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить "За период с":',
			style: 'position:absolute;left:6px;top:55px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:178px;top:80px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:178px;top:105px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:178px;top:130px;width:131px;height:19px;',
		},
					]
				},
				{
					title:'Производственные расходы',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:25px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'МетодРасчетаМатериальные.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:136px;top:25px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:382px;top:25px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:382px;top:47px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:382px;top:69px;width:131px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентМатериальные',
			style: 'position:absolute;left:516px;top:25px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаМатериальные',
			style: 'position:absolute;left:516px;top:47px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОкруглитьДоМатериальные.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:516px;top:69px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачМатериальные',
			width: 80,
			height: 19,
			style: 'position:absolute;left:136px;top:47px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонМатериальные',
			width: 80,
			height: 19,
			style: 'position:absolute;left:236px;top:47px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМатериальныеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:47px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаМатериальные',
			text: '...',
			style: 'position:absolute;left:322px;top:47px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМатериальныеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:47px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'МетодОпределенияСтоимости.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:136px;top:69px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьМетодОпределенияСтоимости',
			text: 'Определение стоимости:',
			style: 'position:absolute;left:6px;top:69px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:382px;top:131px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:382px;top:153px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:382px;top:175px;width:131px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатаТруда',
			style: 'position:absolute;left:516px;top:131px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаОплатаТруда',
			style: 'position:absolute;left:516px;top:153px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОкруглитьДоОплатаТруда.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:516px;top:175px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:382px;top:213px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:382px;top:235px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:382px;top:257px;width:131px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентАмортизация',
			style: 'position:absolute;left:516px;top:213px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаАмортизация',
			style: 'position:absolute;left:516px;top:235px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОкруглитьДоАмортизация.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:516px;top:257px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:382px;top:295px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:382px;top:317px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:382px;top:339px;width:131px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПрочие',
			style: 'position:absolute;left:516px;top:295px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПрочие',
			style: 'position:absolute;left:516px;top:317px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОкруглитьДоПрочие.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:516px;top:339px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:131px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'МетодРасчетаОплатаТруда.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:136px;top:131px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачОплатаТруда',
			width: 80,
			height: 19,
			style: 'position:absolute;left:136px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонОплатаТруда',
			width: 80,
			height: 19,
			style: 'position:absolute;left:236px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплатаТрудаНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:153px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОплатаТруда',
			text: '...',
			style: 'position:absolute;left:322px;top:153px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплатаТрудаПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:153px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:213px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МетодРасчетаАмортизация',
			width: 205,
			height: 19,
			style: 'position:absolute;left:136px;top:213px;width:205px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачАмортизация',
			width: 80,
			height: 19,
			style: 'position:absolute;left:136px;top:235px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонАмортизация',
			width: 80,
			height: 19,
			style: 'position:absolute;left:236px;top:235px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАмортизацияНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:235px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаАмортизация',
			text: '...',
			style: 'position:absolute;left:322px;top:235px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАмортизацияПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:235px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:295px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МетодРасчетаПрочие',
			width: 205,
			height: 19,
			style: 'position:absolute;left:136px;top:295px;width:205px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачПрочие',
			width: 80,
			height: 19,
			style: 'position:absolute;left:136px;top:317px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонПрочие',
			width: 80,
			height: 19,
			style: 'position:absolute;left:236px;top:317px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрочиеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:317px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПрочие',
			text: '...',
			style: 'position:absolute;left:322px;top:317px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрочиеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:317px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ТипЦен.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:136px;top:91px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен номенклатуры:',
			style: 'position:absolute;left:6px;top:91px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Материальные',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Оплата труда',
			style: 'position:absolute;left:6px;top:112px;width:610px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Амортизация',
			style: 'position:absolute;left:6px;top:194px;width:610px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Прочие',
			style: 'position:absolute;left:6px;top:276px;width:610px;height:16px;',
		},
					]
				},
				{
					title:'Косвенные расходы',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:383px;top:26px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:383px;top:48px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:383px;top:70px;width:131px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОбщепроизводственные',
			style: 'position:absolute;left:517px;top:26px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаОбщепроизводственные',
			style: 'position:absolute;left:517px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОкруглитьДоОбщепроизводственные.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:517px;top:70px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:383px;top:109px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:383px;top:131px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:383px;top:153px;width:131px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОбщехозяйственные',
			style: 'position:absolute;left:517px;top:109px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаОбщехозяйственные',
			style: 'position:absolute;left:517px;top:131px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОкруглитьДоОбщехозяйственные.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:517px;top:153px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:383px;top:192px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на сумму:',
			style: 'position:absolute;left:383px;top:214px;width:131px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:383px;top:236px;width:131px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентБракВПроизводстве',
			style: 'position:absolute;left:517px;top:192px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаБракВПроизводстве',
			style: 'position:absolute;left:517px;top:214px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОкруглитьДоБракВПроизводстве.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:517px;top:236px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:26px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МетодРасчетаОбщепроизводственные',
			width: 204,
			height: 19,
			style: 'position:absolute;left:136px;top:26px;width:204px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачОбщепроизводственные',
			width: 80,
			height: 19,
			style: 'position:absolute;left:136px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонОбщепроизводственные',
			width: 80,
			height: 19,
			style: 'position:absolute;left:236px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбщепроизводственныеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:48px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбщепроизводственные',
			text: '...',
			style: 'position:absolute;left:321px;top:48px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбщепроизводственныеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:48px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:111px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МетодРасчетаОбщехозяйственные',
			width: 204,
			height: 19,
			style: 'position:absolute;left:136px;top:111px;width:204px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачОбщехозяйственные',
			width: 80,
			height: 19,
			style: 'position:absolute;left:136px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонОбщехозяйственные',
			width: 80,
			height: 19,
			style: 'position:absolute;left:236px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбщехозяйственныеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:133px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбщехозяйственные',
			text: '...',
			style: 'position:absolute;left:321px;top:133px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбщехозяйственныеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:133px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Метод расчета:',
			style: 'position:absolute;left:6px;top:192px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МетодРасчетаБракВПроизводстве',
			width: 204,
			height: 19,
			style: 'position:absolute;left:136px;top:192px;width:204px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачБракВПроизводстве',
			width: 80,
			height: 19,
			style: 'position:absolute;left:136px;top:214px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонБракВПроизводстве',
			width: 80,
			height: 19,
			style: 'position:absolute;left:236px;top:214px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБракВПроизводствеНаПериодС',
			text: 'За период с',
			style: 'position:absolute;left:6px;top:214px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаБракВПроизводстве',
			text: '...',
			style: 'position:absolute;left:321px;top:214px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБракВПроизводствеПо',
			text: 'по',
			style: 'position:absolute;left:216px;top:214px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'fieldset',
			title: 'Общепроизводственные',
			style: 'position:absolute;left:6px;top:6px;width:611px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Общехозяйственные',
			style: 'position:absolute;left:6px;top:89px;width:611px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Брак в производстве',
			style: 'position:absolute;left:6px;top:172px;width:611px;height:16px;',
		},
					]
				},
				{
					title:'Результат',
					items:
					[
		{
			id: 'ДеревоРезультат',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:611px;height:328px;',
			height: 328,width: 611,
			columns:
			[
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура / статья затрат',
					width:'205',
					dataIndex:'НоменклатураСтатьяЗатрат',
					flex:1,
				},
				{
					text:'Характеристика / характер затрат',
					width:'173',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Ед.',
					width:'57',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Вид затрат',
					width:'100',
					dataIndex:'ВидЗатрат',
					flex:1,
				},
				{
					text:'Затрата',
					width:'100',
					dataIndex:'Затрата',
					flex:1,
				},
				{
					text:'Сумма',
					width:'112',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'Валюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетПлановойСебестоимости/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'НоменклатураСтатьяЗатрат',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ВидЗатрат',
					},
					{
						name:'Затрата',
					},
					{
						name:'Сумма',
					},
					{
						name:'Валюта',
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
						var грид = Ext.getCmp('ДеревоРезультат');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетПлановойСебестоимости.ФормаОсновнаяСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:611px;height:24px;',
			items:
			[
				'-',
				{
					text:'Рассчитать',
				},
				'-',
				{
					text:'Изменить...',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Установить',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Установить плановую себестоимость',
			style: 'position:absolute;left:6px;top:13px;width:335px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить цены номенклатуры',
			style: 'position:absolute;left:6px;top:38px;width:335px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сформировать отчет',
			style: 'position:absolute;left:6px;top:63px;width:335px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Закрыть форму расчета плановой себестоимости',
			style: 'position:absolute;left:6px;top:89px;width:335px;height:19px;',
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
			style: 'position:absolute;left:0px;top:425px;width:643px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<Назад',
				},
				'-',
				{
					text:'Далее>',
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