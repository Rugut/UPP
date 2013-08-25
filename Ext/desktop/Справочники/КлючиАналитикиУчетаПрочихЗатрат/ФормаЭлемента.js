Ext.require(['Данные.Справочники.КлючиАналитикиУчетаПрочихЗатрат'], function () 
{
	Ext.define('Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:610px;height:359px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ключ аналитики учета прочих затрат',
	
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
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 506,
			height: 19,
			style: 'position:absolute;left:95px;top:33px;width:506px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:610px;height:25px;',
			width: 610,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчета',
			text: 'Счет учета:',
			style: 'position:absolute;left:8px;top:212px;width:86px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:95px;top:212px;width:81px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНУ',
			text: 'Счет учета (НУ):',
			style: 'position:absolute;left:309px;top:212px;width:92px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:401px;top:212px;width:81px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:8px;top:238px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:8px;top:261px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:8px;top:286px;width:86px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Субконто1.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:238px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Субконто2.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:261px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Субконто3.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:286px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ1',
			text: 'Субконто 1 (НУ):',
			style: 'position:absolute;left:309px;top:238px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:309px;top:261px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто6',
			text: 'Субконто 3:',
			style: 'position:absolute;left:309px;top:286px;width:92px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СубконтоНУ1.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:401px;top:238px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СубконтоНУ2.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:401px;top:261px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СубконтоНУ3.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:401px;top:286px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Аналитика управленческого учета',
			style: 'position:absolute;left:8px;top:110px;width:593px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Аналитика регламентированного учета',
			style: 'position:absolute;left:8px;top:189px;width:593px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьОбъектСтроительства',
			text: 'Объект строительства:',
			style: 'position:absolute;left:8px;top:130px;width:86px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ОбъектСтроительства.Представление',
			width: 506,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:134px;width:506px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСпособСтроительства',
			text: 'Способ строительства:',
			style: 'position:absolute;left:8px;top:158px;width:86px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособСтроительства',
			width: 506,
			height: 19,
			style: 'position:absolute;left:95px;top:161px;width:506px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:59px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 506,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:59px;width:506px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсправительнойЗаписи',
			text: 'Дата исправительной записи:',
			style: 'position:absolute;left:120px;top:84px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсправительнойЗаписи',
			width: 120,
			height: 19,
			style: 'position:absolute;left:280px;top:84px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '',
			style: 'position:absolute;left:95px;top:84px;width:14px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсправительнаяЗапись',
			text: 'Исправительная запись:',
			style: 'position:absolute;left:8px;top:79px;width:86px;height:30px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '',
			style: 'position:absolute;left:8px;top:311px;width:14px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Считать разницы в оценке доходов и расходов постоянными',
			style: 'position:absolute;left:27px;top:311px;width:574px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:334px;width:610px;height:25px;',
			width: 610,
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