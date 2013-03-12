Ext.define('Справочники.ФормыОбучения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:421px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формы обучения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:405px;height:259px;',
			height: 259,width: 405,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'273',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:421px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие10',
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
					text:'',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});