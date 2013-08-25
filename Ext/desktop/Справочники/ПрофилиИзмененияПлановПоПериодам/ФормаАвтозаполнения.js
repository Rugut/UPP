Ext.require(['Данные.Справочники.ПрофилиИзмененияПлановПоПериодам'], function () 
{
	Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:296px;height:268px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры изменения по периодам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодовРаспределения',
			style: 'position:absolute;left:168px;top:54px;width:76px;height:19px;',
			width: 76,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоПериодовРаспределения',
			text: 'Количество периодов:',
			style: 'position:absolute;left:14px;top:54px;width:152px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СмещениеПервогоПериодаРаспределения',
			style: 'position:absolute;left:168px;top:30px;width:76px;height:19px;',
			width: 76,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСмещениеПервогоПериодаРаспределения',
			text: 'Смещение первого периода :',
			style: 'position:absolute;left:14px;top:30px;width:152px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'БазовыйКоэффициент',
			style: 'position:absolute;left:124px;top:192px;width:140px;height:19px;',
			width: 140,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьБазовыйКоэффициент',
			text: 'Базовое значение:',
			style: 'position:absolute;left:14px;top:192px;width:108px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПриращениеЗаПериод',
			style: 'position:absolute;left:124px;top:216px;width:140px;height:19px;',
			width: 140,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПриращениеЗаПериод',
			text: 'Изменение:',
			style: 'position:absolute;left:14px;top:216px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРаспределения',
			text: 'Тип распределения:',
			style: 'position:absolute;left:14px;top:111px;width:108px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипРаспределения.Представление',
			width: 164,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:124px;top:111px;width:164px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполненияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполненияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТипИзменения',
			text: 'Тип расчета:',
			style: 'position:absolute;left:14px;top:135px;width:108px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипИзменения.Представление',
			width: 164,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:124px;top:135px;width:164px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполненияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполненияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Периоды:',
			style: 'position:absolute;left:8px;top:8px;width:280px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Установки:',
			style: 'position:absolute;left:8px;top:90px;width:280px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Значения:',
			style: 'position:absolute;left:8px;top:171px;width:280px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:243px;width:296px;height:25px;',
			width: 296,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});