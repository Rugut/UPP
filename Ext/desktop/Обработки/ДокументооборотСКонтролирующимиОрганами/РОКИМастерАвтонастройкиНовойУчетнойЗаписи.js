Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИМастерАвтонастройкиНовойУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Автоматическая настройка параметров учетной записи абонентов ""Такском""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:375px;',
			height: 375,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Автоматическая настройка параметров учетной записи',
			style: 'position:absolute;left:12px;top:25px;width:576px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:61px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Для того чтобы приступить к настройке нажмите кнопку "Далее >".',
			style: 'position:absolute;left:12px;top:9px;width:578px;height:82px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:273px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Мастер автоматической настройки поможет настроить параметры учетной записи по информации с "сервера ресурсов общей ключевой информации" специализированного оператора связи компании "Такском".\r\n\r\nНа данном сервере Интернета в зашифрованном виде размещается информация о параметрах учетных записей налогоплательщиков - абонентов компании.',
			style: 'position:absolute;left:10px;top:99px;width:581px;height:66px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Указание параметров организации-абонента ',
			style: 'position:absolute;left:12px;top:25px;width:576px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:61px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Укажите организацию, для которой необходимо настроить параметры учетной записи,\r\nили задайте ее ИНН и КПП.\r\n\r\nЭти параметры необходимы для обращения к серверу Интернет, на котором хранятся настройки.',
			style: 'position:absolute;left:12px;top:9px;width:578px;height:82px;',
		},
					]
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 560,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:28px;top:141px;width:560px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИМастерАвтонастройкиНовойУчетнойЗаписиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИМастерАвтонастройкиНовойУчетнойЗаписиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИМастерАвтонастройкиНовойУчетнойЗаписиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИМастерАвтонастройкиНовойУчетнойЗаписиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:29px;top:192px;width:372px;height:20px;',
			height: 20,width: 372,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:3px;width:69px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'КПП:',
			style: 'position:absolute;left:201px;top:3px;width:69px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 97,
			height: 19,
			style: 'position:absolute;left:74px;top:0px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 97,
			height: 19,
			style: 'position:absolute;left:275px;top:1px;width:97px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:273px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:13px;top:119px;width:93px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Параметры:',
			style: 'position:absolute;left:13px;top:169px;width:93px;height:15px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Регистрация личного сертификата лица, ответственного за шифрование',
			style: 'position:absolute;left:12px;top:25px;width:576px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:61px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Один из сертификатов ответственных лиц организации, изданных для налогоплательщика удостоверяющим центром, предназначен для целей шифрования. Необходимо зарегистрировать этот личный сертификат в системе перед обращением за информацией о настройках к серверу "Такском".\r\nДля этого укажите файл с сертификатом и соответствующий ему ключевой контейнер (контейнер должен быть доступен в момент выбора).',
			style: 'position:absolute;left:12px;top:9px;width:578px;height:82px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Файл сертификата:',
			style: 'position:absolute;left:12px;top:145px;width:112px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Ключевой контейнер:',
			style: 'position:absolute;left:12px;top:172px;width:112px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СертификатШифрованиеФайл',
			width: 458,
			height: 19,
			style: 'position:absolute;left:130px;top:143px;width:458px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СертификатШифрованиеКонтейнер',
			width: 458,
			height: 19,
			style: 'position:absolute;left:130px;top:170px;width:458px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:273px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Сертификат:',
			style: 'position:absolute;left:12px;top:145px;width:112px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Ключевой контейнер:',
			style: 'position:absolute;left:12px;top:172px;width:112px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СертификатРуководителя',
			width: 458,
			height: 19,
			style: 'position:absolute;left:130px;top:143px;width:458px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СертификатРуководителяКонтейнер',
			width: 458,
			height: 19,
			style: 'position:absolute;left:130px;top:170px;width:458px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Регистрация сертификата руководителя организации',
			style: 'position:absolute;left:12px;top:25px;width:576px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:61px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'Выберите ключевой контейнер и нажмите кнопку "Далее >" для регистрации сертификата руководителя с привязкой к соответствующему закрытому ключу.\r\n\r\nВ момент регистрации ключевой носитель (дискета или USB-устройство), содержащий контейнер с закрытым ключом, должен быть вставлен в дисковод для гибких дисков или USB-порт компьютера.',
			style: 'position:absolute;left:12px;top:9px;width:578px;height:82px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:273px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Сертификат:',
			style: 'position:absolute;left:12px;top:145px;width:112px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Ключевой контейнер:',
			style: 'position:absolute;left:12px;top:172px;width:112px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СертификатБухгалтера',
			width: 458,
			height: 19,
			style: 'position:absolute;left:130px;top:143px;width:458px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СертификатБухгалтераКонтейнер',
			width: 458,
			height: 19,
			style: 'position:absolute;left:130px;top:170px;width:458px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:61px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Выберите ключ��вой контейнер и нажмите кнопку "Далее >" для регистрации сертификата главного бухгалтера с привязкой к соответствующему закрытому ключу.\r\n\r\nВ момент регистрации ключевой носитель (дискета или USB-устройство), содержащий контейнер с закрытым ключом, должен быть вставлен в дисковод для гибких дисков или USB-порт компьютера.',
			style: 'position:absolute;left:12px;top:9px;width:578px;height:82px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:273px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Сохранение информации в ИБ и завершение работы мастера',
			style: 'position:absolute;left:12px;top:25px;width:576px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:61px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'Нажмите "Готово" для сохранения информации в информационной базе и завершения работы мастера.',
			style: 'position:absolute;left:12px;top:9px;width:578px;height:82px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:273px;width:600px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись45',
			text: 'Настройка учетной записи успешно завершена.',
			style: 'position:absolute;left:12px;top:128px;width:250px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открыть форму учетной записи',
			style: 'position:absolute;left:12px;top:239px;width:182px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сопоставить учетную запись организации ',
			style: 'position:absolute;left:12px;top:212px;width:582px;height:15px;',
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
			style: 'position:absolute;left:0px;top:375px;width:600px;height:25px;',
			width: 600,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<  Назад',
				},
				{
					text:'Далее  >',
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