Ext.require(['Данные.Отчеты.РегистрУчетаПрочихРасходовТекущегоПериода'], function () 
{
	Ext.define('Отчеты.РегистрУчетаПрочихРасходовТекущегоПериода.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:498px;height:278px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регистр учета прочих и косвенных расходов (настройка)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:8px;width:484px;height:238px;',
			height: 238,width: 484,
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 266,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:32px;width:266px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.РегистрУчетаПрочихРасходовТекущегоПериода.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.РегистрУчетаПрочихРасходовТекущегоПериода.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.РегистрУчетаПрочихРасходовТекущегоПериода.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.РегистрУчетаПрочихРасходовТекущегоПериода.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:76px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:184px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:166px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:6px;width:446px;height:206px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Прочие расходы, связанные с производством и (или) реализацией (ст. 264 НК РФ)',
			style: 'position:absolute;left:14px;top:73px;width:462px;height:32px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Косвенные расходы',
			style: 'position:absolute;left:14px;top:106px;width:336px;height:16px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:452px;top:6px;width:24px;height:206px;',
			width: 24,
			height: 206,
			items:
			[
				{
					text:'',
					tooltip:'Установить все виды',
				},
				{
					text:'',
					tooltip:'',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:253px;width:498px;height:25px;',
			width: 498,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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