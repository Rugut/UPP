Ext.define('Справочники.ОснованияВыслугиЛет.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основания выслуги лет',
	
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
					text:'Код до 2011 года',
					width:'96',
				},
				{
					text:'Код с 2011 года',
					width:'96',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:425px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие формы выбрать',
				},
			]
		},
	]
});