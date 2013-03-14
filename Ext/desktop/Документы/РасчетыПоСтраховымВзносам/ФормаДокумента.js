Ext.define('Документы.РасчетыПоСтраховымВзносам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:510px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчеты с фондами по страховым взносам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:354px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:442px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:522px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:542px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:354px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:442px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:354px;top:83px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:442px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:485px;width:670px;height:25px;',
			items:
			[
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
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:458px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:458px;width:566px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:110px;width:654px;height:340px;',
			height: 340,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Уплата',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРСтраховая',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:79px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРСтраховая',
			style: 'position:absolute;left:49px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНакопительная',
			text: 'Сумма:',
			style: 'position:absolute;left:0px;top:161px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНакопительная',
			style: 'position:absolute;left:49px;top:161px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить остатками',
			style: 'position:absolute;left:0px;top:304px;width:140px;height:36px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа',
			text: 'Вид платежа:',
			style: 'position:absolute;left:6px;top:23px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа',
			text: 'Дата платежа:',
			style: 'position:absolute;left:303px;top:23px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа',
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежаОписание',
			text: 'Платеж будет учтен в строке 14Х в РСВ-1 ПФР за Х-й квартал',
			style: 'position:absolute;left:470px;top:19px;width:184px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:223px;width:654px;height:75px;',
			height: 75,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРНаДоплатуКПенсииШахтерам',
			text: 'На доплату к пенсии в угольной промышленности:',
			style: 'position:absolute;left:6px;top:48px;width:262px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНаДоплатуКПенсииШахтерам',
			style: 'position:absolute;left:320px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:15px;width:414px;height:25px;',
			height: 25,width: 414,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРПоДополнительномуТарифу',
			text: 'По дополнительному тарифу для членов летных экипажей:',
			style: 'position:absolute;left:6px;top:6px;width:302px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРПоДополнительномуТарифу',
			style: 'position:absolute;left:320px;top:6px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежаОписание3',
			text: 'Платеж будет учтен в строке 14Х в РВ-3 ПФР за Х-й квартал',
			style: 'position:absolute;left:425px;top:20px;width:229px;height:29px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Уплата ФСС',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФСС',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:79px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС',
			style: 'position:absolute;left:53px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФССНесчастныеСлучаи',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:161px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи',
			style: 'position:absolute;left:53px;top:161px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручениеФСС',
			text: 'Реквизиты платежного поручения: №',
			style: 'position:absolute;left:6px;top:107px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФСС',
			style: 'position:absolute;left:205px;top:107px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручениеФСС_НС_ПЗ',
			text: 'Реквизиты платежного поручения: №',
			style: 'position:absolute;left:6px;top:188px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФСС_НС_ПЗ',
			style: 'position:absolute;left:205px;top:188px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФССДата',
			style: 'position:absolute;left:336px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФСС_НС_ПЗДата',
			style: 'position:absolute;left:336px;top:188px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт1',
			text: 'от:',
			style: 'position:absolute;left:304px;top:107px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт2',
			text: 'от:',
			style: 'position:absolute;left:304px;top:188px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа4',
			text: 'Вид платежа:',
			style: 'position:absolute;left:6px;top:23px;width:71px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа4',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа4',
			text: 'Дата платежа:',
			style: 'position:absolute;left:303px;top:23px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа4',
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежаОписание1',
			text: 'Платеж будет учтен в строках Х-го месяца в 4-ФСС за Х-й квартал',
			style: 'position:absolute;left:470px;top:19px;width:184px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить1',
			text: 'Заполнить остатками',
			style: 'position:absolute;left:0px;top:238px;width:140px;height:36px;',
		},
					]
				},
				{
					title:'Уплата ФОМС',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФФОМС',
			text: 'Федеральный фонд:',
			style: 'position:absolute;left:6px;top:67px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФФОМС',
			style: 'position:absolute;left:138px;top:67px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТФОМС',
			text: 'Территориальный фонд:',
			style: 'position:absolute;left:6px;top:95px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТФОМС',
			style: 'position:absolute;left:138px;top:95px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа5',
			text: 'Вид платежа:',
			style: 'position:absolute;left:6px;top:23px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа5',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа5',
			text: 'Дата платежа:',
			style: 'position:absolute;left:303px;top:23px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа5',
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежаОписание2',
			text: 'Платеж будет учтен в строке 14Х в РСВ-1 ПФР за Х-й квартал',
			style: 'position:absolute;left:470px;top:19px;width:184px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить2',
			text: 'Заполнить остатками',
			style: 'position:absolute;left:0px;top:142px;width:140px;height:36px;',
		},
					]
				},
				{
					title:'Начисление',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРСтраховая1',
			text: 'На страховую часть:',
			style: 'position:absolute;left:6px;top:79px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРСтраховая1',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНакопительная1',
			text: 'На накопительную часть:',
			style: 'position:absolute;left:6px;top:107px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНакопительная1',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФСС1',
			text: 'Страхование на случай временной нетрудоспособности:',
			style: 'position:absolute;left:6px;top:159px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС1',
			style: 'position:absolute;left:313px;top:159px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФФОМС1',
			text: 'Федеральный:',
			style: 'position:absolute;left:6px;top:240px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФФОМС1',
			style: 'position:absolute;left:113px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТФОМС1',
			text: 'Территориальный:',
			style: 'position:absolute;left:202px;top:240px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТФОМС1',
			style: 'position:absolute;left:313px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФССНесчастныеСлучаи1',
			text: 'Страхование от несчастных случаев на производстве:',
			style: 'position:absolute;left:6px;top:187px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи1',
			style: 'position:absolute;left:313px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРПоДополнительномуТарифу1',
			text: 'По дополнительному тарифу:',
			style: 'position:absolute;left:240px;top:79px;width:165px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРПоДополнительномуТарифу1',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНаДоплатуКПенсииШахтерам1',
			text: 'На доплату к пенсии в угольной промышленности:',
			style: 'position:absolute;left:240px;top:102px;width:165px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНаДоплатуКПенсииШахтерам1',
			style: 'position:absolute;left:412px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа1',
			text: 'Вид начисления:',
			style: 'position:absolute;left:6px;top:23px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа1',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа1',
			text: 'Дата начисления:',
			style: 'position:absolute;left:315px;top:23px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа1',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц1',
			text: 'за:',
			style: 'position:absolute;left:500px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода1',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц10',
			text: 'год',
			style: 'position:absolute;left:593px;top:23px;width:47px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пособия по страхованию',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС2',
			style: 'position:absolute;left:257px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС3',
			style: 'position:absolute;left:257px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД',
			text: 'По видам деятельности, не облагаемым ЕНВД:',
			style: 'position:absolute;left:6px;top:79px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД1',
			text: 'По видам деятельности, облагаемым ЕНВД:',
			style: 'position:absolute;left:7px;top:107px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД2',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:161px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи2',
			style: 'position:absolute;left:54px;top:161px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа2',
			text: 'Вид расчетов:',
			style: 'position:absolute;left:6px;top:23px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа2',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа2',
			text: 'Дата операции:',
			style: 'position:absolute;left:326px;top:23px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа2',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц2',
			text: 'за:',
			style: 'position:absolute;left:500px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода2',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц11',
			text: 'год',
			style: 'position:absolute;left:593px;top:23px;width:47px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пособия по страхованию2011',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС4',
			style: 'position:absolute;left:54px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД3',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:79px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыФССнеЕНВД4',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:133px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи3',
			style: 'position:absolute;left:54px;top:133px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа3',
			text: 'Вид расчетов:',
			style: 'position:absolute;left:6px;top:23px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа3',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа3',
			text: 'Дата операции:',
			style: 'position:absolute;left:324px;top:23px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа3',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц3',
			text: 'за:',
			style: 'position:absolute;left:500px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода3',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц12',
			text: 'год',
			style: 'position:absolute;left:593px;top:23px;width:47px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Устаревшие данные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКомментарийПлатежаСтраховая',
			text: '',
			style: 'position:absolute;left:138px;top:79px;width:516px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРСтраховая2',
			text: 'На страховую часть:',
			style: 'position:absolute;left:6px;top:79px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРСтраховая2',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНакопительная2',
			text: 'На накопительную часть:',
			style: 'position:absolute;left:6px;top:107px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНакопительная2',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФСС2',
			text: 'Соц. страхование:',
			style: 'position:absolute;left:9px;top:159px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС5',
			style: 'position:absolute;left:113px;top:159px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФФОМС2',
			text: 'Федеральный фонд:',
			style: 'position:absolute;left:5px;top:244px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФФОМС2',
			style: 'position:absolute;left:113px;top:244px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТФОМС2',
			text: 'Территориальный фонд:',
			style: 'position:absolute;left:202px;top:244px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТФОМС2',
			style: 'position:absolute;left:334px;top:244px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФССНесчастныеСлучаи2',
			text: 'Несчастные случаи:',
			style: 'position:absolute;left:9px;top:187px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи4',
			style: 'position:absolute;left:113px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРПоДополнительномуТарифу2',
			text: 'По дополнительному тарифу:',
			style: 'position:absolute;left:240px;top:79px;width:165px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРПоДополнительномуТарифу2',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручениеФСС1',
			text: 'Реквизиты платежного поручения: №',
			style: 'position:absolute;left:202px;top:159px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФСС1',
			style: 'position:absolute;left:401px;top:159px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежноеПоручениеФСС_НС_ПЗ1',
			text: 'Реквизиты платежного поручения: №',
			style: 'position:absolute;left:202px;top:187px;width:193px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФСС_НС_ПЗ1',
			style: 'position:absolute;left:401px;top:187px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФССДата1',
			style: 'position:absolute;left:529px;top:159px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФСС_НС_ПЗДата1',
			style: 'position:absolute;left:529px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт3',
			text: 'от:',
			style: 'position:absolute;left:500px;top:159px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт4',
			text: 'от:',
			style: 'position:absolute;left:500px;top:187px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНаДоплатуКПенсииШахтерам2',
			text: 'На доплату к пенсии в угольной промышленности:',
			style: 'position:absolute;left:240px;top:98px;width:165px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНаДоплатуКПенсииШахтерам2',
			style: 'position:absolute;left:412px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа6',
			text: 'Вид платежа:',
			style: 'position:absolute;left:6px;top:23px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа6',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа6',
			text: 'Дата платежа:',
			style: 'position:absolute;left:331px;top:23px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа6',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц6',
			text: 'за:',
			style: 'position:absolute;left:500px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода6',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц13',
			text: 'год',
			style: 'position:absolute;left:593px;top:23px;width:47px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Доначисление взносов',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПФРСтраховая3',
			text: 'На страховую часть:',
			style: 'position:absolute;left:6px;top:79px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРСтраховая3',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНакопительная3',
			text: 'На накопительную часть:',
			style: 'position:absolute;left:6px;top:107px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНакопительная3',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФСС3',
			text: 'Страхование на случай временной нетрудоспособности:',
			style: 'position:absolute;left:6px;top:159px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС6',
			style: 'position:absolute;left:313px;top:159px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФФОМС3',
			text: 'Федеральный:',
			style: 'position:absolute;left:6px;top:240px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФФОМС3',
			style: 'position:absolute;left:113px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТФОМС3',
			text: 'Территориальный:',
			style: 'position:absolute;left:202px;top:240px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТФОМС3',
			style: 'position:absolute;left:313px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФССНесчастныеСлучаи3',
			text: 'Страхование от несчастных случаев на производстве:',
			style: 'position:absolute;left:6px;top:187px;width:294px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи5',
			style: 'position:absolute;left:313px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРПоДополнительномуТарифу3',
			text: 'По дополнительному тарифу:',
			style: 'position:absolute;left:240px;top:79px;width:165px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРПоДополнительномуТарифу3',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФРНаДоплатуКПенсииШахтерам3',
			text: 'На доплату к пенсии в угольной промышленности:',
			style: 'position:absolute;left:240px;top:102px;width:165px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНаДоплатуКПенсииШахтерам3',
			style: 'position:absolute;left:412px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа7',
			text: 'Доначислено:',
			style: 'position:absolute;left:6px;top:23px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа7',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежа7',
			text: 'Дата начисления:',
			style: 'position:absolute;left:315px;top:23px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа7',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц14',
			text: 'за:',
			style: 'position:absolute;left:498px;top:23px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода',
			style: 'position:absolute;left:520px;top:23px;width:127px;height:19px;',
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
			name: 'НадписьОперация',
			text: 'Платежи по страховым взносам в каждый из фондов регистрируются отдельной операцией.',
			style: 'position:absolute;left:8px;top:58px;width:327px;height:51px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидОперации',
			text: 'Уплата/начисление:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОперации',
			style: 'position:absolute;left:115px;top:33px;width:220px;height:19px;',
		},
	]
});