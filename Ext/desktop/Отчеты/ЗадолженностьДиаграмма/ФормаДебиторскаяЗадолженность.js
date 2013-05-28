Ext.define('Отчеты.ЗадолженностьДиаграмма.ФормаДебиторскаяЗадолженность',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:449px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:416px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:326px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:588px;height:46px;',
			height: 46,width: 588,
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
			name: 'ПолеНастройкиОрганизация',
			width: 296,
			height: 19,
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиВидВзаиморасчетов',
			width: 296,
			height: 19,
			style: 'position:absolute;left:292px;top:22px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вид взаиморасчетов:',
			style: 'position:absolute;left:0px;top:22px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:22px;width:160px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
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
				{
					text:'Транспонировать',
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
					text:'Настройка...',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Справка',
				},
			]
		},
	]
});