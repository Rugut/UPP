Ext.define('Справочники.ПроизвольныеОтчеты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:665px;height:382px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Произвольные отчеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:443px;height:305px;',
			height: 305,width: 443,
			columns:
			[
				{
					text:'Наименование отчета',
					width:'304',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:665px;height:25px;',
			items:
			[
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Выгрузить отчеты',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Скопировать',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Обновить',
				},
				{
					text:'',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'',
				},
				{
					text:'Новая группа',
				},
				'-',
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Общая настройка отчета',
				},
				'-',
				{
					text:'Новая группа',
				},
				{
					text:'Установить отбор и сор��ировку списка...',
				},
				{
					text:'Обновить',
				},
				{
					text:'Загрузить отчеты',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				'-',
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отключить отбор',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:457px;top:33px;width:200px;height:305px;',
			height: 305,width: 200,
			columns:
			[
				{
					text:'Вариант отчета',
					width:'161',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: '',
			style: 'position:absolute;left:66px;top:343px;width:591px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание1',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:343px;width:56px;height:19px;',
		},
	]
});