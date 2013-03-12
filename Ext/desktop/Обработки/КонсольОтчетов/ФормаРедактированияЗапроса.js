Ext.define('Обработки.КонсольОтчетов.ФормаРедактированияЗапроса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:309px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Редактирование запроса',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:388px;height:270px;',
			height: 270,width: 388,
			items:
			[
				{
					title:'Запрос',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя:',
			style: 'position:absolute;left:6px;top:6px;width:29px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:40px;top:6px;width:322px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматическое заполнение настроек',
			style: 'position:absolute;left:6px;top:241px;width:221px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:234px;top:238px;width:128px;height:24px;',
			items:
			[
				{
					text:'Конструктор',
				},
				{
					text:'Проверить запрос',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:356px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Скопировать',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:356px;height:228px;',
			height: 228,width: 356,
			columns:
			[
				{
					text:'Имя параметра',
					width:'122',
				},
				{
					text:'Тип',
					width:'52',
				},
				{
					text:'Значение параметра',
					width:'189',
				},
			]
		},
					]
				},
				{
					title:'Представления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:356px;height:256px;',
			height: 256,width: 356,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Формат',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Вывод отчета',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'в таблицу',
			style: 'position:absolute;left:18px;top:28px;width:115px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'в диаграмму',
			style: 'position:absolute;left:18px;top:52px;width:115px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'в сводную таблицу',
			style: 'position:absolute;left:18px;top:76px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'По умолчанию выводить в:',
			style: 'position:absolute;left:6px;top:132px;width:137px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Отчет расшифровки:',
			style: 'position:absolute;left:6px;top:156px;width:137px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетРасшифровкиРедактор',
			style: 'position:absolute;left:148px;top:156px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'в сводную диаграмму',
			style: 'position:absolute;left:18px;top:100px;width:134px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:285px;width:400px;height:24px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'ОК',
				},
			]
		},
	]
});