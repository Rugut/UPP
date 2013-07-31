Ext.require(['Данные.Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА'], function () 
{
	Ext.define('Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:392px;height:459px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение способа отражения расходов по амортизации НМА',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:434px;width:392px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:383px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 286,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:383px;width:286px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:407px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 286,
			height: 19,
			style: 'position:absolute;left:98px;top:407px;width:286px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 286,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:81px;width:286px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'НМА',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:218px;width:376px;height:160px;',
			height: 160,width: 376,
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
					width:'61',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Нематериальный актив',
					width:'266',
					dataIndex:'НематериальныйАктив',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'НематериальныйАктив',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать в:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:180px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособОтраженияРасходовБУ.Представление',
			width: 264,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:129px;width:264px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияРасходовБУ',
			text: 'Способ (бух. учет):',
			style: 'position:absolute;left:8px;top:129px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Способ отражения расходов по амортизации:',
			style: 'position:absolute;left:8px;top:108px;width:376px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Нематериальные активы и НИОКР',
			style: 'position:absolute;left:8px;top:178px;width:376px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:98px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособОтраженияРасходовНУ.Представление',
			width: 264,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:152px;width:264px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияРасходовНУ',
			text: 'Способ (налог. учет):',
			style: 'position:absolute;left:8px;top:152px;width:109px;height:19px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:392px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:194px;width:376px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
	]
	});
});