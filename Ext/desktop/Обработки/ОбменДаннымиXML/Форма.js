Ext.define('Обработки.ОбменДаннымиXML.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 626,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'ВосстановитьЗначения___',
				},
				{
					text:'Настройки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Выполнить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:28px;width:618px;height:545px;',
			height: 545,width: 618,
			items:
			[
				{
					title:'Выгрузка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаПравил',
			style: 'position:absolute;left:111px;top:6px;width:323px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:245px;width:604px;height:249px;',
			height: 249,width: 604,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:273px;height:193px;',
			height: 193,width: 273,
			columns:
			[
				{
					text:'ПВД',
				},
				{
					text:'СсылкаНаУзелОбмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:273px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'ОчиститьОтбор',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'ОчиститьУзлыОбмена',
				},
				{
					text:'УстановитьУзелОбмена',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'ЗагрузитьПравилаОбмена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УзлыОбмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:285px;top:31px;width:311px;height:193px;',
			height: 193,width: 311,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:285px;top:6px;width:311px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПоказатьРезультатаОтбора',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:590px;height:218px;',
			height: 218,width: 590,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Значение',
				},
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:6px;width:590px;height:218px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелДляОбмена',
			style: 'position:absolute;left:158px;top:151px;width:322px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:55px;width:604px;height:92px;',
			height: 92,width: 604,
			items:
			[
				{
					title:'ВыгрузкаВФайл',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаДанных',
			style: 'position:absolute;left:105px;top:0px;width:322px;height:19px;',
		},
					]
				},
				{
					title:'ВыгрузкаВИБПриемник',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:604px;height:19px;',
			height: 19,width: 604,
			items:
			[
				{
					title:'ПодключениеФайловаяИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:172px;top:0px;width:432px;height:19px;',
		},
					]
				},
				{
					title:'ПодключениеСервернаяИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяСервераИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:172px;top:0px;width:149px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения',
			style: 'position:absolute;left:453px;top:0px;width:151px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПользовательИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:172px;top:73px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:454px;top:73px;width:150px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ТестПодключенияъ',
			text: 'Тест подключения...',
			style: 'position:absolute;left:454px;top:49px;width:150px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелДляФоновогоОбмена',
			style: 'position:absolute;left:158px;top:175px;width:322px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовДляФоновогоОбмена',
			style: 'position:absolute;left:485px;top:199px;width:125px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаОтладкиВыгрузки',
			text: 'Настройка отладки выгрузки...',
			style: 'position:absolute;left:239px;top:498px;width:200px;height:21px;',
		},
					]
				},
				{
					title:'Загрузка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаОбмена',
			style: 'position:absolute;left:146px;top:6px;width:464px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовНаТранзакцию',
			style: 'position:absolute;left:304px;top:54px;width:107px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаОтладкиЗагрузки',
			text: 'Настройка отладки загрузки...',
			style: 'position:absolute;left:239px;top:497px;width:200px;height:21px;',
		},
					]
				},
				{
					title:'НастройкиОбменаДанными',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаПротоколаОбмена',
			style: 'position:absolute;left:209px;top:211px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииПриВыгрузкеДляПлановОбмена',
			style: 'position:absolute;left:352px;top:98px;width:137px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовЗагрузкиДляОбновленияСтатуса',
			style: 'position:absolute;left:352px;top:30px;width:137px;height:19px;',
		},
					]
				},
			]
		},
	]
});