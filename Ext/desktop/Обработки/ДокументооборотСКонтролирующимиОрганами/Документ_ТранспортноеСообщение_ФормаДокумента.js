Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:582px;height:366px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			items:
			[
				{
					text:'Содержимое контейнера',
				},
				{
					text:'Контейнер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:582px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтправитель',
			text: 'Отправитель:',
			style: 'position:absolute;left:8px;top:85px;width:73px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель',
			text: 'Получатель:',
			style: 'position:absolute;left:8px;top:106px;width:73px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Отправитель',
			text: '',
			style: 'position:absolute;left:87px;top:84px;width:487px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Получатель',
			text: '',
			style: 'position:absolute;left:87px;top:105px;width:487px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодробнаяИнформация',
			text: '',
			style: 'position:absolute;left:8px;top:33px;width:566px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Тип не задан!',
			style: 'position:absolute;left:87px;top:64px;width:487px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:142px;width:566px;height:191px;',
			height: 191,width: 566,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Первичное сообщение, содержащее отчетность',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРедактироватьТекстВыгрузки',
			text: 'Редактировать',
			style: 'position:absolute;left:486px;top:8px;width:80px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение отправки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика1',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр2',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗашифровано',
			text: '
ВНИМАНИЕ!
Вероятно, содержимое этого сообщения не было распаковано при получении!',
			style: 'position:absolute;left:0px;top:0px;width:566px;height:111px;',
		},
					]
				},
				{
					title:'Протокол входного контроля',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр2',
			text: 'Подтверждение об отправке файла отчетности',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколВходногоКонтроляСтр3',
			text: 'Протокол входного контроля',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр5',
			text: 'Подтверждение об отправке файла отчетности',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколВходногоКонтроляСтр6',
			text: 'Протокол входного контроля',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр3',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение доставки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлВыгрузкиСтр1',
			text: 'Файл отчетности',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр2',
			text: 'Подпись под подтверждением',
			style: 'position:absolute;left:35px;top:35px;width:472px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр3',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлВыгрузкиСтр4',
			text: 'Файл отчетности',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр5',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр6',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр4',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:87px;width:59px;height:15px;',
		},
					]
				},
				{
					title:'Переподписанное налогоплательщиком подтверждение отправки отчетности',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр1',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр4',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Для просмотра подписи сервера документооборота под квитанцией о приеме нажмите',
			style: 'position:absolute;left:0px;top:92px;width:452px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр5',
			text: 'сюда.',
			style: 'position:absolute;left:452px;top:92px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Для печати квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:113px;width:354px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр5',
			text: 'сюда.',
			style: 'position:absolute;left:354px;top:113px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Для сохранения на диск квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:134px;width:421px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр5',
			text: 'сюда.',
			style: 'position:absolute;left:421px;top:134px;width:34px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение налогоплательщика на протокол проверки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр1',
			text: 'Подписи ответственных лиц организации:',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр4',
			text: 'Подписи ответственных лиц организации',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр5',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр6',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Для просмотра подписи налогового органа под протоколом нажмите',
			style: 'position:absolute;left:0px;top:92px;width:360px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр6',
			text: 'сюда.',
			style: 'position:absolute;left:360px;top:92px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Для печати протокола с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:113px;width:303px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр6',
			text: 'сюда.',
			style: 'position:absolute;left:303px;top:113px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Для сохранения на диск протокола с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:134px;width:371px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр6',
			text: 'сюда.',
			style: 'position:absolute;left:371px;top:134px;width:35px;height:15px;',
		},
					]
				},
				{
					title:'Уведомление об уточнении',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаПротоколПроверки',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаПодтверждениеОтправки',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУведомлениеОбУточненииСтр21',
			text: 'Уведомление об уточнении',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр21',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр21',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;',
		},
					]
				},
				{
					title:'Протокол 2-НДФЛ',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаСтр4',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:87px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколПриема2НДФЛСтр22',
			text: 'Протокол приема сведений по форме 2-НДФЛ',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписи1Стр22',
			text: 'Подпись налогового органа под протоколом',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверить1Стр22',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРеестрСведений2НДФЛСтр22',
			text: 'Реестр сведений по форме 2-НДФЛ',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписи2Стр22',
			text: 'Подпись налогового органа под реестром',
			style: 'position:absolute;left:35px;top:87px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверить2Стр22',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:87px;width:59px;height:15px;',
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:0px;top:3px;width:566px;height:168px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:171px;width:566px;height:20px;',
			height: 20,width: 566,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВложенияСтр7',
			text: 'Просмотреть вложения',
			style: 'position:absolute;left:79px;top:5px;width:487px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель1',
			text: 'Вложения:',
			style: 'position:absolute;left:0px;top:5px;width:73px;height:15px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТекстовоеСообщениеСтр7',
			text: 'Текстовое сообщение',
			style: 'position:absolute;left:31px;top:9px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаПодТекстовымСообщениемСтр7',
			text: 'Подпись налогового органа под текстовым сообщением',
			style: 'position:absolute;left:31px;top:33px;width:474px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверить1Стр7',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:33px;width:59px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:58px;width:566px;height:93px;',
			height: 93,width: 566,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНеформализованныйДокументСтр7',
			text: 'Неформализованные документы',
			style: 'position:absolute;left:31px;top:0px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеНеформализованногоДокументаСтр7',
			text: 'Описание неформализованных документов',
			style: 'position:absolute;left:31px;top:52px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаПодНеформализованнымДокументомСтр7',
			text: 'Подписи налогового органа под неформализованными документами',
			style: 'position:absolute;left:31px;top:26px;width:473px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверить2Стр7',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:27px;width:59px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика2',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаНеформализованноеСообщение',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТекстовоеСообщениеСтр8',
			text: 'Текстовое сообщение',
			style: 'position:absolute;left:31px;top:9px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалогоплательщикаПодТекстовымСообщениемСтр8',
			text: 'Подпись налогоплательщика под текстовым сообщением',
			style: 'position:absolute;left:31px;top:33px;width:535px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:58px;width:566px;height:93px;',
			height: 93,width: 566,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОписаниеНеформализованногоДокументаСтр8',
			text: 'Описание неформализованных документов',
			style: 'position:absolute;left:31px;top:27px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалогоплательщикаПодНеформализованнымДокументомСтр8',
			text: 'Подписи налогоплательщика под неформализованными документами',
			style: 'position:absolute;left:31px;top:1px;width:535px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалогоплательщикаПодФайломОписанияНеформализованногоДокументаСтр8',
			text: 'Подпись налогоплательщика под описанием',
			style: 'position:absolute;left:31px;top:53px;width:535px;height:15px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Неформализованный документ налогоплательщика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументСтр9',
			text: 'Документ',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр9',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр9',
			text: 'Подписи ответственных лиц организации на документе:',
			style: 'position:absolute;left:35px;top:87px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияНеформализованногоДокументаСтр9',
			text: 'Описание неформализованного документа',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛиц2Стр9',
			text: 'Подписи ответственных лиц организации на описании:',
			style: 'position:absolute;left:35px;top:113px;width:531px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение отправки неформализованного документа налогоплательщика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр10',
			text: 'Подтверждение отправки документа',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр10',
			text: 'Подпись под подтверждением',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика3',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр10',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтветаНаПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Переподписанное подтверждение отправки неформализованного документа налогоплательщика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр11',
			text: 'Подтверждение отправки документа',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр11',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Для просмотра подписи сервера документооборота под квитанцией о приеме нажмите',
			style: 'position:absolute;left:0px;top:66px;width:452px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр11',
			text: 'сюда.',
			style: 'position:absolute;left:452px;top:66px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Для печати квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:87px;width:354px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр11',
			text: 'сюда.',
			style: 'position:absolute;left:354px;top:87px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Для сохранения на диск квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:108px;width:421px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр11',
			text: 'сюда.',
			style: 'position:absolute;left:421px;top:108px;width:34px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение доставки неформализованного документа налогоплательщика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументСтр12',
			text: 'Документ',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр12',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр12',
			text: 'Подписи ответственных лиц организации',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаСтр12',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:87px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр12',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:87px;width:59px;height:15px;',
		},
					]
				},
				{
					title:'Запрос ИОН',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлЗапросаСтр13',
			text: 'Файл запроса',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр13',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр13',
			text: 'Подписи ответственных лиц организации:',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактироватьЗапрос',
			text: 'Редактировать',
			style: 'position:absolute;left:486px;top:8px;width:80px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение отправки запроса',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщикаНаЗапрос',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаПодтверждениеОтправкиЗапроса',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр14',
			text: 'Подтверждение об отправке',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр14',
			text: 'Подпись под подтверждением',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр14',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;',
		},
					]
				},
				{
					title:'Протокол проверки запроса',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПротоколПроверкиСтр15',
			text: 'Протокол входного контроля',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр15',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:35px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр15',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:35px;width:59px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика15',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаПротоколПроверки15',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение доставки запроса',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФайлВыгрузкиСтр16',
			text: 'Файл запроса',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр16',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиОтветственныхЛицСтр16',
			text: 'Подписи ответственных лиц организации',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписьНалоговогоОрганаСтр16',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:87px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр16',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:87px;width:59px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение налогоплательщика на подтверждение отправки запроса',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКвитанцияОПриемеСтр17',
			text: 'Подтверждение отправки',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр17',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр17',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Для просмотра подписи сервера документооборота под квитанцией о приеме нажмите',
			style: 'position:absolute;left:0px;top:92px;width:452px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр17',
			text: 'сюда.',
			style: 'position:absolute;left:452px;top:92px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Для печати квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:113px;width:354px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр17',
			text: 'сюда.',
			style: 'position:absolute;left:354px;top:113px;width:34px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Для сохранения на диск квитанции о приеме с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:134px;width:421px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр17',
			text: 'сюда.',
			style: 'position:absolute;left:421px;top:134px;width:34px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение налогоплательщика на протокол проверки запроса',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПротоколВходногоКонтроляСтр18',
			text: 'Протокол входного контроля',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр18',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр18',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Для просмотра подписи налогового органа под протоколом нажмите',
			style: 'position:absolute;left:0px;top:92px;width:360px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр18',
			text: 'сюда.',
			style: 'position:absolute;left:360px;top:92px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Для печати протокола с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:113px;width:303px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда2Стр18',
			text: 'сюда.',
			style: 'position:absolute;left:303px;top:113px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Для сохранения на диск протокола с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:134px;width:371px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр18',
			text: 'сюда.',
			style: 'position:absolute;left:371px;top:134px;width:35px;height:15px;',
		},
					]
				},
				{
					title:'Ответ на запрос ИОН',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветНаЗапросСтр19',
			text: 'Ответ на запрос на информационное обслуживание',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр19',
			text: 'Подпись налогового органа',
			style: 'position:absolute;left:35px;top:61px;width:471px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверитьСтр19',
			text: 'Проверить',
			style: 'position:absolute;left:507px;top:61px;width:59px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНалогоплательщика16',
			text: 'Подтверждение налогоплательщика:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодтвержденияНаОтветНаЗапрос',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр19',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение на ответ на запрос ИОН',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветНаЗапросСтр20',
			text: 'Ответ на запрос на информационное обслуживание',
			style: 'position:absolute;left:35px;top:9px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодписиСтр20',
			text: 'Подпись налогоплательщика',
			style: 'position:absolute;left:35px;top:61px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФайлОписанияСтр20',
			text: 'Файл информации об отправителе и получателе',
			style: 'position:absolute;left:35px;top:35px;width:531px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Для просмотра подписи налогового органа под ответом на запрос нажмите',
			style: 'position:absolute;left:0px;top:92px;width:393px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда1Стр20',
			text: 'сюда.',
			style: 'position:absolute;left:393px;top:92px;width:35px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Для сохранения на диск ответа на запрос с подписями обеих сторон нажмите',
			style: 'position:absolute;left:0px;top:112px;width:403px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСюда3Стр20',
			text: 'сюда.',
			style: 'position:absolute;left:404px;top:112px;width:35px;height:15px;',
		},
					]
				},
				{
					title:'Зашифрованное сообщение входящее',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаРасшифроватьСообщение',
			text: 'Распаковать сообщение',
			style: 'position:absolute;left:200px;top:115px;width:164px;height:21px;',
		},
					]
				},
				{
					title:'Зашифрованное сообщение исходящее',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗашифровано1',
			text: 'Содержимое этого сообщения зашифровано.
Вы можете изменить содержимое сообщения и затем зашифровать его заново.',
			style: 'position:absolute;left:0px;top:0px;width:566px;height:111px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаИзменитьСодержимое',
			text: 'Изменить содержимое',
			style: 'position:absolute;left:198px;top:115px;width:164px;height:21px;',
		},
					]
				},
				{
					title:'Первичное сообщение содержащее отчетность ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Подтверждение получения ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Протокол ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПротоколКвитанция',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Протокол квитанция ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ОписаниеОшибки',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
		},
					]
				},
				{
					title:'Неформализованное входящее ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента1',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПисьмоВходящееКвитанция',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Неформализованное исходящее ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Неформализованное исходящее квитанция ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Неформализованное входящее квитанция ПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Декларация НП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Извещение декларация НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Результат приема декларация НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента2',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение результат приема НП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Результат обработки декларация НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента3',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатОбработкиНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение результат обработки НП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Подтверждение декларация НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента4',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение подтверждение НП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Подтверждение форма2 НДФЛНО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента5',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНП2НДФЛ',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение форма2 НДФЛНО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Результат приема форма2 НДФЛНО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента6',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНП2НДФЛ',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Обращение НП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Извещение обращение НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Результат приема обращение НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента7',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНПОбращение',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Подтверждение обращение НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента8',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНПОбращение',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента9',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПисьмоНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента10',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРассылкаНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента11',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНПЗапрос',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента12',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНПЗапрос',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента13',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатОбработкиНПЗапрос',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Подтверждение заявление НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента14',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеНПЗаявление',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение заявление НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Результат приема заявление НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента15',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатПриемаНПЗаявление',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Результат обработки заявление РФНО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента16',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатОбработкиРФНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение результат обработки РФНП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Извещение об отзыве заявление РФНП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Извещение результат обработки ТСНП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Сообщение об отзыве заявление РФНО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента17',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеОбОтзывеЗаявлениеРФНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Результат обработки заявление ТСНО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента18',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеРезультатОбработкиТСНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Документ НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:117px;',
			height: 117,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента19',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:130px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеДокументНП',
			text: '',
			style: 'position:absolute;left:0px;top:145px;width:566px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеАбонента20',
			text: 'Результат приема документа абонентом:',
			style: 'position:absolute;left:0px;top:161px;width:244px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеРезультатПриемаДокументНП',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение документ НП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Результат приема документ НП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Извещение результат приема НО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Первичное сообщение содержащее отчетность ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Подтверждение даты отправки ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДатыОтправкиФСГС',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПодтверждениеДатыОтправкиФСГС',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение подтверждение даты отправки ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Извещение о получении отчетности ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Протокол входного контроля отчетности ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПротоколВходногоКонтроляОтчетностиФСГС',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПротоколВходногоКонтроляОтчетностиФСГС',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение протокол входного контроля отчетности ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Письмо входящее ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:147px;',
			height: 147,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПисьмоВходящееФСГС',
			text: 'Подтверждение абонента:',
			style: 'position:absolute;left:0px;top:161px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеИзвещениеПисьмоВходящееФСГС',
			text: '',
			style: 'position:absolute;left:0px;top:176px;width:566px;height:15px;',
		},
					]
				},
				{
					title:'Извещение письмо входящее ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Письмо исходящее ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Извещение письмо исходящее ФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:566px;height:185px;',
			height: 185,width: 566,
			columns:
			[
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Сообщение-владелец',
					width:'100',
				},
				{
					text:'ЭЦПСертификат',
					width:'100',
				},
				{
					text:'Признак подписи абонента',
					width:'100',
				},
				{
					text:'Статус проверки подписи',
					width:'100',
				},
				{
					text:'Тип файла отчетности',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтправитель1',
			text: 'Тип:',
			style: 'position:absolute;left:8px;top:64px;width:73px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:372px;top:64px;width:190px;height:24px;',
			items:
			[
				{
					text:'Подписать',
				},
			]
		},
	]
});