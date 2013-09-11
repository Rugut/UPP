Ext.require(['Данные.Справочники.ОсновныеСредства'], function () 
{
	Ext.define('Справочники.ОсновныеСредства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:764px;height:495px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Основные средства',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Инв. №:',
			style: 'position:absolute;left:591px;top:33px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 90,
			height: 19,
			style: 'position:absolute;left:666px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 484,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:484px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПрочиеСведения',
			style: 'position:absolute;left:94px;top:443px;width:662px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:764px;height:25px;',
			width: 764,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Зарегистрированные оплаты основных средств (УСН)',
					tooltip:'',
				},
				'-',
				{
					text:'Документы комплектации ОС',
					tooltip:'Документы комплектации ОС',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:105px;width:748px;height:334px;',
			height: 334,width: 748,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Группа ОС:',
			style: 'position:absolute;left:6px;top:6px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель.Представление',
			width: 592,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:6px;width:592px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Полное наименование:',
			style: 'position:absolute;left:6px;top:30px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 592,
			height: 19,
			style: 'position:absolute;left:148px;top:30px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Изготовитель',
			width: 592,
			height: 19,
			style: 'position:absolute;left:148px;top:75px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПаспорта',
			width: 592,
			height: 19,
			style: 'position:absolute;left:148px;top:123px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗаводскойНомер',
			width: 592,
			height: 19,
			style: 'position:absolute;left:148px;top:99px;width:592px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыпуска',
			width: 80,
			height: 19,
			style: 'position:absolute;left:148px;top:147px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОС.Представление',
			width: 592,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:216px;width:592px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
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
			name: 'КодПоОКОФ.Представление',
			width: 592,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:192px;width:592px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
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
			name: 'АмортизационнаяГруппа.Представление',
			width: 592,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:240px;width:592px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автотранспорт',
			style: 'position:absolute;left:6px;top:266px;width:101px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Данные изготовителя',
			style: 'position:absolute;left:6px;top:54px;width:734px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Постоянные сведения',
			style: 'position:absolute;left:6px;top:171px;width:734px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьАдресМестонахождения',
			text: 'Адрес местонахождения:',
			style: 'position:absolute;left:6px;top:289px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресМестонахождения',
			width: 467,
			height: 19,
			style: 'position:absolute;left:148px;top:289px;width:467px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодРегиона',
			text: 'Код региона:',
			style: 'position:absolute;left:625px;top:289px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодРегиона',
			width: 42,
			height: 19,
			style: 'position:absolute;left:698px;top:289px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись118',
			text: 'Сведения о недвижимости заполняются для группы "Здания", "Сооружения"',
			style: 'position:absolute;left:6px;top:6px;width:734px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНазначениеПомещения',
			text: 'Назначение помещения:',
			style: 'position:absolute;left:14px;top:118px;width:126px;height:20px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ПодразделениеУУ.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:144px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'МОЛУУ.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:168px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ВСоставе.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:192px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Номенклатура.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:240px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Характеристика.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:264px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособАмортизацииУУ',
			width: 248,
			height: 19,
			style: 'position:absolute;left:492px;top:192px;width:248px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'НаправленияАмортизацииУУ.Представление',
			width: 248,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:492px;top:144px;width:248px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГодовойГрафикУУ',
			width: 120,
			height: 19,
			style: 'position:absolute;left:620px;top:216px;width:120px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТекущаяСтоимостьУУ',
			style: 'position:absolute;left:182px;top:51px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервоначальнаяСтоимостьУУ',
			style: 'position:absolute;left:182px;top:27px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОбъемРаботУУ',
			style: 'position:absolute;left:182px;top:99px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокИспользованияУУ',
			style: 'position:absolute;left:182px;top:75px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПринятоКУчетуУУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВведеноВЭксплуатациюУУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СнятоСУчетаУУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТекАмортизацияУУ',
			style: 'position:absolute;left:492px;top:168px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентГодовойАмортизацииУУ',
			style: 'position:absolute;left:492px;top:216px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэфУскоренияУУ',
			style: 'position:absolute;left:492px;top:240px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ПараметрВыработкиУУ.Представление',
			width: 248,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:492px;top:264px;width:248px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Местонахождение и состав: ',
			style: 'position:absolute;left:6px;top:123px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'До принятия к учету являлось:',
			style: 'position:absolute;left:6px;top:219px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Стоимость и срок использования:',
			style: 'position:absolute;left:6px;top:6px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Состояния учета:',
			style: 'position:absolute;left:344px;top:6px;width:396px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Данные амортизации:',
			style: 'position:absolute;left:344px;top:123px;width:396px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СчетУчетаСтоимостиБУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:142px;top:240px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособПоступленияБУ',
			width: 182,
			height: 19,
			style: 'position:absolute;left:142px;top:216px;width:182px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СчетУчетаАмортизацииБУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:142px;top:264px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
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
			name: 'ТекущаяСтоимостьБУ',
			style: 'position:absolute;left:182px;top:51px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервоначальнаяСтоимостьБУ',
			style: 'position:absolute;left:182px;top:27px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОбъемРаботБУ',
			style: 'position:absolute;left:182px;top:99px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокИспользованияБУ',
			style: 'position:absolute;left:182px;top:75px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособАмортизацииБУ',
			width: 248,
			height: 19,
			style: 'position:absolute;left:492px;top:192px;width:248px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'НаправленияАмортизацииБУ.Представление',
			width: 248,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:492px;top:144px;width:248px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ГодовойГрафикБУ.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:620px;top:216px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
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
			name: 'ПринятоКУчетуБУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВведеноВЭксплуатациюБУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СнятоСУчетаБУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТекАмортизацияБУ',
			style: 'position:absolute;left:492px;top:168px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентГодовойАмортизацииБУ',
			style: 'position:absolute;left:492px;top:216px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэфУскоренияБУ',
			style: 'position:absolute;left:492px;top:240px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ПодразделениеБУ.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:144px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'МОЛБУ.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:168px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ПараметрВыработкиБУ.Представление',
			width: 248,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:492px;top:264px;width:248px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Счета учета и способ поступления: ',
			style: 'position:absolute;left:6px;top:195px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Стоимость и срок использования:',
			style: 'position:absolute;left:6px;top:6px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Состояния учета:',
			style: 'position:absolute;left:344px;top:6px;width:396px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Данные амортизации:',
			style: 'position:absolute;left:344px;top:123px;width:396px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Местонахождение и состав: ',
			style: 'position:absolute;left:6px;top:123px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПомещение',
			text: 'Помещение',
			style: 'position:absolute;left:14px;top:92px;width:125px;height:20px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Первоначальная стоимость:',
			style: 'position:absolute;left:12px;top:27px;width:168px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись75',
			text: 'Первоначальная стоимость:',
			style: 'position:absolute;left:12px;top:27px;width:168px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТекущаяСтоимостьНУ',
			style: 'position:absolute;left:182px;top:51px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервоначальнаяСтоимостьНУ',
			style: 'position:absolute;left:182px;top:27px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокИспользованияНУ',
			style: 'position:absolute;left:182px;top:75px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособАмортизацииНУ',
			width: 240,
			height: 19,
			style: 'position:absolute;left:500px;top:169px;width:240px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'НаправленияАмортизацииНУ.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:500px;top:121px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
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
			name: 'ТекАмортизацияНУ',
			style: 'position:absolute;left:500px;top:145px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СчетУчетаСтоимостиНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:240px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СчетУчетаАмортизацииНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:146px;top:264px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
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
			name: 'ПринятоКУчетуНУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВведеноВЭксплуатациюНУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СнятоСУчетаНУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:492px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СпецКоэффициентНУ',
			style: 'position:absolute;left:500px;top:193px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Стоимость и срок использования:',
			style: 'position:absolute;left:6px;top:6px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Данные амортизации:',
			style: 'position:absolute;left:344px;top:100px;width:396px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Счета учета и способ поступления: ',
			style: 'position:absolute;left:6px;top:219px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Состояния учета:',
			style: 'position:absolute;left:344px;top:6px;width:396px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Налогообложение',
			style: 'position:absolute;left:344px;top:219px;width:396px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПорядокВключенияСтоимостиВСоставРасходовНУ',
			width: 255,
			height: 19,
			style: 'position:absolute;left:69px;top:121px;width:255px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись117',
			text: 'Порядок:',
			style: 'position:absolute;left:12px;top:121px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Порядок включения стоимости в состав расходов:',
			style: 'position:absolute;left:6px;top:100px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НалогНаИмущество',
			text: 'Ставки налога на имущество',
			style: 'position:absolute;left:350px;top:240px;width:192px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТранспортныйНалог',
			text: 'Регистрация транспортных средств',
			style: 'position:absolute;left:350px;top:264px;width:192px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ЗемельныйНалог',
			text: 'Регистрация земельных участков',
			style: 'position:absolute;left:350px;top:288px;width:192px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись95',
			text: 'Принято к учету:',
			style: 'position:absolute;left:6px;top:30px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись96',
			text: 'Снято с учета:',
			style: 'position:absolute;left:6px;top:78px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПринятоКУчетуУСН',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СнятоСУчетаУСН',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:78px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаДокументПринятияКУчетуУСН',
			text: 'Документ принятия к учету',
			style: 'position:absolute;left:262px;top:30px;width:476px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаДокументСнятияСУчетаУСН',
			text: 'Документ снятия с учета',
			style: 'position:absolute;left:262px;top:78px;width:476px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись97',
			text: 'Введено в эксплуатацию:',
			style: 'position:absolute;left:6px;top:54px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВведеноВЭксплуатациюУСН',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаДокументВводаВЭксплуатациюУСН',
			text: 'Документ ввода в эксплуатацию',
			style: 'position:absolute;left:262px;top:54px;width:476px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись98',
			text: 'Первоначальная стоимость:',
			style: 'position:absolute;left:6px;top:102px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервоначальнаяСтоимостьУСН',
			style: 'position:absolute;left:176px;top:102px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'РеглВалюта6',
			text: 'РеглВалюта',
			style: 'position:absolute;left:262px;top:102px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись99',
			text: 'Срок полез. использования:',
			style: 'position:absolute;left:6px;top:126px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокИспользованияУСН',
			style: 'position:absolute;left:176px;top:126px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'мес2',
			text: 'мес.',
			style: 'position:absolute;left:262px;top:126px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись100',
			text: 'Дата приобретения:',
			style: 'position:absolute;left:6px;top:6px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПриобретения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокВключенияСтоимостиВСоставРасходовУСН',
			text: 'Порядок включения стоимости в состав расходов (УСН):',
			style: 'position:absolute;left:6px;top:151px;width:162px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПорядокВключенияСтоимостиВСоставРасходовУСН',
			width: 562,
			height: 19,
			style: 'position:absolute;left:176px;top:151px;width:562px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'УпрВалюта',
			text: 'УпрВалюта',
			style: 'position:absolute;left:264px;top:27px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта',
			text: 'РеглВалюта',
			style: 'position:absolute;left:264px;top:27px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта3',
			text: 'РеглВалюта',
			style: 'position:absolute;left:264px;top:27px;width:60px;height:19px;text-align:left;',
		},
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:733px;height:259px;',
			height: 259,width: 733,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'139',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'239',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ОсновныеСредства").data,
					fields: ['Ссылка','Родитель.Представление','ПометкаУдаления','Свойство','Значение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОсновныеСредства/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('СвойстваИЗначения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:733px;height:24px;',
			width: 733,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Изготовитель:',
			style: 'position:absolute;left:6px;top:75px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Принято к учету:',
			style: 'position:absolute;left:350px;top:27px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Счет учета стоимости:',
			style: 'position:absolute;left:12px;top:240px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись63',
			text: 'Принято к учету:',
			style: 'position:absolute;left:350px;top:27px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись89',
			text: 'Принято к учету:',
			style: 'position:absolute;left:350px;top:27px;width:140px;height:19px;text-align:left;',
		},
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:733px;height:259px;',
			height: 259,width: 733,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'220',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ОсновныеСредства").data,
					fields: ['Ссылка','Родитель.Представление','ПометкаУдаления','Принадлежность','Категория',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОсновныеСредства/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('Категории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:733px;height:24px;',
			width: 733,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
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
			name: 'Надпись39',
			text: 'Первоначальная стоимость:',
			style: 'position:absolute;left:12px;top:27px;width:168px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Является помещением или составной частью здания (сооружения)',
			style: 'position:absolute;left:145px;top:92px;width:595px;height:20px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'НазначениеПомещения.Представление',
			width: 150,
			height: 20,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:145px;top:118px;width:150px;height:20px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:30px;width:134px;height:59px;',
			height: 59,width: 134,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Кадастровый номер',
			style: 'position:absolute;left:8px;top:6px;width:120px;height:20px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Условный номер',
			style: 'position:absolute;left:8px;top:33px;width:120px;height:20px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:141px;top:30px;width:599px;height:59px;',
			height: 59,width: 599,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УсловныйНомер',
			width: 590,
			height: 20,
			style: 'position:absolute;left:3px;top:33px;width:590px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КадастровыйНомер',
			width: 590,
			height: 20,
			style: 'position:absolute;left:3px;top:6px;width:590px;height:20px;',
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
			name: 'Надпись13',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:443px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 484,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:57px;width:484px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИнвентарныйНомер',
			width: 90,
			height: 19,
			style: 'position:absolute;left:666px;top:57px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Инв. № (Орг):',
			style: 'position:absolute;left:591px;top:57px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСведений',
			width: 122,
			height: 19,
			style: 'position:absolute;left:94px;top:81px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ДатаВыводаСведений',
			text: 'Дата сведений:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:470px;width:764px;height:25px;',
			width: 764,
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