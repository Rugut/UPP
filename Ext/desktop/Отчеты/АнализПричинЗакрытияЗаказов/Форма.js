Ext.define('Отчеты.АнализПричинЗакрытияЗаказов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:820px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			items:
			[
				{
					text:'Быстрые отборы',
				},
				{
					text:'Настройка...',
				},
				'-',
				'-',
				{
					text:'Быстрые отборы',
				},
				'-',
				'-',
				{
					text:'Сохранить настройку...',
				},
				'-',
				'-',
				{
					text:'Восстановить настройку...',
				},
				'-',
				'-',
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Сохранить настройку...',
				},
				{
					text:'Справка',
				},
				{
					text:'Действие закрыть',
				},
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Справка',
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
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок отчета',
				},
				{
					text:'Новый отчет',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:555px;top:3px;width:265px;height:19px;',
			height: 19,width: 265,
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
			style: 'position:absolute;left:519px;top:0px;width:301px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказы покупателей',
			style: 'position:absolute;left:107px;top:35px;width:133px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказы поставщикам',
			style: 'position:absolute;left:253px;top:35px;width:135px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказы на производство',
			style: 'position:absolute;left:401px;top:35px;width:156px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Анализировать:',
			style: 'position:absolute;left:8px;top:35px;width:94px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Внутренние заказы',
			style: 'position:absolute;left:570px;top:35px;width:156px;height:15px;',
		},
	]
});