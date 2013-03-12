Ext.define('Справочники.ОснованияУвольненияИзОрганизации.ФормаВыбора',
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
					width:'32',
				},
				{
					text:'Наименование',
					width:'100',
				},
				{
					text:'Текст основания',
					width:'484',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:631px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие9',
				},
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
				{
					text:'Действие11',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				'-',
			]
		},
	]
});