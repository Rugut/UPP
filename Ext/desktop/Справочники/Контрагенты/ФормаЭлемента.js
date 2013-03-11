Ext.define('Справочники.Контрагенты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 454,width: 560,
	iconCls: 'bogus',
	title: 'Контрагенты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
			items:
			[
				{
					text:'ТелефонныйЗвонок',
				},
				{
					text:'НовыйЗаказПокупателя',
				},
				{
					text:'Прочее',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЛичнаяВстреча',
				},
				{
					text:'ЭлектронноеПисьмо',
				},
				{
					text:'СписокСобытий',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПочтовоеПисьмо',
				},
				{
					text:'Файлы',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Отчет',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаказыПокупателей',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отчеты',
				},
				{
					text:'Действие2',
				},
				{
					text:'Создать',
				},
				{
					text:'Создать',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Файлы',
				},
				{
					text:'НаписатьПисьмо',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЭлектронноеПисьмо',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'ЭлектронныеПисьма',
				},
				{
					text:'ТелефонныйЗвонок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Прочее',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'ЭлектронныеПисьмаПлюсКонтактныеЛица',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'ПочтовоеПисьмо',
				},
				{
					text:'НовыйЗаказПокупателя',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'НовыйЗаказПоставщику',
				},
				{
					text:'НовыйЗаказПоставщику',
				},
				{
					text:'Действие1',
				},
				{
					text:'Продажи',
				},
				{
					text:'ЗаказыПоставщикам',
				},
				{
					text:'Отчет',
				},
				{
					text:'ВедомостьВзаиморасчетов',
				},
				{
					text:'ЛичнаяВстреча',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:429px;width:560px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:61px;width:544px;height:336px;',
			height: 336,width: 544,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГоловнойКонтрагент',
			style: 'position:absolute;left:238px;top:130px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрФизЛицо',
			style: 'position:absolute;left:118px;top:6px;width:105px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:53px;width:530px;height:48px;',
			height: 48,width: 530,
			items:
			[
				{
					title:'ЮрЛицо',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПО',
			style: 'position:absolute;left:418px;top:27px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:242px;top:29px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:112px;top:0px;width:418px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН1',
			style: 'position:absolute;left:112px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаГенарацииКПП',
			text: '',
			style: 'position:absolute;left:193px;top:29px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'ФизЛицо',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолноеФизЛицо',
			style: 'position:absolute;left:112px;top:0px;width:418px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:286px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументУдостоверяющийЛичность2',
			style: 'position:absolute;left:112px;top:24px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПО1',
			style: 'position:absolute;left:450px;top:24px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:154px;width:530px;height:156px;',
			height: 156,width: 530,
			items:
			[
				{
					title:'ВидыДеятельности',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:516px;height:106px;',
			height: 106,width: 516,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидДеятельности',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:516px;height:24px;',
			items:
			[
				{
					text:'СделатьОсновным',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'КакПокупатель',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:516px;height:124px;',
			height: 124,width: 516,
			items:
			[
				{
					title:'КакПокупательОбщие',
					items:
					[
					]
				},
				{
					title:'КакПокупательМенеджеры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:68px;',
			height: 68,width: 502,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'МенеджерПокупателя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			items:
			[
				{
					text:'СделатьОсновным',
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
					title:'КакПоставщик',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокВыполненияЗаказаПоставщиком',
			style: 'position:absolute;left:260px;top:33px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасписаниеРаботыСтрокой',
			style: 'position:absolute;left:118px;top:106px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:362px;top:30px;width:174px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регион',
			style: 'position:absolute;left:424px;top:106px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКОПФ',
			style: 'position:absolute;left:118px;top:30px;width:105px;height:19px;',
		},
					]
				},
				{
					title:'Контакты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:530px;height:106px;',
			height: 106,width: 530,
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
			style: 'position:absolute;left:6px;top:26px;width:530px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'РедактироватьВДиалоге',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'УстановитьОсновным',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:530px;height:87px;',
			height: 87,width: 530,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'Должность',
				},
				{
					text:'РольКонтактногоЛица',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:530px;height:24px;',
			items:
			[
				{
					text:'Перейти',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'ЭлектронныеПисьма',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СделатьОсновным',
				},
				{
					text:'НаписатьПисьмо',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'КонтактныеЛицаОбновить',
				},
				{
					text:'СписокСобытий',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'СчетаИДоговоры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:202px;width:530px;height:108px;',
			height: 108,width: 530,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВедениеВзаиморасчетов',
				},
				{
					text:'ВидДоговора',
				},
				{
					text:'Номер',
				},
				{
					text:'Дата',
				},
				{
					text:'Организация',
				},
				{
					text:'ВалютаВзаиморасчетов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:178px;width:530px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие11',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СделатьОсновным',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:530px;height:110px;',
			height: 110,width: 530,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Банк',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:530px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'СделатьОсновным',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
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
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
			]
		},
					]
				},
				{
					title:'События',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'СостояниеСобытия',
				},
				{
					text:'Важность',
				},
				{
					text:'Номер',
				},
				{
					text:'Дата',
				},
				{
					text:'ВидСобытия',
				},
				{
					text:'КонтактноеЛицо',
				},
				{
					text:'ОписаниеСобытия',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
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
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
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
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
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
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
			items:
			[
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
					text:'Действие2',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДоступаКонтрагента',
			style: 'position:absolute;left:170px;top:14px;width:366px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:472px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:338px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КомментарийСтрокой',
			style: 'position:absolute;left:94px;top:402px;width:458px;height:19px;',
		},
	]
});