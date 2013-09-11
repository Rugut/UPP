Ext.require(['Данные.Документы.РасчетыПоСтраховымВзносам'], function () 
{
	Ext.define('Документы.РасчетыПоСтраховымВзносам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:510px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Расчеты с фондами по страховым взносам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:354px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:442px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:522px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:542px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:354px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:442px;top:58px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:354px;top:83px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:442px;top:83px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			width: 670,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:458px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 566,
			height: 19,
			style: 'position:absolute;left:96px;top:458px;width:566px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:110px;width:654px;height:340px;',
			height: 340,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРСтраховая',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:79px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРСтраховая',
			style: 'position:absolute;left:49px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНакопительная',
			text: 'Сумма:',
			style: 'position:absolute;left:0px;top:161px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРНакопительная',
			style: 'position:absolute;left:49px;top:161px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Страховая часть пенсии',
			style: 'position:absolute;left:0px;top:56px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить остатками',
			style: 'position:absolute;left:0px;top:304px;width:140px;height:36px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа',
			text: 'Вид платежа:',
			style: 'position:absolute;left:6px;top:23px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПлатежа.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа',
			text: 'Дата платежа:',
			style: 'position:absolute;left:303px;top:23px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа',
			width: 80,
			height: 19,
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Платеж',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежаОписание',
			text: 'Платеж будет учтен в строке 14Х в РСВ-1 ПФР за Х-й квартал',
			style: 'position:absolute;left:470px;top:19px;width:184px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:223px;width:654px;height:75px;',
			height: 75,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРНаДоплатуКПенсииШахтерам',
			text: 'На доплату к пенсии в угольной промышленности:',
			style: 'position:absolute;left:6px;top:48px;width:262px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРНаДоплатуКПенсииШахтерам',
			style: 'position:absolute;left:320px;top:48px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Дополнительные тарифы',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:15px;width:414px;height:25px;',
			height: 25,width: 414,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРПоДополнительномуТарифу',
			text: 'По дополнительному тарифу для членов летных экипажей:',
			style: 'position:absolute;left:6px;top:6px;width:302px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРПоДополнительномуТарифу',
			style: 'position:absolute;left:320px;top:6px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежаОписание3',
			text: 'Платеж будет учтен в строке 14Х в РВ-3 ПФР за Х-й квартал',
			style: 'position:absolute;left:425px;top:20px;width:229px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: 'Накопительная часть пенсии',
			style: 'position:absolute;left:0px;top:139px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФСС',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:79px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФСС',
			style: 'position:absolute;left:53px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФССНесчастныеСлучаи',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:161px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФССНесчастныеСлучаи',
			style: 'position:absolute;left:53px;top:161px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручениеФСС',
			text: 'Реквизиты платежного поручения: №',
			style: 'position:absolute;left:6px;top:107px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПлатежноеПоручениеФСС',
			width: 91,
			height: 19,
			style: 'position:absolute;left:205px;top:107px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Страхование на случай временной нетрудоспособности и в связи с материнством',
			style: 'position:absolute;left:0px;top:56px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручениеФСС_НС_ПЗ',
			text: 'Реквизиты платежного поручения: №',
			style: 'position:absolute;left:6px;top:188px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПлатежноеПоручениеФСС_НС_ПЗ',
			width: 91,
			height: 19,
			style: 'position:absolute;left:205px;top:188px;width:91px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПлатежноеПоручениеФССДата',
			width: 80,
			height: 19,
			style: 'position:absolute;left:336px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПлатежноеПоручениеФСС_НС_ПЗДата',
			width: 80,
			height: 19,
			style: 'position:absolute;left:336px;top:188px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт1',
			text: 'от:',
			style: 'position:absolute;left:304px;top:107px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт2',
			text: 'от:',
			style: 'position:absolute;left:304px;top:188px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа4',
			text: 'Вид платежа:',
			style: 'position:absolute;left:6px;top:23px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПлатежа4.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа4',
			text: 'Дата платежа:',
			style: 'position:absolute;left:303px;top:23px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа4',
			width: 80,
			height: 19,
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Платеж',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежаОписание1',
			text: 'Платеж будет учтен в строках Х-го месяца в 4-ФСС за Х-й квартал',
			style: 'position:absolute;left:470px;top:19px;width:184px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: 'Страхование от несчастных случаев на производстве и профессиональных заболеваний',
			style: 'position:absolute;left:0px;top:136px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить1',
			text: 'Заполнить остатками',
			style: 'position:absolute;left:0px;top:238px;width:140px;height:36px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФФОМС',
			text: 'Федеральный фонд:',
			style: 'position:absolute;left:6px;top:67px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФФОМС',
			style: 'position:absolute;left:138px;top:67px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьТФОМС',
			text: 'Территориальный фонд:',
			style: 'position:absolute;left:6px;top:95px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТФОМС',
			style: 'position:absolute;left:138px;top:95px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа5',
			text: 'Вид платежа:',
			style: 'position:absolute;left:6px;top:23px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПлатежа5.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа5',
			text: 'Дата платежа:',
			style: 'position:absolute;left:303px;top:23px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа5',
			width: 80,
			height: 19,
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Платеж',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежаОписание2',
			text: 'Платеж будет учтен в строке 14Х в РСВ-1 ПФР за Х-й квартал',
			style: 'position:absolute;left:470px;top:19px;width:184px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить2',
			text: 'Заполнить остатками',
			style: 'position:absolute;left:0px;top:142px;width:140px;height:36px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРСтраховая1',
			text: 'На страховую часть:',
			style: 'position:absolute;left:6px;top:79px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРСтраховая1',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНакопительная1',
			text: 'На накопительную часть:',
			style: 'position:absolute;left:6px;top:107px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРНакопительная1',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФСС1',
			text: 'Страхование на случай временной нетрудоспособности:',
			style: 'position:absolute;left:6px;top:159px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФСС1',
			style: 'position:absolute;left:313px;top:159px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФФОМС1',
			text: 'Федеральный:',
			style: 'position:absolute;left:6px;top:240px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФФОМС1',
			style: 'position:absolute;left:113px;top:240px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьТФОМС1',
			text: 'Территориальный:',
			style: 'position:absolute;left:202px;top:240px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТФОМС1',
			style: 'position:absolute;left:313px;top:240px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФССНесчастныеСлучаи1',
			text: 'Страхование от несчастных случаев на производстве:',
			style: 'position:absolute;left:6px;top:187px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФССНесчастныеСлучаи1',
			style: 'position:absolute;left:313px;top:187px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПФРПоДополнительномуТарифу1',
			text: 'По дополнительному тарифу:',
			style: 'position:absolute;left:240px;top:79px;width:165px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРПоДополнительномуТарифу1',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Начислено в ПФР',
			style: 'position:absolute;left:0px;top:56px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Начислено в ФСС',
			style: 'position:absolute;left:0px;top:136px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Начислено в ФОМС',
			style: 'position:absolute;left:0px;top:215px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНаДоплатуКПенсииШахтерам1',
			text: 'На доплату к пенсии в угольной промышленности:',
			style: 'position:absolute;left:240px;top:102px;width:165px;height:28px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРНаДоплатуКПенсииШахтерам1',
			style: 'position:absolute;left:412px;top:107px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа1',
			text: 'Вид начисления:',
			style: 'position:absolute;left:6px;top:23px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПлатежа1.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа1',
			text: 'Дата начисления:',
			style: 'position:absolute;left:315px;top:23px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц1',
			text: 'за:',
			style: 'position:absolute;left:500px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МесяцРасчетногоПериода1',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
			width: 66,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Начисление',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц10',
			text: 'год',
			style: 'position:absolute;left:593px;top:23px;width:47px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Страхование на случай временной нетрудоспособности и в связи с материнством',
			style: 'position:absolute;left:0px;top:56px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Страхование от несчастных случаев на производстве и профессиональных заболеваний',
			style: 'position:absolute;left:0px;top:136px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФСС2',
			style: 'position:absolute;left:257px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФСС3',
			style: 'position:absolute;left:257px;top:107px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД',
			text: 'По видам деятельности, не облагаемым ЕНВД:',
			style: 'position:absolute;left:6px;top:79px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД1',
			text: 'По видам деятельности, облагаемым ЕНВД:',
			style: 'position:absolute;left:7px;top:107px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД2',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:161px;width:42px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФССНесчастныеСлучаи2',
			style: 'position:absolute;left:54px;top:161px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа2',
			text: 'Вид расчетов:',
			style: 'position:absolute;left:6px;top:23px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПлатежа2.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа2',
			text: 'Дата операции:',
			style: 'position:absolute;left:326px;top:23px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа2',
			width: 80,
			height: 19,
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Пособия по страхованию',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц2',
			text: 'за:',
			style: 'position:absolute;left:500px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МесяцРасчетногоПериода2',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
			width: 66,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц11',
			text: 'год',
			style: 'position:absolute;left:593px;top:23px;width:47px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Страхование на случай временной нетрудоспособности и в связи с материнством',
			style: 'position:absolute;left:0px;top:56px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Страхование от несчастных случаев на производстве и профессиональных заболеваний',
			style: 'position:absolute;left:0px;top:108px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФСС4',
			style: 'position:absolute;left:54px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД3',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:79px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД4',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:133px;width:42px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФССНесчастныеСлучаи3',
			style: 'position:absolute;left:54px;top:133px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа3',
			text: 'Вид расчетов:',
			style: 'position:absolute;left:6px;top:23px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПлатежа3.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа3',
			text: 'Дата операции:',
			style: 'position:absolute;left:324px;top:23px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа3',
			width: 80,
			height: 19,
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Пособия по страхованию',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц3',
			text: 'за:',
			style: 'position:absolute;left:500px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МесяцРасчетногоПериода3',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
			width: 66,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц12',
			text: 'год',
			style: 'position:absolute;left:593px;top:23px;width:47px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКомментарийПлатежаСтраховая',
			text: 'НадписьКомментарийПлатежаСтраховая',
			style: 'position:absolute;left:138px;top:79px;width:516px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРСтраховая2',
			text: 'На страховую часть:',
			style: 'position:absolute;left:6px;top:79px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРСтраховая2',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНакопительная2',
			text: 'На накопительную часть:',
			style: 'position:absolute;left:6px;top:107px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРНакопительная2',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФСС2',
			text: 'Соц. страхование:',
			style: 'position:absolute;left:9px;top:159px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФСС5',
			style: 'position:absolute;left:113px;top:159px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФФОМС2',
			text: 'Федеральный фонд:',
			style: 'position:absolute;left:5px;top:244px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФФОМС2',
			style: 'position:absolute;left:113px;top:244px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьТФОМС2',
			text: 'Территориальный фонд:',
			style: 'position:absolute;left:202px;top:244px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТФОМС2',
			style: 'position:absolute;left:334px;top:244px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФССНесчастныеСлучаи2',
			text: 'Несчастные случаи:',
			style: 'position:absolute;left:9px;top:187px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФССНесчастныеСлучаи4',
			style: 'position:absolute;left:113px;top:187px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПФРПоДополнительномуТарифу2',
			text: 'По дополнительному тарифу:',
			style: 'position:absolute;left:240px;top:79px;width:165px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРПоДополнительномуТарифу2',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручениеФСС1',
			text: 'Реквизиты платежного поручения: №',
			style: 'position:absolute;left:202px;top:159px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПлатежноеПоручениеФСС1',
			width: 91,
			height: 19,
			style: 'position:absolute;left:401px;top:159px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Уплачено в ПФР',
			style: 'position:absolute;left:0px;top:56px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Уплачено в ФСС',
			style: 'position:absolute;left:0px;top:136px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручениеФСС_НС_ПЗ1',
			text: 'Реквизиты платежного поручения: №',
			style: 'position:absolute;left:202px;top:187px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПлатежноеПоручениеФСС_НС_ПЗ1',
			width: 91,
			height: 19,
			style: 'position:absolute;left:401px;top:187px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Уплачено в ФОМС',
			style: 'position:absolute;left:0px;top:219px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПлатежноеПоручениеФССДата1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:529px;top:159px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПлатежноеПоручениеФСС_НС_ПЗДата1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:529px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт3',
			text: 'от:',
			style: 'position:absolute;left:500px;top:159px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт4',
			text: 'от:',
			style: 'position:absolute;left:500px;top:187px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНаДоплатуКПенсииШахтерам2',
			text: 'На доплату к пенсии в угольной промышленности:',
			style: 'position:absolute;left:240px;top:98px;width:165px;height:28px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРНаДоплатуКПенсииШахтерам2',
			style: 'position:absolute;left:412px;top:107px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа6',
			text: 'Вид платежа:',
			style: 'position:absolute;left:6px;top:23px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПлатежа6.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа6',
			text: 'Дата платежа:',
			style: 'position:absolute;left:331px;top:23px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа6',
			width: 80,
			height: 19,
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц6',
			text: 'за:',
			style: 'position:absolute;left:500px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МесяцРасчетногоПериода6',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
			width: 66,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Платеж',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц13',
			text: 'год',
			style: 'position:absolute;left:593px;top:23px;width:47px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРСтраховая3',
			text: 'На страховую часть:',
			style: 'position:absolute;left:6px;top:79px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРСтраховая3',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНакопительная3',
			text: 'На накопительную часть:',
			style: 'position:absolute;left:6px;top:107px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРНакопительная3',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФСС3',
			text: 'Страхование на случай временной нетрудоспособности:',
			style: 'position:absolute;left:6px;top:159px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФСС6',
			style: 'position:absolute;left:313px;top:159px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФФОМС3',
			text: 'Федеральный:',
			style: 'position:absolute;left:6px;top:240px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФФОМС3',
			style: 'position:absolute;left:113px;top:240px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьТФОМС3',
			text: 'Территориальный:',
			style: 'position:absolute;left:202px;top:240px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТФОМС3',
			style: 'position:absolute;left:313px;top:240px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьФССНесчастныеСлучаи3',
			text: 'Страхование от несчастных случаев на производстве:',
			style: 'position:absolute;left:6px;top:187px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ФССНесчастныеСлучаи5',
			style: 'position:absolute;left:313px;top:187px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПФРПоДополнительномуТарифу3',
			text: 'По дополнительному тарифу:',
			style: 'position:absolute;left:240px;top:79px;width:165px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРПоДополнительномуТарифу3',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Начислено в ПФР',
			style: 'position:absolute;left:0px;top:56px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Начислено в ФСС',
			style: 'position:absolute;left:0px;top:136px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Начислено в ФОМС',
			style: 'position:absolute;left:0px;top:215px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНаДоплатуКПенсииШахтерам3',
			text: 'На доплату к пенсии в угольной промышленности:',
			style: 'position:absolute;left:240px;top:102px;width:165px;height:28px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПФРНаДоплатуКПенсииШахтерам3',
			style: 'position:absolute;left:412px;top:107px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа7',
			text: 'Доначислено:',
			style: 'position:absolute;left:6px;top:23px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПлатежа7.Представление',
			width: 214,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа7',
			text: 'Дата начисления:',
			style: 'position:absolute;left:315px;top:23px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежа7',
			width: 80,
			height: 19,
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Начисление',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц14',
			text: 'за:',
			style: 'position:absolute;left:498px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МесяцРасчетногоПериода',
			width: 127,
			height: 19,
			style: 'position:absolute;left:520px;top:23px;width:127px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОперация',
			text: 'Платежи по страховым взносам в каждый из фондов регистрируются отдельной операцией.',
			style: 'position:absolute;left:8px;top:58px;width:327px;height:51px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидОперации',
			text: 'Уплата/начисление:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидОперации.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:115px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетыПоСтраховымВзносам.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:0px;top:485px;width:670px;height:25px;',
			width: 670,
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