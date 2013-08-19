Ext.require(['Данные.Обработки.ОбменДаннымиСЮнискан'], function () 
{
	Ext.define('Обработки.ОбменДаннымиСЮнискан.РегистрацияНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регистрация номенклатуры в ЮНИСКАН/GS1 Russia',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НоменклатураДляРегистрации.Представление',
			width: 539,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:8px;width:539px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ОбменДаннымиСЮнискан.РегистрацияНоменклатурыСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ОбменДаннымиСЮнискан.РегистрацияНоменклатурыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ОбменДаннымиСЮнискан.РегистрацияНоменклатурыСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ОбменДаннымиСЮнискан.РегистрацияНоменклатурыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:240px;top:32px;width:392px;height:415px;',
			height: 415,width: 392,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Параметры рег',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Описание товара',
			style: 'position:absolute;left:0px;top:0px;width:392px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТорговаяМарка',
			text: 'Торговая марка:',
			style: 'position:absolute;left:0px;top:20px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаТорговаяМарка',
			width: 252,
			height: 19,
			style: 'position:absolute;left:140px;top:20px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтличительныеСвойстваТовара',
			text: 'Наименование товара:',
			style: 'position:absolute;left:0px;top:44px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаОтличительныеСвойстваТовара',
			width: 252,
			height: 19,
			style: 'position:absolute;left:140px;top:44px;width:252px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Потребительская упаковка',
			style: 'position:absolute;left:0px;top:68px;width:392px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУникальныйНомерТовара',
			text: 'Номер продукта:',
			style: 'position:absolute;left:0px;top:88px;width:134px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаУникальныйНомерТовара',
			style: 'position:absolute;left:140px;top:87px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипУпаковки',
			text: 'Тип упаковки:',
			style: 'position:absolute;left:0px;top:111px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаТипУпаковки',
			width: 252,
			height: 19,
			style: 'position:absolute;left:140px;top:111px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоВсе',
			text: 'Количество/Вес:',
			style: 'position:absolute;left:212px;top:159px;width:86px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаКоличествоВес',
			style: 'position:absolute;left:300px;top:159px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица измерения:',
			style: 'position:absolute;left:0px;top:159px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаЕдиницаИзмерения',
			width: 68,
			height: 19,
			style: 'position:absolute;left:140px;top:159px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтличительныеСвойства',
			text: 'Отличительные свойства:',
			style: 'position:absolute;left:0px;top:135px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаОтличительныеСвойства',
			width: 252,
			height: 19,
			style: 'position:absolute;left:140px;top:135px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиничнаяУпаковка',
			text: 'Ед. упаковка:',
			style: 'position:absolute;left:212px;top:183px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаЕдиничнаяУпаковка',
			width: 92,
			height: 19,
			style: 'position:absolute;left:300px;top:183px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКОДЕАН13',
			text: 'Код EAH-13:',
			style: 'position:absolute;left:212px;top:88px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКодЕАН13',
			width: 92,
			height: 19,
			style: 'position:absolute;left:300px;top:88px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатРегистрации',
			text: 'Результат регистрации:',
			style: 'position:absolute;left:0px;top:207px;width:134px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаРезультатРегистрации',
			style: 'position:absolute;left:140px;top:207px;width:252px;height:41px;',
		},
		{
			id: 'ТаблицаТранспортныхУпаковокРегистрации',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:276px;width:392px;height:139px;',
			height: 139,width: 392,
			columns:
			[
				{
					text:'Номер упаковки',
					width:'34',
					dataIndex:'КодТранспортнойУпаковки',
					flex:1,
				},
				{
					text:'Наименование',
					width:'155',
					dataIndex:'НаименованиеТранспортнойУпаковки',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'39',
					dataIndex:'КоэффициентТранспортнойУпаковки',
					flex:1,
				},
				{
					text:'Код EAH-14',
					width:'111',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Результат регистрации',
					width:'124',
					dataIndex:'РезультатРегистрации',
					flex:1,
				},
				{
					text:'КодРегистрации',
					width:'76',
					dataIndex:'КодРегистрации',
					flex:1,
				},
				{
					text:'УникальныйНомер',
					width:'135',
					dataIndex:'УникальныйНомер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбменДаннымиСЮнискан/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КодТранспортнойУпаковки',
					},
					{
						name:'НаименованиеТранспортнойУпаковки',
					},
					{
						name:'КоэффициентТранспортнойУпаковки',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'РезультатРегистрации',
					},
					{
						name:'КодРегистрации',
					},
					{
						name:'УникальныйНомер',
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
						var грид = Ext.getCmp('ТаблицаТранспортныхУпаковокРегистрации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбменДаннымиСЮнискан.РегистрацияНоменклатурыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбменДаннымиСЮнискан.РегистрацияНоменклатурыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОКП',
			text: 'ОКП:',
			style: 'position:absolute;left:0px;top:183px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаОКП',
			width: 68,
			height: 19,
			style: 'position:absolute;left:140px;top:183px;width:68px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Транспортные упаковки',
			style: 'position:absolute;left:0px;top:257px;width:392px;height:16px;',
		},
					]
				},
			]
		},
		{
			id: 'ТаблицаДляРегистрации',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:60px;width:224px;height:387px;',
			height: 387,width: 224,
			columns:
			[
				{
					text:'УникальныйНомер',
					width:'135',
					dataIndex:'УникальныйНомер',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'ФлагВыбора',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'206',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'119',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Код EAH-13',
					width:'102',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'УникальныйНомерТовара',
					width:'79',
					dataIndex:'УникальныйНомерТовара',
					flex:1,
				},
				{
					text:'ТипУпаковки',
					width:'98',
					dataIndex:'ТипУпаковки',
					flex:1,
				},
				{
					text:'КоличествоВес',
					width:'100',
					dataIndex:'КоличествоВес',
					flex:1,
				},
				{
					text:'МеждународнаяЕдиницаИзмерения',
					width:'100',
					dataIndex:'МеждународнаяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'ОтличительныеСвойстваТовара',
					width:'100',
					dataIndex:'ОтличительныеСвойстваТовара',
					flex:1,
				},
				{
					text:'ДополнительныеСвойстваТовара',
					width:'100',
					dataIndex:'ДополнительныеСвойстваТовара',
					flex:1,
				},
				{
					text:'ЕдиничнаяУпаковка',
					width:'100',
					dataIndex:'ЕдиничнаяУпаковка',
					flex:1,
				},
				{
					text:'РезультатРегистрации',
					width:'100',
					dataIndex:'РезультатРегистрации',
					flex:1,
				},
				{
					text:'КодРегистрации',
					width:'100',
					dataIndex:'КодРегистрации',
					flex:1,
				},
				{
					text:'КодТранспортнойУпаковки',
					width:'100',
					dataIndex:'КодТранспортнойУпаковки',
					flex:1,
				},
				{
					text:'НаименованиеТранспортнойУпаковки',
					width:'100',
					dataIndex:'НаименованиеТранспортнойУпаковки',
					flex:1,
				},
				{
					text:'КоэффициентТранспортнойУпаковки',
					width:'100',
					dataIndex:'КоэффициентТранспортнойУпаковки',
					flex:1,
				},
				{
					text:'ОКП',
					width:'100',
					dataIndex:'ОКП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбменДаннымиСЮнискан/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'УникальныйНомер',
					},
					{
						name:'ФлагВыбора',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Характеристика',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'УникальныйНомерТовара',
					},
					{
						name:'ТипУпаковки',
					},
					{
						name:'КоличествоВес',
					},
					{
						name:'МеждународнаяЕдиницаИзмерения',
					},
					{
						name:'ОтличительныеСвойстваТовара',
					},
					{
						name:'ДополнительныеСвойстваТовара',
					},
					{
						name:'ЕдиничнаяУпаковка',
					},
					{
						name:'РезультатРегистрации',
					},
					{
						name:'КодРегистрации',
					},
					{
						name:'КодТранспортнойУпаковки',
					},
					{
						name:'НаименованиеТранспортнойУпаковки',
					},
					{
						name:'КоэффициентТранспортнойУпаковки',
					},
					{
						name:'ОКП',
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
						var грид = Ext.getCmp('ТаблицаДляРегистрации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбменДаннымиСЮнискан.РегистрацияНоменклатурыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбменДаннымиСЮнискан.РегистрацияНоменклатурыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:32px;width:224px;height:24px;',
			items:
			[
				{
					text:'Отметить все позиции для регистрации',
				},
				{
					text:'Отменить выделение всех позиций для регистрации',
				},
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:8px;width:80px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:640px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Зарегистрировать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
	]
	});
});