Ext.define('Обработки.СтруктураЗависимостейОборотов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:519px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Структура зависимостей оборотов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:519px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:519px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:503px;height:320px;',
			height: 320,width: 503,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:90px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'На дату:',
			style: 'position:absolute;left:330px;top:33px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:379px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:503px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
	]
});