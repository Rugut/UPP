Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:606px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:638px;height:44px;',
			height: 44,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:36px;',
			height: 36,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:77px;width:638px;height:39px;',
			height: 39,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтвет',
			text: 'Ответ:',
			style: 'position:absolute;left:0px;top:10px;width:77px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:5px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:31px;width:638px;height:5px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:119px;width:638px;height:454px;',
			height: 454,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидУслуги',
			text: 'Вид услуги:',
			style: 'position:absolute;left:0px;top:92px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидУслуги.Представление',
			width: 539,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:99px;top:92px;width:539px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:0px;top:2px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:187px;top:2px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 88,
			height: 19,
			style: 'position:absolute;left:99px;top:2px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 130,
			height: 19,
			style: 'position:absolute;left:210px;top:2px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:29px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 539,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:99px;top:29px;width:539px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:83px;width:638px;height:3px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:140px;width:638px;height:314px;',
			height: 314,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФорматОтвета',
			text: 'Формат ответа:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ФорматОтвета.Представление',
			width: 539,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:99px;top:0px;width:539px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период запроса:',
			style: 'position:absolute;left:0px;top:26px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачПериода',
			width: 88,
			height: 19,
			style: 'position:absolute;left:99px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: '-',
			style: 'position:absolute;left:190px;top:26px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонПериода',
			width: 88,
			height: 19,
			style: 'position:absolute;left:210px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:311px;top:26px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Налоги',
			style: 'position:absolute;left:0px;top:50px;width:638px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:67px;width:638px;height:20px;',
			height: 20,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Уточните налоги (комбинации КБК и кодов ОКАТО), в разрезе которых Вы хотели бы получить отчет от налогового органа.',
			style: 'position:absolute;left:0px;top:2px;width:638px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:17px;width:638px;height:3px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:86px;width:638px;height:228px;',
			height: 228,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			id: 'ЗапрашиваемыеНалоги',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:638px;height:204px;',
			height: 204,width: 638,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'КБК',
					width:'243',
					dataIndex:'КБК',
					flex:1,
				},
				{
					text:'ОКАТО',
					width:'131',
					dataIndex:'ОКАТО',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'КБК',
					},
					{
						name:'ОКАТО',
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
						var грид = Ext.getCmp('ЗапрашиваемыеНалоги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:115px;width:638px;height:23px;',
			height: 23,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'группировать по видам платежей',
			style: 'position:absolute;left:99px;top:3px;width:195px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыбиратьТолько',
			text: 'Фильтр по виду:',
			style: 'position:absolute;left:0px;top:1px;width:96px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'первичные',
			style: 'position:absolute;left:99px;top:1px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'корректирующие',
			style: 'position:absolute;left:190px;top:1px;width:111px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'все',
			style: 'position:absolute;left:314px;top:1px;width:40px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Получатель:',
			style: 'position:absolute;left:0px;top:55px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'РегистрацияВИФНС.Представление',
			width: 539,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:99px;top:55px;width:539px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
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
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				'-',
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:581px;width:654px;height:25px;',
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
					text:'Сохранить запрос на диск',
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