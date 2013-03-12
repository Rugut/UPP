Ext.define('Справочники.ПрофилиПолномочийПользователей.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:369px;height:241px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Профили полномочий пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:353px;height:200px;',
			height: 200,width: 353,
			columns:
			[
				{
					text:'Наименование',
					width:'218',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:369px;height:25px;',
			items:
			[
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
				'-',
				{
					text:'Обновить',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Отключить отбор',
				},
				{
					text:'Выбрать',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
			]
		},
	]
});