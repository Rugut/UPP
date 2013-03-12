Ext.define('Отчеты.АнализСерии.Основная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:735px;height:484px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ серии',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:735px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Новое окно',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСостояние',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтч',
			style: 'position:absolute;left:60px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показать остатки по сериям',
			style: 'position:absolute;left:8px;top:60px;width:176px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:175px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:260px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разбивать документы по разделам',
			style: 'position:absolute;left:193px;top:60px;width:211px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерия',
			text: 'Серия:',
			style: 'position:absolute;left:480px;top:33px;width:37px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Серия',
			style: 'position:absolute;left:522px;top:33px;width:205px;height:19px;',
		},
	]
});