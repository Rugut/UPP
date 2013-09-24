Ext.require(['Данные.Обработки.РасчетПлановойСебестоимости'], function () 
{
	Ext.define('Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультата',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:362px;height:118px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка результата',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:93px;width:362px;height:25px;',
			width: 362,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
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
			xtype: 'combobox',
			style: 'position:absolute;left:89px;top:6px;width:265px;height:19px;',
			width: 265,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Статья затрат:',
			style: 'position:absolute;left:8px;top:31px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СтатьяЗатрат.Представление',
			width: 265,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:89px;top:31px;width:265px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультатаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультатаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультатаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультатаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Действие:',
			style: 'position:absolute;left:8px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:58px;width:346px;height:28px;',
			height: 28,width: 346,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сумма:',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Сумма',
			style: 'position:absolute;left:82px;top:0px;width:102px;height:19px;',
			width: 102,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Новая статья:',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'НоваяСтатьяЗатрат.Представление',
			width: 265,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:81px;top:0px;width:265px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультатаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультатаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультатаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультатаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});