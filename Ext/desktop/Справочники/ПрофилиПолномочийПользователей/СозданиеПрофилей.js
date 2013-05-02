Ext.define('Справочники.ПрофилиПолномочийПользователей.СозданиеПрофилей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:434px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Создание профилей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:434px;height:25px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:434px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Создать профили',
				},
				'-',
				{
					text:'Назначить профили',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:418px;height:332px;',
			height: 332,width: 418,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Профиль',
					width:'203',
					dataIndex:'Профиль',
					flex:1,
				},
				{
					text:'Роли и пользователи',
					width:'123',
					dataIndex:'РолиИПользователи',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиПолномочийПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Профиль',
					},
					{
						name:'РолиИПользователи',
					},
				]
			},
		},
	]
});