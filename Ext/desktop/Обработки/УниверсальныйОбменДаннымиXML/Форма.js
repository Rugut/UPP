Ext.define('Обработки.УниверсальныйОбменДаннымиXML.Форма',
	{
	extend: 'Ext.window.Window',
	height: 534,width: 632,
	iconCls: 'bogus',
	title: 'Универсальный обмен данными в формате XML',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:632px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ВосстановитьЗначения___',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Настройки',
				},
				{
					text:'СохранитьЗначения___',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:618px;height:497px;',
			height: 497,width: 618,
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
			style: 'position:absolute;left:111px;top:6px;width:475px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:150px;width:604px;height:295px;',
			height: 295,width: 604,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:273px;height:214px;',
			height: 214,width: 273,
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
			style: 'position:absolute;left:6px;top:30px;width:273px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОчиститьУзлыОбмена',
				},
				{
					text:'УзлыОбмена',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'ОчиститьОтбор',
				},
				{
					text:'УстановитьУзелОбмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:285px;top:55px;width:311px;height:214px;',
			height: 214,width: 311,
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
			style: 'position:absolute;left:285px;top:30px;width:311px;height:25px;',
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
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:111px;top:6px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:266px;top:6px;width:127px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУстановкиПериода',
			text: '...',
			style: 'position:absolute;left:399px;top:6px;width:21px;height:19px;',
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:590px;height:234px;',
			height: 234,width: 590,
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:590px;height:24px;',
			items:
			[
				{
					text:'ВосстановитьПараметры',
				},
				{
					text:'СохранитьПараметры',
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
			style: 'position:absolute;left:6px;top:6px;width:590px;height:263px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:54px;width:604px;height:92px;',
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
			style: 'position:absolute;left:105px;top:0px;width:499px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольДляСжатияФайлаОбмена',
			style: 'position:absolute;left:104px;top:48px;width:140px;height:19px;',
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
			xtype: 'button',
			name: 'ОбновитьПравила',
			text: '',
			style: 'position:absolute;left:591px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаОтладкиВыгрузки',
			text: 'Настройка отладки выгрузки...',
			style: 'position:absolute;left:242px;top:449px;width:200px;height:21px;',
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
			style: 'position:absolute;left:304px;top:77px;width:107px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПолучитьИнформациюОФайлеОбмена',
			text: 'Подробно о файле обмена',
			style: 'position:absolute;left:429px;top:337px;width:153px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КомментарийЗагрузки',
			style: 'position:absolute;left:166px;top:400px;width:444px;height:38px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольДляРаспаковкиФайлаОбмена',
			style: 'position:absolute;left:146px;top:30px;width:140px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаОтладкиЗагрузки',
			text: 'Настройка отладки загрузки...',
			style: 'position:absolute;left:241px;top:448px;width:200px;height:21px;',
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
			style: 'position:absolute;left:237px;top:259px;width:373px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииПриВыгрузкеДляПлановОбмена',
			style: 'position:absolute;left:352px;top:142px;width:137px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовЗагрузкиДляОбновленияСтатуса',
			style: 'position:absolute;left:352px;top:53px;width:137px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаПротоколаОбменаЗагрузка',
			style: 'position:absolute;left:237px;top:283px;width:373px;height:19px;',
		},
					]
				},
				{
					title:'НастройкаУдалениеДанных',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:104px;width:604px;height:335px;',
			height: 335,width: 604,
			columns:
			[
				{
					text:'Метаданные',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:76px;width:604px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
			]
		},
	]
});