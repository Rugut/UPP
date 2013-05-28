Ext.define('Отчеты.РегламентированныйОтчетАлкоПриложение6.ФормаОтчета2006Кв3',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:449px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Декларация об объемах поставки этилового спирта, алкогольной и спиртосодержащей продукции',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:800px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:80px;width:784px;height:312px;',
			height: 312,width: 784,
			items:
			[
				{
					title:'Титульный',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуТитульный',
			text: 'Добавить',
			style: 'position:absolute;left:525px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуТитульный',
			text: 'Удалить',
			style: 'position:absolute;left:611px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаТитульный',
			text: '',
			style: 'position:absolute;left:396px;top:264px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаТитульный',
			text: '',
			style: 'position:absolute;left:485px;top:264px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуТитульный',
			text: 'Перейти',
			style: 'position:absolute;left:696px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:239px;width:770px;height:21px;',
			height: 21,width: 770,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:101px;top:2px;width:669px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Физ. лица',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуФизЛица',
			text: 'Добавить',
			style: 'position:absolute;left:525px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:611px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:396px;top:264px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:485px;top:264px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:696px;top:264px;width:80px;height:19px;',
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
			style: 'position:absolute;left:611px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиДекларация',
			text: 'Удалить',
			style: 'position:absolute;left:696px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Возвраты',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:246px;top:264px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:473px;top:265px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:246px;top:264px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиВозвраты',
			text: 'Добавить',
			style: 'position:absolute;left:611px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиВозвраты',
			text: 'Удалить',
			style: 'position:absolute;left:696px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:473px;top:265px;width:136px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:715px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:784px;height:47px;',
			height: 47,width: 784,
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
			format: 'd.m.Y',
			name: 'ПолеВводаДатаСдачи',
			width: 80,
			height: 19,
			style: 'position:absolute;left:103px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:392px;top:23px;width:252px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:199px;top:23px;width:116px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:331px;top:23px;width:49px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При печати группировать по кодам продукции',
			style: 'position:absolute;left:0px;top:0px;width:257px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:392px;width:784px;height:24px;',
			height: 24,width: 784,
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
			width: 521,
			height: 19,
			style: 'position:absolute;left:263px;top:5px;width:521px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Статус',
			width: 119,
			height: 19,
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
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить',
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
	]
});