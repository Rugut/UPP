Ext.require(['Данные.Справочники.МедицинскиеСтраховыеПолисы'], function () 
{
	Ext.define('Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:515px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Медицинский страховой полис',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Серия полиса:',
			style: 'position:absolute;left:8px;top:133px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:145px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Номер полиса:',
			style: 'position:absolute;left:235px;top:133px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 80,
			height: 19,
			style: 'position:absolute;left:372px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФизлицо',
			text: 'Физическое лицо:',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Физлицо.Представление',
			width: 307,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:145px;top:33px;width:307px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидСтрахования',
			text: 'Вид страхования:',
			style: 'position:absolute;left:8px;top:83px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидСтрахования.Представление',
			width: 307,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:145px;top:83px;width:307px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиПолиса',
			text: 'Дата выдачи полиса:',
			style: 'position:absolute;left:8px;top:158px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыдачиПолиса',
			width: 80,
			height: 19,
			style: 'position:absolute;left:145px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияПолиса',
			text: 'Дата окончания полиса:',
			style: 'position:absolute;left:235px;top:158px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПолиса',
			width: 80,
			height: 19,
			style: 'position:absolute;left:372px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрограммаСтрахования',
			text: 'Программа страхования:',
			style: 'position:absolute;left:8px;top:108px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПрограммаСтрахования.Представление',
			width: 307,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:145px;top:108px;width:307px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРодственник',
			text: 'Родственник:',
			style: 'position:absolute;left:8px;top:205px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Родственник',
			width: 307,
			height: 19,
			style: 'position:absolute;left:145px;top:205px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:8px;top:256px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Пол.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:145px;top:256px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:235px;top:256px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРождения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:372px;top:256px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУдостоверениеЛичности',
			text: 'Удостоверение личности:',
			style: 'position:absolute;left:8px;top:281px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УдостоверениеЛичностиПредставление',
			width: 307,
			height: 19,
			style: 'position:absolute;left:145px;top:281px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресФактический',
			text: 'Адрес фактический:',
			style: 'position:absolute;left:8px;top:306px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресФактический',
			width: 307,
			height: 19,
			style: 'position:absolute;left:145px;top:306px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефонДомашний',
			text: 'Телефон домашний:',
			style: 'position:absolute;left:8px;top:331px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТелефонДомашний',
			width: 307,
			height: 19,
			style: 'position:absolute;left:145px;top:331px;width:307px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:460px;height:25px;',
			width: 460,
			height: 25,
			items:
			[
				'-',
				{
					text:'Файлы',
					tooltip:'Файлы и изображения',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтрахование',
			text: 'Страхование:',
			style: 'position:absolute;left:8px;top:181px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 444,
			height: 126,
			style: 'position:absolute;left:8px;top:356px;width:444px;height:126px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 307,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:145px;top:58px;width:307px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Сведения о застрахованном лице',
			style: 'position:absolute;left:8px;top:235px;width:444px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'сотрудника',
			style: 'position:absolute;left:145px;top:181px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'родственника',
			style: 'position:absolute;left:235px;top:181px;width:217px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:490px;width:460px;height:25px;',
			width: 460,
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