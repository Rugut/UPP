Ext.define('Обработки.УниверсальныйПоискОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:639px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск объектов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:33px;width:627px;height:407px;',
			height: 407,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Основная страница',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнформацияДляПоиска',
			style: 'position:absolute;left:84px;top:24px;width:459px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтрокаПоиска',
			text: 'Строка поиска:',
			style: 'position:absolute;left:0px;top:24px;width:83px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:116px;width:627px;height:89px;',
			height: 89,width: 627,
			columns:
			[
				{
					text:'Имя объекта',
					width:'135',
				},
				{
					text:'Области поиска',
					width:'183',
				},
				{
					text:'Поля поиска',
					width:'215',
				},
				{
					text:'Дополнительные ограничения',
					width:'201',
				},
				{
					text:'Таблица поиска',
					width:'40',
				},
				{
					text:'Поле связки',
					width:'115',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:92px;width:627px;height:24px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Дополнительно...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПринципыОтбора',
			text: 'Вхождение',
			style: 'position:absolute;left:0px;top:68px;width:83px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:210px;width:627px;height:197px;',
			height: 197,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница отображения результатов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:627px;height:152px;',
			height: 152,width: 627,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:19px;width:627px;height:24px;',
			items:
			[
				{
					text:'Раскрыть',
				},
				{
					text:'Свернуть',
				},
				'-',
				{
					text:'Показать детально',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТипОбъектовПоиска',
			text: 'Тип объектов:',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Детальное отображение результатов',
			style: 'position:absolute;left:321px;top:68px;width:212px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Найти',
			text: 'Найти',
			style: 'position:absolute;left:547px;top:24px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			items:
			[
				{
					text:'Загрузить настройку поиска',
				},
				{
					text:'Сохранить настройки поиска',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:448px;width:639px;height:25px;',
			height: 25,width: 639,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
					]
				},
			]
		},
	]
});