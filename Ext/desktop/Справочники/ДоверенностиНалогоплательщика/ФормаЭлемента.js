Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:499px;height:608px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Доверенность налогоплательщика',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомерДовер',
			text: 'Доверенность №',
			style: 'position:absolute;left:8px;top:58px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДовер',
			style: 'position:absolute;left:107px;top:58px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачи',
			text: 'от',
			style: 'position:absolute;left:203px;top:58px;width:13px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачи',
			style: 'position:absolute;left:220px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:407px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПризнакДоверителя',
			text: 'Доверителем является:',
			style: 'position:absolute;left:8px;top:85px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПризнакДоверителя',
			style: 'position:absolute;left:137px;top:85px;width:195px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:499px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:583px;width:499px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор1',
			text: 'действительна по',
			style: 'position:absolute;left:310px;top:58px;width:93px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заверена нотариально',
			style: 'position:absolute;left:351px;top:89px;width:138px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:110px;width:483px;height:348px;',
			height: 348,width: 483,
			items:
			[
				{
					title:'Представитель',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительЯвляетсяЮЛ',
			style: 'position:absolute;left:6px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование организации:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:114px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительЮЛ_ИНН',
			style: 'position:absolute;left:39px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_КПП',
			text: 'КПП:',
			style: 'position:absolute;left:0px;top:141px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительЮЛ_КПП',
			style: 'position:absolute;left:39px;top:141px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:0px;top:168px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительЮЛ_ОГРН',
			style: 'position:absolute;left:39px;top:168px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛАдрес',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительЮЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование2',
			text: 'Фамилия, имя, отчество',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН2',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:185px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_ИНН',
			style: 'position:absolute;left:95px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_ОГРН',
			style: 'position:absolute;left:95px;top:239px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_Гражданство1',
			text: 'Гражданство:',
			style: 'position:absolute;left:0px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_Гражданство',
			style: 'position:absolute;left:95px;top:158px;width:139px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_ДатаРождения1',
			text: 'Дата рождения:',
			style: 'position:absolute;left:0px;top:212px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_ДатаРождения',
			style: 'position:absolute;left:95px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Документ, удостоверяющий личность:',
			style: 'position:absolute;left:0px;top:112px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_Удост',
			style: 'position:absolute;left:0px;top:131px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_ОГРН',
			text: 'ОГРНИП:',
			style: 'position:absolute;left:0px;top:239px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:247px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			items:
			[
				{
					title:'Уполномоченное лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование1',
			text: 'Фамилия, имя, отчество',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН1',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:185px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_ИНН',
			style: 'position:absolute;left:88px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_Гражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:0px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_Гражданство',
			style: 'position:absolute;left:88px;top:158px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительФЛ_ДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:0px;top:212px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_ДатаРождения',
			style: 'position:absolute;left:88px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Документ, удостоверяющий личность:',
			style: 'position:absolute;left:0px;top:112px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_Удост',
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
					title:'Доверитель',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЯвляетсяЮЛ',
			style: 'position:absolute;left:6px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Наименование организации:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_НаимОрг',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН3',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:114px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_ИНН',
			style: 'position:absolute;left:39px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_КПП1',
			text: 'КПП:',
			style: 'position:absolute;left:0px;top:141px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_КПП',
			style: 'position:absolute;left:39px;top:141px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ОГРН3',
			text: 'ОГРН:',
			style: 'position:absolute;left:0px;top:168px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_ОГРН',
			style: 'position:absolute;left:39px;top:168px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛАдрес1',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование5',
			text: 'Фамилия, имя, отчество',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:185px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Гражданство:',
			style: 'position:absolute;left:0px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'Дата рождения:',
			style: 'position:absolute;left:0px;top:212px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Документ, удостоверяющий личность:',
			style: 'position:absolute;left:0px;top:112px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'ОГРНИП:',
			style: 'position:absolute;left:0px;top:239px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование8',
			text: 'Фамилия, имя, отчество руководителя:',
			style: 'position:absolute;left:0px;top:193px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительРук_ФИО',
			style: 'position:absolute;left:0px;top:212px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН5',
			text: 'ИНН руководителя:',
			style: 'position:absolute;left:0px;top:239px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительРук_ИНН',
			style: 'position:absolute;left:106px;top:239px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительФЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительФЛ_ИНН',
			style: 'position:absolute;left:95px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительФЛ_ОГРН',
			style: 'position:absolute;left:95px;top:239px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительФЛ_Гражданство',
			style: 'position:absolute;left:95px;top:158px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительФЛ_ДатаРождения',
			style: 'position:absolute;left:95px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительФЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительФЛ_Удост',
			style: 'position:absolute;left:0px;top:131px;width:234px;height:19px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:247px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			items:
			[
				{
					title:'Уполномоченное лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование4',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:185px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_ИНН',
			style: 'position:absolute;left:88px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Гражданство:',
			style: 'position:absolute;left:0px;top:158px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_Гражданство',
			style: 'position:absolute;left:88px;top:158px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Дата рождения:',
			style: 'position:absolute;left:0px;top:212px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_ДатаРождения',
			style: 'position:absolute;left:88px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Документ, удостоверяющий личность:',
			style: 'position:absolute;left:0px;top:112px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_Удост',
			style: 'position:absolute;left:0px;top:131px;width:228px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Нотариус',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЯвляетсяЮЛ',
			style: 'position:absolute;left:6px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Наименование организации:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЮЛ_НаимОрг',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ИНН4',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:70px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЮЛ_ИНН',
			style: 'position:absolute;left:39px;top:70px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_КПП2',
			text: 'КПП:',
			style: 'position:absolute;left:0px;top:97px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЮЛ_КПП',
			style: 'position:absolute;left:39px;top:97px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставительЮЛ_ОГРН4',
			text: 'ОГРН:',
			style: 'position:absolute;left:0px;top:124px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЮЛ_ОГРН',
			style: 'position:absolute;left:39px;top:124px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование6',
			text: 'Фамилия, имя, отчество',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:114px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:234px;height:19px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусФЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусФЛ_ИНН',
			style: 'position:absolute;left:38px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусФЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:247px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			items:
			[
				{
					title:'Уполномоченное лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование7',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:0px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусУЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:114px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусУЛ_ИНН',
			style: 'position:absolute;left:38px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Адрес в Российской Федерации:',
			style: 'position:absolute;left:0px;top:68px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусУЛ_Адрес',
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
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:33px;width:384px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:504px;width:483px;height:71px;',
			height: 71,width: 483,
			columns:
			[
				{
					text:'Область полномочий',
					width:'260',
				},
				{
					text:'ОКАТО',
					width:'100',
				},
				{
					text:'КПП',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:480px;width:483px;height:24px;',
			items:
			[
			]
		},
	]
});