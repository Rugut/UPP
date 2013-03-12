Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЦиклыОбмена_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:624px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Циклы обмена',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:52px;width:108px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Код',
			text: '',
			style: 'position:absolute;left:119px;top:52px;width:80px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:71px;width:108px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Наименование',
			text: '',
			style: 'position:absolute;left:119px;top:71px;width:591px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Предмет',
			text: '',
			style: 'position:absolute;left:14px;top:193px;width:696px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:14px;top:133px;width:102px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Организация',
			text: '',
			style: 'position:absolute;left:119px;top:133px;width:591px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
				{
					text:'Показать отчет о состоянии',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Выгрузить содержимое',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Показать документы',
				},
				{
					text:'Выгрузить контейнеры',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Выгрузить контейнеры и их содержимое',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:599px;width:718px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПомеченНаУдаление',
			text: 'Цикл обмена помечен на удаление',
			style: 'position:absolute;left:529px;top:33px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВниманиеОшибки',
			text: 'Цикл обмена содержит ошибки! (нажмите для просмотра)',
			style: 'position:absolute;left:8px;top:603px;width:534px;height:18px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:236px;width:702px;height:357px;',
			height: 357,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'ДатаПоследнегоСообщения',
			text: '',
			style: 'position:absolute;left:266px;top:38px;width:106px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Создан:',
			style: 'position:absolute;left:6px;top:20px;width:54px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Последнее сообщение было получено/принято:',
			style: 'position:absolute;left:6px;top:38px;width:246px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДатаСоздания',
			text: '',
			style: 'position:absolute;left:68px;top:20px;width:104px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Завершен:',
			style: 'position:absolute;left:194px;top:20px;width:58px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДатаЗакрытия',
			text: '',
			style: 'position:absolute;left:265px;top:20px;width:106px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:75px;width:702px;height:249px;',
			height: 249,width: 702,
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:128px;width:702px;height:16px;',
			height: 16,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУведомлениеОбУточнении',
			text: '',
			style: 'position:absolute;left:45px;top:0px;width:657px;height:16px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'',
				},
				{
					title:'',
				},
				{
					title:'СтраницаЗапросНаИнформационноеОбслуживание',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПервичноеСообщение',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеформализованныйДокументНО',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеформализованныйДокументНалогоплательщика',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапросНаИнформационноеОбслуживание',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПервичноеСообщениеПФР',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПолученияПФР',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:37px;width:702px;height:44px;',
			height: 44,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПротоколПФР',
			text: '',
			style: 'position:absolute;left:45px;top:7px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколКвитанцияПФР',
			text: '',
			style: 'position:absolute;left:45px;top:28px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьПротоколКвитанцияПФР',
			text: 'Сформировать квитанцию',
			style: 'position:absolute;left:564px;top:29px;width:138px;height:15px;',
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
			name: 'НадписьНеформализованноеСообщениеПФР',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПолученияНеформализованногоСообщенияПФР',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьПодтверждениеполученияНеформализованногоСообщенияПФР',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеОтправки',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНаНеформализованныйДокументНО',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеОтправкиЗапроса',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеформализованноеСообщениеПФРИсходящее',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПолученияНеформализованногоСообщенияПФРИсходящее',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСформироватьПодтверждениеНаНеформализованныйДокумент',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДекларацияНП',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДекларацияНО',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНП',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеДекларацияНО',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаДекларацияНО',
			text: '',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНП',
			text: '',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатОбработкиДекларацияНО',
			text: '',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатОбработкиНП',
			text: '',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатОбработкиНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;',
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
			name: 'НадписьФорма2НДФЛНП',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеФорма2НДФЛНО',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНП2НДФЛ',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеФорма2НДФЛНО',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаФорма2НДФЛНО',
			text: '',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНП2НДФЛ',
			text: '',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНП2НДФЛ',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНП2НДФЛ',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;',
		},
					]
				},
				{
					title:'Обращение НП',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНаПодтверждениеОтправки',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПереподписанноеПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНаПодтверждениеОтправкиЗапроса',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбращениеНП',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеОбращениеНО',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНПОбращение',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеОбращениеНО',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНПОбращение',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:80px;width:702px;height:44px;',
			height: 44,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаОбращениеНО',
			text: '',
			style: 'position:absolute;left:45px;top:7px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНПОбращение',
			text: '',
			style: 'position:absolute;left:45px;top:28px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНПОбращение',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:29px;width:139px;height:15px;',
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
			name: 'НадписьСформироватьПодтверждениеНаПодтверждениеОтправки',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:45px;width:161px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьПереподписанноеПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:45px;width:161px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьПодтверждениеНаПодтверждениеОтправкиЗапроса',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:45px;width:161px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПисьмоНО',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПисьмоНП',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПисьмоНП',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;',
		},
					]
				},
				{
					title:'Рассылка',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРассылка',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
					]
				},
				{
					title:'Рассылка групповая',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРассылкаГрупповая',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРассылкаНП',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРассылкаНП',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;',
		},
					]
				},
				{
					title:'ИОН',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДоставки',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДоставкиНеформализованногоДокументаНалогоплательщика',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДоставкиЗапроса',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапросНП',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеЗапросНО',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНПЗапрос',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеЗапросНО',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаЗапросНО',
			text: '',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНПЗапрос',
			text: '',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНПЗапрос',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНПЗапрос',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатОбработкиЗапросНО',
			text: '',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатОбработкиНПЗапрос',
			text: '',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатОбработкиНПЗапрос',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;',
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
			name: 'НадписьЗаявлениеНП',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеЗаявлениеНО',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНПЗаявление',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеЗаявлениеНО',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаЗаявлениеНО',
			text: '',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНПЗаявление',
			text: '',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНПЗаявление',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНПЗаявление',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатОбработкиЗаявлениеРФНО',
			text: '',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатОбработкиРФНП',
			text: '',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатОбработкиРФНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:165px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСообщениеОбОтзывеЗаявлениеРФНО',
			text: '',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеОбОтзывеЗаявлениеРФНП',
			text: '',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеОбОтзывеЗаявлениеРФНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:207px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатОбработкиЗаявлениеТСНО',
			text: '',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатОбработкиТСНП',
			text: '',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатОбработкиТСНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Документ',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументНО',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеДокументНП',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаДокументНП',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНО',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеДокументНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьРезультатПриемаДокументНП',
			text: 'Сформировать результат приема',
			style: 'position:absolute;left:524px;top:45px;width:178px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПротоколПроверки',
			text: '',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколПроверкиЗапроса',
			text: '',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПервичноеСообщениеФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДатыОтправкиФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеДатыОтправкиФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеОтчетностьФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПротоколФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПротоколФСГС',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеДатыОтправкиФСГС',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПисьмоИсходящееФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДатыОтправкиПисьмаФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеДатыОтправкиПисьмаФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПисьмоИсходящееФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеДатыОтправкиПисьмаФСГС',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:45px;width:161px;height:15px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПисьмоВходящееФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПисьмоВходящееФСГС',
			text: '',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПисьмоВходящееФСГС',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОткрытьЦиклОбмена',
			text: 'Открыть',
			style: 'position:absolute;left:376px;top:20px;width:54px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование1',
			text: 'Идентификатор:',
			style: 'position:absolute;left:8px;top:90px;width:108px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:702px;height:19px;',
			height: 19,width: 702,
			items:
			[
				{
					title:'Налоговый орган',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Налоговый орган:',
			style: 'position:absolute;left:6px;top:0px;width:102px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НалоговыйОрган',
			text: '',
			style: 'position:absolute;left:111px;top:0px;width:591px;height:15px;',
		},
					]
				},
				{
					title:'Орган ПФР',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганПФР',
			text: 'Орган ПФР:',
			style: 'position:absolute;left:6px;top:0px;width:102px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ОрганПФР',
			text: '',
			style: 'position:absolute;left:111px;top:0px;width:591px;height:15px;',
		},
					]
				},
				{
					title:'Орган ФСГС',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганФСГС',
			text: 'Орган ФСГС:',
			style: 'position:absolute;left:6px;top:0px;width:102px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ОрганФСГС',
			text: '',
			style: 'position:absolute;left:111px;top:0px;width:591px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВид',
			text: 'Вид:',
			style: 'position:absolute;left:8px;top:33px;width:108px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Вид',
			text: '',
			style: 'position:absolute;left:119px;top:33px;width:400px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Идентификатор',
			style: 'position:absolute;left:118px;top:89px;width:513px;height:17px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:213px;width:702px;height:23px;',
			height: 23,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'ДополнительныйПредмет',
			text: '',
			style: 'position:absolute;left:6px;top:0px;width:696px;height:15px;',
		},
					]
				},
			]
		},
	]
});