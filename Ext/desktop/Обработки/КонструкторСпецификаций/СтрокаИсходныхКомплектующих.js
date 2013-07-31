Ext.require(['Данные.Обработки.КонструкторСпецификаций'], function () 
{
	Ext.define('Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующих',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:365px;height:373px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Строка исходных комплектующих',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:81px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номенклатура',
			width: 209,
			height: 19,
			style: 'position:absolute;left:148px;top:81px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:129px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:148px;top:129px;width:89px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаИзмерения.Представление',
			width: 66,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:291px;top:129px;width:66px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидНорматива',
			text: 'Вид норматива:',
			style: 'position:absolute;left:8px;top:57px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидНорматива.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:57px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:8px;top:153px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СтатьяЗатрат.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:153px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристикаНоменклатуры',
			text: 'Характеристика:',
			style: 'position:absolute;left:8px;top:105px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ХарактеристикаНоменклатуры',
			width: 209,
			height: 19,
			style: 'position:absolute;left:148px;top:105px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМинимальнаяПартия',
			text: 'Мин. партия:',
			style: 'position:absolute;left:8px;top:177px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МинимальнаяПартия',
			style: 'position:absolute;left:148px;top:177px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерОперацииМаршрута',
			text: '№ операции:',
			style: 'position:absolute;left:8px;top:33px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерОперацииМаршрута',
			width: 89,
			height: 19,
			style: 'position:absolute;left:148px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпецификация',
			text: 'Спецификация:',
			style: 'position:absolute;left:8px;top:225px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Спецификация.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:225px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиница',
			text: 'Единица:',
			style: 'position:absolute;left:240px;top:129px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Позиция:',
			style: 'position:absolute;left:240px;top:33px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПозицияПоСпецификации',
			width: 67,
			height: 19,
			style: 'position:absolute;left:290px;top:33px;width:67px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидВоспроизводства',
			text: 'Вид воспроизводства:',
			style: 'position:absolute;left:8px;top:201px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидВоспроизводства.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:201px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьУказаниеНорматива',
			text: 'Указание норматива:',
			style: 'position:absolute;left:8px;top:249px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'УказаниеНорматива.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:249px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьФормула',
			text: 'Формула:',
			style: 'position:absolute;left:8px;top:273px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Формула',
			width: 209,
			height: 19,
			style: 'position:absolute;left:148px;top:273px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСписаниеКомплектующей',
			text: 'Списание комплектующей:',
			style: 'position:absolute;left:8px;top:297px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СписаниеКомплектующей.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:297px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСвойствоДляСписания',
			text: 'Свойство:',
			style: 'position:absolute;left:8px;top:321px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СвойствоДляСписания.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:321px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КонструкторСпецификаций.СтрокаИсходныхКомплектующихСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:365px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:348px;width:365px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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