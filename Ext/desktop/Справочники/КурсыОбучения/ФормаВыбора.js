Ext.define('Справочники.КурсыОбучения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Курсы обучения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:156px;top:33px;width:236px;height:259px;',
			height: 259,width: 236,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:142px;height:259px;',
			height: 259,width: 142,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'',
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
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действия формы выбрать',
				},
				{
					text:'Действие6',
				},
			]
		},
	]
});