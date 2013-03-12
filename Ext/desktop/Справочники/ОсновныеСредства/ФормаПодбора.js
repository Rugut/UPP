Ext.define('Справочники.ОсновныеСредства.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Основные средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:134px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Инв. №',
					width:'80',
				},
				{
					text:'Наименование',
					width:'318',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:100px;',
			height: 100,width: 384,
			columns:
			[
				{
					text:'Наименование',
					width:'283',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:108px;width:384px;height:24px;',
			items:
			[
				{
					text:'Вывести список...',
				},
				{
					text:'Уровень вверх',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				'-',
				'-',
				{
					text:'Установить пометку удаления',
				},
				'-',
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Обновить',
				},
				{
					text:'Новая группа',
				},
				{
					text:'&Изменить',
				},
				{
					text:'',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Уровень вниз',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Новая группа',
				},
				{
					text:'Обновить',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				{
					text:'Редактировать в диалоге',
				},
				{
					text:'Редактировать в диалоге',
				},
				{
					text:'',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Иерархический просмотр',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Переместить в группу',
				},
			]
		},
	]
});