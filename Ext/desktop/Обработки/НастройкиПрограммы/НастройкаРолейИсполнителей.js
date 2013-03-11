Ext.define('Обработки.НастройкиПрограммы.НастройкаРолейИсполнителей',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 664,
	iconCls: 'bogus',
	title: 'Настройка задач пользователей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:664px;height:25px;',
			items:
			[
				{
					text:'ПрименитьИзменения',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:194px;top:31px;width:462px;height:228px;',
			height: 228,width: 462,
			columns:
			[
				{
					text:'Организация',
				},
				{
					text:'Роль',
				},
				{
					text:'Использование',
				},
				{
					text:'Исполнитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:276px;top:129px;width:101px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
			]
		},
	]
});