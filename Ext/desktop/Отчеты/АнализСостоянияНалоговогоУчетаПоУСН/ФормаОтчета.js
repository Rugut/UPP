Ext.require(['Данные.Отчеты.АнализСостоянияНалоговогоУчетаПоУСН'], function () 
{
	Ext.define('Отчеты.АнализСостоянияНалоговогоУчетаПоУСН.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1049px;height:600px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Анализ состояния налогового учета по УСН',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:1049px;height:28px;',
			height: 28,width: 1049,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:265px;top:8px;width:70px;height:18px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:338px;top:7px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.АнализСостоянияНалоговогоУчетаПоУСН.ФормаОтчетаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.АнализСостоянияНалоговогоУчетаПоУСН.ФормаОтчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.АнализСостоянияНалоговогоУчетаПоУСН.ФормаОтчетаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.АнализСостоянияНалоговогоУчетаПоУСН.ФормаОтчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонецПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:155px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:4px;top:8px;width:50px;height:18px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:139px;top:8px;width:15px;height:18px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:7px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСформировать',
			text: 'Сформировать',
			style: 'position:absolute;left:570px;top:7px;width:119px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:1026px;top:7px;width:22px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:787px;top:2px;width:261px;height:24px;',
			width: 261,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Настройка',
					tooltip:'b6b623e-45cd-4dfc-a5a1-0ce6a0cbbfe',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:2px;top:2px;width:551px;height:24px;',
			width: 551,
			height: 24,
			items:
			[
				{
					text:'Назад',
					tooltip:'',
				},
				'-',
				{
					text:'Структура налоговой базы',
					tooltip:'Структура налоговой базы',
				},
				'-',
				{
					text:'Печать...',
					tooltip:'',
				},
				'-',
				{
					text:'Действие1',
					tooltip:'Открыть справку',
				},
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});