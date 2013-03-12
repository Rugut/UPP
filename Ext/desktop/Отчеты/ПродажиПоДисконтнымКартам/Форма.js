Ext.define('Отчеты.ПродажиПоДисконтнымКартам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:508px;height:25px;',
			items:
			[
				{
					text:'Сохранить настройку...',
				},
				{
					text:'Действие закрыть',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Быстрые отборы',
				},
				{
					text:'Быстрые отборы',
				},
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Новый отчет',
				},
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Заголовок отчета',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок отчета',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:513px;top:3px;width:259px;height:19px;',
			height: 19,width: 259,
			items:
			[
				{
					title:'Произвольный период',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон',
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:139px;top:0px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаДату',
			text: 'На дату:',
			style: 'position:absolute;left:122px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период',
			text: '',
			style: 'position:absolute;left:107px;top:0px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:28px;top:0px;width:55px;height:19px;',
		},
					]
				},
				{
					title:'На дату',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНаДату',
			style: 'position:absolute;left:179px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Период',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод',
			text: '-',
			style: 'position:absolute;left:85px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод',
			text: '+',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:508px;top:0px;width:272px;height:25px;',
			items:
			[
			]
		},
	]
});