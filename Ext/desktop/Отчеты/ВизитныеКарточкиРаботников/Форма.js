Ext.define('Отчеты.ВизитныеКарточкиРаботников.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Визитные карточки сотрудников',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:49px;',
			height: 49,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Должность',
			style: 'position:absolute;left:0px;top:28px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиДолжность',
			width: 486,
			height: 19,
			style: 'position:absolute;left:218px;top:28px;width:486px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подразделение',
			style: 'position:absolute;left:0px;top:4px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПодразделение',
			width: 486,
			height: 19,
			style: 'position:absolute;left:218px;top:4px;width:486px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:109px;top:28px;width:107px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:109px;top:4px;width:107px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись',
			text: 'На дату:',
			style: 'position:absolute;left:578px;top:2px;width:49px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:633px;top:2px;width:80px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Cформировать',
				},
				{
					text:'На принтер',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Новый отчет',
				},
				{
					text:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
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
					text:'На принтер',
				},
				'-',
				{
					text:'Настройка ...',
				},
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
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