Ext.define('Справочники.ОбработкиОбслуживанияТО.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Обработки обслуживания торгового оборудования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:259px;',
			height: 259,width: 584,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Вид торгового оборудования',
					width:'200',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Наименование',
					width:'200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'150',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Версия API',
					width:'100',
					dataIndex:'ВерсияAPI',
					flex:1,
				},
				{
					text:'Версия',
					width:'96',
					dataIndex:'Версия',
					flex:1,
				},
				{
					text:'Описание обработки обслуживания',
					width:'400',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'250',
					dataIndex:'Идентификатор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбработкиОбслуживанияТО/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Вид',
					},
					{
						name:'Наименование',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'ВерсияAPI',
					},
					{
						name:'Версия',
					},
					{
						name:'Описание',
					},
					{
						name:'Идентификатор',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
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
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'',
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
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
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
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});