Ext.require(['Данные.Справочники.НастройкиДопроведенияДокументов'], function () 
{
	Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:140px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка периода допроведения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДоТекущейДатыКонец',
			text: 'до текущей даты',
			style: 'position:absolute;left:406px;top:77px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ПериодичностьОтставанияКонецИнтервала.Представление',
			width: 76,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:325px;top:77px;width:76px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведенияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведенияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведенияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведенияСобытия");
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
			name: 'КоличествоПериодовОтставанияКонецИнтервала',
			style: 'position:absolute;left:290px;top:77px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУстановленПериод',
			text: 'НадписьУстановленПериод',
			style: 'position:absolute;left:8px;top:8px;width:497px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаДопроведения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:34px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодовОтставанияНачалоИнтервала',
			style: 'position:absolute;left:34px;top:77px;width:32px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ПериодичностьОтставанияНачалоИнтервала.Представление',
			width: 76,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:73px;top:77px;width:76px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведенияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведенияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведенияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведенияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДоТекущейДатыНачало',
			text: 'до текущей даты',
			style: 'position:absolute;left:156px;top:77px;width:89px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Начало ',
			style: 'position:absolute;left:8px;top:28px;width:244px;height:78px;',
		},
		{
			xtype: 'fieldset',
			title: 'Окончание ',
			style: 'position:absolute;left:261px;top:28px;width:244px;height:78px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонцаДопроведения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:290px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:16px;top:53px;width:15px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:16px;top:77px;width:15px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:269px;top:53px;width:15px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:269px;top:77px;width:15px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:115px;width:513px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});