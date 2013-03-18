Ext.define('Обработки.КонструкторСпецификаций.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:72px;',
			height: 72,width: 588,
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
			style: 'position:absolute;left:308px;top:0px;width:280px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:146px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСтатьяЗатрат',
			style: 'position:absolute;left:308px;top:24px;width:280px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Статья затрат:',
			style: 'position:absolute;left:0px;top:24px;width:144px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:146px;top:24px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатурнаяГруппа',
			style: 'position:absolute;left:308px;top:48px;width:280px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатурная группа:',
			style: 'position:absolute;left:0px;top:48px;width:144px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:146px;top:48px;width:160px;height:19px;',
		},
					]
				},
			]
		},
	]
});