Ext.define('Справочники.ЗанятияКурсовОбучения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Занятия курсов обучения',
	
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
					width:'324',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
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
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действия формы выбрать',
				},
				'-',
				{
					text:'',
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
					text:'Действие7',
				},
				'-',
			]
		},
	]
});