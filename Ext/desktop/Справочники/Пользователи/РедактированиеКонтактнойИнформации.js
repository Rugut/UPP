Ext.define('Справочники.Пользователи.РедактированиеКонтактнойИнформации',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:580px;height:234px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Редактирование контактной информации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:209px;width:580px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:564px;height:168px;',
			height: 168,width: 564,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Тип',
					width:'90',
				},
				{
					text:'Вид',
					width:'147',
				},
				{
					text:'Представление',
					width:'195',
				},
				{
					text:'Комментарий',
					width:'218',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:580px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Основная',
				},
				{
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				'-',
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
			]
		},
	]
});