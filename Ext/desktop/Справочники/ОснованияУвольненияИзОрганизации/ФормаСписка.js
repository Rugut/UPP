Ext.define('Справочники.ОснованияУвольненияИзОрганизации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:631px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основания увольнения (статьи ТК РФ)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:615px;height:320px;',
			height: 320,width: 615,
			columns:
			[
				{
					text:'',
					width:'28',
				},
				{
					text:'Наименование',
					width:'100',
				},
				{
					text:'Текст основания',
					width:'486',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:631px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
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
					text:'',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
			]
		},
	]
});