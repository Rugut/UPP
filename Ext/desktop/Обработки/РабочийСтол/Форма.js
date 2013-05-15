Ext.define('Обработки.РабочийСтол.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:918px;height:573px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рабочий стол',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:38px;width:700px;height:535px;',
			height: 535,width: 700,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Главная',
					items:
					[
		{
			xtype: 'label',
			name: 'НастройкаПараметровУчета1',
			text: 'Параметры учета',
			style: 'position:absolute;left:218px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОбновлениеКонфигурации1',
			text: 'Обновление конфигурации',
			style: 'position:absolute;left:577px;top:269px;width:115px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ФизическиеЛица1',
			text: 'Физические лица',
			style: 'position:absolute;left:39px;top:474px;width:148px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Обозреватель1',
			text: 'Web-страница конфигурации',
			style: 'position:absolute;left:218px;top:474px;width:182px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Письмо1',
			text: 'Написать письмо в техподдержку',
			style: 'position:absolute;left:218px;top:491px;width:182px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОтзывОПрограмме1',
			text: 'Написать отзыв о программе',
			style: 'position:absolute;left:218px;top:508px;width:182px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Сайт1С',
			text: 'Сайт фирмы 1С',
			style: 'position:absolute;left:201px;top:457px;width:199px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавная',
			text: 'Предприятие',
			style: 'position:absolute;left:56px;top:0px;width:162px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчеты4',
			text: 'Отчеты',
			style: 'position:absolute;left:56px;top:298px;width:243px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчеты8',
			text: 'Отчеты',
			style: 'position:absolute;left:56px;top:298px;width:311px;height:48px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:317px;width:684px;height:6px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:516px;top:42px;width:163px;height:102px;',
			height: 102,width: 163,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'ЗадачаИсполнителя1',
			text: 'Мои задачи',
			style: 'position:absolute;left:40px;top:50px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'МоиНастройки',
			text: 'Мои настройки...',
			style: 'position:absolute;left:40px;top:69px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИмяПользователя',
			text: 'Пользователь\r\n(имя не задано)',
			style: 'position:absolute;left:40px;top:8px;width:115px;height:42px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:0px;width:163px;height:101px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НастройкиПрограммы',
			text: 'Настройка программы',
			style: 'position:absolute;left:379px;top:48px;width:128px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'МониторЗаконодательства',
			text: 'Монитор законодательства',
			style: 'position:absolute;left:413px;top:457px;width:182px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СайтБУХру',
			text: 'Интернет-ресурс\r\nБУХ.1С',
			style: 'position:absolute;left:413px;top:474px;width:182px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НовоеПисьмо',
			text: 'Написать письмо',
			style: 'position:absolute;left:577px;top:174px;width:115px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДолжностиОрганизаций1',
			text: 'Должности',
			style: 'position:absolute;left:56px;top:132px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ШтатноеРасписаниеОрганизаций1',
			text: 'Штатное расписание',
			style: 'position:absolute;left:56px;top:174px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СотрудникиОрганизаций1',
			text: 'Сотрудники',
			style: 'position:absolute;left:56px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:56px;top:369px;width:373px;height:46px;',
			height: 46,width: 373,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'СпискиРаботниковОрганизаций1',
			text: 'Списки сотрудников организаций',
			style: 'position:absolute;left:0px;top:23px;width:179px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ33',
			text: 'Унифицированная форма Т-3',
			style: 'position:absolute;left:194px;top:6px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОрганизационнаяСтруктура1',
			text: 'Организационная структура',
			style: 'position:absolute;left:194px;top:23px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СпискиРаботников4',
			text: 'Списки сотрудников компании',
			style: 'position:absolute;left:0px;top:6px;width:162px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'СпискиРаботниковОрганизаций4',
			text: 'Списки сотрудников организаций',
			style: 'position:absolute;left:0px;top:6px;width:179px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ35',
			text: 'Унифицированная форма Т-3',
			style: 'position:absolute;left:0px;top:23px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОрганизационнаяСтруктура2',
			text: 'Организационная структура',
			style: 'position:absolute;left:207px;top:6px;width:150px;height:17px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:56px;top:90px;width:138px;height:42px;',
			height: 42,width: 138,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'Подразделения6',
			text: 'Подразделения',
			style: 'position:absolute;left:0px;top:0px;width:138px;height:42px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'ПодразделенияОрганизаций',
			text: 'Подразделения',
			style: 'position:absolute;left:0px;top:0px;width:137px;height:42px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Территории',
			text: 'Территории',
			style: 'position:absolute;left:56px;top:491px;width:131px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Помещения',
			text: 'Помещения',
			style: 'position:absolute;left:56px;top:508px;width:131px;height:17px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:218px;top:242px;width:323px;height:58px;',
			height: 58,width: 323,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Организации1',
			text: 'Наши организации',
			style: 'position:absolute;left:32px;top:39px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Если в программе ведется учет сразу по нескольким организациям, то для редактирования их списка используйте команду "Наши организации"',
			style: 'position:absolute;left:32px;top:0px;width:291px;height:39px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнтернетИТС',
			text: 'Интернет-ИТС',
			style: 'position:absolute;left:413px;top:491px;width:182px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УправлениеПерсональнымиДанными',
			text: 'Управление персональными данными (152-ФЗ)',
			style: 'position:absolute;left:379px;top:132px;width:137px;height:42px;text-align:left;',
		},
					]
				},
				{
					title:'Кадровый учет',
					items:
					[
		{
			xtype: 'label',
			name: 'ШтатноеРасписаниеОрганизаций3',
			text: 'Штатное расписание',
			style: 'position:absolute;left:306px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СотрудникиОрганизаций2',
			text: 'Сотрудники',
			style: 'position:absolute;left:56px;top:48px;width:102px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВоинскийУчет2',
			text: 'Записи воинского учета',
			style: 'position:absolute;left:451px;top:282px;width:220px;height:18px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИзвещенияВВоенкоматы2',
			text: 'Извещения в военкоматы',
			style: 'position:absolute;left:467px;top:307px;width:223px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДонесениеОКоличествеГражданПребывающихВЗапасе2',
			text: 'Донесение о количестве граждан запаса (форма №11/МУ)',
			style: 'position:absolute;left:467px;top:325px;width:223px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПринятыеИУволенныеРаботникиПодлежащиеПризыву2',
			text: 'Сотрудники, подлежащие призыву (приемы и увольнения)',
			style: 'position:absolute;left:467px;top:357px;width:223px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПринятыеИУволенныеВоеннообязанные',
			text: 'Военнообязанные (приемы и увольнения)',
			style: 'position:absolute;left:467px;top:389px;width:223px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДанныеДляКарточкиУчетаОрганизацииВВоенкомате2',
			text: 'Карточка учета организации в военкомате (форма №18)',
			style: 'position:absolute;left:467px;top:407px;width:223px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЧисленностьРаботающихИЗабронированныхГражданЗапаса2',
			text: 'Численность работающих и забронированных (форма №6)',
			style: 'position:absolute;left:467px;top:438px;width:223px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СписокПервоначальнойПостановкиНаВоинскийУчет2',
			text: 'Список первоначальной постановки на воинский учет',
			style: 'position:absolute;left:467px;top:469px;width:223px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СписокГражданПодлежащихПостановкеНаВоинскийУчет2',
			text: 'Список граждан, подлежащих постановке на воинский учет',
			style: 'position:absolute;left:467px;top:500px;width:223px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКадровыйУчет',
			text: 'Кадровый учет',
			style: 'position:absolute;left:56px;top:0px;width:170px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'ГрафикиРаботы2',
			text: 'Графики  работы',
			style: 'position:absolute;left:306px;top:90px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Воинский учет сотрудников',
			style: 'position:absolute;left:459px;top:263px;width:203px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:250px;width:386px;height:5px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:467px;top:303px;width:223px;height:7px;',
		},
		{
			xtype: 'label',
			name: 'НовыйСотрудник',
			text: 'Новый сотрудник',
			style: 'position:absolute;left:170px;top:48px;width:102px;height:42px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:56px;top:90px;width:247px;height:145px;',
			height: 145,width: 247,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'УчетКадров3',
			text: 'Кадровые документы',
			style: 'position:absolute;left:0px;top:0px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПриемНаРаботу3',
			text: 'Прием на  работу',
			style: 'position:absolute;left:32px;top:41px;width:197px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КадровоеПеремещение3',
			text: 'Кадровое перемещение',
			style: 'position:absolute;left:32px;top:58px;width:197px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Увольнение3',
			text: 'Увольнение',
			style: 'position:absolute;left:32px;top:75px;width:197px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СотрудникиОрганизаций5',
			text: 'Трудовые договоры',
			style: 'position:absolute;left:32px;top:101px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СпискиДоговорниковОрганизаций3',
			text: 'Отчет по договорникам',
			style: 'position:absolute;left:32px;top:120px;width:150px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'УчетКадровОрганизаций2',
			text: 'Кадровые документы',
			style: 'position:absolute;left:0px;top:0px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПриемНаРаботуВОрганизацию2',
			text: 'Прием на  работу',
			style: 'position:absolute;left:32px;top:41px;width:197px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КадровоеПеремещениеОрганизаций2',
			text: 'Кадровое перемещение',
			style: 'position:absolute;left:32px;top:58px;width:197px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УвольнениеИзОрганизаций2',
			text: 'Увольнение',
			style: 'position:absolute;left:32px;top:75px;width:197px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СотрудникиОрганизаций4',
			text: 'Трудовые договоры',
			style: 'position:absolute;left:32px;top:101px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СпискиДоговорниковОрганизаций2',
			text: 'Отчет по договорникам',
			style: 'position:absolute;left:32px;top:120px;width:150px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:306px;top:178px;width:150px;height:41px;',
			height: 41,width: 150,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'Встречи',
			text: 'Встречи',
			style: 'position:absolute;left:0px;top:0px;width:150px;height:32px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:255px;width:424px;height:280px;',
			height: 280,width: 424,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'ДвижениеРаботников',
			text: 'Отчет о кадровых перемещениях',
			style: 'position:absolute;left:48px;top:130px;width:176px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ32',
			text: 'Унифицированная форма Т-3',
			style: 'position:absolute;left:248px;top:93px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СредняяЧисленностьРаботниковОрганизаций2',
			text: 'Средняя численность',
			style: 'position:absolute;left:248px;top:166px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДвижениеРаботниковОрганизаций2',
			text: 'Отчет о кадровых перемещениях',
			style: 'position:absolute;left:248px;top:130px;width:176px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ШтатнаяРасстановкаОрганизаций2',
			text: 'Отчет по штатной расстановке',
			style: 'position:absolute;left:248px;top:112px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СтатистикаКадров',
			text: 'Статистические данные',
			style: 'position:absolute;left:48px;top:93px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ22',
			text: 'Личная карточка Т-2',
			style: 'position:absolute;left:248px;top:147px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчеты2',
			text: 'Отчеты',
			style: 'position:absolute;left:48px;top:0px;width:162px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'СпискиРаботников',
			text: 'Списки сотрудников',
			style: 'position:absolute;left:48px;top:75px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СтатистикаКадровОрганизации4',
			text: 'Статистические данные ',
			style: 'position:absolute;left:248px;top:76px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ШтатнаяРасстановка',
			text: 'Отчет по штатной расстановке',
			style: 'position:absolute;left:48px;top:112px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПерсонифицированныйУчетПФР3',
			text: 'Персонифицированный учет',
			style: 'position:absolute;left:216px;top:223px;width:162px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДолжностиОрганизаций8',
			text: 'Должности',
			style: 'position:absolute;left:48px;top:240px;width:152px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмТакже17',
			text: 'См. также',
			style: 'position:absolute;left:48px;top:191px;width:162px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'ФизическиеЛица3',
			text: 'Физические лица',
			style: 'position:absolute;left:31px;top:257px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Подразделения4',
			text: 'Подразделения',
			style: 'position:absolute;left:48px;top:223px;width:133px;height:17px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'По организациям',
			style: 'position:absolute;left:248px;top:49px;width:138px;height:14px;',
		},
		{
			xtype: 'fieldset',
			title: 'По компании',
			style: 'position:absolute;left:48px;top:49px;width:138px;height:14px;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ42',
			text: 'Учетная карточка Т-4',
			style: 'position:absolute;left:248px;top:184px;width:150px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ34',
			text: 'Унифицированная форма Т-3',
			style: 'position:absolute;left:216px;top:66px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СредняяЧисленностьРаботниковОрганизаций3',
			text: 'Средняя численность',
			style: 'position:absolute;left:48px;top:102px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДвижениеРаботниковОрганизаций3',
			text: 'Отчет о кадровых перемещениях',
			style: 'position:absolute;left:216px;top:102px;width:176px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ШтатнаяРасстановкаОрганизаций3',
			text: 'Отчет по штатной расстановке',
			style: 'position:absolute;left:216px;top:84px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СтатистикаКадровОрганизации5',
			text: 'Статистические данные',
			style: 'position:absolute;left:48px;top:84px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ25',
			text: 'Личная карточка Т-2',
			style: 'position:absolute;left:48px;top:120px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчеты13',
			text: 'Отчеты',
			style: 'position:absolute;left:48px;top:0px;width:162px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'СпискиРаботниковОрганизаций5',
			text: 'Списки сотрудников',
			style: 'position:absolute;left:48px;top:66px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПерсонифицированныйУчетПФР4',
			text: 'Персонифицированный учет',
			style: 'position:absolute;left:216px;top:223px;width:162px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДолжностиОрганизаций9',
			text: 'Должности',
			style: 'position:absolute;left:48px;top:240px;width:152px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмТакже19',
			text: 'См. также',
			style: 'position:absolute;left:48px;top:191px;width:162px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'ПодразделенияОрганизаций4',
			text: 'Подразделения',
			style: 'position:absolute;left:48px;top:223px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ФизическиеЛица9',
			text: 'Физические лица',
			style: 'position:absolute;left:32px;top:257px;width:168px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ41',
			text: 'Учетная карточка Т-4',
			style: 'position:absolute;left:48px;top:138px;width:150px;height:17px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ПоказНамеченныхСобытийПоПерсоналу3',
			text: 'Запланированные кадровые перестановки',
			style: 'position:absolute;left:306px;top:134px;width:161px;height:42px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:467px;top:48px;width:215px;height:217px;',
			height: 217,width: 215,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'Отклонения4',
			text: 'Отпуска, отсутствия,  командировки, неявки',
			style: 'position:absolute;left:0px;top:0px;width:215px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ФормаОстатковОтпусков',
			text: 'Остатки отпусков',
			style: 'position:absolute;left:0px;top:130px;width:181px;height:35px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГрафикОтпусков3',
			text: 'График отпусков',
			style: 'position:absolute;left:32px;top:165px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УчастиеВМероприятиях',
			text: 'Регистрация участия в мероприятиях',
			style: 'position:absolute;left:32px;top:48px;width:150px;height:38px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УчастиеРаботниковВМероприятиях',
			text: 'Участие в мероприятиях',
			style: 'position:absolute;left:32px;top:86px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Отпуска',
			text: 'Отчет по отпускам',
			style: 'position:absolute;left:32px;top:182px;width:150px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'ОтклоненияОрганизаций3',
			text: 'Отпуска, командировки, неявки',
			style: 'position:absolute;left:0px;top:0px;width:182px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОтпускаОрганизаций2',
			text: 'Отпуска',
			style: 'position:absolute;left:32px;top:43px;width:118px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КомандировкиОрганизаций2',
			text: 'Командировки',
			style: 'position:absolute;left:32px;top:60px;width:118px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НеявкиИБолезниОрганизаций2',
			text: 'Неявки и болезни',
			style: 'position:absolute;left:32px;top:77px;width:118px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВозвратНаРаботуОрганизаций2',
			text: 'Возврат на работу',
			style: 'position:absolute;left:32px;top:94px;width:118px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОстаткиОтпусковОрганизаций2',
			text: 'Остатки отпусков',
			style: 'position:absolute;left:0px;top:130px;width:198px;height:35px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Отпуска1',
			text: 'Отчет по отпускам',
			style: 'position:absolute;left:32px;top:182px;width:164px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГрафикОтпусковОрганизаций',
			text: 'График отпусков',
			style: 'position:absolute;left:32px;top:165px;width:150px;height:17px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Расчет зарплаты',
					items:
					[
		{
			xtype: 'label',
			name: 'ГрафикиРаботы1',
			text: 'Графики  работы',
			style: 'position:absolute;left:218px;top:132px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВводИндивидуальныхГрафиковРаботыОрганизации4',
			text: 'Индивидуальные графики работы',
			style: 'position:absolute;left:305px;top:254px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОтпускаПоУходуЗаРебенком4',
			text: 'Отпуска по уходу за ребенком',
			style: 'position:absolute;left:273px;top:191px;width:194px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'АнализНеявок4',
			text: 'Анализ неявок',
			style: 'position:absolute;left:305px;top:271px;width:143px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ТабельУчетаРабочегоВремениОрганизации4',
			text: 'Табель учета рабочего времени',
			style: 'position:absolute;left:305px;top:237px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НачислениеПоБольничномуЛисту4',
			text: 'Начисление по больничному',
			style: 'position:absolute;left:305px;top:107px;width:164px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НачислениеОтпускаРаботникамОрганизаций4',
			text: 'Начисление отпуска',
			style: 'position:absolute;left:305px;top:89px;width:164px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗарплата',
			text: 'Расчет зарплаты',
			style: 'position:absolute;left:54px;top:0px;width:210px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'ОплатаПоСреднемуЗаработку3',
			text: 'Оплата по среднему заработку',
			style: 'position:absolute;left:305px;top:143px;width:164px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НевыходыВОрганизациях3',
			text: 'Невыходы',
			style: 'position:absolute;left:305px;top:125px;width:164px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасчетОплатыНеявок4',
			text: 'Журнал оплачиваемых неявок',
			style: 'position:absolute;left:273px;top:48px;width:196px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗаявкаНаОткрытиеСчетов4',
			text: 'Заявки на открытие лицевого счета',
			style: 'position:absolute;left:518px;top:283px;width:174px;height:34px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДоговорНаВыполнениеРаботСФизЛицом4',
			text: 'Договоры ГПХ',
			style: 'position:absolute;left:56px;top:480px;width:126px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИсполнительныйЛист4',
			text: 'Исполнительные листы',
			style: 'position:absolute;left:56px;top:496px;width:126px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПерерасчетЗарплатыОрганизаций4',
			text: 'Перерасчет зарплаты',
			style: 'position:absolute;left:56px;top:512px;width:126px;height:17px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:324px;width:684px;height:6px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмТакже10',
			text: 'См. также',
			style: 'position:absolute;left:56px;top:450px;width:162px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'ДоговорЗаймаСРаботником',
			text: 'Договор займа с сотрудником',
			style: 'position:absolute;left:518px;top:266px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:330px;width:677px;height:121px;',
			height: 121,width: 677,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'РасчетныеЛистки5',
			text: 'Расчетные листки',
			style: 'position:absolute;left:48px;top:62px;width:126px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КнигаАналитическогоУчетаДепонированнойЗарплаты5',
			text: 'Книга депонентов',
			style: 'position:absolute;left:474px;top:97px;width:141px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчеты11',
			text: 'Отчеты',
			style: 'position:absolute;left:48px;top:0px;width:208px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ132',
			text: 'Табель учета рабочего времени',
			style: 'position:absolute;left:474px;top:79px;width:166px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СтруктураЗадолженностиОрганизаций5',
			text: 'Структура задолженности',
			style: 'position:absolute;left:474px;top:60px;width:141px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СводНачисленнойЗарплаты6',
			text: 'Свод начисленной зарплаты',
			style: 'position:absolute;left:48px;top:97px;width:148px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасчетнаяВедомость',
			text: 'Расчетная ведомость',
			style: 'position:absolute;left:48px;top:79px;width:126px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасчетныеЛисткиОрганизаций6',
			text: 'Расчетные листки',
			style: 'position:absolute;left:265px;top:62px;width:126px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасчетныеВедомостиОрганизаций3',
			text: 'Расчетная ведомость',
			style: 'position:absolute;left:265px;top:79px;width:126px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СводНачисленнойЗарплатыОрганизаций7',
			text: 'Свод начисленной зарплаты',
			style: 'position:absolute;left:265px;top:97px;width:148px;height:17px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'По организациям',
			style: 'position:absolute;left:265px;top:43px;width:138px;height:14px;',
		},
		{
			xtype: 'fieldset',
			title: 'По компании',
			style: 'position:absolute;left:48px;top:43px;width:138px;height:14px;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'РасчетныеЛисткиОрганизаций4',
			text: 'Расчетные листки',
			style: 'position:absolute;left:48px;top:47px;width:126px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КнигаАналитическогоУчетаДепонированнойЗарплаты4',
			text: 'Книга депонентов',
			style: 'position:absolute;left:192px;top:64px;width:127px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчеты3',
			text: 'Отчеты',
			style: 'position:absolute;left:48px;top:0px;width:208px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'УнифицированнаяФормаТ131',
			text: 'Табель учета рабочего времени',
			style: 'position:absolute;left:351px;top:64px;width:166px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СтруктураЗадолженностиОрганизаций4',
			text: 'Структура задолженности',
			style: 'position:absolute;left:192px;top:47px;width:141px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СводНачисленнойЗарплатыОрганизаций5',
			text: 'Свод начисленной зарплаты',
			style: 'position:absolute;left:351px;top:47px;width:148px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасчетныеВедомостиОрганизаций1',
			text: 'Расчетная ведомость',
			style: 'position:absolute;left:48px;top:64px;width:126px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВыплатыЧерезБанк',
			text: 'Выплаты через банк',
			style: 'position:absolute;left:48px;top:81px;width:127px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВыработкаРаботников',
			text: 'Выработка сотрудников',
			style: 'position:absolute;left:544px;top:47px;width:127px;height:17px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:375px;top:468px;width:317px;height:61px;',
			height: 61,width: 317,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'ФормаНачислений',
			text: 'Начисления',
			style: 'position:absolute;left:9px;top:10px;width:111px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ФормаУдержаний',
			text: 'Удержания',
			style: 'position:absolute;left:9px;top:28px;width:111px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПлановыеНачисленияРаботников',
			text: 'Плановые начисления ',
			style: 'position:absolute;left:129px;top:10px;width:161px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПлановыеУдержанияРаботников',
			text: 'Плановые удержания ',
			style: 'position:absolute;left:129px;top:26px;width:162px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'ВводСведенийОПлановыхНачисленияхРаботниковОрганизаций4',
			text: 'Постоянные начисления',
			style: 'position:absolute;left:183px;top:11px;width:134px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций4',
			text: 'Постоянные удержания',
			style: 'position:absolute;left:183px;top:28px;width:134px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОсновныеНачисленияОрганизаций',
			text: 'Основные начисления',
			style: 'position:absolute;left:9px;top:11px;width:131px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УдержанияОрганизаций1',
			text: 'Удержания',
			style: 'position:absolute;left:9px;top:44px;width:131px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДополнительныеНачисленияОрганизаций1',
			text: 'Дополнительные начисления',
			style: 'position:absolute;left:9px;top:28px;width:156px;height:17px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:56px;top:48px;width:209px;height:269px;',
			height: 269,width: 209,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'НачислениеЗарплатыРаботникам5',
			text: 'Начисление зарплаты',
			style: 'position:absolute;left:32px;top:41px;width:172px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДокументыПоНачислениюЗарплаты',
			text: 'Журнал начисления зарплаты',
			style: 'position:absolute;left:0px;top:0px;width:194px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВводСведенийОПлановыхНачисленияхУдержанияхРаботников',
			text: 'Ввод плановых начислений и удержаний',
			style: 'position:absolute;left:32px;top:77px;width:172px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СдельныйНаряд4',
			text: 'Сдельный наряд',
			style: 'position:absolute;left:32px;top:59px;width:171px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'АнализПоказателей',
			text: 'Анализ показателей',
			style: 'position:absolute;left:32px;top:177px;width:170px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'МотивацияПерсонала',
			text: 'Мотивация персонала',
			style: 'position:absolute;left:0px;top:112px;width:201px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'АнализСхемМотивации',
			text: 'Анализ схем мотивации',
			style: 'position:absolute;left:32px;top:144px;width:170px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УтверждениеCхемыМотивации',
			text: 'Утверждение схемы мотивации',
			style: 'position:absolute;left:32px;top:160px;width:170px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗначенияПоказателейСхемМотивации1',
			text: 'Показатели для расчета зарплаты',
			style: 'position:absolute;left:0px;top:200px;width:203px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВводПостоянногоНачисленияИлиУдержания',
			text: 'Ввод постоянного начисления или удержания',
			style: 'position:absolute;left:32px;top:236px;width:174px;height:33px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'НачислениеЗарплатыРаботникамОрганизаций4',
			text: 'Начисление зарплаты',
			style: 'position:absolute;left:32px;top:44px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДокументыПоНачислениюЗарплатыОрганизаций',
			text: 'Журнал начисления зарплаты',
			style: 'position:absolute;left:0px;top:0px;width:194px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РегистрацияРазовыхНачисленийРаботниковОрганизаций1',
			text: 'Регистрация разовых начислений',
			style: 'position:absolute;left:32px;top:78px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПремииРаботниковОрганизаций3',
			text: 'Премии сотрудников',
			style: 'position:absolute;left:32px;top:61px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РегистрацияРазовыхУдержанийРаботниковОрганизаций3',
			text: 'Регистрация разовых удержаний',
			style: 'position:absolute;left:32px;top:95px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОплатаПраздничныхИВыходныхДнейОрганизаций3',
			text: 'Оплата праздничных и выходных',
			style: 'position:absolute;left:32px;top:112px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОплатаСверхурочныхЧасов3',
			text: 'Оплата сверхурочных часов',
			style: 'position:absolute;left:32px;top:129px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СдельныйНаряд3',
			text: 'Сдельный наряд',
			style: 'position:absolute;left:32px;top:146px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РегистрацияПростоевРаботниковОрганизаций3',
			text: 'Регистрация простоев',
			style: 'position:absolute;left:32px;top:163px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасчетПриУвольненииРаботникаОрганизаций3',
			text: 'Расчет при увольнении',
			style: 'position:absolute;left:32px;top:180px;width:177px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗначенияПоказателейСхемМотивации2',
			text: 'Показатели для расчета зарплаты',
			style: 'position:absolute;left:2px;top:204px;width:207px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации',
			text: 'Ввод постоянного начисления или удержания',
			style: 'position:absolute;left:32px;top:236px;width:177px;height:33px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:486px;top:48px;width:206px;height:213px;',
			height: 213,width: 206,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'ДокументыПоВыплатеЗарплаты',
			text: 'Журнал выплаты зарплаты',
			style: 'position:absolute;left:0px;top:0px;width:179px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗарплатаКВыплате4',
			text: 'Зарплата к выплате',
			style: 'position:absolute;left:32px;top:43px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПлатежноеПоручениеИсходящее1',
			text: 'Платежное поручение исходящее',
			style: 'position:absolute;left:32px;top:61px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасходныйКассовыйОрдер1',
			text: 'Расходный кассовый ордер',
			style: 'position:absolute;left:32px;top:78px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПриходныйКассовыйОрдер4',
			text: 'Возврат сотрудником долга по зарплате (ПКО)',
			style: 'position:absolute;left:32px;top:180px;width:174px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СписаниеДепонентовВДоходыОрганизаций4',
			text: 'Выплата (списание) депонентов',
			style: 'position:absolute;left:32px;top:132px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПереносЗадолженностиРаботниковОрганизаций4',
			text: 'Перенос задолженности',
			style: 'position:absolute;left:32px;top:114px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДепонированиеОрганизаций1',
			text: 'Депонирование',
			style: 'position:absolute;left:32px;top:96px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПлатежныйОрдерСписаниеДенежныхСредств1',
			text: 'Выписка из банка на перечисление зарплаты',
			style: 'position:absolute;left:32px;top:147px;width:174px;height:33px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
					items:
					[
		{
			xtype: 'label',
			name: 'ДокументыПоВыплатеЗарплатыОрганизаций4',
			text: 'Журнал выплаты зарплаты',
			style: 'position:absolute;left:0px;top:0px;width:179px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗарплатаКВыплатеОрганизаций3',
			text: 'Зарплата к выплате',
			style: 'position:absolute;left:32px;top:43px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПлатежноеПоручениеИсходящее',
			text: 'Платежное поручение исходящее',
			style: 'position:absolute;left:32px;top:61px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасходныйКассовыйОрдер',
			text: 'Расходный кассовый ордер',
			style: 'position:absolute;left:32px;top:78px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПриходныйКассовыйОрдер3',
			text: 'Возврат сотрудником долга по зарплате (ПКО)',
			style: 'position:absolute;left:32px;top:178px;width:174px;height:33px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СписаниеДепонентовВДоходыОрганизаций3',
			text: 'Выплата (списание) депонентов',
			style: 'position:absolute;left:32px;top:130px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПереносЗадолженностиРаботниковОрганизаций3',
			text: 'Перенос задолженности',
			style: 'position:absolute;left:32px;top:112px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДепонированиеОрганизаций',
			text: 'Депонирование',
			style: 'position:absolute;left:32px;top:95px;width:174px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПлатежныйОрдерСписаниеДенежныхСредств',
			text: 'Выписка из банка на перечисление зарплаты',
			style: 'position:absolute;left:32px;top:145px;width:174px;height:33px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Сторнирование',
			text: 'Сторнирование',
			style: 'position:absolute;left:305px;top:298px;width:164px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СправкаДругогоСтрахователяОЗаработке1',
			text: 'Справки других страхователей',
			style: 'position:absolute;left:202px;top:480px;width:163px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗапросыВПФРиФСС2',
			text: 'Запросы в ПФР и ФСС',
			style: 'position:absolute;left:202px;top:498px;width:163px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РеестрыПособийФСС3',
			text: 'Реестры (пилотный проект ФСС)',
			style: 'position:absolute;left:202px;top:514px;width:170px;height:15px;text-align:left;',
		},
					]
				},
				{
					title:'Персонифицированный учет',
					items:
					[
		{
			xtype: 'label',
			name: 'РегламентированныйПроизводственныйКалендарь1',
			text: 'Производственный календарь',
			style: 'position:absolute;left:218px;top:90px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчетностьВФонды',
			text: 'Персонифицированный учет',
			style: 'position:absolute;left:56px;top:0px;width:346px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'ФормаВводаДанныхСЗВ46',
			text: 'Ввод данных для форм СЗВ',
			style: 'position:absolute;left:425px;top:175px;width:199px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПередачаСЗВ4вПФР6',
			text: 'Опись сведений АДВ-6-2',
			style: 'position:absolute;left:88px;top:166px;width:200px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СведенияОТрудовомСтажеИЗаработкеСЗВ46',
			text: 'Пачки СЗВ-6 (Сведения о страховом стаже и взносах)',
			style: 'position:absolute;left:88px;top:183px;width:285px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'АнкетаЗастрахованногоЛица6',
			text: 'Анкета застрахованного лица (АДВ-1)',
			style: 'position:absolute;left:88px;top:132px;width:200px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства6',
			text: 'Заявление об обмене (АДВ-2, АДВ-3)',
			style: 'position:absolute;left:88px;top:149px;width:200px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВидыОбщественноПолезнойДеятельности6',
			text: 'Виды общественно полезной деятельности',
			style: 'position:absolute;left:328px;top:474px;width:225px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОснованияИсчисляемогоТрудовогоСтажа6',
			text: 'Основания исчисляемого трудового стажа',
			style: 'position:absolute;left:56px;top:457px;width:225px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОсобыеУсловияТруда6',
			text: 'Особые условия труда',
			style: 'position:absolute;left:56px;top:491px;width:216px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОснованияВыслугиЛет6',
			text: 'Основания выслуги лет',
			style: 'position:absolute;left:56px;top:474px;width:216px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ТерриториальныеУсловия6',
			text: 'Территориальные условия',
			style: 'position:absolute;left:328px;top:457px;width:210px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения6',
			text: 'Профессии и должности льготного пенсионного обеспечения',
			style: 'position:absolute;left:328px;top:491px;width:323px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчеты9',
			text: 'Отчеты',
			style: 'position:absolute;left:56px;top:298px;width:150px;height:48px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:292px;width:684px;height:6px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмТакже15',
			text: 'См. также',
			style: 'position:absolute;left:56px;top:425px;width:177px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'СтатистикаКадровОрганизации3',
			text: 'Статистические данные',
			style: 'position:absolute;left:56px;top:363px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СпискиРаботниковОрганизаций3',
			text: 'Списки сотрудников',
			style: 'position:absolute;left:56px;top:346px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПерсонифицированныйУчетПФР1',
			text: 'Журнал документов персонифицированного учета',
			style: 'position:absolute;left:56px;top:90px;width:195px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК7',
			text: 'Сведения о трудовом стаже (СЗВ-К)',
			style: 'position:absolute;left:88px;top:268px;width:200px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПередачаДСВвПФР1',
			text: 'Передача заявлений ДСВ-1 в ПФР',
			style: 'position:absolute;left:88px;top:234px;width:200px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПодготовкаДанныхПФР20101',
			text: 'Подготовка данных для ПФР',
			style: 'position:absolute;left:56px;top:48px;width:195px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РеестрДСВ31',
			text: 'Реестры по форме ДСВ-3',
			style: 'position:absolute;left:88px;top:251px;width:200px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗаявлениеДСВ11',
			text: 'Заявление о добровольном вступлении в правоотношения (ДСВ-1)',
			style: 'position:absolute;left:425px;top:132px;width:199px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОсновнаяОрганизация',
			text: '',
			style: 'position:absolute;left:218px;top:0px;width:275px;height:42px;',
		},
		{
			xtype: 'label',
			name: 'СведенияОВзносахИСтраховомСтажеСПВ11',
			text: 'Пачки СПВ-1 (пенсионные формы)',
			style: 'position:absolute;left:88px;top:217px;width:200px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СведенияОНачисленномЗаработкеСЗВ631',
			text: 'Пачки СЗВ-6-3 (Сведения о начисленном заработке)',
			style: 'position:absolute;left:88px;top:200px;width:284px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Налоги',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНалоги',
			text: 'Налоги и взносы',
			style: 'position:absolute;left:56px;top:0px;width:182px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчеты5',
			text: 'Отчеты',
			style: 'position:absolute;left:56px;top:318px;width:162px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'РасчетСтраховыхВзносов5',
			text: 'Журнал расчета страховых взносов в ПФР, ФОМС и ФСС',
			style: 'position:absolute;left:56px;top:48px;width:196px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НДФЛВозвратНалога5',
			text: 'Возврат НДФЛ',
			style: 'position:absolute;left:88px;top:166px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НДФЛПерерасчет5',
			text: 'Перерасчет НДФЛ',
			style: 'position:absolute;left:88px;top:183px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РегистрНалоговогоУчетаПоНДФЛ',
			text: 'Регистр налогового учета по налогу на доходы физических лиц',
			style: 'position:absolute;left:340px;top:90px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'АнализНачисленныхНалоговИВзносов5',
			text: 'Анализ начисленных налогов и взносов',
			style: 'position:absolute;left:56px;top:366px;width:211px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КарточкаУчетаПоСтраховымВзносам5',
			text: 'Карточка по страховым взносам',
			style: 'position:absolute;left:340px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДоходыНДФЛ5',
			text: 'Коды доходов НДФЛ',
			style: 'position:absolute;left:56px;top:457px;width:214px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВычетыНДФЛ5',
			text: 'Вычеты по НДФЛ',
			style: 'position:absolute;left:56px;top:474px;width:214px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДоходыПоСтраховымВзносам5',
			text: 'Способы учета доходов при исчислении страховых взносов',
			style: 'position:absolute;left:56px;top:491px;width:317px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УчетНДФЛиЕСН1',
			text: 'Журнал документов учета НДФЛ, страховых взносов в ПФР, ФСС, ФОМС',
			style: 'position:absolute;left:56px;top:90px;width:253px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НДФЛПодтверждениеПраваНаИмущественныйВычет1',
			text: 'Подтверждение прав на имущественный вычет',
			style: 'position:absolute;left:88px;top:200px;width:247px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмТакже12',
			text: 'См. также',
			style: 'position:absolute;left:56px;top:425px;width:162px;height:32px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:312px;width:684px;height:6px;',
		},
		{
			xtype: 'label',
			name: 'АрхивДанныхРегламентированнойОтчетности7',
			text: 'Архив регламентированной отчетности',
			style: 'position:absolute;left:394px;top:457px;width:213px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОбщиеОбъектыРегламентированнойОтчетности',
			text: 'Регламентированные отчеты',
			style: 'position:absolute;left:500px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РегламентированнаяФормаСправкаПоДСВ5',
			text: 'Справка по ДСВ',
			style: 'position:absolute;left:500px;top:90px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УстановитьОсновнуюОрганизацию',
			text: 'Установить основную организацию',
			style: 'position:absolute;left:493px;top:0px;width:186px;height:40px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РеестрПолучателейСтраховогоОбеспечения5',
			text: 'Реестр получателей страхового обеспечения',
			style: 'position:absolute;left:56px;top:389px;width:238px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РасчетыПоСтраховымВзносам',
			text: 'Расчеты по страховым взносам',
			style: 'position:absolute;left:89px;top:132px;width:186px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СправкаОЗаработкеДляРасчетаПособий6',
			text: 'Справка о заработке для расчета пособий',
			style: 'position:absolute;left:500px;top:132px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СправкаПоНДФЛВНалоговыйОрган5',
			text: 'Справка 2-НДФЛ для передачи в ИФНС',
			style: 'position:absolute;left:88px;top:265px;width:212px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СправкаПоНДФЛСотруднику6',
			text: 'Справка о доходах (2-НДФЛ) для сотрудников',
			style: 'position:absolute;left:88px;top:282px;width:247px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПеречислениеНДФЛвБюджет',
			text: 'Перечисление НДФЛ в бюджет РФ',
			style: 'position:absolute;left:89px;top:149px;width:189px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПодготовкаДанныхПоНДФЛ',
			text: 'Подготовка данных по НДФЛ',
			style: 'position:absolute;left:56px;top:219px;width:195px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РедактированиеВычетовНаДетей20111',
			text: 'Редактирование вычетов на детей',
			style: 'position:absolute;left:500px;top:203px;width:160px;height:58px;text-align:left;',
		},
					]
				},
				{
					title:'Бухучет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьБухгалтерскийУчет',
			text: 'Бухгалтерский учет',
			style: 'position:absolute;left:57px;top:0px;width:245px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'ВводСведенийОРеглУчетеПлановыхНачисленийРаботниковОрганизаций4',
			text: 'Постоянные сведения о бухучете зарплаты',
			style: 'position:absolute;left:56px;top:134px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации1',
			text: 'Ежемесячные сведения о бухучете зарплаты',
			style: 'position:absolute;left:56px;top:176px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СтатьиЗатрат',
			text: 'Статьи затрат',
			style: 'position:absolute;left:285px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВидыСубконтоХозрасчетные',
			text: 'Виды субконто',
			style: 'position:absolute;left:241px;top:457px;width:120px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Контрагенты4',
			text: 'Контрагенты',
			style: 'position:absolute;left:39px;top:457px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СводНачисленнойЗарплатыОрганизаций4',
			text: 'Свод начисленной зарплаты',
			style: 'position:absolute;left:56px;top:347px;width:243px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Банки4',
			text: 'Банки',
			style: 'position:absolute;left:56px;top:491px;width:133px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОтражениеЗарплатыВРеглУчете1',
			text: 'Отражение зарплаты в бухучете',
			style: 'position:absolute;left:56px;top:48px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмТакже11',
			text: 'См. также',
			style: 'position:absolute;left:56px;top:425px;width:162px;height:32px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:292px;width:682px;height:6px;',
		},
		{
			xtype: 'label',
			name: 'НоменклатурныеГруппы',
			text: 'Номенклатурные группы',
			style: 'position:absolute;left:56px;top:474px;width:133px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СпособыОтраженияЗарплатыВРеглУчете',
			text: 'Способы отражения зарплаты в бухучете',
			style: 'position:absolute;left:285px;top:90px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УчетОсновногоЗаработкаРаботниковОрганизацииВРегламентированномУчете',
			text: 'Бухучет основного заработка сотрудников',
			style: 'position:absolute;left:56px;top:92px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СправкаРасчетОценочныеОбязательства',
			text: 'Справка-расчет оценочных обязательств',
			style: 'position:absolute;left:56px;top:364px;width:243px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Учет зарплаты',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтчеты12',
			text: 'Отчеты',
			style: 'position:absolute;left:56px;top:298px;width:243px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'ВводСведенийОРеглУчетеПлановыхНачисленийРаботниковОрганизаций5',
			text: 'Постоянные сведения о бухучете зарплаты',
			style: 'position:absolute;left:56px;top:91px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации2',
			text: 'Ежемесячные сведения о бухучете зарплаты',
			style: 'position:absolute;left:56px;top:133px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВидыСубконтоХозрасчетные1',
			text: 'Виды субконто',
			style: 'position:absolute;left:245px;top:466px;width:120px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Контрагенты5',
			text: 'Контрагенты',
			style: 'position:absolute;left:39px;top:466px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СводНачисленнойЗарплатыОрганизаций8',
			text: 'Свод начисленной зарплаты организаций',
			style: 'position:absolute;left:56px;top:347px;width:243px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Банки5',
			text: 'Банки',
			style: 'position:absolute;left:56px;top:500px;width:133px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОтражениеЗарплатыВРеглУчете2',
			text: 'Отражение зарплаты в бухучете',
			style: 'position:absolute;left:56px;top:49px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмТакже18',
			text: 'См. также',
			style: 'position:absolute;left:56px;top:425px;width:167px;height:32px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:6px;top:292px;width:688px;height:6px;',
		},
		{
			xtype: 'label',
			name: 'Субконто2',
			text: 'Субконто',
			style: 'position:absolute;left:245px;top:483px;width:120px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НоменклатурныеГруппы1',
			text: 'Номенклатурные группы',
			style: 'position:absolute;left:56px;top:483px;width:133px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СпособыОтраженияЗарплатыВРеглУчете1',
			text: 'Способы отражения зарплаты в регл. учете',
			style: 'position:absolute;left:390px;top:466px;width:225px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СводНачисленнойЗарплаты7',
			text: 'Свод начисленной зарплаты компании',
			style: 'position:absolute;left:316px;top:347px;width:243px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СпособыОтраженияЗарплатыВУпрУчете1',
			text: 'Способы отражения зарплаты в управленческом учете ',
			style: 'position:absolute;left:390px;top:483px;width:304px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОбъектыСтроительства1',
			text: 'Объекты строительства',
			style: 'position:absolute;left:245px;top:501px;width:150px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьУчетЗарплаты1',
			text: 'Учет зарплаты',
			style: 'position:absolute;left:57px;top:0px;width:245px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'ВводРаспределенияЗаработкаРаботников2',
			text: 'Ежемесячные сведения о распределении заработка сотрудников',
			style: 'position:absolute;left:263px;top:91px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОтражениеЗарплатыВУпрУчете2',
			text: 'Отражение зарплаты в управленческом учете',
			style: 'position:absolute;left:263px;top:49px;width:162px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УчетЗаработкаРаботников',
			text: 'Учет заработка сотрудников',
			style: 'position:absolute;left:295px;top:162px;width:154px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОтражениеВУчетеБухгалтерскихРасчетовСПерсоналом',
			text: 'Отражение в учете расчетов с персоналом',
			style: 'position:absolute;left:295px;top:181px;width:148px;height:37px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СтатьиЗатрат2',
			text: 'Статьи затрат',
			style: 'position:absolute;left:473px;top:49px;width:150px;height:42px;text-align:left;',
		},
					]
				},
				{
					title:'Персонал',
					items:
					[
		{
			xtype: 'label',
			name: 'ЗаявкаНаОбучение7',
			text: 'Заявка на обучение',
			style: 'position:absolute;left:375px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПланированиеОбучения7',
			text: 'Планирование обучения',
			style: 'position:absolute;left:375px;top:90px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'АттестацииРаботников7',
			text: 'Аттестации сотрудников',
			style: 'position:absolute;left:375px;top:216px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'УчебныйПлан7',
			text: 'Учебный план',
			style: 'position:absolute;left:375px;top:132px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Опрос7',
			text: 'Опрос',
			style: 'position:absolute;left:533px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РассылкаАнкет7',
			text: 'Рассылка анкет',
			style: 'position:absolute;left:533px;top:90px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РезультатыАнкетирования7',
			text: 'Результаты анкетирования',
			style: 'position:absolute;left:533px;top:174px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'АнализРезультатовАнкетирования7',
			text: 'Анализ результатов анкетирования',
			style: 'position:absolute;left:245px;top:382px;width:185px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗагрузкаРезультатовАнкетирования7',
			text: 'Загрузка результатов анкетирования',
			style: 'position:absolute;left:533px;top:132px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КурсыОбучения7',
			text: 'Учебные курсы',
			style: 'position:absolute;left:228px;top:457px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НаборПерсонала7',
			text: 'Набор персонала',
			style: 'position:absolute;left:56px;top:132px;width:132px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КадровоеПланирование7',
			text: 'Кадровое планирование',
			style: 'position:absolute;left:56px;top:48px;width:132px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЗаявкиКандидатов7',
			text: 'Кандидаты',
			style: 'position:absolute;left:56px;top:174px;width:132px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РезультатИспытательногоСрока7',
			text: 'Результат испытательного срока',
			style: 'position:absolute;left:198px;top:48px;width:150px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПерсонал',
			text: 'Персонал',
			style: 'position:absolute;left:56px;top:0px;width:142px;height:48px;',
		},
		{
			xtype: 'label',
			name: 'КонтрольОтветовНаРассылку7',
			text: 'Контроль ответов на рассылку',
			style: 'position:absolute;left:245px;top:400px;width:185px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СостояниеКадровогоПлана7',
			text: 'Состояние кадрового плана',
			style: 'position:absolute;left:56px;top:346px;width:157px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИсполнениеКадровогоПлана7',
			text: 'Исполнение кадрового плана',
			style: 'position:absolute;left:56px;top:364px;width:157px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ЭффективностьЗатратНаПривлечение7',
			text: 'Эффективность затрат на привлечение',
			style: 'position:absolute;left:245px;top:346px;width:210px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'КоэффициентТекучестиКадровОрганизаций7',
			text: 'Коэффициент текучести кадров',
			style: 'position:absolute;left:245px;top:364px;width:210px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОценкиКомпетенцийРаботников7',
			text: 'Оценки компетенций сотрудников',
			style: 'position:absolute;left:489px;top:364px;width:185px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПройденныеКурсыОбучения7',
			text: 'Пройденные курсы обучения',
			style: 'position:absolute;left:489px;top:346px;width:184px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОтчетПоЗаявкамКандидатов7',
			text: 'Отчет по кандидатам',
			style: 'position:absolute;left:56px;top:382px;width:157px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмТакже14',
			text: 'См. также',
			style: 'position:absolute;left:56px;top:425px;width:142px;height:32px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:292px;width:682px;height:6px;',
		},
		{
			xtype: 'label',
			name: 'Вакансии1',
			text: 'Вакансии',
			style: 'position:absolute;left:56px;top:90px;width:132px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ФизическиеЛица8',
			text: 'Физические лица',
			style: 'position:absolute;left:38px;top:491px;width:150px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РазвитиеКомпетенций1',
			text: 'Развитие компетенций сотрудников',
			style: 'position:absolute;left:489px;top:382px;width:194px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'МедицинскоеСтрахование',
			text: 'Медицинское страхование',
			style: 'position:absolute;left:56px;top:216px;width:132px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ОценкаЭффективностиКадровойСлужбы',
			text: 'Оценка кадровой службы',
			style: 'position:absolute;left:56px;top:400px;width:157px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СценарииПланирования',
			text: 'Сценарии планирования затрат',
			style: 'position:absolute;left:230px;top:174px;width:139px;height:42px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Должности9',
			text: 'Описания должностей для набора персонала',
			style: 'position:absolute;left:245px;top:491px;width:233px;height:17px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:56px;top:457px;width:150px;height:17px;',
			height: 17,width: 150,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Упр',
					items:
					[
		{
			xtype: 'label',
			name: 'Подразделения7',
			text: 'Подразделения',
			style: 'position:absolute;left:0px;top:0px;width:138px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПодразделенияОрганизаций5',
			text: 'Подразделения',
			style: 'position:absolute;left:0px;top:0px;width:137px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Регл',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:335px;top:0px;width:78px;height:39px;',
			height: 39,width: 78,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Регл',
					items:
					[
					]
				},
				{
					title:'Упр',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:700px;top:38px;width:218px;height:535px;',
			height: 535,width: 218,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:206px;height:55px;',
			height: 55,width: 206,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатьиНаСайтеИТС',
			text: 'Статьи на сайте ИТС',
			style: 'position:absolute;left:6px;top:6px;width:194px;height:18px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтрокаПоискаИТС',
			style: 'position:absolute;left:6px;top:28px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПоискНаИТСПерсонал',
			text: '',
			style: 'position:absolute;left:177px;top:28px;width:23px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:66px;width:206px;height:463px;',
			height: 463,width: 206,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:194px;height:451px;',
			height: 451,width: 194,
			columns:
			[
				{
					text:'Представление ссылки',
					width:'100',
					dataIndex:'ПредставлениеСсылки',
					flex:1,
				},
				{
					text:'Гипер ссылка',
					width:'100',
					dataIndex:'ГиперСсылка',
					flex:1,
				},
				{
					text:'Порядок',
					width:'100',
					dataIndex:'Порядок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочийСтол/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПредставлениеСсылки',
					},
					{
						name:'ГиперСсылка',
					},
					{
						name:'Порядок',
					},
				]
			},
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
			xtype: 'checkbox',
			boxLabel: 'Показывать статьи на сайте ИТС',
			style: 'position:absolute;left:802px;top:5px;width:116px;height:33px;',
		},
	],
	dockedItems:
	[
	]
});