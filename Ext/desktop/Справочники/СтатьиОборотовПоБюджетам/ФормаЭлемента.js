Ext.require(['Данные.Справочники.СтатьиОборотовПоБюджетам'], function () 
{
	Ext.define('Справочники.СтатьиОборотовПоБюджетам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:495px;height:457px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Статьи оборотов по бюджетам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:495px;height:25px;',
			width: 495,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:84px;width:479px;height:316px;',
			height: 316,width: 479,
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по количеству',
			style: 'position:absolute;left:6px;top:106px;width:120px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по сумме',
			style: 'position:absolute;left:6px;top:155px;width:100px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ИсточникДанныхДляЦены.Представление',
			width: 319,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:152px;top:6px;width:319px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЕдиницаИзмерения.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:152px;top:126px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по контрагентам',
			style: 'position:absolute;left:6px;top:203px;width:136px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по номенклатуре',
			style: 'position:absolute;left:6px;top:251px;width:136px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОсновнаяВалюта.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:152px;top:175px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ОсновноеЦФО.Представление',
			width: 319,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:152px;top:54px;width:319px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ОсновнойПроект.Представление',
			width: 319,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:152px;top:78px;width:319px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ОсновнойКонтрагент.Представление',
			width: 319,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:152px;top:223px;width:319px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОсновнаяНоменклатура',
			width: 319,
			height: 19,
			style: 'position:absolute;left:152px;top:271px;width:319px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательИсточникаДанныхДляЦены',
			width: 319,
			height: 19,
			style: 'position:absolute;left:152px;top:30px;width:319px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ШаблоныПроводок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:465px;height:263px;',
			height: 263,width: 465,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет дебета',
					width:'100',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Счет кредита',
					width:'100',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'К-т для суммы',
					width:'96',
					dataIndex:'КоэффициентДляСуммы',
					flex:1,
				},
				{
					text:'К-т для количества',
					width:'103',
					dataIndex:'КоэффициентДляКоличества',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СтатьиОборотовПоБюджетам").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','СчетДт','СчетКт','КоэффициентДляСуммы','КоэффициентДляКоличества',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтатьиОборотовПоБюджетам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетДт',
					},
					{
						name:'СчетКт',
					},
					{
						name:'КоэффициентДляСуммы',
					},
					{
						name:'КоэффициентДляКоличества',
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
						var грид = Ext.getCmp('ШаблоныПроводок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:465px;height:27px;',
			width: 465,
			height: 27,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
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
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
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
			xtype: 'label',
			name: 'Надпись6',
			text: 'Единица измерения:',
			style: 'position:absolute;left:18px;top:127px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Источник для получения фактических данных:',
			style: 'position:absolute;left:9px;top:6px;width:240px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ИсточникДанныхДляФакта.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:251px;top:6px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Показатель источника для суммы:',
			style: 'position:absolute;left:9px;top:30px;width:240px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Показатель источника для количества:',
			style: 'position:absolute;left:9px;top:102px;width:240px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'СпособОпределенияВалютыОборотаФакт.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:251px;top:78px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СтатьиОборотовПоБюджетам.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Валюта фактических данных:',
			style: 'position:absolute;left:9px;top:78px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательИсточникаДанныхДляФактаСум',
			width: 220,
			height: 19,
			style: 'position:absolute;left:251px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательИсточникаДанныхДляФактаКол',
			width: 220,
			height: 19,
			style: 'position:absolute;left:251px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентДляФактаСум',
			style: 'position:absolute;left:251px;top:54px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Коэффициент пересчета для суммы:',
			style: 'position:absolute;left:6px;top:54px;width:240px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентДляФактаКол',
			style: 'position:absolute;left:251px;top:126px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Коэффициент пересчета для количества:',
			style: 'position:absolute;left:6px;top:126px;width:240px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:365px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:407px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода2',
			width: 232,
			height: 19,
			style: 'position:absolute;left:130px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:57px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 357,
			height: 19,
			style: 'position:absolute;left:130px;top:57px;width:357px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:405px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 357,
			height: 19,
			style: 'position:absolute;left:130px;top:405px;width:357px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:432px;width:495px;height:25px;',
			width: 495,
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