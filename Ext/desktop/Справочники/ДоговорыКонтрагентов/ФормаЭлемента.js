Ext.define('Справочники.ДоговорыКонтрагентов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 579,width: 511,
	iconCls: 'bogus',
	title: 'Договор контрагента',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:106px;top:105px;width:284px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:511px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:423px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:106px;top:526px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:106px;top:81px;width:397px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:554px;width:511px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:495px;height:346px;',
			height: 346,width: 495,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаВзаиморасчетов',
			style: 'position:absolute;left:405px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПредоплаты',
			style: 'position:absolute;left:405px;top:185px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДопустимоеЧислоДнейЗадолженности',
			style: 'position:absolute;left:405px;top:210px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДопустимаяСуммаЗадолженности',
			style: 'position:absolute;left:405px;top:161px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВзаиморасчетов',
			style: 'position:absolute;left:150px;top:88px;width:335px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокОплатыДляРезервовПоСомнительнымДолгам',
			style: 'position:absolute;left:405px;top:112px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'УчетТоваров',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧислоДнейРезерваБезОплаты',
			style: 'position:absolute;left:407px;top:27px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦенПокупки',
			style: 'position:absolute;left:122px;top:26px;width:363px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентКомиссионногоВознаграждения',
			style: 'position:absolute;left:425px;top:98px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаКомиссионногоВознаграждения',
			style: 'position:absolute;left:122px;top:98px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПроект',
			style: 'position:absolute;left:143px;top:301px;width:342px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнаяСтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:122px;top:50px;width:363px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:149px;width:485px;height:127px;',
			height: 127,width: 485,
			items:
			[
				{
					title:'НДСсАвансов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляСчетаФактурыНаАванс',
			style: 'position:absolute;left:7px;top:108px;width:478px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:41px;width:478px;height:43px;',
			height: 43,width: 478,
			items:
			[
				{
					title:'НеРегистрировать',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРегистрацииСчетовФактурНаАвансПоДоговору',
			style: 'position:absolute;left:0px;top:24px;width:478px;height:19px;',
		},
					]
				},
				{
					title:'Информация',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'НДСНалоговыйАгент',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидАгентскогоДоговора',
			style: 'position:absolute;left:146px;top:41px;width:339px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляСчетаФактурыНаАванс1',
			style: 'position:absolute;left:7px;top:84px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйАгентПоОплате',
			style: 'position:absolute;left:260px;top:108px;width:225px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'УсловияДоговора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:481px;height:256px;',
			height: 256,width: 481,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'Периодичность',
				},
				{
					text:'СуммаУсловийДоговора',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:24px;',
			items:
			[
				{
					text:'Анализ',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУсловийДоговора',
			style: 'position:absolute;left:142px;top:6px;width:345px;height:19px;',
		},
					]
				},
				{
					title:'Скидки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'ПолучательСкидки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Характеристика',
				},
				{
					text:'Качество',
				},
				{
					text:'Условие',
				},
				{
					text:'ЗначениеУсловия',
				},
				{
					text:'Процент',
				},
				{
					text:'Валюта',
				},
				{
					text:'ДеньНедели',
				},
				{
					text:'ВремяНачала',
				},
				{
					text:'ВремяОкончания',
				},
				{
					text:'Начало',
				},
				{
					text:'Окончание',
				},
				{
					text:'УстановкаСкидокНоменклатуры',
				},
				{
					text:'ОтменаСкидок',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:101px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:306px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПоказать',
			text: 'Показать',
			style: 'position:absolute;left:399px;top:6px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:481px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Принадлежность',
				},
				{
					text:'Категория',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:481px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
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
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:106px;top:57px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:33px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:106px;top:153px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:229px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокДействия',
			style: 'position:absolute;left:423px;top:153px;width:80px;height:19px;',
		},
	]
});