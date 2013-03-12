Ext.define('Обработки.КурсыВалютРБК.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:492px;height:344px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка курсов валют с РБК',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период загрузки с:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачДата',
			style: 'position:absolute;left:114px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по:',
			style: 'position:absolute;left:196px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонДата',
			style: 'position:absolute;left:214px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:476px;height:24px;',
			items:
			[
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Очистить',
				},
				{
					text:'&Изменить',
				},
				'-',
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Заполнить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Загрузить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:476px;height:220px;',
			height: 220,width: 476,
			columns:
			[
				{
					text:'Валюта',
					width:'120',
				},
				{
					text:'Код валюты',
					width:'80',
				},
				{
					text:'Дата курса',
					width:'80',
				},
				{
					text:'Курс',
					width:'80',
				},
				{
					text:'Кратность',
					width:'80',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:296px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстЗавершения',
			text: 'Загрузка курсов валют завершена',
			style: 'position:absolute;left:8px;top:321px;width:476px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:492px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
			]
		},
	]
});