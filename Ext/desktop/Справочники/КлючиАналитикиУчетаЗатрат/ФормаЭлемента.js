Ext.require(['Данные.Справочники.КлючиАналитикиУчетаЗатрат'], function () 
{
	Ext.define('Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:254px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ключ аналитики учета затрат',
	
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
			style: 'position:absolute;left:8px;top:33px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			width: 400,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:8px;top:57px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СтатьяЗатрат.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:141px;top:57px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗатрата',
			text: 'Затрата:',
			style: 'position:absolute;left:8px;top:82px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Затрата.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:141px;top:82px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристикаЗатраты',
			text: 'Характеристика затраты:',
			style: 'position:absolute;left:8px;top:106px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ХарактеристикаЗатраты.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:141px;top:106px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСерияЗатраты',
			text: 'Серия затраты:',
			style: 'position:absolute;left:8px;top:130px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СерияЗатраты.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:141px;top:130px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатрат',
			text: 'Способ распределения затрат:',
			style: 'position:absolute;left:8px;top:150px;width:133px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СпособРаспределенияЗатрат.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:141px;top:154px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьХарактерЗатрат',
			text: 'Характер затрат:',
			style: 'position:absolute;left:8px;top:178px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ХарактерЗатрат.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:141px;top:178px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКачество',
			text: 'Качество:',
			style: 'position:absolute;left:8px;top:202px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Качество.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:141px;top:202px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:229px;width:400px;height:25px;',
			width: 400,
			height: 25,
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