Ext.define('Справочники.ФормыОбучения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формы обучения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'317',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действия формы выбрать',
				},
				{
					text:'',
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
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});