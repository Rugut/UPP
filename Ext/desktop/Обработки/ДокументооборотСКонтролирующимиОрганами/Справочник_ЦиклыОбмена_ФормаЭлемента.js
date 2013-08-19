Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЦиклыОбмена_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:624px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Циклы обмена',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:52px;width:108px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Код',
			text: 'Код',
			style: 'position:absolute;left:119px;top:52px;width:80px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:71px;width:108px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Наименование',
			text: 'Наименование',
			style: 'position:absolute;left:119px;top:71px;width:591px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Предмет',
			text: 'Предмет',
			style: 'position:absolute;left:14px;top:193px;width:696px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:14px;top:133px;width:102px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Организация',
			text: 'Организация',
			style: 'position:absolute;left:119px;top:133px;width:591px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
				{
					text:'Показать документы',
				},
				{
					text:'Показать отчет о состоянии',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Субъекты переписки',
			style: 'position:absolute;left:8px;top:112px;width:702px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Предмет переписки',
			style: 'position:absolute;left:8px;top:172px;width:702px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПомеченНаУдаление',
			text: 'Цикл обмена помечен на удаление',
			style: 'position:absolute;left:529px;top:33px;width:181px;height:15px;text-align:right;',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Сообщения',
			style: 'position:absolute;left:0px;top:57px;width:702px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'ДатаПоследнегоСообщения',
			text: 'ДатаПоследнегоСообщения',
			style: 'position:absolute;left:266px;top:38px;width:106px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Создан:',
			style: 'position:absolute;left:6px;top:20px;width:54px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Активность',
			style: 'position:absolute;left:0px;top:0px;width:702px;height:16px;',
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
			text: 'ДатаСоздания',
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
			text: 'ДатаЗакрытия',
			style: 'position:absolute;left:265px;top:20px;width:106px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:75px;width:702px;height:249px;',
			height: 249,width: 702,
			tabBar:{hidden:true},
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУведомлениеОбУточнении',
			text: 'НадписьУведомлениеОбУточнении',
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
			text: 'НадписьПервичноеСообщение',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеформализованныйДокументНО',
			text: 'НадписьНеформализованныйДокументНО',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеформализованныйДокументНалогоплательщика',
			text: 'НадписьНеформализованныйДокументНалогоплательщика',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапросНаИнформационноеОбслуживание',
			text: 'НадписьЗапросНаИнформационноеОбслуживание',
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
			text: 'НадписьПервичноеСообщениеПФР',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПолученияПФР',
			text: 'НадписьПодтверждениеПолученияПФР',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:37px;width:702px;height:44px;',
			height: 44,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПротоколПФР',
			text: 'НадписьПротоколПФР',
			style: 'position:absolute;left:45px;top:7px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколКвитанцияПФР',
			text: 'НадписьПротоколКвитанцияПФР',
			style: 'position:absolute;left:45px;top:28px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьПротоколКвитанцияПФР',
			text: 'Сформировать квитанцию',
			style: 'position:absolute;left:564px;top:29px;width:138px;height:15px;text-align:right;',
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
			text: 'НадписьНеформализованноеСообщениеПФР',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПолученияНеформализованногоСообщенияПФР',
			text: 'НадписьПодтверждениеПолученияНеформализованногоСообщенияПФР',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьПодтверждениеполученияНеформализованногоСообщенияПФР',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;text-align:right;',
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
			text: 'НадписьПодтверждениеОтправки',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНаНеформализованныйДокументНО',
			text: 'НадписьПодтверждениеНаНеформализованныйДокументНО',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			text: 'НадписьПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеОтправкиЗапроса',
			text: 'НадписьПодтверждениеОтправкиЗапроса',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеформализованноеСообщениеПФРИсходящее',
			text: 'НадписьНеформализованноеСообщениеПФРИсходящее',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеПолученияНеформализованногоСообщенияПФРИсходящее',
			text: 'НадписьПодтверждениеПолученияНеформализованногоСообщенияПФРИсходящее',
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
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьДекларацияНП',
			text: 'НадписьДекларацияНП',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДекларацияНО',
			text: 'НадписьПодтверждениеДекларацияНО',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНП',
			text: 'НадписьИзвещениеПодтверждениеНП',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеДекларацияНО',
			text: 'НадписьИзвещениеДекларацияНО',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаДекларацияНО',
			text: 'НадписьРезультатПриемаДекларацияНО',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНП',
			text: 'НадписьИзвещениеРезультатПриемаНП',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатОбработкиДекларацияНО',
			text: 'НадписьРезультатОбработкиДекларацияНО',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатОбработкиНП',
			text: 'НадписьИзвещениеРезультатОбработкиНП',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатОбработкиНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;text-align:right;',
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
			text: 'НадписьФорма2НДФЛНП',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеФорма2НДФЛНО',
			text: 'НадписьПодтверждениеФорма2НДФЛНО',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНП2НДФЛ',
			text: 'НадписьИзвещениеПодтверждениеНП2НДФЛ',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеФорма2НДФЛНО',
			text: 'НадписьИзвещениеФорма2НДФЛНО',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаФорма2НДФЛНО',
			text: 'НадписьРезультатПриемаФорма2НДФЛНО',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНП2НДФЛ',
			text: 'НадписьИзвещениеРезультатПриемаНП2НДФЛ',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНП2НДФЛ',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНП2НДФЛ',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;text-align:right;',
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
			text: 'НадписьПодтверждениеНаПодтверждениеОтправки',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПереподписанноеПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			text: 'НадписьПереподписанноеПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеНаПодтверждениеОтправкиЗапроса',
			text: 'НадписьПодтверждениеНаПодтверждениеОтправкиЗапроса',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбращениеНП',
			text: 'НадписьОбращениеНП',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеОбращениеНО',
			text: 'НадписьПодтверждениеОбращениеНО',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНПОбращение',
			text: 'НадписьИзвещениеПодтверждениеНПОбращение',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеОбращениеНО',
			text: 'НадписьИзвещениеОбращениеНО',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНПОбращение',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:80px;width:702px;height:44px;',
			height: 44,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаОбращениеНО',
			text: 'НадписьРезультатПриемаОбращениеНО',
			style: 'position:absolute;left:45px;top:7px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНПОбращение',
			text: 'НадписьИзвещениеРезультатПриемаНПОбращение',
			style: 'position:absolute;left:45px;top:28px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНПОбращение',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:29px;width:139px;height:15px;text-align:right;',
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
			style: 'position:absolute;left:541px;top:45px;width:161px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьПереподписанноеПодтверждениеОтправкиНеформализованногоДокументаНалогоплательщика',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:45px;width:161px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьПодтверждениеНаПодтверждениеОтправкиЗапроса',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:45px;width:161px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьПисьмоНО',
			text: 'НадписьПисьмоНО',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПисьмоНП',
			text: 'НадписьИзвещениеПисьмоНП',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПисьмоНП',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;text-align:right;',
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
			text: 'НадписьРассылка',
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
			text: 'НадписьРассылкаГрупповая',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРассылкаНП',
			text: 'НадписьИзвещениеРассылкаНП',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРассылкаНП',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;text-align:right;',
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
			text: 'НадписьПодтверждениеДоставки',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДоставкиНеформализованногоДокументаНалогоплательщика',
			text: 'НадписьПодтверждениеДоставкиНеформализованногоДокументаНалогоплательщика',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДоставкиЗапроса',
			text: 'НадписьПодтверждениеДоставкиЗапроса',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапросНП',
			text: 'НадписьЗапросНП',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеЗапросНО',
			text: 'НадписьПодтверждениеЗапросНО',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНПЗапрос',
			text: 'НадписьИзвещениеПодтверждениеНПЗапрос',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеЗапросНО',
			text: 'НадписьИзвещениеЗапросНО',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаЗапросНО',
			text: 'НадписьРезультатПриемаЗапросНО',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНПЗапрос',
			text: 'НадписьИзвещениеРезультатПриемаНПЗапрос',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНПЗапрос',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНПЗапрос',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатОбработкиЗапросНО',
			text: 'НадписьРезультатОбработкиЗапросНО',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатОбработкиНПЗапрос',
			text: 'НадписьИзвещениеРезультатОбработкиНПЗапрос',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатОбработкиНПЗапрос',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;text-align:right;',
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
			text: 'НадписьЗаявлениеНП',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеЗаявлениеНО',
			text: 'НадписьПодтверждениеЗаявлениеНО',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеНПЗаявление',
			text: 'НадписьИзвещениеПодтверждениеНПЗаявление',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеЗаявлениеНО',
			text: 'НадписьИзвещениеЗаявлениеНО',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаЗаявлениеНО',
			text: 'НадписьРезультатПриемаЗаявлениеНО',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНПЗаявление',
			text: 'НадписьИзвещениеРезультатПриемаНПЗаявление',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатПриемаНПЗаявление',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеНПЗаявление',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатОбработкиЗаявлениеРФНО',
			text: 'НадписьРезультатОбработкиЗаявлениеРФНО',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатОбработкиРФНП',
			text: 'НадписьИзвещениеРезультатОбработкиРФНП',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатОбработкиРФНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:165px;width:702px;height:42px;',
			height: 42,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСообщениеОбОтзывеЗаявлениеРФНО',
			text: 'НадписьСообщениеОбОтзывеЗаявлениеРФНО',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеОбОтзывеЗаявлениеРФНП',
			text: 'НадписьИзвещениеОбОтзывеЗаявлениеРФНП',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеОбОтзывеЗаявлениеРФНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:207px;width:702px;height:42px;',
			height: 42,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатОбработкиЗаявлениеТСНО',
			text: 'НадписьРезультатОбработкиЗаявлениеТСНО',
			style: 'position:absolute;left:45px;top:4px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатОбработкиТСНП',
			text: 'НадписьИзвещениеРезультатОбработкиТСНП',
			style: 'position:absolute;left:45px;top:26px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеРезультатОбработкиТСНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:27px;width:139px;height:15px;text-align:right;',
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
			text: 'НадписьДокументНО',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеДокументНП',
			text: 'НадписьИзвещениеДокументНП',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатПриемаДокументНП',
			text: 'НадписьРезультатПриемаДокументНП',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеРезультатПриемаНО',
			text: 'НадписьИзвещениеРезультатПриемаНО',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеДокументНП',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьРезультатПриемаДокументНП',
			text: 'Сформировать результат приема',
			style: 'position:absolute;left:524px;top:45px;width:178px;height:15px;text-align:right;',
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
			text: 'НадписьПротоколПроверки',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколПроверкиЗапроса',
			text: 'НадписьПротоколПроверкиЗапроса',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПервичноеСообщениеФСГС',
			text: 'НадписьПервичноеСообщениеФСГС',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДатыОтправкиФСГС',
			text: 'НадписьПодтверждениеДатыОтправкиФСГС',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеДатыОтправкиФСГС',
			text: 'НадписьИзвещениеПодтверждениеДатыОтправкиФСГС',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеОтчетностьФСГС',
			text: 'НадписьИзвещениеОтчетностьФСГС',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколФСГС',
			text: 'НадписьПротоколФСГС',
			style: 'position:absolute;left:45px;top:86px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПротоколФСГС',
			text: 'НадписьИзвещениеПротоколФСГС',
			style: 'position:absolute;left:45px;top:107px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПротоколФСГС',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:108px;width:139px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеДатыОтправкиФСГС',
			text: 'Сформировать извещение',
			style: 'position:absolute;left:563px;top:45px;width:139px;height:15px;text-align:right;',
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
			text: 'НадписьПисьмоИсходящееФСГС',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодтверждениеДатыОтправкиПисьмаФСГС',
			text: 'НадписьПодтверждениеДатыОтправкиПисьмаФСГС',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПодтверждениеДатыОтправкиПисьмаФСГС',
			text: 'НадписьИзвещениеПодтверждениеДатыОтправкиПисьмаФСГС',
			style: 'position:absolute;left:45px;top:44px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПисьмоИсходящееФСГС',
			text: 'НадписьИзвещениеПисьмоИсходящееФСГС',
			style: 'position:absolute;left:45px;top:65px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПодтверждениеДатыОтправкиПисьмаФСГС',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:45px;width:161px;height:15px;text-align:right;',
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
			text: 'НадписьПисьмоВходящееФСГС',
			style: 'position:absolute;left:45px;top:2px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзвещениеПисьмоВходящееФСГС',
			text: 'НадписьИзвещениеПисьмоВходящееФСГС',
			style: 'position:absolute;left:45px;top:23px;width:657px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьИзвещениеПисьмоВходящееФСГС',
			text: 'Сформировать подтверждение',
			style: 'position:absolute;left:541px;top:24px;width:161px;height:15px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:336px;width:702px;height:3px;',
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
			style: 'position:absolute;left:8px;top:90px;width:108px;height:15px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:702px;height:19px;',
			height: 19,width: 702,
			tabBar:{hidden:true},
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
			style: 'position:absolute;left:6px;top:0px;width:102px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НалоговыйОрган',
			text: 'НалоговыйОрган',
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
			style: 'position:absolute;left:6px;top:0px;width:102px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОрганПФР',
			text: 'ОрганПФР',
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
			style: 'position:absolute;left:6px;top:0px;width:102px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОрганФСГС',
			text: 'ОрганФСГС',
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
			style: 'position:absolute;left:8px;top:33px;width:108px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Вид',
			text: 'Вид',
			style: 'position:absolute;left:119px;top:33px;width:400px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Идентификатор',
			width: 513,
			height: 17,
			style: 'position:absolute;left:118px;top:89px;width:513px;height:17px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:213px;width:702px;height:23px;',
			height: 23,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'ДополнительныйПредмет',
			text: 'ДополнительныйПредмет',
			style: 'position:absolute;left:6px;top:0px;width:696px;height:15px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:599px;width:718px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});