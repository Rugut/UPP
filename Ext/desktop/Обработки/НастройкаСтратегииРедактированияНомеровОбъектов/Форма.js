Ext.define('Обработки.НастройкаСтратегииРедактированияНомеровОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка стратегии редактирования номеров (кодов) объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:351px;width:554px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:538px;height:311px;',
			height: 311,width: 538,
			columns:
			[
				{
					text:'Объект нумерации',
					width:'350',
				},
				{
					text:'Редактирования номера',
					width:'133',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:538px;height:24px;',
			items:
			[
				'-',
				{
					text:'Текущего объекта',
				},
				{
					text:'Всех объектов',
				},
				{
					text:'Заполнить по умолчанию',
				},
			]
		},
	]
});