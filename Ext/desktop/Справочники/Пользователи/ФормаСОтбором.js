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
				},
				{
					text:'Имя',
					width:'131',
				},
				{
					text:'Полное имя',
					width:'155',
				},
				{
					text:'Профиль',
					width:'123',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:345px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отключить отбор',
				},
				'-',
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'',
				},
				{
					text:'Справка',
				},
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Обновить',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				{
					text:'',
				},
			]
		},
	]
});