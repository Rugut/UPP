Ext.define('Справочники.Организации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 669,width: 579,
	iconCls: 'bogus',
	title: 'Организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:507px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:134px;top:33px;width:332px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Префикс',
			style: 'position:absolute;left:279px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:579px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
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
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Файлы',
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
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Права',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие4',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:644px;width:579px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
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
			name: 'ГоловнаяОрганизация',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:134px;top:81px;width:437px;height:66px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойБанковскийСчет',
			style: 'position:absolute;left:134px;top:304px;width:437px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:331px;width:563px;height:305px;',
			height: 305,width: 563,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:107px;top:25px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:350px;top:25px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:107px;top:92px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоСерияНомер',
			style: 'position:absolute;left:255px;top:139px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоДатаВыдачи',
			style: 'position:absolute;left:107px;top:139px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоНаименованиеОргана',
			style: 'position:absolute;left:188px;top:178px;width:367px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоКодОргана',
			style: 'position:absolute;left:57px;top:178px;width:34px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегистрации',
			style: 'position:absolute;left:373px;top:49px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН',
			style: 'position:absolute;left:107px;top:49px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеИМНС',
			style: 'position:absolute;left:255px;top:92px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦифровойИндексОбособленногоПодразделения',
			style: 'position:absolute;left:288px;top:225px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'КонтактнаяИнформация',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:549px;height:246px;',
			height: 246,width: 549,
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
			style: 'position:absolute;left:6px;top:7px;width:549px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'РедактироватьВДиалоге',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'УстановитьОсновным',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'ОтключитьОтбор',
				},
				{
					text:'ОтборПоТекущемуЗначению',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'Коды',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПО',
			style: 'position:absolute;left:257px;top:25px;width:107px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОКОПФ',
			style: 'position:absolute;left:66px;top:72px;width:28px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеОКОПФ',
			style: 'position:absolute;left:231px;top:72px;width:324px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОКОПФ1',
			style: 'position:absolute;left:66px;top:118px;width:28px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеОКОПФ1',
			style: 'position:absolute;left:231px;top:118px;width:324px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОКОПФ2',
			style: 'position:absolute;left:66px;top:164px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеОКОПФ2',
			style: 'position:absolute;left:231px;top:164px;width:324px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОКОНХ',
			style: 'position:absolute;left:464px;top:25px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:66px;top:25px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'РасчетЗарплаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерПФР',
			style: 'position:absolute;left:88px;top:130px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:216px;top:31px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициентРФ',
			style: 'position:absolute;left:216px;top:56px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:88px;top:178px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТерриториальныеУсловияПФР',
			style: 'position:absolute;left:216px;top:81px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтавокЕСНиПФР',
			style: 'position:absolute;left:216px;top:6px;width:339px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаПФР',
			style: 'position:absolute;left:297px;top:154px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОрганаПФР',
			style: 'position:absolute;left:297px;top:130px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:297px;top:178px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:505px;top:178px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:297px;top:202px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерТФОМС',
			style: 'position:absolute;left:88px;top:221px;width:110px;height:19px;',
		},
					]
				},
				{
					title:'ИндивидуальныйПредприниматель',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:40px;width:555px;height:130px;',
			height: 130,width: 555,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИПРегистрационныйНомерПФР',
			style: 'position:absolute;left:198px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИПРегистрационныйНомерФСС',
			style: 'position:absolute;left:198px;top:82px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИПКодПодчиненностиФСС',
			style: 'position:absolute;left:198px;top:108px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИПРегистрационныйНомерТФОМС',
			style: 'position:absolute;left:198px;top:26px;width:120px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'БухучетЗарплаты',
					items:
					[
					]
				},
				{
					title:'ИностраннаяОрганизация',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаРегистрации',
			style: 'position:absolute;left:240px;top:7px;width:315px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВСтранеРегистрации',
			style: 'position:absolute;left:240px;top:57px;width:315px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаПостоянногоМестонахождения',
			style: 'position:absolute;left:240px;top:32px;width:315px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеИнострОрганизации',
			style: 'position:absolute;left:6px;top:99px;width:549px;height:53px;',
		},
					]
				},
				{
					title:'Документооборот',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:85px;width:549px;height:19px;',
			height: 19,width: 549,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗаписьОбмена',
			style: 'position:absolute;left:125px;top:0px;width:424px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:178px;width:548px;height:18px;',
			height: 18,width: 548,
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
			xtype: 'button',
			name: 'КнопкаНастроитьПараметрыОтправки',
			text: 'Настроить параметры отправки отчетности в ФСС...',
			style: 'position:absolute;left:21px;top:257px;width:279px;height:21px;',
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
			name: 'КодИФНСПолучателя',
			style: 'position:absolute;left:289px;top:71px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОрганаФСГС',
			style: 'position:absolute;left:289px;top:41px;width:54px;height:19px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:549px;height:249px;',
			height: 249,width: 549,
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
			style: 'position:absolute;left:6px;top:6px;width:549px;height:24px;',
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
			style: 'position:absolute;left:6px;top:30px;width:549px;height:249px;',
			height: 249,width: 549,
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
			style: 'position:absolute;left:6px;top:6px;width:549px;height:24px;',
			items:
			[
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
					text:'Действие2',
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
			name: 'НаименованиеПлательщикаПриПеречисленииНалогов',
			style: 'position:absolute;left:134px;top:209px;width:437px;height:66px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрФизЛицо',
			style: 'position:absolute;left:134px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндивидуальныйПредприниматель',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеСокращенное',
			style: 'position:absolute;left:134px;top:152px;width:437px;height:34px;',
		},
	]
});