Ext.require(['Данные.Документы.ВнутреннееПеремещениеСредствПриБюджетировании'], function () 
{
	Ext.define('Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:355px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внутреннее перемещение средств при бюджетировании',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Сценарий.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Период планирования:',
			style: 'position:absolute;left:336px;top:33px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодПланирования',
			width: 100,
			height: 19,
			style: 'position:absolute;left:462px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Статья оборотов:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СтатьяОборотов.Представление',
			width: 219,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:426px;top:57px;width:219px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Ед. измерения:',
			style: 'position:absolute;left:164px;top:226px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаИзмеренияИсточник.Представление',
			width: 64,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:254px;top:226px;width:64px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Количество:',
			style: 'position:absolute;left:14px;top:226px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоИсточник',
			style: 'position:absolute;left:98px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Валюта:',
			style: 'position:absolute;left:14px;top:201px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаИсточник.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:201px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Курс :',
			style: 'position:absolute;left:180px;top:201px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: true,
			value: 0,
			name: 'КурсИсточник',
			style: 'position:absolute;left:238px;top:201px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Сумма:',
			style: 'position:absolute;left:14px;top:250px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Сумма',
			style: 'position:absolute;left:98px;top:250px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:277px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 221,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:277px;width:221px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Текущий статус:',
			style: 'position:absolute;left:336px;top:277px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Состояние.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:426px;top:277px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПриемник',
			text: 'Сумма приемника = 100 USD',
			style: 'position:absolute;left:340px;top:250px;width:305px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:301px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 548,
			height: 19,
			style: 'position:absolute;left:98px;top:301px;width:548px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Источник',
			style: 'position:absolute;left:8px;top:84px;width:319px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЦФОИсточник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:105px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'ЦФО:',
			style: 'position:absolute;left:14px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПроектИсточник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:129px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'Проект:',
			style: 'position:absolute;left:14px;top:129px;width:82px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КонтрагентИсточник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:153px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись45',
			text: 'Контрагент:',
			style: 'position:absolute;left:14px;top:153px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НоменклатураИсточник',
			width: 220,
			height: 19,
			style: 'position:absolute;left:98px;top:177px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Номенклатура:',
			style: 'position:absolute;left:14px;top:177px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'Валюта:',
			style: 'position:absolute;left:340px;top:202px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаПриемник.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:426px;top:202px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Курс :',
			style: 'position:absolute;left:508px;top:202px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: true,
			value: 0,
			name: 'КурсПриемник',
			style: 'position:absolute;left:566px;top:202px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Приемник',
			style: 'position:absolute;left:335px;top:84px;width:310px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЦФОПриемник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:426px;top:106px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'ЦФО:',
			style: 'position:absolute;left:340px;top:106px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПроектПриемник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:426px;top:130px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись50',
			text: 'Проект:',
			style: 'position:absolute;left:340px;top:130px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КонтрагентПриемник.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:426px;top:154px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись51',
			text: 'Контрагент:',
			style: 'position:absolute;left:340px;top:154px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НоменклатураПриемник',
			width: 220,
			height: 19,
			style: 'position:absolute;left:426px;top:178px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись52',
			text: 'Номенклатура:',
			style: 'position:absolute;left:340px;top:178px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстВалютаИсточника',
			text: 'USD',
			style: 'position:absolute;left:207px;top:250px;width:111px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Ед. измерения:',
			style: 'position:absolute;left:492px;top:226px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаИзмеренияПриемник.Представление',
			width: 64,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:582px;top:226px;width:64px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись54',
			text: 'Количество:',
			style: 'position:absolute;left:340px;top:226px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПриемник',
			style: 'position:absolute;left:426px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период',
			text: 'Период',
			style: 'position:absolute;left:480px;top:33px;width:115px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'ПлюсПериод',
			text: '+',
			style: 'position:absolute;left:594px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ВыборПериода',
			text: '',
			style: 'position:absolute;left:616px;top:33px;width:15px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'МинусПериод',
			text: '-',
			style: 'position:absolute;left:462px;top:33px;width:19px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Файлы',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:330px;width:653px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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