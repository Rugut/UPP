Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаСпискаФайловИИзображений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:651px;height:254px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Хранилище дополнительной информации',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:10px;width:635px;height:236px;',
			height: 236,width: 635,
			items:
			[
				{
					title:'Изображения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:435px;height:180px;',
			height: 180,width: 435,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Описание изображения',
					width:'357',
				},
				{
					text:'Объект',
					width:'164',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:621px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Основное &изображение',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Обновить',
				},
				'-',
				'-',
				{
					text:'Основное &изображение',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Обновить',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Отключить отбор',
				},
			]
		},
					]
				},
				{
					title:'Файлы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:621px;height:180px;',
			height: 180,width: 621,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Имя файла',
					width:'198',
				},
				{
					text:'Наименование',
					width:'245',
				},
				{
					text:'Объект',
					width:'203',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:621px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'&Добавить',
				},
				'-',
				'-',
				{
					text:'Сохранить на диске',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Обновить',
				},
				{
					text:'Открыть',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'',
				},
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Отключить отбор',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Добавить несколько',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Добавить несколько',
				},
				'-',
				'-',
				'-',
				{
					text:'Отключить отбор',
				},
				{
					text:'',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Открыть',
				},
			]
		},
					]
				},
			]
		},
	]
});