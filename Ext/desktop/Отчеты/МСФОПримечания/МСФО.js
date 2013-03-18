Ext.define('Отчеты.МСФОПримечания.МСФО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Примечания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
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
			style: 'position:absolute;left:0px;top:409px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:765px;height:298px;',
			height: 298,width: 765,
			items:
			[
				{
					title:'1. Дочерние компании',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:251px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПримечания',
			style: 'position:absolute;left:172px;top:251px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПримечания',
			style: 'position:absolute;left:298px;top:251px;width:290px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПримечания',
			text: 'Добавить',
			style: 'position:absolute;left:591px;top:251px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПримечания',
			text: 'Удалить',
			style: 'position:absolute;left:677px;top:251px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'2. Совместная деятельность',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:252px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиПримечанияСД',
			style: 'position:absolute;left:172px;top:252px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийПримечанияСД',
			style: 'position:absolute;left:298px;top:252px;width:289px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПримечанияСД',
			text: 'Добавить',
			style: 'position:absolute;left:591px;top:253px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПримечанияСД',
			text: 'Удалить',
			style: 'position:absolute;left:677px;top:253px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'3. ДС от операционной деятельности',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:253px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиДСОтОперДеят',
			style: 'position:absolute;left:172px;top:253px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийДСОтОперДеят',
			style: 'position:absolute;left:298px;top:253px;width:459px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:694px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:765px;height:49px;',
			height: 49,width: 765,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:80px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:224px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:80px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:545px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:172px;top:24px;width:244px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:380px;width:765px;height:21px;',
			height: 21,width: 765,
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
			style: 'position:absolute;left:0px;top:4px;width:76px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:85px;top:2px;width:680px;height:19px;',
		},
					]
				},
			]
		},
	]
});