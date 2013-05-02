Ext.define('Справочники.ОснованияУвольненияИзОрганизации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:631px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основания увольнения (статьи ТК РФ)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:615px;height:320px;',
			height: 320,width: 615,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Текст основания',
					width:'486',
					dataIndex:'ТекстОснования',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОснованияУвольненияИзОрганизации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ТекстОснования',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:631px;height:25px;',
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
					text:'Установить пометку удаления',
				},
				{
					text:'',
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
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
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
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
	]
});