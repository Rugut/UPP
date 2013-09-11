Ext.require(['Данные.Обработки.ВосстановлениеПоследовательности_НУ_УСН'], function () 
{
	Ext.define('Обработки.ВосстановлениеПоследовательности_НУ_УСН.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:402px;height:109px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Восстановление последовательности налогового учета УСН',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:402px;height:25px;',
			width: 402,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаАктуализации',
			width: 120,
			height: 19,
			style: 'position:absolute;left:121px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 273,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:121px;top:57px;width:273px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ВосстановлениеПоследовательности_НУ_УСН.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВосстановлениеПоследовательности_НУ_УСН.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ВосстановлениеПоследовательности_НУ_УСН.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВосстановлениеПоследовательности_НУ_УСН.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'Дата актуализации',
			style: 'position:absolute;left:8px;top:33px;width:106px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:402px;height:25px;',
			width: 402,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});