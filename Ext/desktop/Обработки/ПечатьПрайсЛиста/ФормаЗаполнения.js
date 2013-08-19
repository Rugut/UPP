Ext.require(['Данные.Обработки.ПечатьПрайсЛиста'], function () 
{
	Ext.define('Обработки.ПечатьПрайсЛиста.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:671px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Печать прайс-листа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Отбор',
				},
				{
					text:'Сформировать',
				},
				'-',
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:57px;width:657px;height:46px;',
			height: 46,width: 657,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатура',
			width: 441,
			height: 19,
			style: 'position:absolute;left:216px;top:1px;width:441px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:109px;top:1px;width:102px;height:19px;',
			width: 102,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура',
			style: 'position:absolute;left:0px;top:1px;width:103px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ценовая группа',
			style: 'position:absolute;left:0px;top:24px;width:104px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:109px;top:24px;width:102px;height:20px;',
			width: 102,
			height: 20,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиЦеноваяГруппа',
			width: 441,
			height: 20,
			style: 'position:absolute;left:216px;top:24px;width:441px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиТипЦен',
			width: 441,
			height: 19,
			style: 'position:absolute;left:223px;top:105px;width:441px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:116px;top:105px;width:102px;height:19px;',
			width: 102,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Тип цен',
			style: 'position:absolute;left:7px;top:105px;width:103px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 365,
			height: 20,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:299px;top:33px;width:365px;height:20px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьПрайсЛиста.ФормаЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьПрайсЛиста.ФормаЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьПрайсЛиста.ФормаЗаполненияСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьПрайсЛиста.ФормаЗаполненияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация:',
			style: 'position:absolute;left:223px;top:33px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаНач',
			width: 102,
			height: 19,
			style: 'position:absolute;left:116px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'На дату:',
			style: 'position:absolute;left:7px;top:33px;width:104px;height:19px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});