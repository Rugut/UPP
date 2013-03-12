Ext.define('Обработки.РедактированиеДанныхРаспределения.Редактирование',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Сохранить настройку как...',
				},
				{
					text:'Описание и Пользователи',
				},
				{
					text:'Настройка структуры',
				},
				{
					text:'Сохранить настройку',
				},
				{
					text:'Выбрать настройку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:375px;width:500px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});