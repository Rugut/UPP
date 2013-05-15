Ext.define('Отчеты.РегламентированныйОтчетАкцизыПриложение1.ФормаОтчета2006Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:488px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Акцизы (Приложение 1)',
	
	items:
	[
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
					title:'Раздел 1.1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел11',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел11',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:99px;top:265px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел11',
			text: '',
			style: 'position:absolute;left:249px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел11',
			text: '999 из 999',
			style: 'position:absolute;left:271px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел11',
			text: '',
			style: 'position:absolute;left:353px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел11',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 1.2',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел12',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел12',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел12',
			text: '',
			style: 'position:absolute;left:249px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел12',
			text: '',
			style: 'position:absolute;left:353px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел12',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
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
			style: 'position:absolute;left:480px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:337px;top:265px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:99px;top:265px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:99px;top:239px;width:144px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Приложение 1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение1',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение1',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:99px;top:239px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение1',
			text: '',
			style: 'position:absolute;left:249px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницПриложение1',
			text: '999 из 999',
			style: 'position:absolute;left:271px;top:239px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение1',
			text: '',
			style: 'position:absolute;left:353px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение1',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение1',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение1',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:343px;top:265px;width:132px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Приложение 2',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение2',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение2',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:99px;top:239px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение2',
			text: '',
			style: 'position:absolute;left:249px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницПриложение2',
			text: '999 из 999',
			style: 'position:absolute;left:271px;top:239px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение2',
			text: '',
			style: 'position:absolute;left:353px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение2',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение2',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение2',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:343px;top:265px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел12',
			text: '999 из 999',
			style: 'position:absolute;left:271px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницПриложение5',
			text: '999 из 999',
			style: 'position:absolute;left:271px;top:239px;width:80px;height:19px;text-align:center;',
		},
					]
				},
				{
					title:'Приложение 3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение3',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение3',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:99px;top:265px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение3',
			text: '',
			style: 'position:absolute;left:249px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницПриложение3',
			text: '999 из 999',
			style: 'position:absolute;left:271px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение3',
			text: '',
			style: 'position:absolute;left:353px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение3',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:99px;top:239px;width:144px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Приложение 4',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение4',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение4',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:343px;top:265px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение4',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение4',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение4',
			text: '',
			style: 'position:absolute;left:249px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение4',
			text: '',
			style: 'position:absolute;left:353px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение4',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:239px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Приложение 5',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение5',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение5',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение5',
			text: '',
			style: 'position:absolute;left:249px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение5',
			text: '',
			style: 'position:absolute;left:353px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение5',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:239px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение5',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение5',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницПриложение4',
			text: '999 из 999',
			style: 'position:absolute;left:271px;top:239px;width:80px;height:19px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:584px;top:5px;width:78px;height:15px;',
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
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
			style: 'position:absolute;left:428px;top:24px;width:116px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:559px;top:24px;width:49px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:6px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			dock: 'top',
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
			style: 'position:absolute;left:0px;top:463px;width:670px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
});