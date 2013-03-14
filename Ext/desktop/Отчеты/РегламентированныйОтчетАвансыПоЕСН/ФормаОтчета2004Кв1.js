Ext.define('Отчеты.РегламентированныйОтчетАвансыПоЕСН.ФормаОтчета2004Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:460px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Авансы по ЕСН',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
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
			style: 'position:absolute;left:0px;top:435px;width:780px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:764px;height:346px;',
			height: 346,width: 764,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Физ. лица',
				},
				{
					title:'Раздел 1',
				},
				{
					title:'Раздел 2',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:234px;top:302px;width:144px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Дополнительные строки',
			style: 'position:absolute;left:462px;top:303px;width:132px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел2',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2.1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_1',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2_1',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2.2',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел3',
			text: '999 из 999',
			style: 'position:absolute;left:417px;top:302px;width:64px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 2.3',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_3',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2_3',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел3',
			text: 'Добавить',
			style: 'position:absolute;left:522px;top:302px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел3',
			text: 'Удалить',
			style: 'position:absolute;left:602px;top:302px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел3',
			text: '',
			style: 'position:absolute;left:391px;top:302px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел3',
			text: '',
			style: 'position:absolute;left:487px;top:302px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел3',
			text: 'Перейти',
			style: 'position:absolute;left:686px;top:302px;width:76px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:274px;width:762px;height:24px;',
			height: 24,width: 762,
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел3',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел3',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 3.1',
				},
				{
					title:'Раздел 3.2',
				},
				{
					title:'Раздел 3.3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложениеА',
			text: 'Добавить',
			style: 'position:absolute;left:598px;top:303px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложениеА',
			text: 'Удалить',
			style: 'position:absolute;left:682px;top:303px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:691px;top:6px;width:82px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:50px;',
			height: 50,width: 764,
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
			style: 'position:absolute;left:273px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:116px;top:24px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЧисленностьМ1',
			style: 'position:absolute;left:457px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЧисленностьМ2',
			style: 'position:absolute;left:582px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЧисленностьМ3',
			style: 'position:absolute;left:704px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:446px;top:0px;width:49px;height:19px;',
		},
					]
				},
			]
		},
	]
});