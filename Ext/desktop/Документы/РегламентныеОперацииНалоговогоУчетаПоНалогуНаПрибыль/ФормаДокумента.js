Ext.require(['Данные.Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль'], function () 
{
	Ext.define('Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:384px;height:287px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регламентные операции налогового учета (по налогу на приб.)',
	
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
			style: 'position:absolute;left:97px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:182px;top:33px;width:16px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:203px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:81px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 279,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:81px;width:279px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Нормирование расходов на рекламу',
			style: 'position:absolute;left:8px;top:130px;width:368px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Нормирование расходов на добровольное страхование и расходов на возмещение затрат работников по уплате процентов',
			style: 'position:absolute;left:8px;top:151px;width:368px;height:30px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Нормирование представительских расходов',
			style: 'position:absolute;left:8px;top:184px;width:368px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределение расходов по видам деятельности (ЕНВД / не ЕНВД)',
			style: 'position:absolute;left:8px;top:109px;width:368px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'За период:',
			style: 'position:absolute;left:8px;top:57px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ПредставлениеПериодаРегистрации',
			width: 119,
			height: 19,
			style: 'position:absolute;left:97px;top:57px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:208px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 279,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:208px;width:279px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:233px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 279,
			height: 19,
			style: 'position:absolute;left:97px;top:233px;width:279px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:262px;width:384px;height:25px;',
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