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
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:739px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Уровень вверх',
				},
				{
					text:'Уровень вниз',
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				{
					text:'Перечитать данные группы пользователя',
				},
				'-',
				{
					text:'Отображать подбор',
				},
				'-',
				{
					text:'Настройка доступа',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:739px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
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
			tabBar:{hidden:true},
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
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'126',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Полное имя',
					width:'127',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Профиль',
					width:'128',
					dataIndex:'ПрофильПолномочийПользователя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПрофильПолномочийПользователя',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:231px;top:32px;width:225px;height:322px;',
			height: 322,width: 225,
			tabBar:{hidden:true},
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
					dataIndex:'Пользователь',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пользователь',
					},
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});