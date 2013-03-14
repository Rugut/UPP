Ext.define('Отчеты.АнализЦен.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:512px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ цен',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:512px;height:25px;',
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
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
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
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:496px;height:48px;',
			height: 48,width: 496,
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
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:264px;top:0px;width:232px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиТипЦен',
			style: 'position:absolute;left:264px;top:24px;width:232px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Тип цен:',
			style: 'position:absolute;left:0px;top:24px;width:100px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ВВалюте',
			text: 'в валюте',
			style: 'position:absolute;left:148px;top:33px;width:64px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаОтчета',
			style: 'position:absolute;left:214px;top:33px;width:80px;height:19px;',
		},
	]
});