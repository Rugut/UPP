Ext.define('Справочники.ТерриториальныеУсловия.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Территориальные условия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:220px;',
			height: 220,width: 400,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'320',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
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
					text:'Действие8',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
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
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
			]
		},
	]
});