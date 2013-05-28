Ext.define('Отчеты.МСФОПрибылиИУбытки.МСФО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:433px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:408px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:107px;width:767px;height:270px;',
			height: 270,width: 767,
			items:
			[
				{
					title:'Отчет о прибылях и убытках',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:225px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиПрибыляИУбытки',
			style: 'position:absolute;left:232px;top:225px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийПрибыляИУбытки',
			width: 401,
			height: 19,
			style: 'position:absolute;left:358px;top:225px;width:401px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:695px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:767px;height:74px;',
			height: 74,width: 767,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:232px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:372px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаСдачи',
			width: 80,
			height: 19,
			style: 'position:absolute;left:232px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ВидОтчета',
			width: 220,
			height: 19,
			style: 'position:absolute;left:547px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Примечание',
			width: 220,
			height: 19,
			style: 'position:absolute;left:547px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По характеру затрат',
			style: 'position:absolute;left:0px;top:24px;width:123px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Валюта',
			width: 80,
			height: 19,
			style: 'position:absolute;left:46px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'На английском языке',
			style: 'position:absolute;left:0px;top:50px;width:132px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:146px;top:50px;width:243px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:377px;width:767px;height:24px;',
			height: 24,width: 767,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Комментарий:',
			style: 'position:absolute;left:0px;top:7px;width:76px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 682,
			height: 19,
			style: 'position:absolute;left:85px;top:5px;width:682px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Очистить',
				},
				'-',
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Доп. параметры',
				},
				'-',
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Режим ввода информации',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});