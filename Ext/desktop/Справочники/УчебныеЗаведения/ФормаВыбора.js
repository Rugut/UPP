Ext.define('Справочники.УчебныеЗаведения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учебные заведения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:409px;height:220px;',
			height: 220,width: 409,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'320',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:425px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Дейс��вие10',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие формы выбрать',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
			]
		},
	]
});