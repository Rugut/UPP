Ext.define('Справочники.ГруппыПользователей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 400,
	iconCls: 'bogus',
	title: 'Справочник Группы пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Код',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
			]
		},
	]
});