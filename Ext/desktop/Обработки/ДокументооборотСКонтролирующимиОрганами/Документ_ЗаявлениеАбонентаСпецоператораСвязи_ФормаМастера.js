Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастера',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:668px;height:485px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Мастер заполнения заявления на подключение',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:460px;',
			height: 460,width: 668,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: ' ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Следуя подсказкам мастера, создайте и отправьте заявление на подключение к системе электронного документооборота с контролирующими органами.\r\n\r\nНа основании этого заявления будет создан и зарегистрирован сертификат ключа электронно-цифровой подписи и подключен защищенный документооборот с контролирующими органами (ФНС, ПФР, Росстат и ФСС), после чего вы сможете приступить к отправке отчетности и обмену прочими видами документов.\r\n\r\nДля того чтобы приступить к настройке, нажмите кнопку "Далее >"',
			style: 'position:absolute;left:8px;top:140px;width:652px;height:152px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'Мастер заполнения заявления на подключение к электронному документообороту',
			style: 'position:absolute;left:8px;top:5px;width:652px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'Надпись59',
			text: 'Вас приветствует мастер заполнения заявления на подключение!',
			style: 'position:absolute;left:8px;top:92px;width:532px;height:20px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись60',
			text: ' ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись61',
			text: 'Шаг 1 из 8. Регистрационный номер программы "1С:Предприятия 8"',
			style: 'position:absolute;left:8px;top:5px;width:652px;height:50px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерОсновнойПоставки1с',
			width: 164,
			height: 19,
			style: 'position:absolute;left:160px;top:164px;width:164px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись62',
			text: 'Номер основной поставки:',
			style: 'position:absolute;left:8px;top:164px;width:144px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись63',
			text: 'Укажите регистрационный номер программы "1С:Предприятия 8".\r\n\r\nОбратите внимание! Наличие договора информационно-технологического сопровождения (1С:ИТС) уровня ПРОФ позволяет сдавать отчетность для одного юридического лица или индивидуального предпринимателя без дополнительной оплаты.',
			style: 'position:absolute;left:8px;top:68px;width:652px;height:84px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОткрытьСтраницуИТС',
			text: 'Подробнее об ИТС...',
			style: 'position:absolute;left:160px;top:192px;width:164px;height:16px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись47',
			text: ' ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Шаг 2 из 8. Выбор удостоверяющего центра и специализированного оператора связи',
			style: 'position:absolute;left:8px;top:5px;width:652px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Удостоверяющий центр:',
			style: 'position:absolute;left:8px;top:140px;width:128px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпецоператорИУЦ',
			width: 508,
			height: 19,
			style: 'position:absolute;left:148px;top:140px;width:508px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОткрытьСтраницуУЦ',
			text: 'Подробнее об услугах на сайте удостоверяющего центра...',
			style: 'position:absolute;left:148px;top:168px;width:508px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись52',
			text: 'Выберите организацию-посредника, которая будет осуществлять функции удостоверяющего центра, издающего сертификат ключа электронно-цифровой подписи, и осуществлять поддержку электронного документооборота',
			style: 'position:absolute;left:8px;top:68px;width:652px;height:48px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: ' ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Шаг 3 из 8. Выбор криптопровайдера',
			style: 'position:absolute;left:8px;top:5px;width:652px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'СкачатьVipNetCSP',
			text: 'Сайт ОАО «ИнфоТеКС» - разработчика криптопровайдера VipNet CSP',
			style: 'position:absolute;left:32px;top:212px;width:528px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'СкачатьCryptoProCSP',
			text: 'Сайт компании КРИПТО-ПРО - разработчика криптопровайдера  CryptoPro CSP',
			style: 'position:absolute;left:32px;top:268px;width:532px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРекомендация',
			text: 'НадписьРекомендация',
			style: 'position:absolute;left:140px;top:352px;width:520px;height:93px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Выберите криптопровайдер (средство криптографической защиты информации), используемый для защиты и обеспечения юридической значимости передаваемой информации. Более подробную информацию, например, об условиях приобретения и использования криптопровайдера, можно получить на сайте разработчика',
			style: 'position:absolute;left:8px;top:68px;width:652px;height:76px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Криптопровайдер',
			style: 'position:absolute;left:16px;top:156px;width:644px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Справочная информация',
			style: 'position:absolute;left:16px;top:328px;width:644px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'VipNet CSP',
			style: 'position:absolute;left:16px;top:188px;width:644px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'CryptoPro CSP',
			style: 'position:absolute;left:16px;top:244px;width:644px;height:16px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'ВывестиСоглашениеНапечать',
			text: 'Печать',
			style: 'position:absolute;left:588px;top:431px;width:72px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подтверждаю, что принимаю условия соглашения о присоединении к регламенту удостоверяющего центра',
			style: 'position:absolute;left:8px;top:431px;width:568px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: ' ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Шаг 4 из 8. Соглашение о предоставлении услуг',
			style: 'position:absolute;left:8px;top:5px;width:652px;height:50px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:424px;width:652px;height:4px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись54',
			text: 'Ознакомьтесь с соглашением о присоединении к регламенту удостоверяющего центра',
			style: 'position:absolute;left:8px;top:68px;width:652px;height:20px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись31',
			text: ' ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Шаг 5 из 8. Выбор организации - отправителя отчетности',
			style: 'position:absolute;left:8px;top:5px;width:656px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:116px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 384,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:140px;top:116px;width:384px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:204px;width:128px;height:15px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:140px;top:204px;width:520px;height:38px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКраткоеНаименование',
			text: 'Краткое наименование:',
			style: 'position:absolute;left:8px;top:180px;width:128px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КраткоеНаименование',
			width: 520,
			height: 19,
			style: 'position:absolute;left:140px;top:180px;width:520px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:8px;top:248px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 110,
			height: 19,
			style: 'position:absolute;left:140px;top:248px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:8px;top:276px;width:54px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 110,
			height: 19,
			style: 'position:absolute;left:140px;top:276px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерПФР',
			text: 'Регистрационный номер ПФР:',
			style: 'position:absolute;left:376px;top:248px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерПФР',
			width: 110,
			height: 19,
			style: 'position:absolute;left:548px;top:248px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер ФСС:',
			style: 'position:absolute;left:376px;top:276px;width:167px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:548px;top:276px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЮрАдрес',
			text: 'Юридический адрес:',
			style: 'position:absolute;left:8px;top:364px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЮрАдрес',
			width: 520,
			height: 19,
			style: 'position:absolute;left:140px;top:364px;width:520px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФактАдрес',
			text: 'Фактический адрес:',
			style: 'position:absolute;left:8px;top:388px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФактАдрес',
			width: 520,
			height: 19,
			style: 'position:absolute;left:140px;top:388px;width:520px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЭлектАдрес',
			text: 'Электронная почта:',
			style: 'position:absolute;left:8px;top:436px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЭлектАдрес',
			width: 160,
			height: 19,
			style: 'position:absolute;left:140px;top:436px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:8px;top:412px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 160,
			height: 19,
			style: 'position:absolute;left:140px;top:412px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефонМобильный',
			text: 'Дополнительный телефон:',
			style: 'position:absolute;left:324px;top:412px;width:163px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТелефонМобильный',
			width: 156,
			height: 19,
			style: 'position:absolute;left:504px;top:412px;width:156px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Крупнейшим налогоплательщиком',
			style: 'position:absolute;left:140px;top:300px;width:200px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: ' Обособленным подразделением',
			style: 'position:absolute;left:140px;top:320px;width:193px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Основные сведения',
			style: 'position:absolute;left:8px;top:156px;width:652px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Контактная информация',
			style: 'position:absolute;left:8px;top:340px;width:652px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное1',
			text: 'Организация является:',
			style: 'position:absolute;left:8px;top:300px;width:124px;height:15px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьСведенияОбОрганизации',
			text: 'Обновить сведения',
			style: 'position:absolute;left:532px;top:116px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись55',
			text: 'Выберите организацию, по которой предполагается осуществлять документооборот (сдавать отчетность), проверьте ее реквизиты и контактную информацию',
			style: 'position:absolute;left:8px;top:68px;width:652px;height:40px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный номер ФСС:',
			style: 'position:absolute;left:376px;top:300px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныйКодФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:548px;top:300px;width:110px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сотрудник',
			width: 396,
			height: 19,
			style: 'position:absolute;left:264px;top:160px;width:396px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Вид документа:',
			style: 'position:absolute;left:8px;top:327px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ДокументВидСотрудника.Представление',
			width: 544,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:116px;top:327px;width:544px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Серия:',
			style: 'position:absolute;left:8px;top:352px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументСерияСотрудника',
			width: 140,
			height: 19,
			style: 'position:absolute;left:116px;top:353px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Номер:',
			style: 'position:absolute;left:264px;top:352px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументНомерСотрудника',
			width: 140,
			height: 19,
			style: 'position:absolute;left:304px;top:353px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Дата выдачи:',
			style: 'position:absolute;left:448px;top:353px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДокументДатаВыдачиСотрудника',
			width: 140,
			height: 19,
			style: 'position:absolute;left:520px;top:353px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Кем выдан :',
			style: 'position:absolute;left:8px;top:379px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументКемВыданСотрудника',
			width: 544,
			height: 19,
			style: 'position:absolute;left:116px;top:379px;width:544px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Кадровые данные',
			style: 'position:absolute;left:8px;top:247px;width:652px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение2',
			text: 'Подразделение:',
			style: 'position:absolute;left:344px;top:270px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеСотрудника',
			width: 216,
			height: 19,
			style: 'position:absolute;left:444px;top:269px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность2',
			text: 'Должность:',
			style: 'position:absolute;left:8px;top:269px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьСотрудника',
			width: 188,
			height: 19,
			style: 'position:absolute;left:116px;top:269px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Документ, удостоверяющий личность',
			style: 'position:absolute;left:8px;top:305px;width:652px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 140,
			height: 19,
			style: 'position:absolute;left:116px;top:211px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 108,
			height: 19,
			style: 'position:absolute;left:300px;top:211px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 100,
			height: 19,
			style: 'position:absolute;left:476px;top:211px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: ' ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Шаг 6 из 8. Выбор сотрудника - владельца ЭЦП',
			style: 'position:absolute;left:8px;top:5px;width:652px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность3',
			text: 'Фамилия:',
			style: 'position:absolute;left:8px;top:211px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность4',
			text: 'Имя:',
			style: 'position:absolute;left:264px;top:211px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность5',
			text: 'Отчество:',
			style: 'position:absolute;left:416px;top:211px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность6',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:116px;width:84px;height:16px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись56',
			text: 'Укажите сведения о сотруднике организации, на имя которого будет издан сертификат ключа электронно-цифровой подписи',
			style: 'position:absolute;left:8px;top:68px;width:652px;height:40px;text-align:left;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:196px;width:652px;height:4px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Подробнее...',
			style: 'position:absolute;left:584px;top:211px;width:76px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Руководитель',
			style: 'position:absolute;left:116px;top:116px;width:120px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Главный бухгалтер',
			style: 'position:absolute;left:116px;top:139px;width:120px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Другой сотрудник:',
			style: 'position:absolute;left:116px;top:162px;width:112px;height:15px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Направления',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:140px;width:652px;height:312px;',
			height: 312,width: 652,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип получателя',
					width:'100',
					dataIndex:'ТипПолучателя',
					flex:1,
				},
				{
					text:'Код получателя',
					width:'100',
					dataIndex:'КодПолучателя',
					flex:1,
				},
				{
					text:'КПП',
					width:'100',
					dataIndex:'КПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипПолучателя',
					},
					{
						name:'КодПолучателя',
					},
					{
						name:'КПП',
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
						var грид = Ext.getCmp('Направления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаМастераСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:115px;width:652px;height:24px;',
			width: 652,
			height: 24,
			items:
			[
				{
					text:'Добавить',
					tooltip:'Добавить направление',
				},
				{
					text:'Скопировать',
					tooltip:'Скопировать Направление',
				},
				{
					text:'Изменить',
					tooltip:'Изменить направление',
				},
				{
					text:'Удалить',
					tooltip:'Удалить направление',
				},
				'-',
				{
					text:'Востановить',
					tooltip:'Востановить направления по умолчанию',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: ' ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Шаг 7 из 8. Сведения о контролирующих органах',
			style: 'position:absolute;left:8px;top:5px;width:652px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'Надпись57',
			text: 'Укажите все контролирующие органы, с которыми будет осуществляться документооборот',
			style: 'position:absolute;left:8px;top:68px;width:652px;height:24px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Контролирующие органы (направления документооборота)',
			style: 'position:absolute;left:8px;top:96px;width:652px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись35',
			text: '   ',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Шаг 8 из 8. Отправка заявления',
			style: 'position:absolute;left:8px;top:5px;width:652px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'Надпись51',
			text: 'Выберите дальнейшее действие:',
			style: 'position:absolute;left:8px;top:132px;width:168px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись58',
			text: 'Заявление на подключение сформировано. Его необходимо отправить на сервер удостоверяющего центра для обработки и создания учетной записи электронного документооборота',
			style: 'position:absolute;left:8px;top:68px;width:652px;height:56px;text-align:left;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Отправить заявление сейчас',
			style: 'position:absolute;left:8px;top:180px;width:172px;height:20px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Не отправлять (сохранить черновик)',
			style: 'position:absolute;left:8px;top:156px;width:204px;height:20px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:460px;width:668px;height:25px;',
			width: 668,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'< Назад',
					tooltip:'Предыдущий шаг',
				},
				{
					text:'Далее >',
					tooltip:'Следующий шаг',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});