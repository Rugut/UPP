Ext.require(['Данные.Отчеты.АнализСостоянияНалоговогоУчетаПоНалогуНаПрибыль'], function () 
{
	Ext.define('Отчеты.АнализСостоянияНалоговогоУчетаПоНалогуНаПрибыль.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:863px;height:507px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Анализ состояния налогового учета по налогу на прибыль',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоПериода',
			width: 90,
			height: 19,
			style: 'position:absolute;left:194px;top:3px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонецПериода',
			width: 90,
			height: 19,
			style: 'position:absolute;left:315px;top:3px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодНач',
			text: 'Период с:',
			style: 'position:absolute;left:136px;top:3px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:290px;top:3px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:410px;top:3px;width:19px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 252,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:520px;top:3px;width:252px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.АнализСостоянияНалоговогоУчетаПоНалогуНаПрибыль.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.АнализСостоянияНалоговогоУчетаПоНалогуНаПрибыль.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.АнализСостоянияНалоговогоУчетаПоНалогуНаПрибыль.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.АнализСостоянияНалоговогоУчетаПоНалогуНаПрибыль.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:440px;top:3px;width:75px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:861px;height:507px;',
			height: 507,width: 861,
			tabBar:{hidden:true},
			items:
			[
				{
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Развернуть по документам',
			style: 'position:absolute;left:365px;top:3px;width:163px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать только ошибки',
			style: 'position:absolute;left:540px;top:3px;width:163px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:131px;height:27px;',
			width: 131,
			height: 27,
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:359px;height:27px;',
			width: 359,
			height: 27,
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				{
					text:'Структура налоговой базы',
				},
				{
					text:'Печать...',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:812px;top:3px;width:22px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});