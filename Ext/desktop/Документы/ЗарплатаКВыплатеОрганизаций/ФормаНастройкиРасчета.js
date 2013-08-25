Ext.require(['Данные.Документы.ЗарплатаКВыплатеОрганизаций'], function () 
{
	Ext.define('Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:352px;height:173px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка расчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:45px;width:336px;height:93px;',
			height: 93,width: 336,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ПлановыйАванс_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:0px;top:0px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПлановыйАванс_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:0px;width:26px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПлановыйАванс_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:0px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'АвансЗаПервуюПоловинуМесяца_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:1px;top:30px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'АвансЗаПервуюПоловинуМесяца_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:30px;width:26px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'АвансЗаПервуюПоловинуМесяца_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:30px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:1px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'АвансЗаПервуюПоловинуМесяца_Округление.Представление',
			width: 133,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:0px;width:133px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Зарплата_ПроцентВыплаты',
			style: 'position:absolute;left:107px;top:43px;width:61px;height:19px;',
			width: 61,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Зарплата_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:0px;top:72px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Зарплата_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:72px;width:26px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Зарплата_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:72px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Зарплата_НадписьПроцентВыплаты',
			text: 'Процент выплаты:',
			style: 'position:absolute;left:0px;top:43px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:30px;width:336px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Зарплата_Округление.Представление',
			width: 133,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:0px;width:133px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Дивиденды_ПроцентВыплаты',
			style: 'position:absolute;left:107px;top:43px;width:61px;height:19px;',
			width: 61,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Дивиденды_НадписьПроцентВыплаты',
			text: 'Процент выплаты:',
			style: 'position:absolute;left:1px;top:43px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:30px;width:336px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Дивиденды_Округление.Представление',
			width: 133,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:0px;width:133px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать удержания',
			style: 'position:absolute;left:0px;top:30px;width:223px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрочиеВыплаты_НадписьПредварительныйУчетУдержаний',
			text: 'Расчет начисленных сумм за вычетом удержаний',
			style: 'position:absolute;left:0px;top:46px;width:336px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрочиеВыплаты_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:0px;top:74px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрочиеВыплаты_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:74px;width:26px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПрочиеВыплаты_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:74px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПрочиеВыплаты_Округление.Представление',
			width: 133,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:0px;width:133px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ПрочиеВыплатыБезУдержаний_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:0px;top:30px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрочиеВыплатыБезУдержаний_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:30px;width:26px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПрочиеВыплатыБезУдержаний_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:30px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПрочиеВыплатыБезУдержаний_Округление.Представление',
			width: 133,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:101px;top:0px;width:133px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ЗаголовокРасчета',
			text: 'Расчет сумм к выплате',
			style: 'position:absolute;left:8px;top:8px;width:336px;height:27px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:148px;width:352px;height:25px;',
			width: 352,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Рассчитать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});