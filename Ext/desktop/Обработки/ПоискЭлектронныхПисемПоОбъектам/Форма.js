Ext.define('Обработки.ПоискЭлектронныхПисемПоОбъектам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск электронных писем по объектам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Обновить',
				},
				{
					text:'Поиск по номеру...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'',
				},
				'-',
				{
					text:'&Добавить',
				},
				'-',
				'-',
				'-',
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Обновить',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Поиск по номеру...',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:680px;height:320px;',
			height: 320,width: 680,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Создано',
					width:'80',
				},
				{
					text:'Отправлено/получено',
					width:'80',
				},
				{
					text:'От кого',
					width:'120',
				},
				{
					text:'Кому',
					width:'120',
				},
				{
					text:'Тема',
					width:'220',
				},
				{
					text:'Номер',
					width:'21',
				},
				{
					text:'Учетная запись',
					width:'27',
				},
				{
					text:'Ответственный',
					width:'80',
				},
				{
					text:'Основание',
					width:'86',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиОбъектПоиска',
			style: 'position:absolute;left:236px;top:33px;width:452px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Отбор:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:658px;top:0px;width:38px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
			]
		},
	]
});