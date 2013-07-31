Ext.require(['Данные.Отчеты.ДиаграммаХозрасчетный'], function () 
{
	Ext.define('Отчеты.ДиаграммаХозрасчетный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка Диаграммы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:251px;',
			height: 251,width: 384,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:32px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:88px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:172px;top:32px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:192px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:32px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:58px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 288,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:88px;top:58px;width:288px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ДиаграммаХозрасчетный.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ДиаграммаХозрасчетный.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ДиаграммаХозрасчетный.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ДиаграммаХозрасчетный.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Счет.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:88px;top:6px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ДиаграммаХозрасчетный.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ДиаграммаХозрасчетный.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ДиаграммаХозрасчетный.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ДиаграммаХозрасчетный.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:6px;top:82px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:88px;top:82px;width:120px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Остаток на начало',
			style: 'position:absolute;left:6px;top:162px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Остаток на конец',
			style: 'position:absolute;left:6px;top:186px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оборот',
			style: 'position:absolute;left:6px;top:210px;width:114px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:134px;top:162px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:134px;top:186px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Дебет - Кредит',
			style: 'position:absolute;left:134px;top:210px;width:114px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Сумма',
			style: 'position:absolute;left:262px;top:162px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Количество',
			style: 'position:absolute;left:262px;top:186px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Валютная сумма',
			style: 'position:absolute;left:262px;top:210px;width:114px;height:15px;',
		},
			]
		},
					]
				},
				{
					title:'Серии и точки',
					items:
					[
		{
			id: 'Серии',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:182px;height:148px;',
			height: 148,width: 182,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'40',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДиаграммаХозрасчетный/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Серии');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДиаграммаХозрасчетный.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДиаграммаХозрасчетный.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'Точки',
			xtype: 'grid',
			style: 'position:absolute;left:194px;top:52px;width:182px;height:148px;',
			height: 148,width: 182,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'40',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДиаграммаХозрасчетный/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Точки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДиаграммаХозрасчетный.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДиаграммаХозрасчетный.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:104px;top:205px;width:176px;height:20px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксЗначСерий',
			style: 'position:absolute;left:284px;top:205px;width:92px;height:20px;',
		},
					]
				},
				{
					title:'Диаграмма',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Серии',
			style: 'position:absolute;left:6px;top:6px;width:182px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Вид подписей:',
			style: 'position:absolute;left:6px;top:32px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:112px;top:32px;width:264px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипДиаграммы',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:6px;top:6px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:12px;top:126px;width:140px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать заголовок',
			style: 'position:absolute;left:12px;top:147px;width:140px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать легенду',
			style: 'position:absolute;left:12px;top:168px;width:140px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Раздвижение:',
			style: 'position:absolute;left:6px;top:56px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:112px;top:56px;width:264px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:184px;width:150px;height:28px;',
			height: 28,width: 150,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Плоская',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Градиент',
			style: 'position:absolute;left:6px;top:6px;width:138px;height:15px;',
		},
					]
				},
				{
					title:'Объемная',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:6px;top:6px;width:136px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:112px;top:6px;width:264px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:370px;height:195px;',
			height: 195,width: 370,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДиаграммаХозрасчетный/ВыбратьПоСсылке/100', timeout: 200},
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДиаграммаХозрасчетный.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДиаграммаХозрасчетный.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Точки',
			style: 'position:absolute;left:194px;top:6px;width:182px;height:18px;',
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
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});