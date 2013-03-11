Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 608,width: 499,
	iconCls: 'bogus',
	title: 'Доверенность налогоплательщика',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДовер',
			style: 'position:absolute;left:107px;top:58px;width:90px;height:19px;',
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
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
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
					title:'ЮЛ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительЮЛ_ИНН',
			style: 'position:absolute;left:39px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительЮЛ_КПП',
			style: 'position:absolute;left:39px;top:141px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительЮЛ_ОГРН',
			style: 'position:absolute;left:39px;top:168px;width:90px;height:19px;',
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
					title:'ФЛ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_Гражданство',
			style: 'position:absolute;left:95px;top:158px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_ДатаРождения',
			style: 'position:absolute;left:95px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительФЛ_Удост',
			style: 'position:absolute;left:0px;top:131px;width:234px;height:19px;',
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
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_ИНН',
			style: 'position:absolute;left:88px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_Гражданство',
			style: 'position:absolute;left:88px;top:158px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_ДатаРождения',
			style: 'position:absolute;left:88px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительУЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:228px;height:19px;',
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
					title:'ЮЛ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_НаимОрг',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_ИНН',
			style: 'position:absolute;left:39px;top:114px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_КПП',
			style: 'position:absolute;left:39px;top:141px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_ОГРН',
			style: 'position:absolute;left:39px;top:168px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительЮЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительРук_ФИО',
			style: 'position:absolute;left:0px;top:212px;width:234px;height:19px;',
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
					title:'ФЛ',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:247px;top:33px;width:234px;height:288px;',
			height: 288,width: 234,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_ИНН',
			style: 'position:absolute;left:88px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_Гражданство',
			style: 'position:absolute;left:88px;top:158px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_ДатаРождения',
			style: 'position:absolute;left:88px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверительУЛ_Адрес',
			style: 'position:absolute;left:0px;top:87px;width:228px;height:19px;',
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
					title:'ЮЛ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЮЛ_НаимОрг',
			style: 'position:absolute;left:0px;top:43px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЮЛ_ИНН',
			style: 'position:absolute;left:39px;top:70px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЮЛ_КПП',
			style: 'position:absolute;left:39px;top:97px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусЮЛ_ОГРН',
			style: 'position:absolute;left:39px;top:124px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'ФЛ',
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
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусУЛ_ФИО',
			style: 'position:absolute;left:0px;top:43px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НотариусУЛ_ИНН',
			style: 'position:absolute;left:38px;top:114px;width:90px;height:19px;',
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
					text:'ОбластьПолномочий',
				},
				{
					text:'ОКАТО',
				},
				{
					text:'КПП',
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