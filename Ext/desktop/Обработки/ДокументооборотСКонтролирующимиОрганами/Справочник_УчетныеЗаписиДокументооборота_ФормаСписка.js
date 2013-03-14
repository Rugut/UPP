Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_УчетныеЗаписиДокументооборота_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:988px;height:426px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Учетные записи документооборота',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:972px;height:385px;',
			height: 385,width: 972,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Адрес электронной почты',
					width:'149',
				},
				{
					text:'Налоговый орган',
					width:'126',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Сервер документооборота',
					width:'137',
				},
				{
					text:'Имя пользователя POP3',
					width:'160',
				},
				{
					text:'Сервер POP3',
					width:'160',
				},
				{
					text:'Порт POP3',
					width:'80',
				},
				{
					text:'Имя пользователя SMTP',
					width:'160',
				},
				{
					text:'Сервер SMTP',
					width:'160',
				},
				{
					text:'Порт SMTP',
					width:'80',
				},
				{
					text:'Требуется SMTP Аутентификация',
					width:'24',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:988px;height:25px;',
			items:
			[
				{
					text:'Ручная настройка',
				},
				{
					text:'Автоматическая настройка (для абонентов """"Такском"""")',
				},
			]
		},
	]
});