Ext.define('Справочники.ПрофилиПолномочийПользователей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:462px;height:264px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профили полномочий пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:446px;height:223px;',
			height: 223,width: 446,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'175',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:462px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Отключить отбор',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Обновить',
				},
				{
					text:'Выбрать',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
			]
		},
	]
});