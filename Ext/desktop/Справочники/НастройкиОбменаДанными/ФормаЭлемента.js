Ext.require(['Данные.Справочники.НастройкиОбменаДанными'], function () 
{
	Ext.define('Справочники.НастройкиОбменаДанными.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:507px;height:551px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки обмена данными',
	
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
			style: 'position:absolute;left:418px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:460px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 323,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:323px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:500px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 398,
			height: 19,
			style: 'position:absolute;left:102px;top:500px;width:398px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:492px;height:438px;',
			height: 438,width: 492,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУзелИнформационнойБазы',
			text: 'Узел:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'УзелИнформационнойБазы.Представление',
			width: 391,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:6px;width:391px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТипНастройки',
			text: 'Тип обмена:',
			style: 'position:absolute;left:6px;top:160px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ТипНастройки.Представление',
			width: 391,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:160px;width:391px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:184px;width:478px;height:113px;',
			height: 113,width: 478,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Файловый',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКаталогОбменаИнформацией',
			text: 'Каталог:',
			style: 'position:absolute;left:5px;top:0px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогОбменаИнформацией',
			width: 391,
			height: 19,
			style: 'position:absolute;left:87px;top:0px;width:391px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорт',
			text: 'Порт:',
			style: 'position:absolute;left:274px;top:0px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПравилаОбменаПриемник',
			text: 'Правила выгрузки из базы обмена в текущую базу',
			style: 'position:absolute;left:6px;top:0px;width:348px;height:19px;',
		},
					]
				},
				{
					title:'FTPОбмен',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьFTPАдресОбмена',
			text: 'Адрес:',
			style: 'position:absolute;left:6px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'FTPАдресОбмена',
			width: 185,
			height: 19,
			style: 'position:absolute;left:87px;top:0px;width:185px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:277px;top:72px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользовательFTPСоединения',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:24px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПользовательFTPСоединения',
			width: 391,
			height: 19,
			style: 'position:absolute;left:87px;top:24px;width:391px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольFTPСоединения',
			text: 'Пароль:',
			style: 'position:absolute;left:6px;top:48px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольFTPСоединения',
			width: 185,
			height: 19,
			style: 'position:absolute;left:87px;top:48px;width:185px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПортFTPСоединения',
			style: 'position:absolute;left:358px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМаксимальныйРазмерПакетаЧерезFTP',
			text: 'Макс. пакет:',
			style: 'position:absolute;left:6px;top:72px;width:79px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксимальныйРазмерОтправляемогоПолучаемогоПакетаЧерезFTP',
			style: 'position:absolute;left:87px;top:72px;width:185px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пассивное FTP соединение',
			style: 'position:absolute;left:277px;top:48px;width:201px;height:19px;',
		},
					]
				},
				{
					title:'Почта',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУчетнаяЗаписьПриемаОтпревкиСообщений',
			text: 'Учетная запись:',
			style: 'position:absolute;left:6px;top:24px;width:98px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'УчетнаяЗаписьПриемаОтправкиСообщений.Представление',
			width: 372,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:106px;top:24px;width:372px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПочтовыйАдресПолучателя',
			text: 'Адрес получателя:',
			style: 'position:absolute;left:6px;top:0px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПочтовыйАдресПолучателя',
			width: 372,
			height: 19,
			style: 'position:absolute;left:106px;top:0px;width:372px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Получать почту при обмене',
			style: 'position:absolute;left:6px;top:48px;width:158px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМаксимальныйРазмерПакетаЧерезПочту',
			text: 'Максимальный размер отправляемого пакета:',
			style: 'position:absolute;left:6px;top:68px;width:245px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксимальныйРазмерОтправляемогоПакетаЧерезПочту',
			style: 'position:absolute;left:256px;top:68px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'Обмен через COM',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипИнформационнойБазыДляПодключения',
			text: 'Тип инф. базы:',
			style: 'position:absolute;left:6px;top:24px;width:131px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:140px;top:24px;width:182px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:47px;width:472px;height:19px;',
			height: 19,width: 472,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Подключение файловая ИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогИнформационнойБазыДляПодключения',
			width: 339,
			height: 19,
			style: 'position:absolute;left:133px;top:0px;width:339px;height:19px;',
		},
					]
				},
				{
					title:'Подключение серверная ИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяСервераИнформационнойБазыДляПодключения',
			width: 145,
			height: 19,
			style: 'position:absolute;left:133px;top:0px;width:145px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяИнформационнойБазы',
			text: 'Инф. база:',
			style: 'position:absolute;left:284px;top:0px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения',
			width: 115,
			height: 19,
			style: 'position:absolute;left:357px;top:0px;width:115px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Аутентификация Windows',
			style: 'position:absolute;left:6px;top:70px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользовательДляПодключения',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:94px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПользовательИнформационнойБазыДляПодключения',
			width: 146,
			height: 19,
			style: 'position:absolute;left:139px;top:94px;width:146px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПароль',
			text: 'Пароль:',
			style: 'position:absolute;left:292px;top:94px;width:62px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольИнформационнойБазыДляПодключения',
			width: 116,
			height: 19,
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
		{
			xtype: 'combobox',
			style: 'position:absolute;left:328px;top:24px;width:150px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьУзелФоновогоОбмена',
			text: 'Узел фон:',
			style: 'position:absolute;left:6px;top:116px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'УзелФоновогоОбмена.Представление',
			width: 391,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:116px;width:391px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТипДобавленияДанныхИзФоновогоОбмена',
			text: 'Фоновый обмен:',
			style: 'position:absolute;left:6px;top:93px;width:88px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:94px;top:93px;width:254px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДополняемыхОбъектов',
			text: 'Количество:',
			style: 'position:absolute;left:351px;top:93px;width:65px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоОбъектовДляФоновогоОбмена',
			style: 'position:absolute;left:419px;top:93px;width:65px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обмен по правилам обмена',
			style: 'position:absolute;left:6px;top:50px;width:163px;height:15px;',
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
			xtype: 'fieldset',
			title: 'Передача данных между информационными базами',
			style: 'position:absolute;left:6px;top:140px;width:478px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Обмен данными по правилам обмена',
			style: 'position:absolute;left:6px;top:30px;width:478px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'ИнформацияОПравилах',
			text: '',
			style: 'position:absolute;left:309px;top:69px;width:25px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительные настройки обмена',
			style: 'position:absolute;left:6px;top:297px;width:478px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольНаПрием',
			width: 120,
			height: 19,
			style: 'position:absolute;left:250px;top:317px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольНаПрием',
			text: 'Пароль распаковки (при загрузке данных):',
			style: 'position:absolute;left:14px;top:317px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сжатие исходящего файла обмена',
			style: 'position:absolute;left:14px;top:340px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольНаОтправку',
			width: 120,
			height: 19,
			style: 'position:absolute;left:250px;top:363px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольНаЗапись',
			text: 'Пароль сжатия (при выгрузке данных):',
			style: 'position:absolute;left:35px;top:363px;width:207px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияПоАвтообмену',
			text: 'Автоматический обмен по настройке будет выполняться только в том случае, если она включена в одну из настроек выполнения обмена данными. Список всех настроек выполнения обмена:',
			style: 'position:absolute;left:6px;top:6px;width:478px;height:42px;',
		},
					]
				},
				{
					title:'Обмен по правилам',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать режим отладки для обмена данными',
			style: 'position:absolute;left:6px;top:6px;width:284px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаПротокола',
			text: 'Имя файла, протокола:',
			style: 'position:absolute;left:6px;top:29px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаПротоколаОбмена',
			width: 344,
			height: 19,
			style: 'position:absolute;left:140px;top:29px;width:344px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'После ошибки отложенного проведения прекратить операции',
			style: 'position:absolute;left:6px;top:76px;width:339px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоОшибокДляЗавершения',
			text: 'Количество ошибок для завершения:',
			style: 'position:absolute;left:21px;top:98px;width:191px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
			xtype: 'checkbox',
			boxLabel: 'Выполнять отложенные движения после загрузки данных',
			style: 'position:absolute;left:6px;top:52px;width:319px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:146px;width:478px;height:266px;',
			height: 266,width: 478,
			items:
			[
				{
					title:'Настройки выгрузки',
					items:
					[
		{
			id: 'НастройкаВыгрузкиДанных',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:464px;height:207px;',
			height: 207,width: 464,
			columns:
			[
				{
					text:'Выгрузка',
					width:'53',
					dataIndex:'ЭтоНастройкаДляВыгрузки',
					flex:1,
				},
				{
					text:'Наименование объекта',
					width:'184',
					dataIndex:'НаименованиеПравилаВыгрузки',
					flex:1,
				},
				{
					text:'Настройка выгрузки',
					width:'156',
					dataIndex:'НастройкаВыгрузки',
					flex:1,
				},
				{
					text:'Выгружать',
					width:'44',
					dataIndex:'ВыгружатьДанные',
					flex:1,
				},
				{
					text:'Выгружать по ссылке',
					width:'73',
					dataIndex:'ВыгружатьПоСсылке',
					flex:1,
				},
				{
					text:'Код правила выгрузки',
					width:'91',
					dataIndex:'КодПравилаВыгрузки',
					flex:1,
				},
				{
					text:'Код правила обмена',
					width:'100',
					dataIndex:'КодПравилаОбмена',
					flex:1,
				},
				{
					text:'Настройка не поддерживается',
					width:'100',
					dataIndex:'НастройкаНеПоддерживается',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиОбменаДанными").data,
					fields: ['ЭтоНастройкаДляВыгрузки','НаименованиеПравилаВыгрузки','НастройкаВыгрузки','ВыгружатьДанные','ВыгружатьПоСсылке','КодПравилаВыгрузки','КодПравилаОбмена','НастройкаНеПоддерживается',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ЭтоНастройкаДляВыгрузки',
					},
					{
						name:'НаименованиеПравилаВыгрузки',
					},
					{
						name:'НастройкаВыгрузки',
					},
					{
						name:'ВыгружатьДанные',
					},
					{
						name:'ВыгружатьПоСсылке',
					},
					{
						name:'КодПравилаВыгрузки',
					},
					{
						name:'КодПравилаОбмена',
					},
					{
						name:'НастройкаНеПоддерживается',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('НастройкаВыгрузкиДанных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Сопоставление объектов',
					items:
					[
		{
			id: 'НастройкаВариантовПоискаОбъектов',
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:33px;width:465px;height:207px;',
			height: 207,width: 465,
			columns:
			[
				{
					text:'Выгрузка',
					width:'60',
					dataIndex:'ЭтоНастройкаДляВыгрузки',
					flex:1,
				},
				{
					text:'Наименование объекта',
					width:'130',
					dataIndex:'НаименованиеПравилаОбмена',
					flex:1,
				},
				{
					text:'Настройка сопоставления',
					width:'140',
					dataIndex:'ИмяНастройкиДляПользователя',
					flex:1,
				},
				{
					text:'Описание',
					width:'130',
					dataIndex:'ОписаниеНастройкиДляПользователя',
					flex:1,
				},
				{
					text:'Имя настройки для алгоритма',
					width:'100',
					dataIndex:'ИмяНастройкиДляАлгоритма',
					flex:1,
				},
				{
					text:'Настройка не поддерживается',
					width:'100',
					dataIndex:'НастройкаНеПоддерживается',
					flex:1,
				},
				{
					text:'Вариант поиска не поддерживается',
					width:'100',
					dataIndex:'ВариантПоискаНеПоддерживается',
					flex:1,
				},
				{
					text:'Код правила обмена',
					width:'100',
					dataIndex:'КодПравилаОбмена',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиОбменаДанными").data,
					fields: ['ЭтоНастройкаДляВыгрузки','НаименованиеПравилаОбмена','ИмяНастройкиДляПользователя','ОписаниеНастройкиДляПользователя','ИмяНастройкиДляАлгоритма','НастройкаНеПоддерживается','ВариантПоискаНеПоддерживается','КодПравилаОбмена',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ЭтоНастройкаДляВыгрузки',
					},
					{
						name:'НаименованиеПравилаОбмена',
					},
					{
						name:'ИмяНастройкиДляПользователя',
					},
					{
						name:'ОписаниеНастройкиДляПользователя',
					},
					{
						name:'ИмяНастройкиДляАлгоритма',
					},
					{
						name:'НастройкаНеПоддерживается',
					},
					{
						name:'ВариантПоискаНеПоддерживается',
					},
					{
						name:'КодПравилаОбмена',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('НастройкаВариантовПоискаОбъектов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Интерактивный обмен',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Загружать данные',
			style: 'position:absolute;left:6px;top:47px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать данные',
			style: 'position:absolute;left:6px;top:70px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать данные только при успешной загрузке',
			style: 'position:absolute;left:16px;top:93px;width:279px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Действия при интерактивном обмене',
			style: 'position:absolute;left:6px;top:6px;width:478px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииНаЗапись1',
			text: 'Элементов в транзакции при загрузке данных:',
			style: 'position:absolute;left:6px;top:118px;width:245px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭлементовВТранзакцииНаЗапись1',
			style: 'position:absolute;left:260px;top:118px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииНаЧтение1',
			text: 'Элементов в транзакции при выгрузке данных:',
			style: 'position:absolute;left:6px;top:142px;width:245px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭлементовВТранзакцииНаЧтение1',
			style: 'position:absolute;left:260px;top:142px;width:120px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отправлять сообщения при ошибке обмена',
			style: 'position:absolute;left:6px;top:166px;width:478px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУчетнаяЗапись',
			text: 'Учетная запись:',
			style: 'position:absolute;left:16px;top:187px;width:130px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'УчетнаяЗаписьОтправкиСообщенияОбОшибке.Представление',
			width: 336,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:187px;width:336px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьАдресДляОтправкиСообщений',
			text: 'Адрес для отправки:',
			style: 'position:absolute;left:16px;top:211px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресДляОтправкиСообщенийОбОшибке',
			width: 336,
			height: 19,
			style: 'position:absolute;left:148px;top:211px;width:336px;height:19px;',
		},
		{
			id: 'СообщенияНеЯвляющиесяОшибками',
			xtype: 'grid',
			style: 'position:absolute;left:16px;top:260px;width:468px;height:152px;',
			height: 152,width: 468,
			columns:
			[
				{
					text:'Тексты сообщений, которые не являются ошибками',
					width:'324',
					dataIndex:'ТекстСообщения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиОбменаДанными").data,
					fields: ['ТекстСообщения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ТекстСообщения',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('СообщенияНеЯвляющиесяОшибками');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять обмен данными под полными правами',
			style: 'position:absolute;left:6px;top:26px;width:277px;height:16px;',
		},
					]
				},
				{
					title:'Автоматический обмен',
					items:
					[
		{
			id: 'НастройкиВыполненияОбменов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:76px;width:478px;height:336px;',
			height: 336,width: 478,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'70',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'362',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'169',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиОбменаДанными").data,
					fields: ['Картинка','Код','Наименование','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'Комментарий',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('НастройкиВыполненияОбменов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиОбменаДанными.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
			style: 'position:absolute;left:0px;top:0px;width:507px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Ввести на основании...',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Выполнить обмен',
				},
				{
					text:'Монитор обменов',
				},
				'-',
				{
					text:'Зарегистрировать для обмена',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				{
					text:'Ввести на основании...',
				},
				'-',
				{
					text:'Выполнить обмен',
				},
				'-',
				{
					text:'Монитор обменов',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:526px;width:507px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});