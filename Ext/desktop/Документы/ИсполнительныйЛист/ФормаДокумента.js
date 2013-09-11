Ext.require(['Данные.Документы.ИсполнительныйЛист'], function () 
{
	Ext.define('Документы.ИсполнительныйЛист.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:708px;height:498px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Исполнительный лист',
	
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
			style: 'position:absolute;left:370px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 104,
			height: 19,
			style: 'position:absolute;left:454px;top:33px;width:104px;height:19px;',
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
			style: 'position:absolute;left:580px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:57px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Физлицо.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:57px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:33px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьС_Основание',
			text: 'Период с:',
			style: 'position:absolute;left:370px;top:129px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 79,
			height: 19,
			style: 'position:absolute;left:454px;top:129px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:535px;top:129px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 79,
			height: 19,
			style: 'position:absolute;left:553px;top:129px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмер',
			text: 'Размер удержания:',
			style: 'position:absolute;left:16px;top:294px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Размер',
			style: 'position:absolute;left:121px;top:294px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:446px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 600,
			height: 19,
			style: 'position:absolute;left:100px;top:446px;width:600px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:708px;height:25px;',
			width: 708,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:562px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Вид документа:',
			style: 'position:absolute;left:16px;top:105px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Выдан:',
			style: 'position:absolute;left:370px;top:105px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РеквизитыИсполнительногоДокумента',
			width: 246,
			height: 19,
			style: 'position:absolute;left:454px;top:105px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Получатель:',
			style: 'position:absolute;left:16px;top:129px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Получатель.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:129px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДоВыплаты',
			text: 'До выплаты:',
			style: 'position:absolute;left:16px;top:317px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Предел',
			style: 'position:absolute;left:121px;top:317px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Ответственный:',
			style: 'position:absolute;left:370px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПолеВвода5.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:454px;top:57px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:100px;top:105px;width:246px;height:19px;',
			width: 246,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Реквизиты исполнительного документа',
			style: 'position:absolute;left:8px;top:84px;width:692px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Удержание',
			style: 'position:absolute;left:8px;top:156px;width:692px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Удерживать с:',
			style: 'position:absolute;left:16px;top:177px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДействия',
			width: 79,
			height: 19,
			style: 'position:absolute;left:100px;top:177px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Порядок выплаты получателю',
			style: 'position:absolute;left:8px;top:345px;width:692px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:338px;top:368px;width:362px;height:65px;',
			height: 65,width: 362,
			tabBar:{hidden:true},
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
			name: 'ТарифБанкаНаДенежныеПереводы.Представление',
			width: 182,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:180px;top:23px;width:182px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПочтовогоСбора',
			style: 'position:absolute;left:180px;top:46px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Тариф.Представление',
			width: 182,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:180px;top:23px;width:182px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскиеИздержки',
			text: 'Банковские издержки',
			style: 'position:absolute;left:0px;top:0px;width:123px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПочтовыйСбор',
			text: 'Почтовый сбор',
			style: 'position:absolute;left:0px;top:0px;width:135px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Рассчитывать по тарифу:',
			style: 'position:absolute;left:12px;top:23px;width:160px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Рассчитывать процентом:',
			style: 'position:absolute;left:12px;top:46px;width:160px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПрожиточныйМинимум.Представление',
			width: 232,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:265px;top:270px;width:232px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИсполнительныйЛист.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИсполнительныйЛист.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Процентом от заработка',
			style: 'position:absolute;left:24px;top:201px;width:151px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Процентом от заработка с учетом больничных листов',
			style: 'position:absolute;left:24px;top:224px;width:303px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Фиксированной суммой',
			style: 'position:absolute;left:24px;top:247px;width:151px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Кратно величине прожиточного минимума:',
			style: 'position:absolute;left:24px;top:270px;width:235px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Через кассу, перечислением на банковский счет',
			style: 'position:absolute;left:16px;top:368px;width:295px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Почтовым переводом',
			style: 'position:absolute;left:16px;top:391px;width:295px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Банковским переводом',
			style: 'position:absolute;left:16px;top:414px;width:295px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:708px;height:25px;',
			width: 708,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});