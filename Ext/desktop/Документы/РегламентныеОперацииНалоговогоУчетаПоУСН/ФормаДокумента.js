Ext.require(['Данные.Документы.РегламентныеОперацииНалоговогоУчетаПоУСН'], function () 
{
	Ext.define('Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:382px;height:274px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регламентные операции налогового учета (УСН)',
	
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
			width: 119,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:215px;top:33px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 140,
			height: 19,
			style: 'position:absolute;left:234px;top:33px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:83px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 278,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:83px;width:278px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:382px;height:25px;',
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
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределение расходов по видам деятельности (ЕНВД / не ЕНВД)',
			style: 'position:absolute;left:8px;top:131px;width:366px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'За период:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			width: 119,
			height: 19,
			style: 'position:absolute;left:96px;top:58px;width:119px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Признание расходов на приобретение основных с��едств',
			style: 'position:absolute;left:8px;top:152px;width:366px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:222px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 278,
			height: 19,
			style: 'position:absolute;left:96px;top:222px;width:278px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:199px;width:88px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 278,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:199px;width:278px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентныеОперацииНалоговогоУчетаПоУСН.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Признание расходов на приобретение нематериальных активов',
			style: 'position:absolute;left:8px;top:173px;width:366px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Списание доп. расходов',
			style: 'position:absolute;left:8px;top:110px;width:366px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:249px;width:382px;height:25px;',
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