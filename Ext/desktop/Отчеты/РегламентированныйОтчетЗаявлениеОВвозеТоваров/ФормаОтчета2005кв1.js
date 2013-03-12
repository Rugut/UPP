Ext.define('Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаОтчета2005кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:447px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление о ввозе товаров и уплате косвенных налогов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Поиск',
				},
				'-',
				'-',
				'-',
				{
					text:'Очистить',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Справка',
				},
				{
					text:'Расширить поле бланка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:422px;width:670px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
					title:'Заявление',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЗаявление',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:261px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЗаявление',
			text: 'Удалить',
			style: 'position:absolute;left:483px;top:261px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЗаявление',
			text: '',
			style: 'position:absolute;left:268px;top:261px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЗаявление',
			text: '',
			style: 'position:absolute;left:372px;top:261px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЗаявление',
			text: 'Перейти',
			style: 'position:absolute;left:568px;top:261px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиЗаявление',
			text: 'Добавить',
			style: 'position:absolute;left:483px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиЗаявление',
			text: 'Удалить',
			style: 'position:absolute;left:568px;top:285px;width:80px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:554px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:391px;width:654px;height:25px;',
			height: 25,width: 654,
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
			style: 'position:absolute;left:183px;top:6px;width:80px;height:19px;',
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
	]
});