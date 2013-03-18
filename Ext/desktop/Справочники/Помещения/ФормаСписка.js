Ext.define('Справочники.Помещения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:543px;height:348px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помещения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:526px;height:307px;',
			height: 307,width: 526,
			columns:
			[
				{
					text:'Территория',
					width:'120',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Для встреч',
					width:'70',
				},
				{
					text:'Код',
					width:'63',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:443px;top:0px;width:99px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Территории...',
				},
			]
		},
	]
});