Ext.define('Справочники.Пользователи.ФормаСОтбором',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:345px;height:369px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Пользователи',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:329px;height:328px;',
			height: 328,width: 329,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Имя',
					width:'131',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Полное имя',
					width:'155',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Профиль',
					width:'123',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Пользователи/ВыбратьПоСсылке/100'},
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:345px;height:25px;',
			items:
			[
				{
					text:'Иерархический просмотр',
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
			]
		},
	]
});