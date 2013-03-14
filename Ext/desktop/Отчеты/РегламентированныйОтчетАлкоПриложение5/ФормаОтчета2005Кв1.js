Ext.define('Отчеты.РегламентированныйОтчетАлкоПриложение5.ФормаОтчета2005Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оборот спирта и алкогольной продукции',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Очистить',
				},
				'-',
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
			style: 'position:absolute;left:0px;top:409px;width:670px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:8px;top:80px;width:654px;height:298px;',
			height: 298,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Раздел 1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:249px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1',
			text: 'Удалить',
			style: 'position:absolute;left:483px;top:249px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:118px;top:249px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1',
			text: '',
			style: 'position:absolute;left:268px;top:249px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел1',
			text: '999 из 999',
			style: 'position:absolute;left:290px;top:249px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1',
			text: '',
			style: 'position:absolute;left:372px;top:249px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1',
			text: 'Перейти',
			style: 'position:absolute;left:568px;top:249px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел1',
			text: 'Добавить',
			style: 'position:absolute;left:483px;top:273px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел1',
			text: 'Удалить',
			style: 'position:absolute;left:568px;top:273px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:349px;top:273px;width:132px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:654px;height:47px;',
			height: 47,width: 654,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:0px;top:0px;width:241px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить выбор значений',
			style: 'position:absolute;left:247px;top:0px;width:162px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:131px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:378px;width:654px;height:25px;',
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
	]
});