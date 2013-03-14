Ext.define('Отчеты.РегламентированныйОтчетАкцизыПриложение1.ФормаОтчета2004Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:488px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Акцизы (Приложение 1)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:0px;top:463px;width:720px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:704px;height:310px;',
			height: 310,width: 704,
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
			style: 'position:absolute;left:448px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:534px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:153px;top:265px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:303px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницФизЛица',
			text: '999 из 999',
			style: 'position:absolute;left:325px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:407px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1',
			text: 'Добавить',
			style: 'position:absolute;left:448px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1',
			text: 'Удалить',
			style: 'position:absolute;left:534px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:153px;top:265px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1',
			text: '',
			style: 'position:absolute;left:303px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел1',
			text: '999 из 999',
			style: 'position:absolute;left:325px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1',
			text: '',
			style: 'position:absolute;left:407px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1',
			text: 'Перейти',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 2',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2',
			text: 'Добавить',
			style: 'position:absolute;left:534px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2',
			text: 'Удалить',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:391px;top:265px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнитьРаздел2',
			text: 'Заполнить',
			style: 'position:absolute;left:303px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Заполнить по данным разделов 2.1 - 2.4',
			style: 'position:absolute;left:71px;top:265px;width:213px;height:19px;text-align:right;',
		},
					]
				},
				{
					title:'Приложение 1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел2_1',
			text: 'Добавить',
			style: 'position:absolute;left:448px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел2_1',
			text: 'Удалить',
			style: 'position:absolute;left:534px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:153px;top:239px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел2_1',
			text: '',
			style: 'position:absolute;left:303px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел2_1',
			text: '999 из 999',
			style: 'position:absolute;left:325px;top:239px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел2_1',
			text: '',
			style: 'position:absolute;left:407px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел2_1',
			text: 'Перейти',
			style: 'position:absolute;left:620px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_1',
			text: 'Добавить',
			style: 'position:absolute;left:535px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_1',
			text: 'Удалить',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:397px;top:265px;width:132px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Приложение 2',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел2_2',
			text: 'Добавить',
			style: 'position:absolute;left:448px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел2_2',
			text: 'Удалить',
			style: 'position:absolute;left:534px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:153px;top:239px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел2_2',
			text: '',
			style: 'position:absolute;left:303px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел2_2',
			text: '999 из 999',
			style: 'position:absolute;left:325px;top:239px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел2_2',
			text: '',
			style: 'position:absolute;left:407px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел2_2',
			text: 'Перейти',
			style: 'position:absolute;left:620px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_2',
			text: 'Добавить',
			style: 'position:absolute;left:535px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_2',
			text: 'Удалить',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:397px;top:265px;width:132px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Приложение 3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел2_3',
			text: 'Добавить',
			style: 'position:absolute;left:448px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел2_3',
			text: 'Удалить',
			style: 'position:absolute;left:534px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:153px;top:239px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел2_3',
			text: '',
			style: 'position:absolute;left:303px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел2_3',
			text: '999 из 999',
			style: 'position:absolute;left:325px;top:239px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел2_3',
			text: '',
			style: 'position:absolute;left:407px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел2_3',
			text: 'Перейти',
			style: 'position:absolute;left:620px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_3',
			text: 'Добавить',
			style: 'position:absolute;left:535px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_3',
			text: 'Удалить',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:397px;top:265px;width:132px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Приложение 4',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел2_4',
			text: 'Добавить',
			style: 'position:absolute;left:448px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел2_4',
			text: 'Удалить',
			style: 'position:absolute;left:534px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:153px;top:239px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел2_4',
			text: '',
			style: 'position:absolute;left:303px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел2_4',
			text: '999 из 999',
			style: 'position:absolute;left:325px;top:239px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел2_4',
			text: '',
			style: 'position:absolute;left:407px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел2_4',
			text: 'Перейти',
			style: 'position:absolute;left:620px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_4',
			text: 'Добавить',
			style: 'position:absolute;left:535px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_4',
			text: 'Удалить',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:397px;top:265px;width:132px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Приложение 5',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_5',
			text: 'Добавить',
			style: 'position:absolute;left:535px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_5',
			text: 'Удалить',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:397px;top:265px;width:132px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Приложение 6',
				},
				{
					title:'Приложение 7',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел4',
			text: 'Добавить',
			style: 'position:absolute;left:448px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел4',
			text: 'Удалить',
			style: 'position:absolute;left:534px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:153px;top:239px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел4',
			text: '',
			style: 'position:absolute;left:303px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел4',
			text: '999 из 999',
			style: 'position:absolute;left:325px;top:239px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел4',
			text: '',
			style: 'position:absolute;left:407px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел4',
			text: 'Перейти',
			style: 'position:absolute;left:620px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел4',
			text: 'Добавить',
			style: 'position:absolute;left:535px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел4',
			text: 'Удалить',
			style: 'position:absolute;left:620px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:397px;top:265px;width:132px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:638px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:704px;height:48px;',
			height: 48,width: 704,
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
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:170px;top:24px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ввоз товаров из Республики Беларусь',
			style: 'position:absolute;left:421px;top:24px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:393px;top:0px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:432px;width:704px;height:25px;',
			height: 25,width: 704,
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
			style: 'position:absolute;left:263px;top:6px;width:441px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:704px;height:37px;',
			height: 37,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:702px;height:35px;',
			height: 35,width: 702,
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