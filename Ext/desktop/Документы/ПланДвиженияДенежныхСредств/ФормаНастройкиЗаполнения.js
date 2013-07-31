Ext.require(['Данные.Документы.ПланДвиженияДенежныхСредств'], function () 
{
	Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:810px;height:413px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка автоматического заполнения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:794px;height:351px;',
			height: 351,width: 794,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Поступления',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:28px;width:782px;height:262px;',
			height: 262,width: 782,
			items:
			[
				{
					title:'Поступления денежных средств',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Поступления за период с:',
			style: 'position:absolute;left:13px;top:27px;width:163px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПоступления',
			style: 'position:absolute;left:176px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПоступленияДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПоступленияДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:276px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоступленияПо',
			text: 'по',
			style: 'position:absolute;left:256px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПоступления',
			text: '...',
			style: 'position:absolute;left:361px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Поступления денежных средств',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентПоступления',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:13px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'План на период с:',
			style: 'position:absolute;left:407px;top:27px;width:155px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПланПоступления',
			style: 'position:absolute;left:570px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланПоступленияДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланПоступленияДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:670px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланПоступленияПо',
			text: 'по',
			style: 'position:absolute;left:650px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланПоступления',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Планы поступлений денежных средств',
			style: 'position:absolute;left:400px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентПланПоступления',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:407px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:13px;top:127px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:20px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:20px;top:172px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:20px;top:196px;width:88px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:407px;top:127px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:414px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:414px;top:172px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:414px;top:196px;width:88px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовПоступления.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроектПоступления.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить проект:',
			style: 'position:absolute;left:13px;top:99px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить статью:',
			style: 'position:absolute;left:13px;top:75px;width:163px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовПланПоступления.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:570px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроектПланПоступления.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:570px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить проект:',
			style: 'position:absolute;left:407px;top:99px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить статью:',
			style: 'position:absolute;left:407px;top:75px;width:163px;height:19px;',
		},
					]
				},
				{
					title:'Продажи',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Объем продаж за период с:',
			style: 'position:absolute;left:13px;top:27px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Планы продаж на период с:',
			style: 'position:absolute;left:407px;top:27px;width:161px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОбъемПродаж',
			style: 'position:absolute;left:176px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОбъемПродажДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОбъемПродажДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:276px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъемПродажПо',
			text: 'по',
			style: 'position:absolute;left:256px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбъемПродаж',
			text: '...',
			style: 'position:absolute;left:361px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланыПродажДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланыПродажДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:670px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПродажПо',
			text: 'по',
			style: 'position:absolute;left:650px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыПродаж',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Продажи',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовОбъемПродаж.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяОбъемПродаж',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:13px;top:75px;width:163px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПроектОбъемПродаж.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентОбъемПродаж',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:13px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Планы продаж',
			style: 'position:absolute;left:400px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПланыПродаж',
			style: 'position:absolute;left:570px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовПланыПродаж.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:570px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПланыПродаж',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:407px;top:75px;width:162px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПроектПланыПродаж.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:570px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентПланыПродаж',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:407px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:13px;top:127px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:20px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:20px;top:172px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:20px;top:196px;width:88px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить проект:',
			style: 'position:absolute;left:13px;top:99px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить проект:',
			style: 'position:absolute;left:407px;top:99px;width:161px;height:19px;',
		},
					]
				},
				{
					title:'Дебиторская задолженность контрагентов',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Дебиторская задолженность контрагентов',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовДебиторскаяЗадолженность.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяДебиторскаяЗадолженность',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:13px;top:99px;width:163px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПроектДебиторскаяЗадолженность.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:123px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроектДебиторскаяЗадолженность',
			text: 'Проект:',
			style: 'position:absolute;left:13px;top:123px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебиторская задолженность на дату:',
			style: 'position:absolute;left:13px;top:27px;width:212px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОстаткаДебиторскаяЗадолженность',
			width: 111,
			height: 19,
			style: 'position:absolute;left:269px;top:27px;width:111px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентДебиторскаяЗадолженность',
			style: 'position:absolute;left:176px;top:76px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентДебиторскаяЗадолженность',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:13px;top:75px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '%. Отбор сумм',
			style: 'position:absolute;left:13px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:123px;top:51px;width:142px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГраницаОтбораДебиторскаяЗадолженность',
			style: 'position:absolute;left:269px;top:51px;width:111px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Неоплаченные заказы покупателей',
			style: 'position:absolute;left:400px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовЗаказыПокупателей.Представление',
			width: 203,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:571px;top:99px;width:203px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗаказыПокупателей',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:407px;top:99px;width:162px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПроектЗаказыПокупателей.Представление',
			width: 203,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:571px;top:123px;width:203px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроектЗаказыПокупателей',
			text: 'Проект:',
			style: 'position:absolute;left:407px;top:123px;width:104px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентЗаказыПокупателей',
			style: 'position:absolute;left:571px;top:74px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентЗаказыПокупателей',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:407px;top:76px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '%. Отбор сумм',
			style: 'position:absolute;left:407px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:517px;top:51px;width:142px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГраницаОтбораЗаказыПокупателей',
			style: 'position:absolute;left:663px;top:51px;width:111px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:13px;top:151px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:20px;top:172px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:20px;top:196px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:20px;top:220px;width:149px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:407px;top:151px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:413px;top:172px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:413px;top:196px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:413px;top:220px;width:149px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дата оплаты в периоде с:',
			style: 'position:absolute;left:407px;top:27px;width:161px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗаказыПокупателейДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:571px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗаказыПокупателейДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:671px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказыПокупателейПо',
			text: 'по',
			style: 'position:absolute;left:651px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗаказыПокупателей',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Отборы',
					items:
					[
		{
			id: 'ОтборПоступления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:768px;height:183px;',
			height: 183,width: 768,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'167',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'177',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'189',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'189',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'189',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланДвиженияДенежныхСредств/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ОтборПоступления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:217px;width:768px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительно',
			style: 'position:absolute;left:6px;top:295px;width:782px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить результат расчета (%)',
			style: 'position:absolute;left:13px;top:315px;width:186px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИзменитьРезультатРасчетаСуммыПроцентПоступления',
			style: 'position:absolute;left:199px;top:315px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатРасчетаСуммыОкруглитьДо',
			text: 'округлить до:',
			style: 'position:absolute;left:285px;top:315px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:365px;top:315px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Планирование поступлений денежных средств',
			style: 'position:absolute;left:6px;top:6px;width:782px;height:16px;',
		},
					]
				},
				{
					title:'Платежи',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:28px;width:782px;height:262px;',
			height: 262,width: 782,
			items:
			[
				{
					title:'Платежи за период',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатьяКредиторскаяЗадолженность',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:13px;top:99px;width:163px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектКредиторскаяЗадолженность',
			text: 'Проект:',
			style: 'position:absolute;left:13px;top:123px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентКредиторскаяЗадолженность',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:13px;top:75px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъемЗакупокПо',
			text: 'по',
			style: 'position:absolute;left:256px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыЗакупокПо',
			text: 'по',
			style: 'position:absolute;left:650px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяОбъемЗакупок',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:13px;top:75px;width:163px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентОбъемЗакупок',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:13px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПланыЗакупок',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:407px;top:75px;width:162px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентПланыЗакупок',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:407px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗаказыПоставщикам',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:407px;top:99px;width:162px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектЗаказыПоставщикам',
			text: 'Проект:',
			style: 'position:absolute;left:407px;top:123px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентЗаказыПоставщикам',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:407px;top:76px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Платежи за период с:',
			style: 'position:absolute;left:13px;top:27px;width:163px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПлатежи',
			style: 'position:absolute;left:176px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПлатежиДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПлатежиДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:276px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежиПо',
			text: 'по',
			style: 'position:absolute;left:256px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПлатежи',
			text: '...',
			style: 'position:absolute;left:361px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Платежи',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентПлатежи',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:13px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'План платежей на период с:',
			style: 'position:absolute;left:407px;top:27px;width:163px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПланПлатежи',
			style: 'position:absolute;left:570px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланПлатежиДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланПлатежиДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:671px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланПлатежиПо',
			text: 'по',
			style: 'position:absolute;left:650px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланПлатежи',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Планы платежей',
			style: 'position:absolute;left:400px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентПланПлатежи',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:407px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:13px;top:127px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:20px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:20px;top:172px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:20px;top:196px;width:88px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:407px;top:127px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:414px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:414px;top:172px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:414px;top:196px;width:88px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовПлатежи.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроектПлатежи.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить проект:',
			style: 'position:absolute;left:13px;top:99px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить статью:',
			style: 'position:absolute;left:13px;top:75px;width:163px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовПланПлатежи.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:570px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроектПланПлатежи.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:570px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить проект:',
			style: 'position:absolute;left:407px;top:99px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить статью:',
			style: 'position:absolute;left:407px;top:75px;width:163px;height:19px;',
		},
					]
				},
				{
					title:'Закупки',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Объем закупок за период с:',
			style: 'position:absolute;left:13px;top:27px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Планы закупок на период с:',
			style: 'position:absolute;left:407px;top:27px;width:161px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОбъемЗакупок',
			style: 'position:absolute;left:176px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОбъемЗакупокДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОбъемЗакупокДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:276px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаОбъемЗакупок',
			text: '...',
			style: 'position:absolute;left:361px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланыЗакупокДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланыЗакупокДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:671px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыЗакупок',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Закупки',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовОбъемЗакупок.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроектОбъемЗакупок.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Планы закупок',
			style: 'position:absolute;left:400px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПланыЗакупок',
			style: 'position:absolute;left:570px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовПланыЗакупок.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:570px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроектПланыЗакупок.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:570px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:13px;top:127px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:20px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:20px;top:172px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:20px;top:196px;width:88px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить проект:',
			style: 'position:absolute;left:13px;top:99px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установить проект:',
			style: 'position:absolute;left:407px;top:99px;width:161px;height:19px;',
		},
					]
				},
				{
					title:'Кредиторская задолженность контрагентов',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Кредиторская задолженность контрагентов',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовКредиторскаяЗадолженность.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроектКредиторскаяЗадолженность.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:123px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредиторская задолженность на дату:',
			style: 'position:absolute;left:13px;top:27px;width:224px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОстаткаКредиторскаяЗадолженность',
			width: 111,
			height: 19,
			style: 'position:absolute;left:269px;top:27px;width:111px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентКредиторскаяЗадолженность',
			style: 'position:absolute;left:176px;top:76px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '%. Отбор сумм',
			style: 'position:absolute;left:13px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:123px;top:51px;width:142px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГраницаОтбораКредиторскаяЗадолженность',
			style: 'position:absolute;left:269px;top:51px;width:111px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Неоплаченные заказы поставщикам',
			style: 'position:absolute;left:400px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовЗаказыПоставщикам.Представление',
			width: 203,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:571px;top:99px;width:203px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроектЗаказыПоставщикам.Представление',
			width: 203,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:571px;top:123px;width:203px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
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
			name: 'ПроцентЗаказыПоставщикам',
			style: 'position:absolute;left:571px;top:74px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '%. Отбор сумм',
			style: 'position:absolute;left:407px;top:51px;width:104px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:517px;top:51px;width:142px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГраницаОтбораЗаказыПоставщикам',
			style: 'position:absolute;left:663px;top:51px;width:111px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:13px;top:151px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:20px;top:172px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:20px;top:196px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:20px;top:220px;width:149px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Детализация',
			style: 'position:absolute;left:407px;top:151px;width:367px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:413px;top:172px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договоры контрагентов',
			style: 'position:absolute;left:413px;top:196px;width:149px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сделки',
			style: 'position:absolute;left:413px;top:220px;width:149px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дата оплаты в периоде с:',
			style: 'position:absolute;left:407px;top:27px;width:161px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗаказыПоставщикамДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:570px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗаказыПоставщикамДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:671px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыЗакупокПо1',
			text: 'по',
			style: 'position:absolute;left:651px;top:27px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗаказыПоставщикам',
			text: '...',
			style: 'position:absolute;left:755px;top:27px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Задолженность по заработной плате',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Задолженность по заработной плате',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяОборотовЗаработнаяПлата.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:75px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗаработнаяПлата',
			text: 'Статья движения ден. средств:',
			style: 'position:absolute;left:13px;top:75px;width:163px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПроектЗаработнаяПлата.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:176px;top:99px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроектЗаработнаяПлата',
			text: 'Проект:',
			style: 'position:absolute;left:13px;top:99px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Задолженность по заработной плате на дату:',
			style: 'position:absolute;left:13px;top:27px;width:255px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОстаткаЗаработнаяПлата',
			width: 111,
			height: 19,
			style: 'position:absolute;left:269px;top:27px;width:111px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентЗаработнаяПлата',
			style: 'position:absolute;left:176px;top:52px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентЗаработнаяПлата',
			text: 'Процент от суммы:',
			style: 'position:absolute;left:13px;top:51px;width:104px;height:19px;',
		},
					]
				},
				{
					title:'Отборы',
					items:
					[
		{
			id: 'ОтборПлатежи',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:768px;height:183px;',
			height: 183,width: 768,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'139',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'114',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'190',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'190',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'190',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланДвиженияДенежныхСредств/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ОтборПлатежи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполненияСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:217px;width:768px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительно',
			style: 'position:absolute;left:6px;top:295px;width:782px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить результат расчета (%)',
			style: 'position:absolute;left:13px;top:315px;width:186px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИзменитьРезультатРасчетаСуммыПроцентПлатежи',
			style: 'position:absolute;left:199px;top:315px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатРасчетаСуммыОкруглитьДо1',
			text: 'округлить до:',
			style: 'position:absolute;left:285px;top:315px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:365px;top:315px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Планирование платежей',
			style: 'position:absolute;left:6px;top:6px;width:782px;height:16px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:810px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Поступления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:810px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});