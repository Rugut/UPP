Ext.require(['Данные.Справочники.НазначенияИспользования'], function () 
{
	Ext.define('Справочники.НазначенияИспользования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:421px;height:205px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Назначения использования',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:343px;top:57px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:373px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 246,
			height: 19,
			style: 'position:absolute;left:90px;top:57px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:33px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Владелец.Представление',
			width: 323,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:33px;width:323px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НазначенияИспользования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НазначенияИспользования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НазначенияИспользования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НазначенияИспользования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Способ погашения стоимости:',
			style: 'position:absolute;left:8px;top:105px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СпособПогашенияСтоимости.Представление',
			width: 227,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:186px;top:105px;width:227px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НазначенияИспользования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НазначенияИспользования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НазначенияИспользования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НазначенияИспользования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Срок полезного использования:',
			style: 'position:absolute;left:8px;top:129px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользования',
			style: 'position:absolute;left:186px;top:129px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Количество по нормативу выдачи:',
			style: 'position:absolute;left:8px;top:81px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:186px;top:81px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Единица:',
			style: 'position:absolute;left:286px;top:81px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаИзмерения.Представление',
			width: 70,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:343px;top:81px;width:70px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НазначенияИспользования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НазначенияИспользования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НазначенияИспользования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НазначенияИспользования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Способ отражения расходов:',
			style: 'position:absolute;left:8px;top:153px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СпособОтраженияРасходов.Представление',
			width: 227,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:186px;top:153px;width:227px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НазначенияИспользования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НазначенияИспользования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НазначенияИспользования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НазначенияИспользования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:421px;height:25px;',
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:180px;width:421px;height:25px;',
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