Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаСпискаФайловИИзображений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:651px;height:230px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Хранилище дополнительной информации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:31px;width:635px;height:191px;',
			height: 191,width: 635,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'216',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Наименование',
					width:'234',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Электронное письмо',
					width:'100',
					dataIndex:'ЭлектронноеПисьмо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВложенияЭлектронныхПисем/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Наименование',
					},
					{
						name:'ЭлектронноеПисьмо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:651px;height:25px;',
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
				'-',
				{
					text:'Открыть',
				},
				{
					text:'Сохранить на диске',
				},
				'-',
				{
					text:'Добавить несколько',
				},
				'-',
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
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
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
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Открыть',
				},
				'-',
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Добавить несколько',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
	]
});