Ext.define('Справочники.ПрофилиПолномочийПользователей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 264,width: 462,
	iconCls: 'bogus',
	title: 'Профили полномочий пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:446px;height:223px;',
			height: 223,width: 446,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:462px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});