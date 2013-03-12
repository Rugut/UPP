Ext.define('Обработки.АдминистрированиеПользователей.ФормаГруппыПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:739px;height:386px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:217px;height:322px;',
			height: 322,width: 217,
			columns:
			[
				{
					text:'Наименование',
					width:'185',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:739px;height:25px;',
			items:
			[
				'-',
				{
					text:'Переместить в группу',
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Настройка доступа',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'',
				},
				{
					text:'Иерархический просмотр',
				},
				'-',
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Уровень вверх',
				},
				{
					text:'Уровень вниз',
				},
				{
					text:'Отображать подбор',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				'-',
				'-',
				{
					text:'Перечитать данные группы пользователя',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Обновить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить пометку удаления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:739px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:462px;top:32px;width:269px;height:322px;',
			height: 322,width: 269,
			items:
			[
				{
					title:'Пользователи',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПользователя',
			text: '<',
			style: 'position:absolute;left:6px;top:64px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьПользователя',
			text: '>',
			style: 'position:absolute;left:6px;top:91px;width:24px;height:24px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:0px;width:235px;height:322px;',
			height: 322,width: 235,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Пользователь',
					width:'126',
				},
				{
					text:'Полное имя',
					width:'127',
				},
				{
					text:'Профиль',
					width:'128',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:231px;top:32px;width:225px;height:322px;',
			height: 322,width: 225,
			items:
			[
				{
					title:'Состав группы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:225px;height:322px;',
			height: 322,width: 225,
			columns:
			[
				{
					text:'Состав группы',
					width:'146',
				},
			]
		},
					]
				},
			]
		},
	]
});