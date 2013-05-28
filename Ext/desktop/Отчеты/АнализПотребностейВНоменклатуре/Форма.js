Ext.define('Отчеты.АнализПотребностейВНоменклатуре.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:611px;height:426px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ потребностей в номенклатуре',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:595px;height:49px;',
			height: 49,width: 595,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатура',
			width: 246,
			height: 19,
			style: 'position:absolute;left:328px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура потребности:',
			style: 'position:absolute;left:0px;top:0px;width:164px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСНоменклатура',
			width: 120,
			height: 19,
			style: 'position:absolute;left:328px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоНоменклатура',
			width: 120,
			height: 19,
			style: 'position:absolute;left:454px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:166px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиДатаПотребности',
			width: 246,
			height: 19,
			style: 'position:absolute;left:328px;top:25px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дата потребности:',
			style: 'position:absolute;left:0px;top:25px;width:164px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСДатаПотребности',
			width: 120,
			height: 19,
			style: 'position:absolute;left:328px;top:25px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоДатаПотребности',
			width: 120,
			height: 19,
			style: 'position:absolute;left:454px;top:25px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:166px;top:25px;width:160px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыборПериода',
			text: '...',
			style: 'position:absolute;left:576px;top:25px;width:19px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:611px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Настройка ...',
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
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
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