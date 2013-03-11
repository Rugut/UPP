Ext.define('Документы.РасчетыПоСтраховымВзносам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 510,width: 670,
	iconCls: 'bogus',
	title: 'Расчеты с фондами по страховым взносам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:442px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:542px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:442px;top:58px;width:220px;height:19px;',
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
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПодменюПерейти',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:485px;width:670px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
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
			items:
			[
				{
					title:'Уплата',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРСтраховая',
			style: 'position:absolute;left:49px;top:79px;width:80px;height:19px;',
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
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа',
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:223px;width:654px;height:75px;',
			height: 75,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
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
			items:
			[
				{
					title:'Страница1',
					items:
					[
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
					]
				},
			]
		},
					]
				},
				{
					title:'УплатаФСС',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС',
			style: 'position:absolute;left:53px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи',
			style: 'position:absolute;left:53px;top:161px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФСС',
			style: 'position:absolute;left:205px;top:107px;width:91px;height:19px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа4',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа4',
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
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
					title:'УплатаФОМС',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФФОМС',
			style: 'position:absolute;left:138px;top:67px;width:80px;height:19px;',
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
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа5',
			style: 'position:absolute;left:82px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа5',
			style: 'position:absolute;left:384px;top:23px;width:80px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРСтраховая1',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНакопительная1',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС1',
			style: 'position:absolute;left:313px;top:159px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФФОМС1',
			style: 'position:absolute;left:113px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТФОМС1',
			style: 'position:absolute;left:313px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи1',
			style: 'position:absolute;left:313px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРПоДополнительномуТарифу1',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
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
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа1',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа1',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода1',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПособияПоСтрахованию',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи2',
			style: 'position:absolute;left:54px;top:161px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа2',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа2',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода2',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПособияПоСтрахованию2011',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС4',
			style: 'position:absolute;left:54px;top:79px;width:80px;height:19px;',
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
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа3',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа3',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода3',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'УстаревшиеДанные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРСтраховая2',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНакопительная2',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС5',
			style: 'position:absolute;left:113px;top:159px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФФОМС2',
			style: 'position:absolute;left:113px;top:244px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТФОМС2',
			style: 'position:absolute;left:334px;top:244px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи4',
			style: 'position:absolute;left:113px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРПоДополнительномуТарифу2',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежноеПоручениеФСС1',
			style: 'position:absolute;left:401px;top:159px;width:91px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНаДоплатуКПенсииШахтерам2',
			style: 'position:absolute;left:412px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:55px;',
			height: 55,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа6',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа6',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцРасчетногоПериода6',
			style: 'position:absolute;left:521px;top:23px;width:66px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ДоначислениеВзносов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРСтраховая3',
			style: 'position:absolute;left:138px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРНакопительная3',
			style: 'position:absolute;left:138px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФСС6',
			style: 'position:absolute;left:313px;top:159px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФФОМС3',
			style: 'position:absolute;left:113px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТФОМС3',
			style: 'position:absolute;left:313px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФССНесчастныеСлучаи5',
			style: 'position:absolute;left:313px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПФРПоДополнительномуТарифу3',
			style: 'position:absolute;left:412px;top:79px;width:80px;height:19px;',
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
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа7',
			style: 'position:absolute;left:94px;top:23px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПлатежа7',
			style: 'position:absolute;left:412px;top:23px;width:80px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОперации',
			style: 'position:absolute;left:115px;top:33px;width:220px;height:19px;',
		},
	]
});