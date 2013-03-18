Ext.define('Отчеты.МСФОДвижениеКапитала.МСФО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:482px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:457px;width:736px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:114px;width:722px;height:309px;',
			height: 309,width: 722,
			items:
			[
				{
					title:'Отчет об изменениях в капитале',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:264px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиДвижениеКапитала',
			style: 'position:absolute;left:232px;top:264px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийДвижениеКапитала',
			style: 'position:absolute;left:358px;top:264px;width:356px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:647px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:722px;height:81px;',
			height: 81,width: 722,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:372px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:232px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:502px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Примечание',
			style: 'position:absolute;left:502px;top:23px;width:220px;height:19px;',
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
			style: 'position:absolute;left:0px;top:23px;width:132px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Откл. авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:0px;top:50px;width:215px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:423px;width:722px;height:25px;',
			height: 25,width: 722,
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
			style: 'position:absolute;left:0px;top:8px;width:82px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:89px;top:6px;width:633px;height:19px;',
		},
					]
				},
			]
		},
	]
});