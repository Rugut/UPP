Ext.require(['Данные.Документы.ИзменениеУсловийИсполнительногоЛиста'], function () 
{
	Ext.define('Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:708px;height:472px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Изменение условий удержания по исполнительному листу',
	
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
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
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
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
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
			style: 'position:absolute;left:100px;top:150px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмер',
			text: 'Размер удержания:',
			style: 'position:absolute;left:16px;top:267px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Размер',
			style: 'position:absolute;left:121px;top:267px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:420px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 600,
			height: 19,
			style: 'position:absolute;left:100px;top:420px;width:600px;height:19px;',
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
			name: 'НадписьДоВыплаты',
			text: 'До выплаты:',
			style: 'position:absolute;left:16px;top:291px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Предел',
			style: 'position:absolute;left:121px;top:291px;width:80px;height:19px;',
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
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Удержание',
			style: 'position:absolute;left:8px;top:129px;width:692px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Удерживать по:',
			style: 'position:absolute;left:16px;top:150px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИзменения',
			width: 79,
			height: 19,
			style: 'position:absolute;left:522px;top:80px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Порядок выплаты получателю',
			style: 'position:absolute;left:8px;top:319px;width:692px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:338px;top:342px;width:362px;height:65px;',
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
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
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
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:265px;top:243px;width:232px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИсполнительныйЛист',
			text: 'Исполнительный лист:',
			style: 'position:absolute;left:8px;top:80px;width:90px;height:31px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ИсполнительныйЛист.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:86px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИзменения1',
			width: 79,
			height: 19,
			style: 'position:absolute;left:522px;top:102px;width:79px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Процентом от заработка',
			style: 'position:absolute;left:24px;top:174px;width:151px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Процентом от заработка с учетом больничных листов',
			style: 'position:absolute;left:24px;top:197px;width:303px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Фиксированной суммой',
			style: 'position:absolute;left:24px;top:220px;width:151px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Кратно величине прожиточного минимума:',
			style: 'position:absolute;left:24px;top:243px;width:235px;height:19px;',
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
			style: 'position:absolute;left:16px;top:342px;width:295px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Почтовым переводом',
			style: 'position:absolute;left:16px;top:365px;width:295px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Банковским переводом',
			style: 'position:absolute;left:16px;top:388px;width:295px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Изменить условия с:',
			style: 'position:absolute;left:370px;top:80px;width:130px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прекратить удержания с:',
			style: 'position:absolute;left:370px;top:102px;width:148px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:447px;width:708px;height:25px;',
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
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
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
	]
	});
});