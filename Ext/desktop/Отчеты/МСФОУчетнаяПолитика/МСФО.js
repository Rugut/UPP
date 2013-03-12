Ext.define('Отчеты.МСФОУчетнаяПолитика.МСФО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:428px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
			items:
			[
				'-',
				{
					text:'Очистить',
				},
				'-',
				'-',
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Режим ввода информации',
				},
				{
					text:'Поиск',
				},
				{
					text:'Обновить',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:403px;width:740px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:83px;width:726px;height:286px;',
			height: 286,width: 726,
			items:
			[
				{
					title:'Учетная политика',
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:653px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:726px;height:50px;',
			height: 50,width: 726,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:376px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:236px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:506px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:50px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'На английском языке',
			style: 'position:absolute;left:0px;top:27px;width:132px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:369px;width:726px;height:26px;',
			height: 26,width: 726,
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
			style: 'position:absolute;left:0px;top:9px;width:76px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:81px;top:7px;width:645px;height:19px;',
		},
					]
				},
			]
		},
	]
});