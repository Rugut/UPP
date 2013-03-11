Ext.define('Справочники.ФизическиеЛица.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 498,width: 608,
	iconCls: 'bogus',
	title: 'Физическое лицо',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'Разделитель6',
				},
				{
					text:'Действие',
				},
				{
					text:'МедицинскиеСтраховыеПолисы',
				},
				{
					text:'ПерейтиАвансыОрганизаций',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Перейти',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Файлы',
				},
				{
					text:'Действие2',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Труд',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'ПерейтиАвансы',
				},
				{
					text:'Труд',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'МедицинскиеСтраховыеПолисы',
				},
				{
					text:'НДФЛ',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'НДФЛ',
				},
				{
					text:'ПерейтиЛицевыеСчета',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПерейтиЛицевыеСчета',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:608px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Печать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:104px;width:592px;height:361px;',
			height: 361,width: 592,
			items:
			[
				{
					title:'СтраницаОсновные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:176px;top:99px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:388px;top:99px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:100px;top:99px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:224px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:100px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:166px;width:578px;height:169px;',
			height: 169,width: 578,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Тип',
				},
				{
					text:'Вид',
				},
				{
					text:'Представление',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:142px;width:578px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'РедактироватьВДиалоге',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'УстановитьОсновным',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МестоРождения',
			style: 'position:absolute;left:100px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удостоверение',
			style: 'position:absolute;left:100px;top:54px;width:388px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МестоРожденияКодПоОКАТО',
			style: 'position:absolute;left:400px;top:30px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаПерсональные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:124px;width:300px;height:69px;',
			height: 69,width: 300,
			columns:
			[
				{
					text:'СтепеньРодства',
				},
				{
					text:'Родственник',
				},
				{
					text:'ДатаРождения',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:247px;width:360px;height:88px;',
			height: 88,width: 360,
			columns:
			[
				{
					text:'ВидОбразования',
				},
				{
					text:'УчебноеЗаведение',
				},
				{
					text:'Специальность',
				},
				{
					text:'Диплом',
				},
				{
					text:'ГодОкончания',
				},
				{
					text:'Квалификация',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:312px;top:124px;width:272px;height:69px;',
			height: 69,width: 272,
			columns:
			[
				{
					text:'Язык',
				},
				{
					text:'СтепеньЗнанияЯзыка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СемейноеПоложение',
			style: 'position:absolute;left:124px;top:198px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВоинскийУчет',
			style: 'position:absolute;left:89px;top:30px;width:495px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Гражданство',
			style: 'position:absolute;left:89px;top:6px;width:495px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:372px;top:247px;width:212px;height:88px;',
			height: 88,width: 212,
			columns:
			[
				{
					text:'Профессия',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Инвалидность',
			style: 'position:absolute;left:89px;top:54px;width:495px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЛьготаПриНачисленииПособий',
			style: 'position:absolute;left:428px;top:78px;width:156px;height:19px;',
		},
					]
				},
				{
					title:'УченыеСтепениЗвания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:578px;height:80px;',
			height: 80,width: 578,
			columns:
			[
				{
					text:'УченаяСтепень',
				},
				{
					text:'ДатаПрисужденияУченойСтепени',
				},
				{
					text:'ОтрасльНауки',
				},
				{
					text:'ДиссертационныйСовет',
				},
				{
					text:'ДипломСерияНомер',
				},
				{
					text:'ДипломВыданОрганизация',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:136px;width:578px;height:118px;',
			height: 118,width: 578,
			columns:
			[
				{
					text:'УченоеЗвание',
				},
				{
					text:'ДатаПрисвоенияУченогоЗвания',
				},
				{
					text:'АттестатСерия',
				},
				{
					text:'АттестатНомер',
				},
				{
					text:'АттестатВыданОрганизация',
				},
				{
					text:'НаучнаяСпециальность',
				},
			]
		},
					]
				},
				{
					title:'Награды',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:578px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:578px;height:289px;',
			height: 289,width: 578,
			columns:
			[
				{
					text:'Награда',
				},
				{
					text:'НомерПриказа',
				},
				{
					text:'ДатаПриказа',
				},
				{
					text:'ЧейПриказ',
				},
			]
		},
					]
				},
				{
					title:'СтраницаДополнительные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:286px;height:311px;',
			height: 311,width: 286,
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
			style: 'position:absolute;left:10px;top:101px;width:270px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:298px;top:24px;width:286px;height:311px;',
			height: 311,width: 286,
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
			style: 'position:absolute;left:307px;top:101px;width:269px;height:24px;',
			items:
			[
				{
					text:'Категории',
				},
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
					title:'Прочее',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:70px;width:578px;height:156px;',
			height: 156,width: 578,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Содержание',
				},
				{
					text:'ВидЗаметки',
				},
				{
					text:'Автор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:46px;width:578px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:250px;width:578px;height:85px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДоступа',
			style: 'position:absolute;left:97px;top:6px;width:487px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:48px;top:33px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:48px;top:57px;width:182px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Смена ФИО',
			style: 'position:absolute;left:486px;top:57px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:520px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:236px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:362px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:98px;top:81px;width:502px;height:19px;',
		},
	]
});