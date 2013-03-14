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
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Показать письмо',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Входящие эл.письма',
				},
				{
					text:'Открыть событие',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Редактировать письмо',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Входящие эл.письма',
				},
				'-',
				{
					text:'Открыть событие',
				},
				'-',
				{
					text:'Настройка ...',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Справка',
				},
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