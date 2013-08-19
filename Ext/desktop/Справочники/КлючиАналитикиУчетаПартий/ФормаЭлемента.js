Ext.require(['Данные.Справочники.КлючиАналитикиУчетаПартий'], function () 
{
	Ext.define('Справочники.КлючиАналитикиУчетаПартий.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:439px;height:278px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ключ аналитики учета партий',
	
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
			style: 'position:absolute;left:8px;top:33px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 285,
			height: 19,
			style: 'position:absolute;left:146px;top:33px;width:285px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:439px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусПартии',
			text: 'Статус партии:',
			style: 'position:absolute;left:8px;top:226px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'СтатусПартии.Представление',
			width: 285,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:226px;width:285px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ:',
			style: 'position:absolute;left:8px;top:57px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Заказ',
			width: 285,
			height: 19,
			style: 'position:absolute;left:146px;top:57px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ1',
			text: 'Договор комитента:',
			style: 'position:absolute;left:8px;top:81px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ДоговорКомитента.Представление',
			width: 285,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:81px;width:285px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКомиссионера',
			text: 'Договор комиссионера:',
			style: 'position:absolute;left:8px;top:130px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ДоговорКомиссионера.Представление',
			width: 285,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:130px;width:285px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ3',
			text: 'Документ передачи:',
			style: 'position:absolute;left:8px;top:154px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ДокументПередачи.Представление',
			width: 285,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:154px;width:285px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ4',
			text: 'Физ лицо:',
			style: 'position:absolute;left:8px;top:178px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ФизЛицо.Представление',
			width: 285,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:178px;width:285px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ5',
			text: 'Назначение использования:',
			style: 'position:absolute;left:8px;top:198px;width:138px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'НазначениеИспользования.Представление',
			width: 285,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:202px;width:285px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомиссионер',
			text: 'Комиссионер:',
			style: 'position:absolute;left:8px;top:105px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Комиссионер.Представление',
			width: 285,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:105px;width:285px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПартий.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:253px;width:439px;height:25px;',
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