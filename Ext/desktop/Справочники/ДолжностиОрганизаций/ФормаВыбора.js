Ext.define('Справочники.ДолжностиОрганизаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:708px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Должности организаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:692px;height:280px;',
			height: 280,width: 692,
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
					text:'Категория',
					width:'100',
				},
				{
					text:'По ОКПДТР',
					width:'80',
				},
				{
					text:'Категория учета забронированных (с 2011 года)',
					width:'120',
				},
				{
					text:'Код позиции списка',
					width:'120',
				},
				{
					text:'Основание выслуги лет',
					width:'120',
				},
				{
					text:'АУП',
					width:'40',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:708px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Профессии рабочих',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Должности служащих',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				'-',
			]
		},
	]
});