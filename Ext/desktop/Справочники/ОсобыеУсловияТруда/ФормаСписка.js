Ext.define('Справочники.ОсобыеУсловияТруда.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:498px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Особые условия труда',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:482px;height:220px;',
			height: 220,width: 482,
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
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:498px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
			]
		},
	]
});