Ext.require(['Данные.Отчеты.КонтролируемыеЗначенияПоБюджетам'], function () 
{
	Ext.define('Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:569px;height:460px;',
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
			style: 'position:absolute;left:0px;top:0px;width:569px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:553px;height:70px;',
			height: 70,width: 553,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиЦФО',
			width: 315,
			height: 19,
			style: 'position:absolute;left:238px;top:21px;width:315px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО:',
			style: 'position:absolute;left:6px;top:21px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСЦФО',
			width: 154,
			height: 19,
			style: 'position:absolute;left:238px;top:21px;width:154px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоЦФО',
			width: 154,
			height: 19,
			style: 'position:absolute;left:399px;top:21px;width:154px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПроект',
			width: 315,
			height: 19,
			style: 'position:absolute;left:238px;top:45px;width:315px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:6px;top:45px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСПроект',
			width: 154,
			height: 19,
			style: 'position:absolute;left:238px;top:45px;width:154px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоПроект',
			width: 154,
			height: 19,
			style: 'position:absolute;left:399px;top:45px;width:154px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:72px;top:45px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:72px;top:21px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:0px;top:0px;width:553px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОтчета',
			width: 96,
			height: 19,
			style: 'position:absolute;left:58px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСценарий',
			text: 'Сценарий:',
			style: 'position:absolute;left:174px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Сценарий.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:232px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Вид:',
			style: 'position:absolute;left:14px;top:78px;width:42px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидКонтролируемыхЗначений.Представление',
			width: 181,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:58px;top:78px;width:181px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Использование:',
			style: 'position:absolute;left:259px;top:78px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ИспользованиеКонтролируемыхЗначений.Представление',
			width: 212,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:349px;top:78px;width:212px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаКонтролируемыеЗначенияПоБюджетамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Контролируемые значения',
			style: 'position:absolute;left:8px;top:57px;width:553px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});