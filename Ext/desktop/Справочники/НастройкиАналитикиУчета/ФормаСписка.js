Ext.define('Справочники.НастройкиАналитикиУчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:506px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки аналитики учета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:490px;height:539px;',
			height: 539,width: 490,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Упр. учет',
					width:'60',
				},
				{
					text:'Регл. учет',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:506px;height:25px;',
			items:
			[
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Заполнить по умолчанию',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});