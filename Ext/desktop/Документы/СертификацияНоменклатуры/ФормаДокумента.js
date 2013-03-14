Ext.define('Документы.СертификацияНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:666px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сертификация номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:666px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:666px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
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
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:96px;top:81px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияНоменклатуры',
			text: 'Серия:',
			style: 'position:absolute;left:336px;top:81px;width:109px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:445px;top:81px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:322px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:322px;width:562px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'от:',
			style: 'position:absolute;left:175px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Подразделение:',
			style: 'position:absolute;left:336px;top:57px;width:109px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:445px;top:57px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:346px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:346px;width:562px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатСертификации',
			text: 'Результат сертификации:',
			style: 'position:absolute;left:8px;top:101px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РезультатСертификации',
			style: 'position:absolute;left:96px;top:105px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНормативныйДокумент',
			text: 'Нормативный документ:',
			style: 'position:absolute;left:336px;top:101px;width:109px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НормативныйДокумент',
			style: 'position:absolute;left:445px;top:105px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСертификата',
			text: 'Сертификат №:',
			style: 'position:absolute;left:8px;top:129px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСертификата',
			style: 'position:absolute;left:96px;top:129px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификата',
			text: 'Срок действия с:',
			style: 'position:absolute;left:336px;top:129px;width:109px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСертификата',
			style: 'position:absolute;left:445px;top:129px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'по:',
			style: 'position:absolute;left:544px;top:129px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокГодностиСертификата',
			style: 'position:absolute;left:563px;top:129px;width:95px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:156px;width:650px;height:158px;',
			height: 158,width: 650,
			items:
			[
				{
					title:'Анализы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:636px;height:108px;',
			height: 108,width: 636,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Показатель анализа',
					width:'232',
				},
				{
					text:'Значение',
					width:'230',
				},
				{
					text:'Значение (начало диапазона)',
					width:'121',
				},
				{
					text:'Конец диапазона',
					width:'103',
				},
				{
					text:'Единица измерения',
					width:'76',
				},
				{
					text:'Соответствует нормативу',
					width:'53',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:636px;height:24px;',
			items:
			[
				{
					text:'Заполнить по типовому анализу',
				},
				{
					text:'Добавить из типового анализа',
				},
			]
		},
					]
				},
				{
					title:'Сертификат',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументОснование',
			text: 'Документ - основание:',
			style: 'position:absolute;left:6px;top:31px;width:79px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:85px;top:35px;width:557px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Заключение:',
			style: 'position:absolute;left:6px;top:59px;width:79px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Заключение',
			style: 'position:absolute;left:85px;top:59px;width:557px;height:73px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаИспытаний',
			style: 'position:absolute;left:438px;top:10px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияИспытаний',
			text: 'по:',
			style: 'position:absolute;left:536px;top:10px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияИспытаний',
			style: 'position:absolute;left:553px;top:10px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганПоСертификации',
			style: 'position:absolute;left:85px;top:10px;width:221px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганСертификации',
			text: 'Орган по сертификации:',
			style: 'position:absolute;left:6px;top:6px;width:79px;height:27px;',
		},
					]
				},
			]
		},
	]
});