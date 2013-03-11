Ext.define('Справочники.НастройкиОбменаДанными.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 551,width: 507,
	iconCls: 'bogus',
	title: 'Настройки обмена данными',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:507px;height:25px;',
			items:
			[
				{
					text:'ВвестиНаОсновании',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'ВвестиНаОсновании',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ЗарегистрироватьВсеОбъектыДляОбмена',
				},
				{
					text:'ПроизвестиОбменДанными',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'ОткрытьМониторОбменов',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеЧтениеИЗаписьСообщений',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОткрытьМониторОбменов',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:526px;width:507px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:460px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:500px;width:398px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:492px;height:438px;',
			height: 438,width: 492,
			items:
			[
				{
					title:'ОтправкаИПриемСообщений',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелИнформационнойБазы',
			style: 'position:absolute;left:93px;top:6px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипНастройки',
			style: 'position:absolute;left:93px;top:160px;width:391px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:184px;width:478px;height:113px;',
			height: 113,width: 478,
			items:
			[
				{
					title:'Файловый',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогОбменаИнформацией',
			style: 'position:absolute;left:87px;top:0px;width:391px;height:19px;',
		},
					]
				},
				{
					title:'FTPОбмен',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'FTPАдресОбмена',
			style: 'position:absolute;left:87px;top:0px;width:185px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:277px;top:72px;width:159px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПользовательFTPСоединения',
			style: 'position:absolute;left:87px;top:24px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольFTPСоединения',
			style: 'position:absolute;left:87px;top:48px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортFTPСоединения',
			style: 'position:absolute;left:358px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальныйРазмерОтправляемогоПолучаемогоПакетаЧерезFTP',
			style: 'position:absolute;left:87px;top:72px;width:185px;height:19px;',
		},
					]
				},
				{
					title:'Почта',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗаписьПриемаОтправкиСообщений',
			style: 'position:absolute;left:106px;top:24px;width:372px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПочтовыйАдресПолучателя',
			style: 'position:absolute;left:106px;top:0px;width:372px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальныйРазмерОтправляемогоПакетаЧерезПочту',
			style: 'position:absolute;left:256px;top:68px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'ОбменЧерезCOM',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:47px;width:472px;height:19px;',
			height: 19,width: 472,
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
			style: 'position:absolute;left:133px;top:0px;width:339px;height:19px;',
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
			style: 'position:absolute;left:133px;top:0px;width:145px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения',
			style: 'position:absolute;left:357px;top:0px;width:115px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПользовательИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:139px;top:94px;width:146px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:362px;top:94px;width:116px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ТестПодключения',
			text: 'Проверить...',
			style: 'position:absolute;left:362px;top:70px;width:116px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗагрузитьПравилаОбратныйОбмен',
			text: '',
			style: 'position:absolute;left:361px;top:0px;width:25px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'СохранитьПравилаОбратныйОбмен',
			text: '',
			style: 'position:absolute;left:391px;top:0px;width:25px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ИнформацияОПравилах1',
			text: '',
			style: 'position:absolute;left:421px;top:0px;width:25px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелФоновогоОбмена',
			style: 'position:absolute;left:93px;top:116px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовДляФоновогоОбмена',
			style: 'position:absolute;left:419px;top:93px;width:65px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗагрузитьПравила',
			text: '',
			style: 'position:absolute;left:250px;top:69px;width:25px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'СохранитьПравила',
			text: '',
			style: 'position:absolute;left:280px;top:69px;width:25px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПроверитьПравилаОбмена',
			text: 'Проверить правила...',
			style: 'position:absolute;left:338px;top:69px;width:139px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ИнформацияОПравилах',
			text: '',
			style: 'position:absolute;left:309px;top:69px;width:25px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольНаПрием',
			style: 'position:absolute;left:250px;top:317px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольНаОтправку',
			style: 'position:absolute;left:250px;top:363px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'ОбменПоПравилам',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаПротоколаОбмена',
			style: 'position:absolute;left:140px;top:29px;width:344px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОшибокОтложенногоПроведенияДляПрекращенияОперации',
			style: 'position:absolute;left:220px;top:98px;width:98px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗапуститьОтложенныеДвиженияДокументов',
			text: 'Выполнить отложенные движения..',
			style: 'position:absolute;left:6px;top:120px;width:210px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ЗапуститьОтложенныеДвиженияДокументовПодПолнымиПравами',
			text: 'Выполнить движения под полными правами..',
			style: 'position:absolute;left:222px;top:120px;width:260px;height:24px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:146px;width:478px;height:266px;',
			height: 266,width: 478,
			items:
			[
				{
					title:'НастройкиВыгрузки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:464px;height:207px;',
			height: 207,width: 464,
			columns:
			[
				{
					text:'ЭтоНастройкаДляВыгрузки',
				},
				{
					text:'НаименованиеПравилаВыгрузки',
				},
				{
					text:'НастройкаВыгрузки',
				},
				{
					text:'ВыгружатьДанные',
				},
				{
					text:'ВыгружатьПоСсылке',
				},
				{
					text:'КодПравилаВыгрузки',
				},
				{
					text:'КодПравилаОбмена',
				},
				{
					text:'НастройкаНеПоддерживается',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:464px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'ОбновитьНастройки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ИзменитьНастройку',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
				{
					title:'СопоставлениеОбъектов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:33px;width:465px;height:207px;',
			height: 207,width: 465,
			columns:
			[
				{
					text:'ЭтоНастройкаДляВыгрузки',
				},
				{
					text:'НаименованиеПравилаОбмена',
				},
				{
					text:'ИмяНастройкиДляПользователя',
				},
				{
					text:'ОписаниеНастройкиДляПользователя',
				},
				{
					text:'ИмяНастройкиДляАлгоритма',
				},
				{
					text:'НастройкаНеПоддерживается',
				},
				{
					text:'ВариантПоискаНеПоддерживается',
				},
				{
					text:'КодПравилаОбмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:6px;width:465px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'ОбновитьНастройки',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ИнтерактивныйОбмен',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииНаЗапись1',
			style: 'position:absolute;left:260px;top:118px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииНаЧтение1',
			style: 'position:absolute;left:260px;top:142px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗаписьОтправкиСообщенияОбОшибке',
			style: 'position:absolute;left:148px;top:187px;width:336px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДляОтправкиСообщенийОбОшибке',
			style: 'position:absolute;left:148px;top:211px;width:336px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:16px;top:260px;width:468px;height:152px;',
			height: 152,width: 468,
			columns:
			[
				{
					text:'ТекстСообщения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:16px;top:234px;width:468px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
				{
					title:'НастройкиАвтоматическогоВыполненияОбменов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:76px;width:478px;height:336px;',
			height: 336,width: 478,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:50px;width:478px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
			]
		},
	]
});