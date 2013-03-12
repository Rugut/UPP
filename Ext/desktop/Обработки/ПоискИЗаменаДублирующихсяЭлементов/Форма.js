Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:693px;height:362px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск дублирующихся элементов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:693px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:677px;height:318px;',
			height: 318,width: 677,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:663px;height:261px;',
			height: 261,width: 663,
			columns:
			[
				{
					text:'Имя настройки',
					width:'256',
				},
				{
					text:'Тип сравнения',
					width:'148',
				},
				{
					text:'Значение настройки',
					width:'236',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:663px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Найти элементы',
				},
				'-',
				{
					text:'&Удалить',
				},
			]
		},
					]
				},
				{
					title:'Результаты поиска',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:663px;height:257px;',
			height: 257,width: 663,
			columns:
			[
				{
					text:'Ссылка',
					width:'320',
				},
				{
					text:'Правильный',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:5px;width:663px;height:24px;',
			items:
			[
				{
					text:'Следующая группа',
				},
				{
					text:'Предыдущая группа',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Поиск зависимых элементов',
				},
				'-',
				{
					text:'Поиск и замена во всех группах',
				},
				{
					text:'Автоопределение правильных элементов',
				},
				'-',
				{
					text:'Поиск ссылок',
				},
				{
					text:'Указать как правильный',
				},
				{
					text:'&Удалить',
				},
				'-',
				'-',
				'-',
			]
		},
					]
				},
				{
					title:'Зависимые элементы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:663px;height:24px;',
			items:
			[
				{
					text:'Выполнить замену',
				},
				'-',
				{
					text:'Удалить элементы',
				},
				{
					text:'Поиск ссылок',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:663px;height:108px;',
			height: 108,width: 663,
			columns:
			[
				{
					text:'Не правильный',
					width:'179',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Правильный',
					width:'226',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:153px;width:663px;height:134px;',
			height: 134,width: 663,
			columns:
			[
			]
		},
					]
				},
				{
					title:'Замена',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:663px;height:259px;',
			height: 259,width: 663,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:237px;height:24px;',
			items:
			[
				{
					text:'Удалить элементы',
				},
				{
					text:'Выполнить замену',
				},
				'-',
			]
		},
					]
				},
			]
		},
	]
});