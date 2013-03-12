Ext.define('Справочники.Военкоматы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:412px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Военкоматы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:396px;height:280px;',
			height: 280,width: 396,
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
			style: 'position:absolute;left:0px;top:0px;width:412px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Редактировать код номер',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
			]
		},
	]
});