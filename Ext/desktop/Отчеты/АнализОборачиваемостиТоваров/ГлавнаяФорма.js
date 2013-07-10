Ext.define('Отчеты.АнализОборачиваемостиТоваров.ГлавнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:568px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ оборачиваемости товаров',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:552px;height:72px;',
			height: 72,width: 552,
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
			width: 280,
			height: 19,
			style: 'position:absolute;left:272px;top:0px;width:280px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:110px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:0px;top:0px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСклад',
			width: 280,
			height: 19,
			style: 'position:absolute;left:272px;top:24px;width:280px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:110px;top:24px;width:160px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Склад:',
			style: 'position:absolute;left:0px;top:24px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиКомиссионер',
			width: 280,
			height: 19,
			style: 'position:absolute;left:272px;top:48px;width:280px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:110px;top:48px;width:160px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Комиссионер:',
			style: 'position:absolute;left:0px;top:48px;width:108px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонца',
			width: 80,
			height: 19,
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичность',
			text: 'Периодичность:',
			style: 'position:absolute;left:314px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Периодичность',
			width: 160,
			height: 19,
			style: 'position:absolute;left:400px;top:33px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусТоваров',
			text: 'Статус товаров:',
			style: 'position:absolute;left:314px;top:57px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:400px;top:57px;width:160px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:568px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				'-',
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Сохранить значения ...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});