Ext.require(['Данные.Справочники.КонтактныеЛицаКонтрагентов'], function () 
{
	Ext.define('Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНового',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:533px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контактные лица контрагентов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:137px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Владелец.Представление',
			width: 427,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:137px;width:427px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:8px;top:162px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Должность',
			width: 427,
			height: 19,
			style: 'position:absolute;left:98px;top:162px;width:427px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:368px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 427,
			height: 19,
			style: 'position:absolute;left:98px;top:368px;width:427px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРольКонтактногоЛица',
			text: 'Роль:',
			style: 'position:absolute;left:8px;top:187px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'РольКонтактногоЛица.Представление',
			width: 427,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:187px;width:427px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьФИО',
			text: 'Фамилия И.О.:',
			style: 'position:absolute;left:8px;top:8px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 134,
			height: 19,
			style: 'position:absolute;left:98px;top:8px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 127,
			height: 19,
			style: 'position:absolute;left:235px;top:8px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 160,
			height: 19,
			style: 'position:absolute;left:365px;top:8px;width:160px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидТелефонаКонтактногоЛица.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:241px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Код:',
			style: 'position:absolute;left:201px;top:241px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодГородаТелефонаКонтактногоЛица',
			width: 42,
			height: 19,
			style: 'position:absolute;left:240px;top:241px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Номер:',
			style: 'position:absolute;left:287px;top:241px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерТелефонаКонтактногоЛица',
			width: 80,
			height: 19,
			style: 'position:absolute;left:333px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Доб.:',
			style: 'position:absolute;left:418px;top:241px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДобавочныйНомерТелефонаКонтактногоЛица',
			width: 42,
			height: 19,
			style: 'position:absolute;left:458px;top:241px;width:42px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидЭлектроннойПочтыКонтактногоЛица.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:314px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Адрес:',
			style: 'position:absolute;left:201px;top:314px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыКонтактногоЛица',
			width: 132,
			height: 19,
			style: 'position:absolute;left:240px;top:314px;width:132px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Телефоны',
			style: 'position:absolute;left:8px;top:218px;width:517px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:8px;top:60px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРождения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:98px;top:60px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУдостоверение',
			text: 'Удостоверение:',
			style: 'position:absolute;left:201px;top:84px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Удостоверение',
			width: 232,
			height: 19,
			style: 'position:absolute;left:293px;top:84px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:8px;top:84px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Пол.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:84px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Личные данные',
			style: 'position:absolute;left:8px;top:36px;width:517px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Данные работника',
			style: 'position:absolute;left:8px;top:113px;width:517px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Напоминать о дне рождения за:',
			style: 'position:absolute;left:202px;top:59px;width:184px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоДнейДоНапоминания',
			style: 'position:absolute;left:392px;top:59px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:438px;top:59px;width:40px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Е-mail:',
			style: 'position:absolute;left:8px;top:290px;width:517px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидЭлектроннойПочтыКонтактногоЛица2.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:339px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Адрес:',
			style: 'position:absolute;left:201px;top:339px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыКонтактногоЛица2',
			width: 132,
			height: 19,
			style: 'position:absolute;left:240px;top:339px;width:132px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидТелефонаКонтактногоЛица2.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:267px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНовогоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Код:',
			style: 'position:absolute;left:201px;top:267px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодГородаТелефонаКонтактногоЛица2',
			width: 42,
			height: 19,
			style: 'position:absolute;left:240px;top:267px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Номер:',
			style: 'position:absolute;left:287px;top:267px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерТелефонаКонтактногоЛица2',
			width: 80,
			height: 19,
			style: 'position:absolute;left:333px;top:267px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Доб.:',
			style: 'position:absolute;left:418px;top:267px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДобавочныйНомерТелефонаКонтактногоЛица2',
			width: 42,
			height: 19,
			style: 'position:absolute;left:458px;top:267px;width:42px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:533px;height:25px;',
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});