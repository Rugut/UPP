Ext.define('Справочники.ВидыОбразованияФизЛиц.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 524,
	iconCls: 'bogus',
	title: 'Виды образования физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:508px;height:280px;',
			height: 280,width: 508,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:524px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель2',
				},
			]
		},
	]
});