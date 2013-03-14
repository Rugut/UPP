Ext.define('Справочники.Подразделения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:391px;height:380px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подразделения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:54px;width:375px;height:318px;',
			height: 318,width: 375,
			columns:
			[
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:391px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Иерархический просмотр',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделения',
			text: 'Подразделения',
			style: 'position:absolute;left:8px;top:33px;width:123px;height:19px;text-align:left;',
		},
	]
});