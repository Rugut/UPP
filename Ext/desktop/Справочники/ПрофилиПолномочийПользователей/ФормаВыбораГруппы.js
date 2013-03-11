Ext.define('Справочники.ПрофилиПолномочийПользователей.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 241,width: 369,
	iconCls: 'bogus',
	title: 'Справочник Профили полномочий пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:353px;height:200px;',
			height: 200,width: 353,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:369px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
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
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});