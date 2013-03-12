Ext.define('Справочники.ШкалыОценокКомпетенций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:456px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Шкалы оценок компетенций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:440px;height:259px;',
			height: 259,width: 440,
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
					width:'175',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:456px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
			]
		},
	]
});