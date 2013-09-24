Ext.require(['Данные.Справочники.НастройкиФормированияДокументовОтработанногоВремени'], function () 
{
	Ext.define('Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:335px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки формирования документов отработанного времени',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 307,
			height: 19,
			style: 'position:absolute;left:101px;top:58px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Родитель.Представление',
			width: 307,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:101px;top:33px;width:307px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			width: 416,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаФормирования',
			text: 'Формировать документы начиная с: ',
			style: 'position:absolute;left:8px;top:82px;width:190px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВвода2',
			width: 80,
			height: 19,
			style: 'position:absolute;left:203px;top:82px;width:80px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:106px;width:400px;height:172px;',
			height: 172,width: 400,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПолеВвода4.Представление',
			width: 293,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:99px;top:6px;width:293px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Способ ввода времени',
			style: 'position:absolute;left:6px;top:79px;width:386px;height:19px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПериодДетализации',
			text: 'Детализация',
			style: 'position:absolute;left:6px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодДетализации',
			width: 293,
			height: 19,
			style: 'position:absolute;left:99px;top:54px;width:293px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:6px;top:26px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПолеВвода5.Представление',
			width: 293,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:99px;top:30px;width:293px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлементаСобытия");
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
			boxLabel: 'По дням периода',
			style: 'position:absolute;left:6px;top:103px;width:168px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сводно, в целом за период',
			style: 'position:absolute;left:6px;top:127px;width:168px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание',
			style: 'position:absolute;left:6px;top:6px;width:156px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПредставлениеРасписания',
			text: '<Ввести расписание>',
			style: 'position:absolute;left:22px;top:30px;width:296px;height:43px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Задержка',
			style: 'position:absolute;left:278px;top:78px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не обрабатывать документы за предыдущие: ',
			style: 'position:absolute;left:22px;top:78px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеЗадержка',
			text: 'НадписьПояснениеЗадержка',
			style: 'position:absolute;left:39px;top:102px;width:353px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗадержка',
			text: 'дней',
			style: 'position:absolute;left:323px;top:78px;width:29px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода6',
			width: 307,
			height: 19,
			style: 'position:absolute;left:101px;top:283px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий',
			style: 'position:absolute;left:8px;top:283px;width:88px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:416px;height:25px;',
			width: 416,
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