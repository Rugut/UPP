Ext.require(['Данные.Справочники.КассыККМ'], function () 
{
	Ext.define('Справочники.КассыККМ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:452px;height:216px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кассы ККМ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:357px;top:57px;width:27px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 60,
			height: 19,
			style: 'position:absolute;left:384px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 263,
			height: 19,
			style: 'position:absolute;left:89px;top:57px;width:263px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Владелец.Представление',
			width: 355,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:89px;top:33px;width:355px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КассыККМ.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КассыККМ.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КассыККМ.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КассыККМ.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать нефискальные чеки',
			style: 'position:absolute;left:8px;top:81px;width:198px;height:19px;',
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Ручной режим формирования чека',
			labelWidth: 50,
			style: 'position:absolute;left:223px;top:105px;width:221px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьШиринаЛенты',
			text: 'Ширина ленты:',
			style: 'position:absolute;left:25px;top:105px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:107px;top:105px;width:111px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапретНефискальныхЧеков',
			text: 'НадписьЗапретНефискальныхЧеков',
			style: 'position:absolute;left:8px;top:129px;width:436px;height:54px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:191px;width:452px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
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