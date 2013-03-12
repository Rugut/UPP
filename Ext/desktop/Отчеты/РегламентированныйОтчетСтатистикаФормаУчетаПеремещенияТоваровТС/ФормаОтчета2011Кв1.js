Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаОтчета2011Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статистика: Форма учета перемещения товаров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				{
					text:'Поиск',
				},
				{
					text:'Проверить выгрузку',
				},
				'-',
				'-',
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Очистить',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Расшифровать',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Расширить поле бланка',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:716px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:630px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:365px;width:700px;height:22px;',
			height: 22,width: 700,
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
			style: 'position:absolute;left:183px;top:3px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:3px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:3px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:313px;width:700px;height:24px;',
			height: 24,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиФормаОтчета',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийФормаОтчета',
			style: 'position:absolute;left:353px;top:5px;width:347px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:34px;',
			height: 34,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:89px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: '',
			style: 'position:absolute;left:470px;top:6px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись',
			text: 'Организация:',
			style: 'position:absolute;left:387px;top:6px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:319px;top:6px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:9px;top:343px;width:246px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиФормаОтчета',
			text: 'Добавить',
			style: 'position:absolute;left:542px;top:343px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиФормаОтчета',
			text: 'Удалить',
			style: 'position:absolute;left:628px;top:343px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДопСтроки',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:408px;top:343px;width:132px;height:19px;',
		},
	]
});