Ext.require(['Данные.Отчеты.ПроверкаДостаточностиКлючевыхРесурсов'], function () 
{
	Ext.define('Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:349px;height:162px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет  Проверка достаточности ключевых ресурсов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид планирования:',
			style: 'position:absolute;left:8px;top:60px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидПланирования.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:116px;top:60px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Сценарий плана:',
			style: 'position:absolute;left:8px;top:85px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СценарийПлана.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:116px;top:85px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 87,
			height: 19,
			style: 'position:absolute;left:116px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'по:',
			style: 'position:absolute;left:208px;top:33px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 87,
			height: 19,
			style: 'position:absolute;left:229px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:321px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Сценарий ресурсов:',
			style: 'position:absolute;left:8px;top:110px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СценарийРесурсов.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:116px;top:110px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновнаяСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:349px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:137px;width:349px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});