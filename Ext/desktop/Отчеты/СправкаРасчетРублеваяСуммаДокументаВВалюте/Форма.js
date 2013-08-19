Ext.require(['Данные.Отчеты.СправкаРасчетРублеваяСуммаДокументаВВалюте'], function () 
{
	Ext.define('Отчеты.СправкаРасчетРублеваяСуммаДокументаВВалюте.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:430px;height:87px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справка-расчет ""Рублевая сумма документа в иностранной валюте""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:430px;height:25px;',
			items:
			[
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
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
			name: 'ПолеВвода1.Представление',
			width: 341,
			height: 21,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:81px;top:33px;width:341px;height:21px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетРублеваяСуммаДокументаВВалюте.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетРублеваяСуммаДокументаВВалюте.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетРублеваяСуммаДокументаВВалюте.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетРублеваяСуммаДокументаВВалюте.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Документ:',
			style: 'position:absolute;left:8px;top:33px;width:71px;height:21px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:430px;height:25px;',
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