Ext.require(['Данные.Справочники.КлючиАналитикиВидаУчета'], function () 
{
	Ext.define('Справочники.КлючиАналитикиВидаУчета.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:375px;height:298px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ключ аналитики вида учета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 270,
			height: 19,
			style: 'position:absolute;left:97px;top:33px;width:270px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:81px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 270,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:81px;width:270px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:8px;top:219px;width:89px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 270,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:222px;width:270px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:151px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Подразделение.Представление',
			width: 270,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:151px;width:270px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчета',
			text: 'Счет учета:',
			style: 'position:absolute;left:8px;top:246px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СчетУчета.Представление',
			width: 81,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:246px;width:81px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНУ',
			text: 'Счет учета (НУ):',
			style: 'position:absolute;left:197px;top:246px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СчетУчетаНУ.Представление',
			width: 81,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:286px;top:246px;width:81px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Аналитика регламентированного учета',
			style: 'position:absolute;left:8px;top:200px;width:359px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Аналитика управленческого учета',
			style: 'position:absolute;left:8px;top:130px;width:359px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:8px;top:175px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			width: 270,
			height: 19,
			style: 'position:absolute;left:97px;top:175px;width:270px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:8px;top:105px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Склад.Представление',
			width: 270,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:105px;width:270px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРазделУчета',
			text: 'Раздел учета:',
			style: 'position:absolute;left:8px;top:57px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'РазделУчета.Представление',
			width: 270,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:57px;width:270px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиВидаУчета.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:375px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:273px;width:375px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
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