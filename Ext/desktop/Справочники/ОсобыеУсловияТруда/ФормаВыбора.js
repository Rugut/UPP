Ext.define('Справочники.ОсобыеУсловияТруда.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Особые условия труда',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:409px;height:259px;',
			height: 259,width: 409,
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
				'-',
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие формы выбрать',
				},
				'-',
			]
		},
	]
});