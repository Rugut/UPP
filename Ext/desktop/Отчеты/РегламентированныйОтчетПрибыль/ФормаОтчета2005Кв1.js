Ext.define('Отчеты.РегламентированныйОтчетПрибыль.ФормаОтчета2005Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прибыль',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Очистить',
				},
				'-',
				'-',
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Расширить поле бланка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:670px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Физ. лица',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуФизЛица',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:251px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:355px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 1.1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:342px;top:265px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:343px;top:265px;width:136px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Раздел 1.2',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:104px;top:265px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:101px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:265px;width:148px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Раздел 1.3',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел1_4',
			text: '999 из 999',
			style: 'position:absolute;left:288px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1_3',
			text: 'Добавить',
			style: 'position:absolute;left:396px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1_3',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1_3',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1_3',
			text: '',
			style: 'position:absolute;left:370px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1_3',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 1.4',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницЛист02_Прил5а',
			text: '999 из 999',
			style: 'position:absolute;left:272px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницФизЛица',
			text: '999 из 999',
			style: 'position:absolute;left:273px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1_4',
			text: 'Добавить',
			style: 'position:absolute;left:396px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1_4',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1_4',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1_4',
			text: '',
			style: 'position:absolute;left:370px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1_4',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел1_3',
			text: '999 из 999',
			style: 'position:absolute;left:288px;top:265px;width:80px;height:19px;text-align:center;',
		},
					]
				},
				{
					title:'Лист 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:115px;top:241px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:115px;top:241px;width:144px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Прил.1 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил1',
			style: 'position:absolute;left:233px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил1',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Прил.2 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:266px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил2',
			style: 'position:absolute;left:233px;top:266px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил2',
			style: 'position:absolute;left:355px;top:266px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницЛист03_РазделА',
			text: '999 из 999',
			style: 'position:absolute;left:288px;top:241px;width:64px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницЛист04_РазделА',
			text: '999 из 999',
			style: 'position:absolute;left:288px;top:241px;width:64px;height:19px;text-align:center;',
		},
					]
				},
				{
					title:'Прил.4 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил4',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил4',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Прил.5 к Листу 02',
				},
				{
					title:'Прил.5а к Листу 02',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист02_Прил5а',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист02_Прил5а',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист02_Прил5а',
			text: '',
			style: 'position:absolute;left:250px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист02_Прил5а',
			text: '',
			style: 'position:absolute;left:354px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист02_Прил5а',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Прил.6 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил6',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил6',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Прил.7 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил7',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил7',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 03 (Раздел А)',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиЛист03_РазделА',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиЛист03_РазделА',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист03_РазделА',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист03_РазделА',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист03_РазделА',
			text: '',
			style: 'position:absolute;left:265px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист03_РазделА',
			text: '',
			style: 'position:absolute;left:354px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист03_РазделА',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:241px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист 03 (Разделы Б, В)',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:278px;',
			height: 278,width: 640,
			items:
			[
				{
					title:'Решения о распределении доходов',
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:6px;width:626px;height:215px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопРешения',
			text: 'Добавить',
			style: 'position:absolute;left:380px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопРешение',
			text: 'Удалить',
			style: 'position:absolute;left:552px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаИзменитьДопРешение',
			text: 'Изменить',
			style: 'position:absolute;left:466px;top:233px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'По ставке 9%',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист03_РазделыБВ1',
			text: 'Добавить',
			style: 'position:absolute;left:380px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист03_РазделыБВ1',
			text: 'Удалить',
			style: 'position:absolute;left:466px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист03_РазделыБВ1',
			text: '',
			style: 'position:absolute;left:251px;top:233px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист03_РазделыБВ1',
			text: '',
			style: 'position:absolute;left:340px;top:233px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист03_РазделыБВ1',
			text: 'Перейти',
			style: 'position:absolute;left:552px;top:233px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'По ставке 15%',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист03_РазделыБВ2',
			text: 'Добавить',
			style: 'position:absolute;left:380px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист03_РазделыБВ2',
			text: 'Удалить',
			style: 'position:absolute;left:466px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист03_РазделыБВ2',
			text: '',
			style: 'position:absolute;left:251px;top:233px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист03_РазделыБВ2',
			text: '',
			style: 'position:absolute;left:340px;top:233px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист03_РазделыБВ2',
			text: 'Перейти',
			style: 'position:absolute;left:552px;top:233px;width:80px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Лист 04 (Раздел А)',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист04_РазделА',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист04_РазделА',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист04_РазделА',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист04_РазделА',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист04_РазделА',
			text: '',
			style: 'position:absolute;left:265px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист04_РазделА',
			text: '',
			style: 'position:absolute;left:354px;top:241px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист04_РазделА',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:241px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист 04 (Раздел Б)',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист04_РазделБ',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист04_РазделБ',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 05',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист05',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист05',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 06',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист06',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист06',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 07',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист07',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист07',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 08',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист08',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист08',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 09',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:278px;',
			height: 278,width: 640,
			items:
			[
				{
					title:'Пенсионные резервы 9%',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Лист 09. По доходам, полученным от размещения средств пенсионных резервов. Ставка 9%.',
			style: 'position:absolute;left:6px;top:226px;width:626px;height:26px;',
		},
					]
				},
				{
					title:'Пенсионные резервы 15%',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Лист 09. По доходам, полученным от размещения средств пенсионных резервов. Ставка 15%.',
			style: 'position:absolute;left:6px;top:226px;width:626px;height:26px;',
		},
					]
				},
				{
					title:'Пенсионные накопления 9%',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Лист 09. По доходам, от инвестирования средств пенсионных накоплений. Ставка 9%.',
			style: 'position:absolute;left:6px;top:226px;width:626px;height:26px;',
		},
					]
				},
				{
					title:'Пенсионные накопления 15%',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'Лист 09. По доходам, от инвестирования средств пенсионных накоплений. Ставка 15%.',
			style: 'position:absolute;left:6px;top:226px;width:626px;height:26px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Лист 10',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиЛист10',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиЛист10',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист 11',
				},
				{
					title:'Прил.1 к Листу 11',
				},
				{
					title:'Прил.2 к Листу 11',
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:584px;top:6px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:654px;height:48px;',
			height: 48,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:170px;top:24px;width:246px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:430px;top:24px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:561px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:432px;width:654px;height:25px;',
			height: 25,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:6px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:6px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:6px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:654px;height:37px;',
			height: 37,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:652px;height:35px;',
			height: 35,width: 652,
			tabBar:{hidden:true},
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
			]
		},
	]
});