Ext.require(['Данные.Документы.УдалитьКорректировочныйСчетФактураВыданный'], function () 
{
	Ext.define('Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:551px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Корректировочный счет-фактура выданный',
	
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
			style: 'position:absolute;left:8px;top:32px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:214px;top:32px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:500px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 100,
			height: 19,
			style: 'position:absolute;left:112px;top:32px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 653,
			height: 19,
			style: 'position:absolute;left:120px;top:500px;width:653px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:476px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 653,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:476px;width:653px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
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
			name: 'Дата',
			width: 136,
			height: 19,
			style: 'position:absolute;left:234px;top:32px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:\r\n',
			style: 'position:absolute;left:8px;top:80px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:\r\n',
			style: 'position:absolute;left:430px;top:80px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 258,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:112px;top:56px;width:258px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент.Представление',
			width: 258,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:112px;top:80px;width:258px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 253,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:520px;top:80px;width:253px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетФактура.Представление',
			width: 661,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:112px;top:104px;width:661px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:133px;width:765px;height:312px;',
			height: 312,width: 765,
			items:
			[
				{
					items:
					[
		{
			id: 'ТоварыИУслуги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:751px;height:256px;',
			height: 256,width: 751,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'180',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Наименование
номенклатуры',
					width:'100',
					dataIndex:'НаименованиеНоменклатуры',
					flex:1,
				},
				{
					text:'Единица',
					width:'60',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Количество 
до изменения',
					width:'100',
					dataIndex:'КоличествоДоИзменения',
					flex:1,
				},
				{
					text:'Количество
после изменения',
					width:'100',
					dataIndex:'КоличествоПослеИзменения',
					flex:1,
				},
				{
					text:'Цена
до изменения',
					width:'100',
					dataIndex:'ЦенаДоИзменения',
					flex:1,
				},
				{
					text:'Цена
после изменения',
					width:'100',
					dataIndex:'ЦенаПослеИзменения',
					flex:1,
				},
				{
					text:'Стоимость без НДС
до изменения',
					width:'120',
					dataIndex:'СтоимостьБезНДСДоИзменения',
					flex:1,
				},
				{
					text:'Стоимость без НДС
после изменения',
					width:'100',
					dataIndex:'СтоимостьБезНДСПослеИзменения',
					flex:1,
				},
				{
					text:'Разница без НДС
к уменьшению',
					width:'100',
					dataIndex:'РазницаБезНДСКУменьшению',
					flex:1,
				},
				{
					text:'Разница без НДС
к доплате',
					width:'100',
					dataIndex:'РазницаБезНДСКДоплате',
					flex:1,
				},
				{
					text:'Ставка НДС',
					width:'60',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС
до изменения',
					width:'100',
					dataIndex:'СуммаНДСДоИзменения',
					flex:1,
				},
				{
					text:'Сумма НДС
после изменения',
					width:'100',
					dataIndex:'СуммаНДСПослеИзменения',
					flex:1,
				},
				{
					text:'Разница НДС
к уменьшению',
					width:'100',
					dataIndex:'РазницаНДСКУменьшению',
					flex:1,
				},
				{
					text:'Разница НДС
к доплате',
					width:'100',
					dataIndex:'РазницаНДСКДоплате',
					flex:1,
				},
				{
					text:'Стоимость с НДС
до изменения',
					width:'100',
					dataIndex:'СтоимостьСНДСДоИзменения',
					flex:1,
				},
				{
					text:'Стоимость с НДС
после изменения',
					width:'100',
					dataIndex:'СтоимостьСНДСПослеИзменения',
					flex:1,
				},
				{
					text:'Разница с НДС
к уменьшению',
					width:'100',
					dataIndex:'РазницаСНДСКУменьшению',
					flex:1,
				},
				{
					text:'Разница с НДС
к доплате',
					width:'100',
					dataIndex:'РазницаСНДСКДоплате',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'120',
					dataIndex:'ВидЦенности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УдалитьКорректировочныйСчетФактураВыданный/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'НаименованиеНоменклатуры',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'КоличествоДоИзменения',
					},
					{
						name:'КоличествоПослеИзменения',
					},
					{
						name:'ЦенаДоИзменения',
					},
					{
						name:'ЦенаПослеИзменения',
					},
					{
						name:'СтоимостьБезНДСДоИзменения',
					},
					{
						name:'СтоимостьБезНДСПослеИзменения',
					},
					{
						name:'РазницаБезНДСКУменьшению',
					},
					{
						name:'РазницаБезНДСКДоплате',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДСДоИзменения',
					},
					{
						name:'СуммаНДСПослеИзменения',
					},
					{
						name:'РазницаНДСКУменьшению',
					},
					{
						name:'РазницаНДСКДоплате',
					},
					{
						name:'СтоимостьСНДСДоИзменения',
					},
					{
						name:'СтоимостьСНДСПослеИзменения',
					},
					{
						name:'РазницаСНДСКУменьшению',
					},
					{
						name:'РазницаСНДСКДоплате',
					},
					{
						name:'ВидЦенности',
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
						var грид = Ext.getCmp('ТоварыИУслуги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:751px;height:24px;',
			width: 751,
			height: 24,
			items:
			[
				{
					text:'Заполнить по счету-фактуре',
					tooltip:'Заполнить по счету-фактуре',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФИОГлавногоБухгалтера',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:407px;top:186px;width:110px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПродавца',
			text: 'Наименование продавца:',
			style: 'position:absolute;left:6px;top:6px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПродавца',
			width: 607,
			height: 19,
			style: 'position:absolute;left:150px;top:6px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПродавца',
			text: 'Адрес продавца:',
			style: 'position:absolute;left:6px;top:30px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПродавца',
			width: 607,
			height: 19,
			style: 'position:absolute;left:150px;top:30px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННПродавца',
			text: 'ИНН / КПП продавца:',
			style: 'position:absolute;left:6px;top:54px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИННПродавца',
			width: 120,
			height: 19,
			style: 'position:absolute;left:150px;top:54px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПППродавца',
			text: '/',
			style: 'position:absolute;left:270px;top:54px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПППродавца',
			width: 100,
			height: 19,
			style: 'position:absolute;left:290px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПокупателя',
			text: 'Наименование покупателя:',
			style: 'position:absolute;left:6px;top:82px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПокупателя',
			width: 607,
			height: 19,
			style: 'position:absolute;left:150px;top:82px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПокупателя',
			text: 'Адрес покупателя:',
			style: 'position:absolute;left:6px;top:106px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПокупателя',
			width: 607,
			height: 19,
			style: 'position:absolute;left:150px;top:106px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННПокупателя',
			text: 'ИНН / КПП покупателя:',
			style: 'position:absolute;left:6px;top:130px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИННПокупателя',
			width: 120,
			height: 19,
			style: 'position:absolute;left:150px;top:130px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПППокупателя',
			text: '/',
			style: 'position:absolute;left:270px;top:130px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПППокупателя',
			width: 100,
			height: 19,
			style: 'position:absolute;left:290px;top:130px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИОРуководителя',
			text: 'Руководитель:',
			style: 'position:absolute;left:6px;top:186px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОРуководителя',
			width: 240,
			height: 19,
			style: 'position:absolute;left:150px;top:186px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОГлавногоБухгалтера',
			width: 240,
			height: 19,
			style: 'position:absolute;left:517px;top:186px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвидетельствоИП',
			text: 'Свидетельство ИП:',
			style: 'position:absolute;left:6px;top:210px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СвидетельствоИП',
			width: 607,
			height: 19,
			style: 'position:absolute;left:150px;top:210px;width:607px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ВалютаДокумента.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:150px;top:158px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:158px;width:144px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:104px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить вычет НДС',
			style: 'position:absolute;left:8px;top:452px;width:212px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:526px;width:780px;height:25px;',
			width: 780,
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
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
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