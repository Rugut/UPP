Ext.define('Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаВыгрузки2012Кв2',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:669px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры выгрузки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:644px;width:554px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительЯвляетсяЮЛ',
			style: 'position:absolute;left:420px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:72px;width:540px;height:72px;',
			height: 72,width: 540,
			items:
			[
				{
					title:'ЮЛ',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННЮЛОтпр',
			style: 'position:absolute;left:162px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП1',
			text: 'КПП:',
			style: 'position:absolute;left:6px;top:48px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КППОтпр',
			style: 'position:absolute;left:162px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование организации:',
			style: 'position:absolute;left:6px;top:0px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимОтпр',
			style: 'position:absolute;left:162px;top:0px;width:372px;height:19px;',
		},
					]
				},
				{
					title:'ФЛ',
					items:
					[
		{
			xtype: 'label',
			name: 'Наименование1',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:6px;top:24px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'ИНН физического лица:',
			style: 'position:absolute;left:6px;top:0px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННФЛОтпр',
			style: 'position:absolute;left:162px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФамилияФЛОтпр',
			style: 'position:absolute;left:162px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФЛОтпр',
			style: 'position:absolute;left:288px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчествоФЛОтпр',
			style: 'position:absolute;left:414px;top:24px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Должность:',
			style: 'position:absolute;left:12px;top:246px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьПодп1',
			style: 'position:absolute;left:168px;top:246px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование2',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:12px;top:270px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование3',
			text: 'Наименование, номер, дата
доверенности',
			style: 'position:absolute;left:12px;top:294px;width:150px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Должность:',
			style: 'position:absolute;left:12px;top:378px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьПодп2',
			style: 'position:absolute;left:168px;top:378px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование4',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:12px;top:402px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование5',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:12px;top:582px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН2',
			text: 'ИНН физического лица:',
			style: 'position:absolute;left:12px;top:558px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННФЛКурьер',
			style: 'position:absolute;left:168px;top:558px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Документ направляется  почтовым отправлением или по ТКС.',
			style: 'position:absolute;left:12px;top:498px;width:342px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФамилияПодп1',
			style: 'position:absolute;left:168px;top:270px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПодп1',
			style: 'position:absolute;left:294px;top:270px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчествоПодп1',
			style: 'position:absolute;left:420px;top:270px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФамилияПодп2',
			style: 'position:absolute;left:168px;top:402px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПодп2',
			style: 'position:absolute;left:294px;top:402px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчествоПодп2',
			style: 'position:absolute;left:420px;top:402px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимДовПодп1',
			style: 'position:absolute;left:168px;top:294px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДовПодп1',
			style: 'position:absolute;left:294px;top:294px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДовПодп1',
			style: 'position:absolute;left:420px;top:294px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФамилияКурьер',
			style: 'position:absolute;left:168px;top:582px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКурьер',
			style: 'position:absolute;left:294px;top:582px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчествоКурьер',
			style: 'position:absolute;left:420px;top:582px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование6',
			text: 'Наименование, номер, дата
доверенности',
			style: 'position:absolute;left:12px;top:606px;width:150px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимДовКурьер',
			style: 'position:absolute;left:168px;top:606px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДовКурьер',
			style: 'position:absolute;left:294px;top:606px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДовКурьер',
			style: 'position:absolute;left:420px;top:606px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН3',
			text: 'ИНН физического лица:',
			style: 'position:absolute;left:12px;top:354px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННФЛПодп2',
			style: 'position:absolute;left:168px;top:354px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН4',
			text: 'ИНН физического лица:',
			style: 'position:absolute;left:12px;top:222px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННФЛПодп1',
			style: 'position:absolute;left:168px;top:222px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Код налогового органа, куда передаются данные:',
			style: 'position:absolute;left:6px;top:6px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:270px;top:6px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Наименование7',
			text: 'Наименование, номер, дата
документа, подтвержд. полномочия',
			style: 'position:absolute;left:12px;top:426px;width:150px;height:42px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимДовПодп2',
			style: 'position:absolute;left:168px;top:426px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДовПодп2',
			style: 'position:absolute;left:294px;top:426px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДовПодп2',
			style: 'position:absolute;left:420px;top:426px;width:120px;height:19px;',
		},
	]
});