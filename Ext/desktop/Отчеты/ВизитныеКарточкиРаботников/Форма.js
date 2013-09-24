Ext.require(['Данные.Отчеты.ВизитныеКарточкиРаботников'], function () 
{
	Ext.define('Отчеты.ВизитныеКарточкиРаботников.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Визитные карточки сотрудников',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			width: 720,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Cформировать',
					tooltip:'Cформировать',
				},
				{
					text:'На принтер',
					tooltip:'Отправить форму на принтер',
				},
				'-',
				{
					text:'Настройка ...',
					tooltip:'Настройка отчета',
				},
				{
					text:'Новый отчет',
					tooltip:'Открыть новый отчет',
				},
				{
					text:'Быстрые отборы',
					tooltip:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
					tooltip:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'8ef786c-fd3b-4ff0-98dc-2e22f37113f',
				},
				'-',
				{
					text:'На принтер',
					tooltip:'Отправить форму на принтер',
				},
				'-',
				{
					text:'Настройка ...',
					tooltip:'Настройка отчета',
				},
				'-',
				{
					text:'Новый отчет',
					tooltip:'Открыть новый отчет',
				},
				'-',
				{
					text:'Быстрые отборы',
					tooltip:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
					tooltip:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:49px;',
			height: 49,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
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
			width: 107,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:109px;top:4px;width:107px;height:19px;',
			width: 107,
			height: 19,
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
	}],
	dockedItems:
	[
	]
	});
});