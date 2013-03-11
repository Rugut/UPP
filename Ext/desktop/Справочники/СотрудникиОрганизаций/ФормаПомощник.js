Ext.define('Справочники.СотрудникиОрганизаций.ФормаПомощник',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 600,
	iconCls: 'bogus',
	title: 'Помощник приема на работу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:600px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ШагВперед',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:182px;top:0px;width:418px;height:425px;',
			height: 425,width: 418,
			items:
			[
				{
					title:'ПерсональныеДанные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:105px;top:44px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:105px;top:116px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:105px;top:140px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:105px;top:68px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:105px;top:92px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТабельныйНомер',
			style: 'position:absolute;left:105px;top:280px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:254px;width:402px;height:26px;',
			height: 26,width: 402,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:95px;top:0px;width:280px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'УсловияПриема',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:35px;width:402px;height:384px;',
			height: 384,width: 402,
			items:
			[
				{
					title:'ТрудовойДоговор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговора',
			style: 'position:absolute;left:97px;top:303px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДоговора',
			style: 'position:absolute;left:213px;top:303px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:97px;top:250px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:213px;top:328px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспытательныйСрок',
			style: 'position:absolute;left:359px;top:226px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:97px;top:154px;width:305px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:97px;top:178px;width:305px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикРаботы',
			style: 'position:absolute;left:97px;top:202px;width:305px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗанимаемыхСтавок',
			style: 'position:absolute;left:97px;top:226px;width:43px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:1px;top:125px;width:401px;height:24px;',
			height: 24,width: 401,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбособленноеПодразделение',
			style: 'position:absolute;left:97px;top:5px;width:304px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:348px;height:25px;',
			height: 25,width: 348,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ДоговорПодряда',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:92px;width:402px;height:292px;',
			height: 292,width: 402,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаДоговораГПХ',
			style: 'position:absolute;left:107px;top:74px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияДоговораГПХ',
			style: 'position:absolute;left:248px;top:74px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДоговораГПХ',
			style: 'position:absolute;left:262px;top:146px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаЗаРаботу',
			style: 'position:absolute;left:107px;top:146px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаДоговорГПХ',
			style: 'position:absolute;left:107px;top:98px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактерОплаты',
			style: 'position:absolute;left:107px;top:122px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВычета',
			style: 'position:absolute;left:107px;top:170px;width:241px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияВБухучете',
			style: 'position:absolute;left:10px;top:211px;width:392px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтнесениеРасходовКДеятельностиЕНВД',
			style: 'position:absolute;left:10px;top:247px;width:392px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:402px;height:24px;',
			height: 24,width: 402,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбособленноеПодразделение1',
			style: 'position:absolute;left:97px;top:5px;width:305px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации1',
			style: 'position:absolute;left:97px;top:29px;width:305px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидАвторскогоДоговора',
			style: 'position:absolute;left:100px;top:48px;width:302px;height:19px;',
		},
					]
				},
				{
					title:'ДоговорУправленческий',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:348px;height:25px;',
			height: 25,width: 348,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:35px;width:402px;height:173px;',
			height: 173,width: 402,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеУпр',
			style: 'position:absolute;left:97px;top:0px;width:305px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьУпр',
			style: 'position:absolute;left:97px;top:25px;width:305px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикРаботыУпр',
			style: 'position:absolute;left:97px;top:49px;width:305px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриемаУпр',
			style: 'position:absolute;left:97px;top:73px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗанимаемыхСтавокУпр',
			style: 'position:absolute;left:97px;top:97px;width:43px;height:19px;',
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
					title:'ОплатаТруда',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:35px;width:402px;height:384px;',
			height: 384,width: 402,
			items:
			[
				{
					title:'ТрудовойДоговор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:149px;top:10px;width:253px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:106px;width:402px;height:278px;',
			height: 278,width: 402,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Надбавка',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Валюта1',
				},
				{
					text:'НаименованиеПоказательТР1',
				},
				{
					text:'ТарифныйРазряд1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Валюта2',
				},
				{
					text:'НаименованиеПоказательТР2',
				},
				{
					text:'ТарифныйРазряд2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Валюта3',
				},
				{
					text:'НаименованиеПоказательТР3',
				},
				{
					text:'ТарифныйРазряд3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Валюта4',
				},
				{
					text:'НаименованиеПоказательТР4',
				},
				{
					text:'ТарифныйРазряд4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Валюта5',
				},
				{
					text:'НаименованиеПоказательТР5',
				},
				{
					text:'ТарифныйРазряд5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Валюта6',
				},
				{
					text:'НаименованиеПоказательТР6',
				},
				{
					text:'ТарифныйРазряд6',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:29px;width:402px;height:24px;',
			height: 24,width: 402,
			items:
			[
				{
					title:'ВРублях',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавка',
			style: 'position:absolute;left:150px;top:5px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаТарифнойСтавки',
			style: 'position:absolute;left:325px;top:5px;width:77px;height:19px;',
		},
					]
				},
				{
					title:'ТарифныйРазряд',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифныйРазряд',
			style: 'position:absolute;left:149px;top:5px;width:199px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:82px;width:402px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:119px;top:218px;width:217px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'ДоговорУправленческий',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:42px;width:402px;height:152px;',
			height: 152,width: 402,
			columns:
			[
				{
					text:'ВидРасчета',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Валюта1',
				},
				{
					text:'НаименованиеПоказательТР1',
				},
				{
					text:'ТарифныйРазряд1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Валюта2',
				},
				{
					text:'НаименованиеПоказательТР2',
				},
				{
					text:'ТарифныйРазряд2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Валюта3',
				},
				{
					text:'НаименованиеПоказательТР3',
				},
				{
					text:'ТарифныйРазряд3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Валюта4',
				},
				{
					text:'НаименованиеПоказательТР4',
				},
				{
					text:'ТарифныйРазряд4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Валюта5',
				},
				{
					text:'НаименованиеПоказательТР5',
				},
				{
					text:'ТарифныйРазряд5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Валюта6',
				},
				{
					text:'НаименованиеПоказательТР6',
				},
				{
					text:'ТарифныйРазряд6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:246px;width:402px;height:138px;',
			height: 138,width: 402,
			columns:
			[
				{
					text:'ВидРасчета',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Валюта1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Валюта2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Валюта3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Валюта4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Валюта5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Валюта6',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:402px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:74px;top:136px;width:217px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:222px;width:402px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:86px;top:296px;width:217px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
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
					title:'ДополнительнаяИнформация',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:197px;width:402px;height:165px;',
			height: 165,width: 402,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДоступа',
			style: 'position:absolute;left:10px;top:51px;width:372px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:91px;width:402px;height:106px;',
			height: 106,width: 402,
			items:
			[
				{
					title:'ТрудовойДоговор',
					items:
					[
					]
				},
				{
					title:'ДоговорПодряда',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:35px;width:402px;height:56px;',
			height: 56,width: 402,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:84px;top:27px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:84px;top:5px;width:104px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Готово',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПостфиксНаименования',
			style: 'position:absolute;left:72px;top:121px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеСотрудника',
			style: 'position:absolute;left:10px;top:61px;width:402px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:425px;',
			height: 425,width: 181,
			items:
			[
				{
					title:'СтраницаНастройки',
					items:
					[
					]
				},
				{
					title:'СтраницаГотово',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:324px;top:425px;width:151px;height:25px;',
			items:
			[
				{
					text:'ШагНазад',
				},
			]
		},
	]
});