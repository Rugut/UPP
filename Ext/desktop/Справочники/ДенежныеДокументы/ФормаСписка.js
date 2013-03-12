Ext.define('Справочники.ДенежныеДокументы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:690px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Денежные документы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:523px;height:259px;',
			height: 259,width: 523,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'180',
				},
				{
					text:'Вид документа',
					width:'120',
				},
				{
					text:'Стоимость единицы',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:690px;height:25px;',
			items:
			[
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Скопировать',
				},
				'-',
				'-',
				{
					text:'Иерархический просмотр',
				},
				'-',
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Уровень вверх',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Найти в дереве',
				},
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'Иерархический просмотр',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Обновить',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'',
				},
				{
					text:'Новая группа',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				{
					text:'Обновить',
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
					text:'&Изменить',
				},
				'-',
				{
					text:'Новая группа',
				},
				'-',
				{
					text:'Уровень вниз',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Справка',
				},
				{
					text:'Найти в дереве',
				},
				{
					text:'Установить пометку удаления',
				},
			]
		},
	]
});