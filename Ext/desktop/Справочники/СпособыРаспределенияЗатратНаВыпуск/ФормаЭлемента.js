Ext.require(['Данные.Справочники.СпособыРаспределенияЗатратНаВыпуск'], function () 
{
	Ext.define('Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:463px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы распределения затрат',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:505px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 65,
			height: 19,
			style: 'position:absolute;left:547px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 326,
			height: 19,
			style: 'position:absolute;left:177px;top:33px;width:326px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 522,
			height: 19,
			style: 'position:absolute;left:90px;top:412px;width:522px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:184px;width:604px;height:222px;',
			height: 222,width: 604,
			items:
			[
				{
					title:'База распределения',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьБазаРаспределенияЗатрат',
			text: 'База распределения:',
			style: 'position:absolute;left:6px;top:6px;width:126px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'БазаРаспределенияЗатрат.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:132px;top:6px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательБазыРаспределения',
			text: 'Показатель базы распределения:',
			style: 'position:absolute;left:6px;top:25px;width:126px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ПоказательБазыРаспределения.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:132px;top:30px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:324px;top:30px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ТипЦен.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:416px;top:30px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОсновноеСырье',
			text: 'Основное сырье:',
			style: 'position:absolute;left:324px;top:6px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ОсновноеСырье.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:416px;top:6px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатратПоПодразделениям',
			text: 'Способ распределения по подразделениям:',
			style: 'position:absolute;left:6px;top:169px;width:126px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СпособРаспределенияЗатратПоПодразделениям.Представление',
			width: 464,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:132px;top:173px;width:464px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на собственную продукцию',
			style: 'position:absolute;left:6px;top:54px;width:306px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на продукцию стороннего переработчика',
			style: 'position:absolute;left:6px;top:78px;width:306px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на продукцию из давальческого сырья',
			style: 'position:absolute;left:6px;top:102px;width:306px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на подчиненные подразделения',
			style: 'position:absolute;left:6px;top:150px;width:306px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Процент',
			style: 'position:absolute;left:482px;top:54px;width:114px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Коэффициент',
			style: 'position:absolute;left:482px;top:78px;width:114px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПорядокОкругления.Представление',
			width: 114,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:482px;top:102px;width:114px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:324px;top:54px;width:158px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на коэффициент:',
			style: 'position:absolute;left:324px;top:78px;width:158px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:324px;top:102px;width:158px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на наработку',
			style: 'position:absolute;left:6px;top:126px;width:306px;height:15px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипФильтраПриРаспределенииЗатратНаВыпуск',
			text: 'Тип фильтра:',
			style: 'position:absolute;left:6px;top:6px;width:156px;height:19px;text-align:left;',
		},
		{
			id: 'ТабличноеПоле1',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:590px;height:163px;',
			height: 163,width: 590,
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
					width:'189',
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
					width:'200',
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
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпособыРаспределенияЗатратНаВыпуск").data,
					fields: ['Использование','Имя','ВидСравнения','Значение','ЗначениеС','ЗначениеПо',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыРаспределенияЗатратНаВыпуск/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПоле1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Фильтры',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ТипФильтраПриРаспределенииЗатратНаВыпуск.Представление',
			width: 278,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:168px;top:6px;width:278px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'Фильтры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:66px;width:590px;height:128px;',
			height: 128,width: 590,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'284',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Продукция',
					width:'257',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'77',
					dataIndex:'Коэффициент',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпособыРаспределенияЗатратНаВыпуск").data,
					fields: ['НомерСтроки','НоменклатурнаяГруппа','Продукция','Коэффициент',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыРаспределенияЗатратНаВыпуск/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Продукция',
					},
					{
						name:'Коэффициент',
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
						var грид = Ext.getCmp('Фильтры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Фильтры',
			style: 'position:absolute;left:6px;top:26px;width:590px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКогдаПрименять',
			text: 'Область, условия применения:',
			style: 'position:absolute;left:8px;top:58px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'КогдаПрименять',
			style: 'position:absolute;left:177px;top:58px;width:435px;height:70px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрименимость',
			text: 'Для каких расходов применять:',
			style: 'position:absolute;left:8px;top:133px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:177px;top:133px;width:435px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаправлениеРаспределения',
			text: 'Куда распределять:',
			style: 'position:absolute;left:8px;top:158px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'НаправлениеРаспределения.Представление',
			width: 135,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:177px;top:158px;width:135px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:438px;width:620px;height:25px;',
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