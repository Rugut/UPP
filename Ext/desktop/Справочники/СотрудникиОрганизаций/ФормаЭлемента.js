Ext.define('Справочники.СотрудникиОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 506,width: 700,
	iconCls: 'bogus',
	title: 'Сотрудники',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'МедицинскиеСтраховыеПолисы',
				},
				{
					text:'ВвестиДокумент',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
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
				{
					text:'УДФОткрыть',
				},
				{
					text:'Подменю',
				},
				{
					text:'ПодменюПерейти',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:481px;width:700px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:480px;top:33px;width:212px;height:440px;',
			height: 440,width: 212,
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
			style: 'position:absolute;left:8px;top:33px;width:466px;height:440px;',
			height: 440,width: 466,
			items:
			[
				{
					title:'СтраницаНовыйСотрудник',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:464px;height:69px;',
			height: 69,width: 464,
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
			style: 'position:absolute;left:0px;top:142px;width:466px;height:275px;',
			height: 275,width: 466,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:95px;top:49px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:95px;top:26px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:368px;top:49px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:292px;top:49px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:368px;top:26px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗанятости',
			style: 'position:absolute;left:95px;top:186px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:95px;top:162px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:95px;top:209px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПередставлениеНаименования',
			style: 'position:absolute;left:95px;top:116px;width:349px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДоговора',
			style: 'position:absolute;left:95px;top:139px;width:239px;height:19px;',
		},
					]
				},
				{
					title:'ТрудовойДоговор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговора',
			style: 'position:absolute;left:92px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДоговора',
			style: 'position:absolute;left:192px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:92px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:192px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспытательныйСрок',
			style: 'position:absolute;left:423px;top:29px;width:35px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбособленноеПодразделение',
			style: 'position:absolute;left:92px;top:52px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:92px;top:75px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:92px;top:98px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикРаботы',
			style: 'position:absolute;left:92px;top:121px;width:253px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗанимаемыхСтавок',
			style: 'position:absolute;left:414px;top:121px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:96px;top:164px;width:249px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаТарифнойСтавки',
			style: 'position:absolute;left:265px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавка',
			style: 'position:absolute;left:96px;top:187px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифныйРазряд',
			style: 'position:absolute;left:96px;top:187px;width:249px;height:19px;',
		},
					]
				},
				{
					title:'СвойстваКатегории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:223px;height:226px;',
			height: 226,width: 223,
			columns:
			[
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
			style: 'position:absolute;left:23px;top:101px;width:77px;height:24px;',
			items:
			[
				{
					text:'Действия',
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
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:23px;width:223px;height:226px;',
			height: 226,width: 223,
			columns:
			[
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
			style: 'position:absolute;left:13px;top:146px;width:77px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Категории',
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
			name: 'НаименованиеФизлица',
			style: 'position:absolute;left:45px;top:79px;width:421px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:45px;top:101px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:214px;top:101px;width:125px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:341px;top:101px;width:125px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:103px;top:421px;width:363px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Физлицо',
			style: 'position:absolute;left:45px;top:79px;width:421px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаСотрудник',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:119px;width:466px;height:298px;',
			height: 298,width: 466,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол1',
			style: 'position:absolute;left:90px;top:29px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения1',
			style: 'position:absolute;left:90px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН1',
			style: 'position:absolute;left:368px;top:29px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС1',
			style: 'position:absolute;left:292px;top:29px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР1',
			style: 'position:absolute;left:368px;top:6px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Гражданство',
			style: 'position:absolute;left:103px;top:74px;width:355px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Инвалидность',
			style: 'position:absolute;left:103px;top:97px;width:355px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтандартныеВычеты',
			style: 'position:absolute;left:103px;top:141px;width:355px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмущественныеВычеты',
			style: 'position:absolute;left:103px;top:166px;width:355px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:103px;top:191px;width:355px;height:19px;',
		},
					]
				},
				{
					title:'КадровыеДанные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:63px;',
			height: 63,width: 452,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Период',
				},
				{
					text:'ДатаЗавершения',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'ПодразделениеОрганизацииЗавершения',
				},
				{
					text:'Должность',
				},
				{
					text:'ДолжностьЗавершения',
				},
				{
					text:'ГрафикРаботы',
				},
				{
					text:'ГрафикРаботыЗавершения',
				},
				{
					text:'ЗанимаемыхСтавок',
				},
				{
					text:'ЗанимаемыхСтавокЗавершения',
				},
				{
					text:'ПричинаИзмененияСостояния',
				},
				{
					text:'ПричинаИзмененияСостоянияЗавершения',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:128px;width:452px;height:144px;',
			height: 144,width: 452,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ВидДокумента',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:104px;width:452px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие14',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель6',
				},
			]
		},
					]
				},
				{
					title:'НачисленияУдержания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:128px;',
			height: 128,width: 452,
			columns:
			[
				{
					text:'Действие',
				},
				{
					text:'Период',
				},
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
				{
					text:'ДействиеЗавершения',
				},
				{
					text:'ПериодЗавершения',
				},
				{
					text:'ВидРасчетаЗавершения',
				},
				{
					text:'ПоказателиЗавершения',
				},
				{
					text:'НаименованиеПоказатель1Завершения',
				},
				{
					text:'Показатель1Завершения',
				},
				{
					text:'Валюта1Завершения',
				},
				{
					text:'НаименованиеПоказательТР1Завершения',
				},
				{
					text:'ТарифныйРазряд1Завершения',
				},
				{
					text:'НаименованиеПоказатель2Завершения',
				},
				{
					text:'Показатель2Завершения',
				},
				{
					text:'Валюта2Завершения',
				},
				{
					text:'НаименованиеПоказательТР2Завершения',
				},
				{
					text:'ТарифныйРазряд2Завершения',
				},
				{
					text:'НаименованиеПоказатель3Завершения',
				},
				{
					text:'Показатель3Завершения',
				},
				{
					text:'Валюта3Завершения',
				},
				{
					text:'НаименованиеПоказательТР3Завершения',
				},
				{
					text:'ТарифныйРазряд3Завершения',
				},
				{
					text:'НаименованиеПоказатель4Завершения',
				},
				{
					text:'Показатель4Завершения',
				},
				{
					text:'Валюта4Завершения',
				},
				{
					text:'НаименованиеПоказательТР4Завершения',
				},
				{
					text:'ТарифныйРазряд4Завершения',
				},
				{
					text:'НаименованиеПоказатель5Завершения',
				},
				{
					text:'Показатель5Завершения',
				},
				{
					text:'Валюта5Завершения',
				},
				{
					text:'НаименованиеПоказательТР5Завершения',
				},
				{
					text:'ТарифныйРазряд5Завершения',
				},
				{
					text:'НаименованиеПоказатель6Завершения',
				},
				{
					text:'Показатель6Завершения',
				},
				{
					text:'Валюта6Завершения',
				},
				{
					text:'НаименованиеПоказательТР6Завершения',
				},
				{
					text:'ТарифныйРазряд6Завершения',
				},
				{
					text:'Регистратор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:174px;width:452px;height:97px;',
			height: 97,width: 452,
			columns:
			[
				{
					text:'Действие',
				},
				{
					text:'Дата',
				},
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
				{
					text:'ДействиеЗавершения',
				},
				{
					text:'ПериодЗавершения',
				},
				{
					text:'ПоказателиЗавершения',
				},
				{
					text:'НаименованиеПоказатель1Завершения',
				},
				{
					text:'Показатель1Завершения',
				},
				{
					text:'Валюта1Завершения',
				},
				{
					text:'НаименованиеПоказатель2Завершения',
				},
				{
					text:'Показатель2Завершения',
				},
				{
					text:'Валюта2Завершения',
				},
				{
					text:'НаименованиеПоказатель3Завершения',
				},
				{
					text:'Показатель3Завершения',
				},
				{
					text:'Валюта3Завершения',
				},
				{
					text:'НаименованиеПоказатель4Завершения',
				},
				{
					text:'Показатель4Завершения',
				},
				{
					text:'Валюта4Завершения',
				},
				{
					text:'НаименованиеПоказатель5Завершения',
				},
				{
					text:'Показатель5Завершения',
				},
				{
					text:'Валюта5Завершения',
				},
				{
					text:'НаименованиеПоказатель6Завершения',
				},
				{
					text:'Показатель6Завершения',
				},
				{
					text:'Валюта6Завершения',
				},
				{
					text:'Регистратор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:324px;top:66px;width:125px;height:24px;',
			items:
			[
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
			style: 'position:absolute;left:316px;top:194px;width:125px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
				{
					title:'ОтражениеВУчете',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:170px;width:452px;height:102px;',
			height: 102,width: 452,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'СпособОтраженияВБухучете',
				},
				{
					text:'КодДоходаЕСН',
				},
				{
					text:'ОтнесениеРасходовКДеятельностиЕНВД',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:452px;height:77px;',
			height: 77,width: 452,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'СпособОтраженияВБухучете',
				},
				{
					text:'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
				},
				{
					text:'ПодпадаетПодЕНВД',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:452px;height:24px;',
			items:
			[
				{
					text:'История',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:146px;width:452px;height:24px;',
			items:
			[
				{
					text:'История',
				},
			]
		},
					]
				},
				{
					title:'ТрудовойДоговор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговора1',
			style: 'position:absolute;left:92px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДоговора1',
			style: 'position:absolute;left:192px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала1',
			style: 'position:absolute;left:92px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания1',
			style: 'position:absolute;left:192px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспытательныйСрок1',
			style: 'position:absolute;left:423px;top:52px;width:35px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗанимаемыхСтавок1',
			style: 'position:absolute;left:414px;top:144px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикРаботы1',
			style: 'position:absolute;left:92px;top:144px;width:253px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбособленноеПодразделение1',
			style: 'position:absolute;left:92px;top:75px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации1',
			style: 'position:absolute;left:92px;top:98px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность1',
			style: 'position:absolute;left:92px;top:121px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаТарифнойСтавки1',
			style: 'position:absolute;left:265px;top:210px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета1',
			style: 'position:absolute;left:96px;top:187px;width:249px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавка1',
			style: 'position:absolute;left:96px;top:210px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифныйРазряд1',
			style: 'position:absolute;left:96px;top:210px;width:249px;height:19px;',
		},
					]
				},
				{
					title:'СписокДоговоров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:266px;',
			height: 266,width: 452,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Номер',
				},
				{
					text:'Дата',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'СуммаЗаРаботу',
				},
				{
					text:'Валюта',
				},
				{
					text:'Оплата',
				},
			]
		},
					]
				},
				{
					title:'КадровыеДанныеУпрУчет',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:48px;',
			height: 48,width: 452,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Период',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Должность',
				},
				{
					text:'ГрафикРаботы',
				},
				{
					text:'ЗанимаемыхСтавок',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:91px;width:452px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель4',
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
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:115px;width:452px;height:157px;',
			height: 157,width: 452,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ВидДокумента',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
			]
		},
					]
				},
				{
					title:'СвойстваИКатегории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:223px;height:249px;',
			height: 249,width: 223,
			columns:
			[
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
			style: 'position:absolute;left:21px;top:112px;width:95px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действия',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:23px;width:223px;height:249px;',
			height: 249,width: 223,
			columns:
			[
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
			style: 'position:absolute;left:25px;top:148px;width:91px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Категории',
				},
				{
					text:'Действие1',
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
			name: 'ВидДоговора1',
			style: 'position:absolute;left:84px;top:46px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗанятости1',
			style: 'position:absolute;left:84px;top:95px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация1',
			style: 'position:absolute;left:84px;top:71px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код1',
			style: 'position:absolute;left:84px;top:23px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель1',
			style: 'position:absolute;left:103px;top:421px;width:363px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПередставлениеНаименования1',
			style: 'position:absolute;left:84px;top:0px;width:237px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'СменитьФИО',
			text: 'Смена ФИО',
			style: 'position:absolute;left:339px;top:0px;width:127px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:0px;width:50px;height:25px;',
			items:
			[
				{
					text:'ПереключениеСправкиФормы',
				},
			]
		},
	]
});