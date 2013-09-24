Ext.require(['Данные.Документы.КомплектацияНоменклатуры'], function () 
{
	Ext.define('Документы.КомплектацияНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Комплектация номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:369px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 552,
			height: 19,
			style: 'position:absolute;left:92px;top:369px;width:552px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			width: 652,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:133px;width:636px;height:230px;',
			height: 230,width: 636,
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Номенклатура.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:8px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:427px;top:8px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаИзмерения.Представление',
			width: 92,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:32px;width:92px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Коэффициент',
			style: 'position:absolute;left:427px;top:56px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ХарактеристикаНоменклатуры.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:32px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СерияНоменклатуры.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:56px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: true,
			name: 'НомерГТД.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:80px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: true,
			name: 'СтранаПроисхождения.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:104px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СпособСписанияОстаткаТоваров.Представление',
			width: 92,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:153px;width:92px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаКомплектаБУ',
			text: 'Счет учета (БУ):',
			style: 'position:absolute;left:328px;top:128px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетУчетаБУ.Представление',
			width: 58,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:127px;width:58px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаКомплектаНУ',
			text: 'Счет учета (НУ):',
			style: 'position:absolute;left:487px;top:127px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетУчетаНУ.Представление',
			width: 58,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:571px;top:127px;width:58px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусПартии',
			text: 'Статус партии:',
			style: 'position:absolute;left:328px;top:177px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'СтатусПартии.Представление',
			width: 92,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:177px;width:92px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСпецификация',
			text: 'Спецификация:',
			style: 'position:absolute;left:6px;top:128px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Спецификация.Представление',
			width: 205,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:128px;width:205px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказВыпуска',
			text: 'Заказ (выпуск):',
			style: 'position:absolute;left:6px;top:152px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗаказВыпуска',
			width: 205,
			height: 19,
			style: 'position:absolute;left:102px;top:152px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦенаПередачи',
			text: 'Цена передачи:',
			style: 'position:absolute;left:328px;top:80px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЦенаПередачи',
			style: 'position:absolute;left:427px;top:80px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПередачи',
			text: 'Сумма передачи:',
			style: 'position:absolute;left:328px;top:104px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПередачи',
			style: 'position:absolute;left:427px;top:104px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'Комплектующие',
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:626px;height:179px;',
			height: 179,width: 626,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Комплектующая',
					width:'211',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика комплектующей',
					width:'170',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия комплектующей',
					width:'140',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'76',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'56',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'39',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Цена передачи',
					width:'82',
					dataIndex:'ЦенаПередачи',
					flex:1,
				},
				{
					text:'Сумма передачи',
					width:'92',
					dataIndex:'СуммаПередачи',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'100',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Доля стоимости',
					width:'89',
					dataIndex:'ДоляСтоимости',
					flex:1,
				},
				{
					text:'Способ списания комплектующей',
					width:'100',
					dataIndex:'СпособСписанияОстаткаТоваров',
					flex:1,
				},
				{
					text:'Номер ГТД',
					width:'109',
					dataIndex:'НомерГТД',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'136',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
				{
					text:'Счет учета комплектующей (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета комплектующей (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Статус партии',
					width:'100',
					dataIndex:'СтатусПартии',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КомплектацияНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ЦенаПередачи',
					},
					{
						name:'СуммаПередачи',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ДоляСтоимости',
					},
					{
						name:'СпособСписанияОстаткаТоваров',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'СтранаПроисхождения',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'СтатусПартии',
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
						var грид = Ext.getCmp('Комплектующие');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КомплектацияНоменклатуры.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:626px;height:24px;',
			width: 626,
			height: 24,
			items:
			[
				{
					text:'Поиск по штрихкоду',
					tooltip:'Поиск по штрихкоду',
				},
				'-',
				'-',
				{
					text:'Подбор',
					tooltip:'Действие подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:8px;width:94px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:328px;top:8px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДСвСтоимостиТоваров',
			text: 'НДС в стоимости:',
			style: 'position:absolute;left:6px;top:6px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'НДСвСтоимостиТоваров.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:6px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Счет и аналитика списания НДС',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:104px;width:304px;height:100px;',
			height: 100,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДС',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:0px;width:94px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетСписанияНДС.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:0px;top:24px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:0px;top:48px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:0px;top:71px;width:94px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДС1.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:24px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДС2.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:48px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДС3.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:71px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНеТребуется',
			text: 'В соответствии с настройкой учетной политики по налоговому учету указание счета списания НДС в бухгалтерском учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:54px;',
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:324px;top:104px;width:304px;height:100px;',
			height: 100,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:0px;top:0px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетСписанияНДСНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:0px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ1',
			text: 'Субконто 1 (НУ):',
			style: 'position:absolute;left:0px;top:24px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДСНУ1.Представление',
			width: 211,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:24px;width:211px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ2',
			text: 'Субконто 2 (НУ):',
			style: 'position:absolute;left:0px;top:48px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДСНУ2.Представление',
			width: 211,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:48px;width:211px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ3',
			text: 'Субконто 3 (НУ):',
			style: 'position:absolute;left:0px;top:71px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДСНУ3.Представление',
			width: 211,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:71px;width:211px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУНеТребуется',
			text: 'Указание счета списания НДС в налоговом учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:51px;',
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатратСписанияНДС',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:79px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СтатьяЗатратСписанияНДС.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:79px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Ном. группа:',
			style: 'position:absolute;left:324px;top:79px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НоменклатурнаяГруппа.Представление',
			width: 212,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:416px;top:79px;width:212px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:6px;top:52px;width:94px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:54px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
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
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:6px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение.Представление',
			width: 215,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:6px;width:215px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации1',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:324px;top:6px;width:94px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации1.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:418px;top:6px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетЗатрат',
			text: 'Счет затрат (БУ):',
			style: 'position:absolute;left:324px;top:33px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетЗатрат.Представление',
			width: 117,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:418px;top:33px;width:117px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетЗатратНУ',
			text: 'Счет затрат (НУ):',
			style: 'position:absolute;left:324px;top:57px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетЗатратНУ.Представление',
			width: 117,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:418px;top:57px;width:117px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа1',
			text: 'Ном. группа:',
			style: 'position:absolute;left:6px;top:33px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НоменклатурнаяГруппа1.Представление',
			width: 215,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:33px;width:215px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ (затраты):',
			style: 'position:absolute;left:6px;top:81px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Заказ',
			width: 215,
			height: 19,
			style: 'position:absolute;left:95px;top:81px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:57px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СтатьяЗатрат.Представление',
			width: 215,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:57px;width:215px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
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
			name: 'НадписьЕдиницаИзмерения',
			text: 'Ед. измерения:',
			style: 'position:absolute;left:328px;top:32px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:6px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение1',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:30px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение1.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:30px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
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
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СкладКомпании.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:652px;height:25px;',
			width: 652,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать',
				},
				'-',
				{
					text:'ОК',
					tooltip:'ОК',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказПокупателя',
			text: 'Заказ (резерв):',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗаказРезерв',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:573px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидКомплектации',
			text: 'Вид выпуска:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидКомплектации.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:336px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:105px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КомплектацияНоменклатуры.ФормаДокументаСобытия");
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