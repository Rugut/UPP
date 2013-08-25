Ext.require(['Данные.Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет'], function () 
{
	Ext.define('Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			width: 604,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
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
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:57px;width:588px;height:72px;',
			height: 72,width: 588,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСклад',
			width: 324,
			height: 19,
			style: 'position:absolute;left:264px;top:0px;width:324px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Склад:',
			style: 'position:absolute;left:0px;top:1px;width:100px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатура',
			width: 324,
			height: 19,
			style: 'position:absolute;left:264px;top:24px;width:324px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:0px;top:25px;width:100px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:24px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПодразделение',
			width: 324,
			height: 19,
			style: 'position:absolute;left:264px;top:48px;width:324px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подразделение:',
			style: 'position:absolute;left:0px;top:49px;width:100px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:48px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичность',
			text: 'Периодичность лимитов:',
			style: 'position:absolute;left:144px;top:33px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Периодичность.Представление',
			width: 96,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:272px;top:33px;width:96px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:371px;top:33px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 152,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:444px;top:33px;width:152px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});