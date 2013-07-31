Ext.require(['Данные.Документы.ПереоценкаВалютныхСредств'], function () 
{
	Ext.define('Документы.ПереоценкаВалютныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:353px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переоценка валютных средств',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
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
			width: 149,
			height: 19,
			style: 'position:absolute;left:196px;top:33px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:366px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 249,
			height: 19,
			style: 'position:absolute;left:96px;top:366px;width:249px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:318px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеКомпании.Представление',
			width: 249,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:318px;width:249px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценивать денежные средства в кассах',
			style: 'position:absolute;left:20px;top:99px;width:325px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценивать денежные средства на банковских счетах',
			style: 'position:absolute;left:20px;top:120px;width:325px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценивать взаиморасчеты с контрагентами',
			style: 'position:absolute;left:20px;top:141px;width:325px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценивать взаиморасчеты с подотчетными лицами',
			style: 'position:absolute;left:20px;top:162px;width:325px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:393px;width:353px;height:25px;',
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
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:342px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Ответственный.Представление',
			width: 249,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:342px;width:249px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отражать в налог. учете',
			style: 'position:absolute;left:201px;top:207px;width:144px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 249,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:228px;width:249px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереоценкаВалютныхСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Управленческий учет ',
			style: 'position:absolute;left:8px;top:57px;width:337px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Регламентированный учет ',
			style: 'position:absolute;left:8px;top:186px;width:337px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:228px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Прочее ',
			style: 'position:absolute;left:8px;top:297px;width:337px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценка валютных средств ',
			style: 'position:absolute;left:96px;top:252px;width:249px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценка расчетов в условных единицах',
			style: 'position:absolute;left:96px;top:273px;width:249px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Отражать в управленческом учете',
			style: 'position:absolute;left:8px;top:78px;width:200px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отражать в бухгалтерском учете',
			style: 'position:absolute;left:8px;top:207px;width:189px;height:16px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:353px;height:25px;',
			dock: 'top',
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
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
	});
});