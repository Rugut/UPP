Ext.define('Справочники.ЗваниеГражданскогоВоинскогоУчета.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:436px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Воинские звания',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:420px;height:280px;',
			height: 280,width: 420,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'63',
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
			style: 'position:absolute;left:0px;top:0px;width:436px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие',
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
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
			]
		},
	]
});