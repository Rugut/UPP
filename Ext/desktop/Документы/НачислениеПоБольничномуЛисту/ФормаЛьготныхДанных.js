Ext.require(['Данные.Документы.НачислениеПоБольничномуЛисту'], function () 
{
	Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанных',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:596px;height:139px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Начисление по больничному листу',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:580px;height:98px;',
			height: 98,width: 580,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты2',
			text: 'Процент оплаты от среднего заработка:',
			style: 'position:absolute;left:0px;top:48px;width:208px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеПособия2',
			text: 'Ограничение заработка (пособия):',
			style: 'position:absolute;left:0px;top:73px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Расчет по страховому стажу',
			style: 'position:absolute;left:229px;top:0px;width:181px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыБезЛьгот1',
			style: 'position:absolute;left:229px;top:48px;width:57px;height:19px;',
			width: 57,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОграничениеПособияБезЛьгот1.Представление',
			width: 351,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:229px;top:73px;width:351px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет',
			text: 'Страховой стаж без нестраховых периодов:',
			style: 'position:absolute;left:0px;top:23px;width:225px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажЛет',
			style: 'position:absolute;left:229px;top:23px;width:57px;height:19px;',
			width: 57,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'месяцев',
			style: 'position:absolute;left:380px;top:23px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:317px;top:23px;width:57px;height:19px;',
			width: 57,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет1',
			text: 'лет',
			style: 'position:absolute;left:292px;top:23px;width:21px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Применять льготы при начислении пособия',
			style: 'position:absolute;left:0px;top:75px;width:389px;height:23px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты3',
			text: 'Процент оплаты от среднего заработка:',
			style: 'position:absolute;left:0px;top:23px;width:208px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплаты3',
			style: 'position:absolute;left:217px;top:23px;width:57px;height:19px;',
			width: 57,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеПособия3',
			text: 'Ограничение заработка (пособия):',
			style: 'position:absolute;left:0px;top:48px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОграничениеПособия.Представление',
			width: 172,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:217px;top:48px;width:172px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Расчет без льгот',
			style: 'position:absolute;left:408px;top:0px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Расчет с использованием льгот',
			style: 'position:absolute;left:217px;top:0px;width:172px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыБезЛьгот2',
			style: 'position:absolute;left:408px;top:23px;width:57px;height:19px;',
			width: 57,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОграничениеПособияБезЛьгот2.Представление',
			width: 172,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:408px;top:48px;width:172px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанныхСобытия");
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:114px;width:596px;height:25px;',
			width: 596,
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
					text:'Справка',
				},
			]
		},
	]
	});
});