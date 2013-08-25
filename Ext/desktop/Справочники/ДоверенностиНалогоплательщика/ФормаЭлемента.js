Ext.require(['Данные.Справочники.ДоверенностиНалогоплательщика'], function () 
{
	Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:499px;height:608px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Доверенность налогоплательщика',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомерДовер',
			text: 'Доверенность №',
			style: 'position:absolute;left:8px;top:58px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДовер',
			width: 90,
			height: 19,
			style: 'position:absolute;left:107px;top:58px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачи',
			text: 'от',
			style: 'position:absolute;left:203px;top:58px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыдачи',
			width: 84,
			height: 19,
			style: 'position:absolute;left:220px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 84,
			height: 19,
			style: 'position:absolute;left:407px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПризнакДоверителя',
			text: 'Доверителем является:',
			style: 'position:absolute;left:8px;top:85px;width:126px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПризнакДоверителя',
			style: 'position:absolute;left:137px;top:85px;width:195px;height:19px;',
			width: 195,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:499px;height:25px;',
			width: 499,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор1',
			text: 'действительна по',
			style: 'position:absolute;left:310px;top:58px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заверена нотариально',
			style: 'position:absolute;left:351px;top:89px;width:138px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:110px;width:483px;height:348px;',
			height: 348,width: 483,
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительЯвляетсяЮЛ',
			width: 85,
			height: 19,
			style: 'position:absolute;left:6px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование организации:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:114px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительЮЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_КПП',
			text: 'КПП:',
			style: 'position:absolute;left:0px;top:141px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительЮЛ_КПП',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:141px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:0px;top:168px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительЮЛ_ОГРН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:168px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛАдрес',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительЮЛ_Адрес',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Юридическое лицо',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование2',
			text: 'Фамилия, имя, отчество',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительФЛ_ФИО',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН2',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:185px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительФЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:95px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительФЛ_ОГРН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:95px;top:239px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_Гражданство1',
			text: 'Гражданство:',
			style: 'position:absolute;left:0px;top:158px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПредставительФЛ_Гражданство.Представление',
			width: 139,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:158px;width:139px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_ДатаРождения1',
			text: 'Дата рождения:',
			style: 'position:absolute;left:0px;top:212px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПредставительФЛ_ДатаРождения',
			width: 90,
			height: 19,
			style: 'position:absolute;left:95px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительФЛ_Адрес',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Документ, удостоверяющий личность:',
			style: 'position:absolute;left:0px;top:112px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительФЛ_Удост',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:131px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Физическое лицо',
			style: 'position:absolute;left:0px;top:0px;width:228px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_ОГРН',
			text: 'ОГРНИП:',
			style: 'position:absolute;left:0px;top:239px;width:80px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:247px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование1',
			text: 'Фамилия, имя, отчество',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительУЛ_ФИО',
			width: 228,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН1',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:185px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительУЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:88px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Уполномоченное лицо',
			style: 'position:absolute;left:0px;top:0px;width:228px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_Гражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:0px;top:158px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПредставительУЛ_Гражданство.Представление',
			width: 140,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:88px;top:158px;width:140px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_ДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:0px;top:212px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПредставительУЛ_ДатаРождения',
			width: 90,
			height: 19,
			style: 'position:absolute;left:88px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительУЛ_Адрес',
			width: 228,
			height: 19,
			style: 'position:absolute;left:0px;top:87px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Документ, удостоверяющий личность:',
			style: 'position:absolute;left:0px;top:112px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставительУЛ_Удост',
			width: 228,
			height: 19,
			style: 'position:absolute;left:0px;top:131px;width:228px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'является сотрудником представляемой организации',
			style: 'position:absolute;left:98px;top:7px;width:294px;height:19px;',
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
			name: 'ДоверительЯвляетсяЮЛ',
			width: 85,
			height: 19,
			style: 'position:absolute;left:6px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Наименование организации:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительЮЛ_НаимОрг',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН3',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:114px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительЮЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_КПП1',
			text: 'КПП:',
			style: 'position:absolute;left:0px;top:141px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительЮЛ_КПП',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:141px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ОГРН3',
			text: 'ОГРН:',
			style: 'position:absolute;left:0px;top:168px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительЮЛ_ОГРН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:168px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛАдрес1',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительЮЛ_Адрес',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Юридическое лицо',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Наименование5',
			text: 'Фамилия, имя, отчество',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:185px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Гражданство:',
			style: 'position:absolute;left:0px;top:158px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'Дата рождения:',
			style: 'position:absolute;left:0px;top:212px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Документ, удостоверяющий личность:',
			style: 'position:absolute;left:0px;top:112px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'ОГРНИП:',
			style: 'position:absolute;left:0px;top:239px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Наименование8',
			text: 'Фамилия, имя, отчество руководителя:',
			style: 'position:absolute;left:0px;top:193px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительРук_ФИО',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:212px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН5',
			text: 'ИНН руководителя:',
			style: 'position:absolute;left:0px;top:239px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительРук_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:106px;top:239px;width:90px;height:19px;',
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
			name: 'ДоверительФЛ_ФИО',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительФЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:95px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительФЛ_ОГРН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:95px;top:239px;width:90px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ДоверительФЛ_Гражданство.Представление',
			width: 139,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:158px;width:139px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДоверительФЛ_ДатаРождения',
			width: 90,
			height: 19,
			style: 'position:absolute;left:95px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительФЛ_Адрес',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительФЛ_Удост',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:131px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Физическое лицо',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'через уполномоченное лицо',
			style: 'position:absolute;left:98px;top:9px;width:165px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:247px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование4',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительУЛ_ФИО',
			width: 228,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:185px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительУЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:88px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Уполномоченное лицо',
			style: 'position:absolute;left:0px;top:0px;width:228px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Гражданство:',
			style: 'position:absolute;left:0px;top:158px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ДоверительУЛ_Гражданство.Представление',
			width: 140,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:88px;top:158px;width:140px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Дата рождения:',
			style: 'position:absolute;left:0px;top:212px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДоверительУЛ_ДатаРождения',
			width: 90,
			height: 19,
			style: 'position:absolute;left:88px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительУЛ_Адрес',
			width: 228,
			height: 19,
			style: 'position:absolute;left:0px;top:87px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Документ, удостоверяющий личность:',
			style: 'position:absolute;left:0px;top:112px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДоверительУЛ_Удост',
			width: 228,
			height: 19,
			style: 'position:absolute;left:0px;top:131px;width:228px;height:19px;',
		},
					]
				},
			]
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
			name: 'НотариусЯвляетсяЮЛ',
			width: 85,
			height: 19,
			style: 'position:absolute;left:6px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Наименование организации:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусЮЛ_НаимОрг',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН4',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:70px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусЮЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:70px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_КПП2',
			text: 'КПП:',
			style: 'position:absolute;left:0px;top:97px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусЮЛ_КПП',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:97px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ОГРН4',
			text: 'ОГРН:',
			style: 'position:absolute;left:0px;top:124px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусЮЛ_ОГРН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:39px;top:124px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Юридическое лицо',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Наименование6',
			text: 'Фамилия, имя, отчество',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:114px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;text-align:left;',
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
			name: 'НотариусФЛ_ФИО',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусФЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:38px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусФЛ_Адрес',
			width: 234,
			height: 19,
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Физическое лицо',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:247px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование7',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусУЛ_ФИО',
			width: 228,
			height: 19,
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:114px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусУЛ_ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:38px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Уполномоченное лицо',
			style: 'position:absolute;left:0px;top:0px;width:228px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НотариусУЛ_Адрес',
			width: 228,
			height: 19,
			style: 'position:absolute;left:0px;top:87px;width:228px;height:19px;',
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
			xtype: 'label',
			name: 'Надпись45',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 384,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:33px;width:384px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'ПолномочияПредставителя',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:504px;width:483px;height:71px;',
			height: 71,width: 483,
			columns:
			[
				{
					text:'Область полномочий',
					width:'260',
					dataIndex:'ОбластьПолномочий',
					flex:1,
				},
				{
					text:'ОКАТО',
					width:'100',
					dataIndex:'ОКАТО',
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
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДоверенностиНалогоплательщика").data,
					fields: ['Ссылка','ОбластьПолномочий','ОКАТО','КПП',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоверенностиНалогоплательщика/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ОбластьПолномочий',
					},
					{
						name:'ОКАТО',
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
						var грид = Ext.getCmp('ПолномочияПредставителя');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:480px;width:483px;height:24px;',
			width: 483,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Сведения о полномочиях представителя',
			style: 'position:absolute;left:8px;top:464px;width:483px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:583px;width:499px;height:25px;',
			width: 499,
			height: 25,
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