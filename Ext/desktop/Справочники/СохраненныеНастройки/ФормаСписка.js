Ext.define('Справочники.СохраненныеНастройки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:673px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Варианты отчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:657px;height:259px;',
			height: 259,width: 657,
			columns:
			[
				{
					text:'Отчет',
					width:'155',
					dataIndex:'НастраиваемыйОбъект',
					flex:1,
				},
				{
					text:'Наименование',
					width:'172',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Описание',
					width:'210',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Пользователи',
					width:'139',
					dataIndex:'Пользователи',
					flex:1,
				},
				{
					text:'Тип настройки',
					width:'100',
					dataIndex:'ТипНастройки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СохраненныеНастройки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НастраиваемыйОбъект',
					},
					{
						name:'Наименование',
					},
					{
						name:'Описание',
					},
					{
						name:'Пользователи',
					},
					{
						name:'ТипНастройки',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:673px;height:25px;',
			dock: 'top',
			items:
			[
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
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Загрузить настройку из файла',
				},
				{
					text:'Сохранить настройки в файл ',
				},
				'-',
				{
					text:'Загрузить настройку по умолчанию',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});