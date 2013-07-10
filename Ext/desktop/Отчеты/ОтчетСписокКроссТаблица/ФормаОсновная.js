Ext.define('Отчеты.ОтчетСписокКроссТаблица.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:468px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
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
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:366px;top:33px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра',
			text: 'Раздел учета:',
			style: 'position:absolute;left:288px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:592px;height:119px;',
			height: 119,width: 592,
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
			name: 'ПолеНастройки1',
			width: 247,
			height: 19,
			style: 'position:absolute;left:344px;top:0px;width:247px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС1',
			width: 120,
			height: 19,
			style: 'position:absolute;left:344px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо1',
			width: 120,
			height: 19,
			style: 'position:absolute;left:472px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:162px;top:0px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройки2',
			width: 247,
			height: 19,
			style: 'position:absolute;left:344px;top:24px;width:247px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:24px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС2',
			width: 120,
			height: 19,
			style: 'position:absolute;left:344px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо2',
			width: 120,
			height: 19,
			style: 'position:absolute;left:472px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:161px;top:24px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройки3',
			width: 247,
			height: 19,
			style: 'position:absolute;left:344px;top:48px;width:247px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:1px;top:48px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС3',
			width: 120,
			height: 19,
			style: 'position:absolute;left:344px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо3',
			width: 120,
			height: 19,
			style: 'position:absolute;left:472px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:162px;top:48px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройки4',
			width: 247,
			height: 19,
			style: 'position:absolute;left:344px;top:74px;width:247px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:1px;top:74px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС4',
			width: 120,
			height: 19,
			style: 'position:absolute;left:344px;top:74px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо4',
			width: 120,
			height: 19,
			style: 'position:absolute;left:472px;top:74px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:162px;top:74px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройки5',
			width: 247,
			height: 19,
			style: 'position:absolute;left:344px;top:98px;width:247px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:98px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС5',
			width: 120,
			height: 19,
			style: 'position:absolute;left:344px;top:98px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо5',
			width: 120,
			height: 19,
			style: 'position:absolute;left:472px;top:98px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:161px;top:98px;width:180px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
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
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});