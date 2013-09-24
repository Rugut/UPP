Ext.require(['Данные.Справочники.ОсновныеСредства'], function () 
{
	Ext.define('Справочники.ОсновныеСредства.ФормаГрупповогоДобавления',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:414px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Групповое добавление элементов справочника ""Основные средства""',
	
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
			style: 'position:absolute;left:14px;top:125px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 246,
			height: 19,
			style: 'position:absolute;left:160px;top:125px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:14px;top:149px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 246,
			height: 19,
			style: 'position:absolute;left:160px;top:149px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзготовитель',
			text: 'Изготовитель:',
			style: 'position:absolute;left:14px;top:173px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Изготовитель',
			width: 245,
			height: 19,
			style: 'position:absolute;left:161px;top:173px;width:245px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыпуска',
			text: 'Дата выпуска (постройки):',
			style: 'position:absolute;left:14px;top:245px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыпуска',
			width: 76,
			height: 19,
			style: 'position:absolute;left:160px;top:245px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКОФ',
			text: 'ОКОФ:',
			style: 'position:absolute;left:14px;top:293px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КодПоОКОФ.Представление',
			width: 245,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:161px;top:293px;width:245px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьАмортизационнаяГруппа',
			text: 'Амортизационная группа:',
			style: 'position:absolute;left:14px;top:341px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'АмортизационнаяГруппа.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:160px;top:341px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаОС',
			text: 'Группа учета ОС:',
			style: 'position:absolute;left:14px;top:317px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаОС.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:160px;top:317px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Постоянные сведения об объектах основных средств',
			style: 'position:absolute;left:8px;top:272px;width:398px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автотранспорт',
			style: 'position:absolute;left:14px;top:365px;width:138px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаводскойНомер',
			text: 'Заводской номер:',
			style: 'position:absolute;left:14px;top:197px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗаводскойНомер',
			width: 246,
			height: 19,
			style: 'position:absolute;left:160px;top:197px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПаспорта',
			text: 'Номер паспорта:',
			style: 'position:absolute;left:14px;top:221px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПаспорта',
			width: 246,
			height: 19,
			style: 'position:absolute;left:160px;top:221px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Основные сведения об объектах основных средств',
			style: 'position:absolute;left:8px;top:104px;width:398px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Присваивать коды с:',
			style: 'position:absolute;left:14px;top:53px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НачальныйКод',
			width: 80,
			height: 19,
			style: 'position:absolute;left:160px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСоздаваемыхОбъектов',
			text: 'Количество элементов:',
			style: 'position:absolute;left:14px;top:77px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:160px;top:77px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Параметры группового добавления элементов справочника',
			style: 'position:absolute;left:8px;top:8px;width:398px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьГруппа',
			text: 'Добавлять в группу:',
			style: 'position:absolute;left:14px;top:29px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Группа.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:160px;top:29px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОсновныеСредства.ФормаГрупповогоДобавленияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонечныйКод',
			width: 80,
			height: 19,
			style: 'position:absolute;left:272px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'по:',
			style: 'position:absolute;left:249px;top:53px;width:16px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:414px;height:25px;',
			width: 414,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Добавить',
					tooltip:'Добавить элементы справочника',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});