Ext.define('Справочники.ВариантыCхемМотивации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Временные схемы мотивации',
	
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
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие18',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Редактировать код',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие19',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие11',
				},
			]
		},
	]
});