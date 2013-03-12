Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисления по больничным листам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:356px;',
			height: 356,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Сотрудник',
					width:'121',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'80',
				},
				{
					text:'Месяц начисления',
					width:'101',
				},
				{
					text:'Первичный больничный лист',
					width:'83',
				},
				{
					text:'Серия листка нетрудоспособности',
					width:'84',
				},
				{
					text:'№ листка нетрудоспособности',
					width:'70',
				},
				{
					text:'Причина нетрудоспособности',
					width:'120',
				},
				{
					text:'% оплаты',
					width:'60',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Отмена проведения',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Поиск по номеру...',
				},
				{
					text:'Установить интервал дат...',
				},
				'-',
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Провести',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Поиск по номеру...',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'&Скопировать',
				},
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Обновить',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:19px;',
			height: 19,width: 764,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});