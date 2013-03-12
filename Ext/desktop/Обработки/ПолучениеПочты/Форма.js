Ext.define('Обработки.ПолучениеПочты.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:636px;height:446px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Получение почты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:25px;',
			items:
			[
				'-',
				{
					text:'Открыть событие',
				},
				{
					text:'Показать письмо',
				},
				'-',
				'-',
				{
					text:'Открыть событие',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'Настройка ...',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Входящие эл.письма',
				},
				{
					text:'Установить флажки',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Редактировать письмо',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Установить флажки',
				},
				{
					text:'Входящие эл.письма',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:636px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:620px;height:380px;',
			height: 380,width: 620,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Адрес отправителя',
					width:'179',
				},
				{
					text:'Отправитель',
					width:'180',
				},
				{
					text:'Тема',
					width:'220',
				},
			]
		},
	]
});