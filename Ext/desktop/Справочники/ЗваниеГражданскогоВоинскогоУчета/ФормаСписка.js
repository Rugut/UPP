Ext.define('Справочники.ЗваниеГражданскогоВоинскогоУчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:528px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Воинские звания',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:512px;height:280px;',
			height: 280,width: 512,
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
				{
					text:'Общевойсковое звание',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:528px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие6',
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
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				'-',
			]
		},
	]
});