Ext.require(['Данные.Справочники.СерииНоменклатуры'], function () 
{
	Ext.define('Справочники.СерииНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:317px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Серии номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			width: 604,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
					iconCls:'x-CloneObject',
				},
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
				},
				{
					text:'Записать и закрыть',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Файлы',
					tooltip:'Файлы',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
					iconCls:'x-CloneObject',
				},
				'-',
				{
					text:'Файлы',
					tooltip:'Файлы',
				},
				'-',
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
				'-',
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:151px;top:33px;width:445px;height:251px;',
			height: 251,width: 445,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:362px;top:33px;width:34px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:397px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:33px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 238,
			height: 19,
			style: 'position:absolute;left:120px;top:33px;width:238px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Владелец:',
			style: 'position:absolute;left:6px;top:6px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Владелец.Представление',
			width: 317,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:6px;width:317px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СерииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СерииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СерииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СерииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСерийныйНомер',
			text: 'Номер серии:',
			style: 'position:absolute;left:6px;top:62px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерийныйНомер',
			width: 317,
			height: 19,
			style: 'position:absolute;left:120px;top:61px;width:317px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокГодности',
			text: 'Срок годности:',
			style: 'position:absolute;left:6px;top:162px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СрокГодности',
			width: 88,
			height: 19,
			style: 'position:absolute;left:120px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерГТД',
			text: 'Номер ГТД:',
			style: 'position:absolute;left:6px;top:86px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'НомерГТД.Представление',
			width: 317,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:86px;width:317px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СерииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СерииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СерииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СерииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтрана',
			text: 'Страна :',
			style: 'position:absolute;left:6px;top:112px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтранаПроисхождения.Представление',
			width: 317,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:112px;width:317px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СерииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СерииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СерииНоменклатуры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СерииНоменклатуры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:6px;top:137px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 317,
			height: 19,
			style: 'position:absolute;left:120px;top:137px;width:317px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерСертификата',
			text: 'Сертификат №:',
			style: 'position:absolute;left:6px;top:27px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСертификата',
			width: 208,
			height: 19,
			style: 'position:absolute;left:120px;top:27px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификата',
			text: 'от',
			style: 'position:absolute;left:332px;top:27px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСертификата',
			width: 88,
			height: 19,
			style: 'position:absolute;left:349px;top:27px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Внешняя сертификация',
			style: 'position:absolute;left:6px;top:6px;width:431px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСертификации',
			width: 88,
			height: 19,
			style: 'position:absolute;left:120px;top:53px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификации',
			text: 'Дата сертификации:',
			style: 'position:absolute;left:6px;top:53px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаЗаписьСертификации',
			text: 'ГиперссылкаЗаписьСертификации',
			style: 'position:absolute;left:6px;top:77px;width:431px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Внутренняя сертификация',
			style: 'position:absolute;left:6px;top:115px;width:431px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСертификатаВнутреннего',
			text: 'Сертификат №:',
			style: 'position:absolute;left:6px;top:137px;width:114px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСертификатаВнутр',
			width: 208,
			height: 19,
			style: 'position:absolute;left:120px;top:137px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификатаВнутр',
			text: 'от',
			style: 'position:absolute;left:332px;top:137px;width:13px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСертификатаВнутр',
			width: 88,
			height: 19,
			style: 'position:absolute;left:349px;top:137px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСертификацииВнутр',
			width: 88,
			height: 19,
			style: 'position:absolute;left:120px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификации1',
			text: 'Дата сертификации:',
			style: 'position:absolute;left:6px;top:162px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаЗаписьСертификацииВнутр',
			text: 'ГиперссылкаЗаписьСертификацииВнутр',
			style: 'position:absolute;left:6px;top:187px;width:431px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:0px;top:292px;width:604px;height:25px;',
			width: 604,
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