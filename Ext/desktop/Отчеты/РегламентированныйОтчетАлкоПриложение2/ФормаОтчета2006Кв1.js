Ext.define('Отчеты.РегламентированныйОтчетАлкоПриложение2.ФормаОтчета2006Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Декларация об объёмах использования этилового спирта',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:654px;height:312px;',
			height: 312,width: 654,
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
			style: 'position:absolute;left:394px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:249px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:353px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Декларация',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиДекларация',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиДекларация',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:654px;height:48px;',
			height: 48,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:86px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:0px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:199px;top:25px;width:116px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:331px;top:25px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:393px;width:654px;height:24px;',
			height: 24,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:5px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:5px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:5px;width:119px;height:19px;',
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
			style: 'position:absolute;left:0px;top:425px;width:670px;height:25px;',
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